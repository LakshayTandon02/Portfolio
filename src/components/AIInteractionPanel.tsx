import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Terminal, 
  Cpu, 
  HelpCircle, 
  CornerDownLeft, 
  CheckCircle2, 
  ShieldCheck,
  Bot
} from 'lucide-react';
import { PRESET_AI_QUESTIONS, LOCAL_AI_KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';

interface AIInteractionPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'engine';
  content: string;
  mode?: 'gemini-live' | 'local-verified';
  timestamp: string;
}

export const AIInteractionPanel: React.FC<AIInteractionPanelProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'engine',
      content: `Welcome to The Intelligence Engine. I am configured with verified data on Lakshay Tandon's technical projects, machine learning architectures, internship records, and engineering stack. Select a query below or type your question.`,
      mode: 'local-verified',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [backendMode, setBackendMode] = useState<'checking' | 'server-gemini' | 'local-engine'>('checking');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Check backend capability on mount
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          if (data.hasGeminiKey) {
            setBackendMode('server-gemini');
            return;
          }
        }
      } catch {
        // Fallback to local
      }
      setBackendMode('local-engine');
    };

    checkBackend();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  const handleQuery = async (queryText: string) => {
    if (!queryText.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      content: queryText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal('');
    setIsProcessing(true);

    // Try server-side Gemini API first
    let answered = false;
    try {
      const response = await fetch('/api/ask-engine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: queryText }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.answer) {
          setMessages((prev) => [
            ...prev,
            {
              id: `engine-${Date.now()}`,
              sender: 'engine',
              content: data.answer,
              mode: 'gemini-live',
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
          answered = true;
          setBackendMode('server-gemini');
        }
      }
    } catch (err) {
      console.warn('Server query error, switching to verified local knowledge engine:', err);
    }

    // Fallback to high-precision local verified knowledge engine
    if (!answered) {
      setTimeout(() => {
        let responseContent = '';
        const q = queryText.toLowerCase();

        if (q.includes('project') || q.includes('built') || q.includes('nova') || q.includes('system')) {
          responseContent = LOCAL_AI_KNOWLEDGE_BASE.projects;
        } else if (q.includes('stack') || q.includes('skill') || q.includes('technolog') || q.includes('python') || q.includes('react')) {
          responseContent = LOCAL_AI_KNOWLEDGE_BASE.stack;
        } else if (q.includes('experience') || q.includes('intern') || q.includes('work') || q.includes('makes360') || q.includes('certify')) {
          responseContent = LOCAL_AI_KNOWLEDGE_BASE.experience;
        } else if (q.includes('role') || q.includes('job') || q.includes('hire') || q.includes('position')) {
          responseContent = LOCAL_AI_KNOWLEDGE_BASE.roles;
        } else if (q.includes('contact') || q.includes('email') || q.includes('linkedin') || q.includes('reach')) {
          responseContent = LOCAL_AI_KNOWLEDGE_BASE.contact;
        } else {
          responseContent = `I am grounded strictly in Lakshay Tandon's verified portfolio. Lakshay is an AI Engineer and Generative AI Developer with experience in Python, Scikit-learn, Mistral AI LLMs, React, and SQL data modeling. You can explore his verified projects (Nova AI Chatbot, Medical Recommendation Classifier, Sales & BI Dashboards), his internships at Makes360 and InternCertify, or contact him directly at lakshaytandon125@gmail.com.`;
        }

        setMessages((prev) => [
          ...prev,
          {
            id: `engine-${Date.now()}`,
            sender: 'engine',
            content: responseContent,
            mode: 'local-verified',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsProcessing(false);
      }, 450);
    } else {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl h-[85vh] flex flex-col rounded-2xl bg-[#060b16] border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 px-5 bg-[#091122] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-sm text-white">
                  ASK THE ENGINE
                </h3>
                <span className="font-tech text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                  {backendMode === 'server-gemini' ? 'GEMINI 3.8 FLASH ACTIVE' : 'VERIFIED LOCAL KNOWLEDGE'}
                </span>
              </div>
              <div className="font-tech text-[10px] text-slate-400">
                PORTFOLIO INTELLIGENCE // GROUNDED STRICTLY IN FACTS
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="bg-[#0b1429] px-5 py-2 border-b border-white/5 text-[11px] font-tech text-slate-400 flex items-center justify-between">
          <span>MODE: {backendMode === 'server-gemini' ? 'SERVER-SIDE GEMINI LLM' : 'PREDEFINED PORTFOLIO KNOWLEDGE BASE'}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            ZERO FABRICATION
          </span>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/40 rounded-br-none'
                    : 'bg-[#0d162a] text-slate-200 border border-white/10 rounded-bl-none shadow-md'
                }`}
              >
                {msg.content}
              </div>
              <div className="font-tech text-[10px] text-slate-400 mt-1 px-1 flex items-center gap-2">
                <span>{msg.timestamp}</span>
                {msg.mode && (
                  <span className="text-cyan-400/80">
                    [{msg.mode === 'gemini-live' ? 'GEMINI FLASH' : 'VERIFIED LOCAL'}]
                  </span>
                )}
              </div>
            </div>
          ))}

          {isProcessing && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0d162a] border border-white/10 text-xs text-cyan-300 font-tech w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>THE ENGINE IS SYNTHESIZING VERIFIED RESPONSE...</span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Preset Quick Inquiries Pill Bar */}
        <div className="px-4 py-2 bg-[#081020] border-t border-white/5 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-tech text-[10px] text-slate-400 mr-1 flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              QUICK:
            </span>
            {PRESET_AI_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuery(q)}
                disabled={isProcessing}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-[11px] font-tech text-slate-300 hover:text-cyan-200 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* User Input Bar */}
        <div className="p-4 bg-[#091122] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery(inputVal);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about Lakshay's AI projects, stack, or experience..."
              className="flex-1 bg-black/50 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
              disabled={isProcessing}
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isProcessing}
              className="p-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
