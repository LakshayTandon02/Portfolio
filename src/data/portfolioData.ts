/**
 * Verified Portfolio Data for Lakshay Tandon
 * Only verified facts, projects, experiences, education, and links.
 * No fabricated metrics, awards, clients, or endorsements.
 */

export interface Project {
  id: string;
  title: string;
  category: 'genai' | 'ml' | 'data';
  categoryLabel: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  confirmedContributions: string[];
  architecturalDecisions: string[];
  githubUrl?: string; // Configurable
  demoUrl?: string;   // Configurable
  previewType: 'interactive' | 'visual';
  previewBadge: string;
  isEducationalDisclaimer?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  detail: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
  keyCourses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: string;
  verificationNote: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: 'Lakshay Tandon',
  title: 'AI Engineer | Generative AI Developer | Machine Learning Engineer',
  secondaryTitle: 'Software Developer | Full-Stack Web Development | Data Analytics',
  headline: 'ENGINEERING INTELLIGENCE.',
  subHeadline: "BUILDING WHAT'S NEXT.",
  mission: 'I build intelligent applications at the intersection of AI, software engineering, and data.',
  identityBadge: 'AI ENGINEER / GENAI DEVELOPER / SOFTWARE BUILDER',
  email: 'lakshaytandon125@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/lakshay02/',
  githubUrl: 'https://github.com/LakshayTandon02',
  leetcodeUrl: 'https://leetcode.com/u/lakshay_tandon02/',
  resumeUrl: '#resume-viewer', // Opens rich resume viewer or configurable external URL
  location: 'Mohali, Punjab, India',
  availability: 'Available for AI Engineering & Software Developer Roles',
  summary:
    'A computer science graduate focused on building practical AI-powered applications, machine learning solutions, intelligent interfaces, and data-driven products. Experienced in frontend development, data preprocessing, machine learning workflows, dashboards, REST APIs, and LLM-powered applications.',
};

export const PROJECTS: Project[] = [
  {
    id: 'nova-ai-chatbot',
    title: 'NOVA AI CHATBOT',
    category: 'genai',
    categoryLabel: 'Generative AI & LLMs',
    summary:
      'An AI-powered conversational application utilizing LLM APIs to generate context-aware responses with interactive chat handling and environment-based key isolation.',
    problem:
      'Standard web chat interfaces often lack modular API isolation, session state retention, and responsive conversational token management when interacting with advanced open-weight or proprietary LLMs.',
    solution:
      'Engineered a lightweight, performant conversational interface integrating Mistral AI models via structured API endpoints, implementing session memory, prompt management, and defensive environment-variable credential isolation.',
    technologies: ['Python', 'Streamlit', 'Mistral AI', 'LLMs', 'Prompt Engineering', 'REST APIs'],
    confirmedContributions: [
      'Configured interactive UI and conversational state persistence using Streamlit.',
      'Implemented secure environment-based API credential management.',
      'Designed prompting workflows to sustain multi-turn conversational context.',
      'Constructed error-resilient request/response handlers with clear user feedback.',
    ],
    architecturalDecisions: [
      'Selected Streamlit for rapid, zero-bloat state synchronization with Python machine learning backends.',
      'Decoupled model parameters (temperature, max tokens) from frontend logic to allow flexible runtime tuning.',
      'Enforced server-side environment variable security for Mistral API keys.',
    ],
    githubUrl: 'https://github.com/LakshayTandon02',
    demoUrl: undefined, // Configurable placeholder
    previewType: 'interactive',
    previewBadge: 'ACTIVE GENAI SYSTEM',
  },
  {
    id: 'medical-recommendation-system',
    title: 'MEDICAL RECOMMENDATION SYSTEM',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    summary:
      'A machine learning application that analyzes user-provided symptoms and generates disease predictions with structured educational recommendations.',
    problem:
      'Synthesizing multi-symptom clinical data into ranked categorical disease risk signals requires consistent tabular encoding, decision tree boundary splits, and clear triage recommendations.',
    solution:
      'Constructed a supervised classification pipeline using Scikit-learn Decision Tree models trained on curated symptom datasets, outputting likely conditions alongside preventive precautions and lifestyle guidance.',
    technologies: ['Python', 'Scikit-learn', 'Decision Tree Classifier', 'NumPy', 'Pandas', 'Streamlit'],
    confirmedContributions: [
      'Processed tabular symptom vectors and applied feature encoding for multi-class classification.',
      'Trained and evaluated Decision Tree classification models on symptom-disease associations.',
      'Designed an intuitive input system for selecting multiple simultaneous symptoms.',
      'Integrated recommendation tables mapping predicted conditions to precautionary guidance.',
    ],
    architecturalDecisions: [
      'Employed Decision Tree architecture for transparent interpretability of symptom branching criteria.',
      'Explicitly decoupled educational risk exploration from clinical diagnostics to ensure ethical compliance.',
      'Vectorized symptom inputs to handle variable-length symptom combinations robustly.',
    ],
    githubUrl: 'https://github.com/LakshayTandon02',
    demoUrl: undefined,
    previewType: 'interactive',
    previewBadge: 'SUPERVISED ML PIPELINE',
    isEducationalDisclaimer: true,
  },
  {
    id: 'sales-performance-dashboard',
    title: 'SALES PERFORMANCE DASHBOARD',
    category: 'data',
    categoryLabel: 'Data Analytics & BI',
    summary:
      'An interactive business intelligence dashboard analyzing sales volume, profit margins, orders, regional distribution, and key commercial indicators.',
    problem:
      'Dispersed enterprise transactional logs make it difficult for executive stakeholders to isolate underperforming regional sectors, product category margins, and cyclical purchasing trends.',
    solution:
      'Architected a multi-dimensional Power BI data model utilizing custom DAX measures and SQL-extracted datasets to provide dynamic drill-downs across sales, profitability, and customer segmentation.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Microsoft Excel', 'Data Modeling', 'KPI Engineering'],
    confirmedContributions: [
      'Designed normalized star-schema data models linking sales transactions, customers, and calendar dimensions.',
      'Wrote custom DAX expressions for Year-over-Year (YoY) growth, running totals, and profit margin analysis.',
      'Built interactive visual layouts with synchronized slicers for cross-filtering across product hierarchies.',
      'Extracted and staged transactional records from relational database schemas.',
    ],
    architecturalDecisions: [
      'Structured dimensional star schemas to eliminate visual refresh lag and redundant table joins.',
      'Formulated DAX measures utilizing CALCULATE, FILTER, and time-intelligence functions for agile KPI recalculation.',
    ],
    githubUrl: 'https://github.com/LakshayTandon02',
    demoUrl: undefined,
    previewType: 'visual',
    previewBadge: 'POWER BI / DAX SUITE',
  },
  {
    id: 'data-cleaning-and-analysis',
    title: 'DATA CLEANING AND EXPLORATORY ANALYSIS',
    category: 'data',
    categoryLabel: 'Data Engineering & EDA',
    summary:
      'A structured, end-to-end data preparation workflow executing missing-value imputation, duplicate removal, schema standardization, and exploratory insight synthesis.',
    problem:
      'Raw heterogeneous datasets routinely contain anomalous values, inconsistent schemas, type mismatches, and severe null distributions that compromise downstream statistical and machine learning models.',
    solution:
      'Engineered an automated Python cleaning pipeline that validates data fidelity, handles null values systematically, removes redundancies, transforms skewed distributions, and generates analytical visualizations.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Excel', 'EDA'],
    confirmedContributions: [
      'Developed modular Python scripts for data auditing, null profiling, and outlier boundary detection.',
      'Executed schema normalization and categorical encoding for exploratory readiness.',
      'Constructed correlation matrices, distribution histograms, and box plots to surface latent feature patterns.',
      'Documented comparative statistical variance before and after cleaning routines.',
    ],
    architecturalDecisions: [
      'Created deterministic imputation rules based on feature distribution skewness rather than naive mean replacements.',
      'Built reproducible Jupyter workflows facilitating transparent audit trails for each transform step.',
    ],
    githubUrl: 'https://github.com/LakshayTandon02',
    demoUrl: undefined,
    previewType: 'interactive',
    previewBadge: 'DATA WRANGLING WORKFLOW',
  },
  {
    id: 'business-data-analysis-dashboard',
    title: 'BUSINESS DATA ANALYSIS DASHBOARD',
    category: 'data',
    categoryLabel: 'Data Analytics & BI',
    summary:
      'Interactive executive reporting dashboard focused on operational KPIs, revenue run-rates, profitability drivers, and multi-quarter performance tracking.',
    problem:
      'Operational decision-makers frequently lack high-level visibility into unit economics, order fulfillment velocity, and customer retention metrics across diverse channels.',
    solution:
      'Synthesized structured SQL database extracts into an executive-grade Power BI dashboard incorporating scenario modeling, margin sensitivities, and dynamic metric benchmarking.',
    technologies: ['Power BI', 'SQL', 'Microsoft Excel', 'Data Transformation', 'Business Intelligence'],
    confirmedContributions: [
      'Extracted raw operational datasets using SQL queries with aggregations and conditional filtering.',
      'Transformed and cleansed source tables using Power Query transformations.',
      'Constructed executive KPI cards, Pareto analysis charts, and regional heatmaps.',
      'Implemented dynamic drill-through pages allowing rapid root-cause examination of revenue shifts.',
    ],
    architecturalDecisions: [
      'Pre-aggregated high-cardinality SQL records to optimize Power BI dashboard rendering efficiency.',
      'Enforced consistent visual hierarchy and color contrast rules for instant executive cognitive clarity.',
    ],
    githubUrl: 'https://github.com/LakshayTandon02',
    demoUrl: undefined,
    previewType: 'visual',
    previewBadge: 'OPERATIONAL KPI SYSTEM',
  },
];

export const CAPABILITY_CLUSTERS = [
  {
    id: 'ai-ml',
    name: 'AI AND MACHINE LEARNING',
    shortName: 'AI & ML',
    color: '#00f0ff',
    description: 'Foundations of statistical learning, supervised pipelines, NLP, and modern LLM orchestration.',
    items: [
      { name: 'Python', category: 'Language', detail: 'Primary language for ML modeling, scripting, and backend AI integration.' },
      { name: 'Generative AI & LLMs', category: 'Core Area', detail: 'Prompt engineering, token optimization, and LLM application architectures.' },
      { name: 'Mistral AI', category: 'Models', detail: 'Integration of Mistral open and hosted weights via REST API clients.' },
      { name: 'RAG Architecture', category: 'Architecture', detail: 'Retrieval-Augmented Generation workflows connecting external context to models.' },
      { name: 'Machine Learning', category: 'Core Area', detail: 'Supervised classification, regression, and algorithmic data modeling.' },
      { name: 'Scikit-learn', category: 'Framework', detail: 'Estimator pipelines, cross-validation, Decision Trees, and model metrics.' },
      { name: 'Feature Engineering', category: 'Workflow', detail: 'Variable transformation, encoding, scaling, and feature selection.' },
      { name: 'Model Evaluation', category: 'Workflow', detail: 'Accuracy, precision, recall, F1-score, ROC-AUC, and confusion matrix auditing.' },
      { name: 'NLP', category: 'Domain', detail: 'Natural language preprocessing, tokenization, and semantic extraction.' },
    ],
  },
  {
    id: 'software-dev',
    name: 'SOFTWARE DEVELOPMENT',
    shortName: 'Software Dev',
    color: '#70d6ff',
    description: 'Modern component-driven web architectures, modular interfaces, and backend API integration.',
    items: [
      { name: 'React.js', category: 'Frontend', detail: 'Component hierarchies, hooks, state lifecycle, and responsive reactive interfaces.' },
      { name: 'JavaScript (ES6+)', category: 'Language', detail: 'Modern asynchronous programming, DOM manipulation, and modular code patterns.' },
      { name: 'HTML5 & CSS3', category: 'Web Standards', detail: 'Semantic markup, accessibility, modern Flexbox/Grid layouts, and CSS transitions.' },
      { name: 'Flask', category: 'Backend', detail: 'Lightweight Python microframework for serving RESTful endpoints and ML wrappers.' },
      { name: 'REST APIs', category: 'Networking', detail: 'Design and consumption of JSON-based HTTP client-server communication.' },
      { name: 'Git & GitHub', category: 'Tooling', detail: 'Branch management, pull requests, semantic versioning, and collaborative workflows.' },
    ],
  },
  {
    id: 'data-analytics',
    name: 'DATA AND ANALYTICS',
    shortName: 'Data & Analytics',
    color: '#a78bfa',
    description: 'Mathematical manipulation, exploratory discovery, data wrangling, and executive BI dashboards.',
    items: [
      { name: 'SQL', category: 'Query Language', detail: 'Relational data querying, joins, aggregate functions, and subqueries.' },
      { name: 'Power BI', category: 'BI Tool', detail: 'Interactive dashboard development, star schemas, relationships, and reporting.' },
      { name: 'DAX', category: 'Calculations', detail: 'Data Analysis Expressions for custom measures, time intelligence, and filters.' },
      { name: 'Pandas', category: 'Library', detail: 'DataFrame wrangling, filtering, grouping, pivoting, and null handling.' },
      { name: 'NumPy', category: 'Library', detail: 'High-performance n-dimensional numerical array computation and vector operations.' },
      { name: 'Matplotlib & Seaborn', category: 'Visualization', detail: 'Statistical charting, distributions, correlation plots, and trend graphs.' },
      { name: 'Tableau', category: 'BI Tool', detail: 'Visual data exploration, calculated fields, and interactive dashboard stories.' },
      { name: 'Microsoft Excel', category: 'Spreadsheets', detail: 'Data staging, pivot tables, lookup functions, and data cleansing.' },
      { name: 'Exploratory Data Analysis', category: 'Methodology', detail: 'Systematic statistical investigation of variable distributions and patterns.' },
      { name: 'Data Cleaning', category: 'Methodology', detail: 'Missing-value treatment, duplicate elimination, and schema type correction.' },
      { name: 'KPI Analysis', category: 'Strategy', detail: 'Definition and calculation of key commercial and operational metrics.' },
    ],
  },
  {
    id: 'databases-tools',
    name: 'DATABASES AND TOOLS',
    shortName: 'DBs & Tooling',
    color: '#38bdf8',
    description: 'Relational database engines, developer environments, and API inspection utilities.',
    items: [
      { name: 'MySQL', category: 'RDBMS', detail: 'Relational table structuring, indexing, foreign keys, and CRUD operations.' },
      { name: 'PostgreSQL', category: 'RDBMS', detail: 'Enterprise open-source relational database management and querying.' },
      { name: 'MySQL Workbench', category: 'GUI Tool', detail: 'Visual database schema design, reverse engineering, and query optimization.' },
      { name: 'Jupyter Notebook', category: 'Dev Environment', detail: 'Interactive exploratory code execution, data narrative, and inline visualization.' },
      { name: 'VS Code', category: 'IDE', detail: 'Primary development environment with custom extensions for Python and web development.' },
      { name: 'Postman', category: 'API Tool', detail: 'API endpoint testing, payload inspection, header validation, and mock requests.' },
    ],
  },
  {
    id: 'other-programming',
    name: 'OTHER PROGRAMMING',
    shortName: 'Foundations',
    color: '#818cf8',
    description: 'Object-oriented programming, systems fundamentals, and data structure principles.',
    items: [
      { name: 'Java', category: 'Language', detail: 'Object-oriented programming, class hierarchies, interfaces, and core concepts.' },
      { name: 'C++', category: 'Language', detail: 'Procedural fundamentals, memory concepts, pointers, and computational logic.' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'makes360',
    company: 'Makes360 Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    location: 'Mohali, Punjab, India',
    period: 'April 2024 – October 2024',
    badge: 'FRONTEND INTERNSHIP',
    summary:
      'Engineered responsive web applications and integrated modern frontend user interfaces with live backend services and REST APIs.',
    responsibilities: [
      'Developed and maintained responsive interfaces using HTML, CSS, JavaScript, and React.',
      'Integrated frontend applications with REST APIs and backend services.',
      'Processed and displayed structured API data with defensive error handling and loading states.',
      'Collaborated on product requirements, troubleshooting bugs, and implementing new features.',
      'Leveraged Git and GitHub for team version control, branching, and code reviews.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    id: 'interncertify',
    company: 'InternCertify',
    role: 'Data Science Intern',
    location: 'Remote / Virtual',
    period: 'January 2026 – June 2026',
    badge: 'DATA SCIENCE INTERNSHIP',
    summary:
      'Focused on exploratory data analysis, data wrangling pipelines, feature transformation, and supervised machine learning implementations.',
    responsibilities: [
      'Executed systematic data preprocessing, missing value treatment, and exploratory data analysis.',
      'Leveraged Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn for analytical modeling.',
      'Contributed to data science and machine learning projects across end-to-end data lifecycles.',
      'Constructed clear analytical findings and visual reports to communicate model outputs.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'EDA'],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Engineering in Computer Science',
  institution: 'Chandigarh Group of Colleges (CGC) Landran',
  location: 'Mohali, Punjab, India',
  period: 'August 2022 – June 2026',
  score: 'CGPA: 7.86 / 10',
  highlights: [
    'Focus on Artificial Intelligence, Machine Learning algorithms, and Software Systems.',
    'Practical hands-on implementation of generative AI applications and predictive classifiers.',
    'Solid academic foundation in Object-Oriented Programming, Database Systems, and Web Engineering.',
  ],
  keyCourses: [
    'Machine Learning & Data Mining',
    'Object-Oriented Programming (Java/C++)',
    'Database Management Systems (SQL)',
    'Data Structures & Algorithms',
    'Web Technologies & REST Architectures',
    'Operating Systems & Computer Networks',
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Frontend Development Internship Certification',
    issuer: 'Makes360 Pvt. Ltd. & NITI Aayog Associated',
    type: 'Industry Internship Credential',
    verificationNote: 'Recognized for demonstrated competency in responsive UI design and REST API integration.',
    tags: ['Frontend', 'React', 'JavaScript', 'NITI Aayog Partner'],
  },
  {
    id: 'cert-2',
    title: 'Data Visualization: Empowering Business with Effective Insights',
    issuer: 'Forage',
    type: 'Practical Job Simulation',
    verificationNote: 'Hands-on simulation covering executive dashboard storytelling, KPI interpretation, and business insights.',
    tags: ['Data Visualization', 'Business Insights', 'Forage'],
  },
  {
    id: 'cert-3',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte (via Forage)',
    type: 'Industry Job Simulation',
    verificationNote: 'Completed real-world corporate analytics tasks including data preparation, statistical auditing, and executive communication.',
    tags: ['Data Analytics', 'Deloitte', 'Tableau / Excel'],
  },
  {
    id: 'cert-4',
    title: '10x Generative AI / Artificial Intelligence Certification',
    issuer: '10x AI / Industry Credential',
    type: 'Specialized AI Program',
    verificationNote: 'Advanced coursework covering modern LLM principles, prompt design, and generative application architectures.',
    tags: ['Generative AI', 'LLMs', 'Prompt Engineering'],
  },
  {
    id: 'cert-5',
    title: 'Tata iQ GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata Group (via Forage)',
    type: 'Enterprise Simulation',
    verificationNote: 'Synthesized generative AI methodologies with modern business analytics workflows for automated data synthesis.',
    tags: ['GenAI', 'Tata iQ', 'Data Analytics', 'Forage'],
  },
];

export const PRESET_AI_QUESTIONS = [
  'What AI projects has Lakshay built?',
  'Explain his technical stack.',
  'Summarize his experience.',
  'What roles is he interested in?',
  'How can I contact him?',
];

export const LOCAL_AI_KNOWLEDGE_BASE: Record<string, string> = {
  projects: `Lakshay Tandon has built multiple verified technical projects:
1. NOVA AI Chatbot: An AI-powered conversational application using Python, Streamlit, and the Mistral AI API for context-aware multi-turn conversations with secure key isolation.
2. Medical Recommendation System: A supervised machine learning application using Scikit-learn (Decision Tree Classifier) that maps user symptom vectors to probable conditions with lifestyle and precautionary recommendations (educational project).
3. Sales Performance Dashboard: An enterprise Power BI dashboard with custom DAX calculations and SQL extracts analyzing revenue, orders, and regional profitability.
4. Data Cleaning and Analysis: A Python, Pandas, and NumPy workflow for missing-value treatment, duplicate elimination, and exploratory data analysis.
5. Business Data Analysis Dashboard: An operational Power BI and SQL reporting platform tracking executive KPIs and sales run-rates.`,

  stack: `Lakshay's technical capabilities span four primary pillars:
• AI & Machine Learning: Python, Scikit-learn, Feature Engineering, Model Evaluation, NLP, Generative AI, LLMs, RAG, Mistral AI.
• Software Development: React.js, JavaScript (ES6+), HTML5, CSS3, Flask, REST APIs, Git, GitHub.
• Data & Analytics: SQL, Power BI, DAX, Tableau, Microsoft Excel, Pandas, NumPy, Matplotlib, Seaborn, EDA, Data Cleaning, KPI Analysis.
• Databases & Tooling: MySQL, PostgreSQL, MySQL Workbench, Jupyter Notebook, VS Code, Postman.
• Languages: Python, JavaScript, Java, C++, SQL.`,

  experience: `Lakshay brings verified hands-on industry experience:
1. Frontend Developer Intern at Makes360 Pvt. Ltd., Mohali (April 2024 – October 2024): Built responsive user interfaces with React, JavaScript, HTML, and CSS, and integrated frontend applications with live REST APIs and backend endpoints.
2. Data Science Intern at InternCertify (January 2026 – June 2026): Conducted data preprocessing, exploratory data analysis (EDA), and machine learning implementations using Python, Pandas, NumPy, and Scikit-learn.
Education: Bachelor of Engineering in Computer Science at CGC Landran, Mohali (2022–2026), CGPA: 7.86/10.`,

  roles: `Lakshay Tandon is actively seeking roles in:
• AI Engineer / Junior AI Engineer
• Generative AI Developer
• Machine Learning Engineer
• Software Developer / Full-Stack Developer
• Data Analyst / BI Developer
He is motivated by transforming cutting-edge machine learning and LLM capabilities into reliable, production-ready software solutions.`,

  contact: `You can reach Lakshay Tandon directly via:
• Email: lakshaytandon125@gmail.com
• LinkedIn: https://www.linkedin.com/in/lakshay02/
• GitHub: https://github.com/LakshayTandon02
• LeetCode: https://leetcode.com/u/lakshay_tandon02/
• Based in: Mohali, Punjab, India (Open to on-site, hybrid, and remote opportunities).`,
};
