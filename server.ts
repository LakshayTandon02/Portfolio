import express, { type Request, type Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK if API key is provided
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

const SYSTEM_PROMPT = `
You are the AI Intelligence Engine representing Lakshay Tandon's portfolio.
Speak in a concise, sophisticated, direct, and professional tone suited for technical recruiters and engineering managers.

STRICT ACCURACY RULES:
- Name: Lakshay Tandon
- Title: AI Engineer | Generative AI Developer | Machine Learning Engineer | Software Developer
- Education: Bachelor of Engineering in Computer Science, CGC Landran, Mohali, India (Aug 2022 – Jun 2026), CGPA 7.86/10.
- Experience:
  1. Frontend Developer Intern at Makes360 Pvt. Ltd., Mohali (April 2024 – October 2024): Developed responsive UI in React/JS/HTML/CSS, integrated REST APIs, managed Git workflows.
  2. Data Science Intern at InternCertify (January 2026 – June 2026): Data preprocessing, exploratory data analysis, and machine learning models using Python, Pandas, NumPy, Scikit-learn.
- Verified Projects:
  1. Nova AI Chatbot (Python, Streamlit, Mistral AI LLM API, prompt engineering, secure API key isolation).
  2. Medical Recommendation System (Python, Scikit-learn, Decision Tree Classifier, symptom-disease prediction with lifestyle recommendations - educational project).
  3. Sales Performance Dashboard (Power BI, DAX, SQL, Excel - star schema, YoY calculations, interactive KPIs).
  4. Data Cleaning and Analysis (Python, Pandas, NumPy, Matplotlib, Seaborn - missing-value treatment, outlier profiling, EDA).
  5. Business Data Analysis Dashboard (Power BI, SQL, Excel - operational KPIs, executive reporting).
- Contact:
  - Email: lakshaytandon125@gmail.com
  - LinkedIn: https://www.linkedin.com/in/lakshay02/
  - GitHub: https://github.com/LakshayTandon02
  - LeetCode: https://leetcode.com/u/lakshay_tandon02/
  - Location: Mohali, Punjab, India.

CRITICAL: Never invent clients, revenue numbers, awards, production scale stats, or employers not listed above. If asked about something not in this verified scope, clearly and honestly state that it is not documented in Lakshay's official records.
`;

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    engine: 'The Intelligence Engine',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'),
    timestamp: new Date().toISOString(),
  });
});

// AI Query Endpoint
app.post('/api/ask-engine', async (req: Request, res: Response) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string') {
    res.status(400).json({ error: 'Valid question is required' });
    return;
  }

  // If live Gemini client is available, attempt to query
  if (aiClient) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: question,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.3,
          abortSignal: controller.signal,
        },
      });

      clearTimeout(timeoutId);
      const text = response.text || '';
      if (text.trim()) {
        res.json({
          answer: text,
          mode: 'live-gemini',
          model: 'gemini-3.8-flash',
        });
        return;
      }
    } catch (apiError: any) {
      console.warn('Gemini API call unavailable or timed out, returning local-fallback directive:', apiError?.message || apiError);
    }
  }

  // Graceful response informing the client that local knowledge engine should be used
  res.json({
    answer: null,
    mode: 'local-fallback',
    message: 'Server Gemini API not configured or unavailable. Use client verified knowledge engine.',
  });
});

import http from 'http';

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';
  const httpServer = http.createServer(app);

  if (isProduction) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite in middleware mode for hot development with bound httpServer
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`[The Intelligence Engine] Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
