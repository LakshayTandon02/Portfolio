import React, { useState } from 'react';
import { 
  User, 
  Cpu, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Compass, 
  Database, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'timeline'>('philosophy');

  return (
    <section id="about" className="relative py-28 bg-[#040813] border-t border-white/5 overflow-hidden">
      {/* Background spatial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 radial-glow-cyan opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 radial-glow-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              01 // HUMAN BEHIND THE SYSTEM
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Curiosity, Engineering & Applied Intelligence.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Moving beyond conceptual theory to build dependable, end-to-end applications that bridge statistical learning with user interfaces.
          </p>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Architectural System Schema / Technical Visualization (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Visual Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-tech text-xs text-slate-300 font-semibold tracking-wider">
                  SYSTEM.ARCHITECTURE // FULL_STACK_AI
                </span>
              </div>
              <span className="font-tech text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                VERIFIED
              </span>
            </div>

            {/* Interactive Architecture Flow Diagram */}
            <div className="space-y-4 my-auto py-2">
              
              {/* Layer 1: User Interface & Interaction */}
              <div className="p-4 rounded-xl bg-[#0c162c] border border-cyan-500/30 hover:border-cyan-400 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech text-xs text-cyan-300 flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    CLIENT & EXPERIENCE LAYER
                  </span>
                  <span className="font-tech text-[10px] text-slate-400">REACT / TYPESCRIPT / UI</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Responsive web interfaces, live conversational state, real-time feedback, and accessible controls.
                </p>
              </div>

              {/* Data Flow Indicator */}
              <div className="flex justify-center -my-1 text-cyan-400/60 font-tech text-xs">
                ↓ REST API / JSON IPC ↓
              </div>

              {/* Layer 2: Intelligent Microservices & ML */}
              <div className="p-4 rounded-xl bg-[#0c162c] border border-blue-500/30 hover:border-blue-400 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech text-xs text-blue-300 flex items-center gap-1.5 font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    INTELLIGENCE ENGINE & BACKEND
                  </span>
                  <span className="font-tech text-[10px] text-slate-400">PYTHON / FLASK / LLM</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prompt engineering, Mistral LLM API routing, Decision Tree estimators, and environment-based secret isolation.
                </p>
              </div>

              {/* Data Flow Indicator */}
              <div className="flex justify-center -my-1 text-cyan-400/60 font-tech text-xs">
                ↓ FEATURE VECTORS & TRANSFORMS ↓
              </div>

              {/* Layer 3: Data Foundation & Analytics */}
              <div className="p-4 rounded-xl bg-[#0c162c] border border-purple-500/30 hover:border-purple-400 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech text-xs text-purple-300 flex items-center gap-1.5 font-bold">
                    <Database className="w-3.5 h-3.5" />
                    DATA & ANALYTICS FOUNDATION
                  </span>
                  <span className="font-tech text-[10px] text-slate-400">SQL / PANDAS / POWER BI</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Systematic data wrangling, missing-value treatment, exploratory analytics, and executive DAX reporting.
                </p>
              </div>

            </div>

            {/* Quick Stat Pill Bar */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="font-display text-lg font-bold text-white">7.86 / 10</div>
                <div className="font-tech text-[10px] text-slate-400">B.E. COMPUTER SCIENCE</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="font-display text-lg font-bold text-cyan-300">2 Internships</div>
                <div className="font-tech text-[10px] text-slate-400">FRONTEND & DATA SCIENCE</div>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Story & Engineering Principles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 w-fit mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('philosophy')}
                  className={`px-4 py-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                    activeTab === 'philosophy'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ENGINEERING PHILOSOPHY
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('timeline')}
                  className={`px-4 py-2 rounded-lg text-xs font-tech font-semibold transition-all cursor-pointer ${
                    activeTab === 'timeline'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  COMPACT TIMELINE
                </button>
              </div>

              {activeTab === 'philosophy' ? (
                <div className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                      I am a computer science graduate based in Mohali, India, committed to building practical artificial intelligence solutions, machine learning workflows, and data-driven web products.
                    </p>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-4">
                      My approach is grounded in direct implementation: I believe the best way to master modern AI and software engineering is by constructing real pipelines—from wrangling heterogeneous datasets and training predictive estimators to deploying responsive frontend clients backed by LLM APIs.
                    </p>
                  </div>

                  {/* Core Value Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#081020] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        Practical AI Applications
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Deploying models to solve concrete tasks like contextual conversational assistance and multi-factor classification.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#081020] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-3">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        Frontend + Intelligent Backend
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Connecting rich React UI experiences to Python microservices, REST APIs, and structured data layers.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#081020] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3">
                        <Database className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        Rigorous Data Wrangling
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Focusing heavily on missing-value treatment, exploratory data analysis, and relational data modeling with SQL & Pandas.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#081020] border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-semibold text-white text-sm mb-1">
                        Honest Engineering
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Refusing inflated benchmarks and adhering strictly to reproducible, verified code and transparent architecture.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Compact Interactive Timeline */
                <div className="space-y-4">
                  {/* Item 1: InternCertify */}
                  <div className="p-4 rounded-xl bg-[#091122] border border-cyan-500/20 relative pl-6 before:absolute before:left-2 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-cyan-400">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-white text-sm">
                        Data Science Intern — {EXPERIENCES[1].company}
                      </h4>
                      <span className="font-tech text-xs text-cyan-300">
                        {EXPERIENCES[1].period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Exploratory data analysis, data cleaning pipelines, and machine learning models with Python, Pandas, and Scikit-learn.
                    </p>
                  </div>

                  {/* Item 2: Makes360 */}
                  <div className="p-4 rounded-xl bg-[#091122] border border-white/10 relative pl-6 before:absolute before:left-2 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-white text-sm">
                        Frontend Developer Intern — {EXPERIENCES[0].company}
                      </h4>
                      <span className="font-tech text-xs text-slate-400">
                        {EXPERIENCES[0].period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Built responsive interfaces with React, HTML, CSS, JavaScript, and integrated frontend clients with live REST APIs.
                    </p>
                  </div>

                  {/* Item 3: CGC Landran */}
                  <div className="p-4 rounded-xl bg-[#091122] border border-white/10 relative pl-6 before:absolute before:left-2 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-white text-sm">
                        {EDUCATION.degree} — {EDUCATION.institution}
                      </h4>
                      <span className="font-tech text-xs text-purple-300">
                        {EDUCATION.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      CGPA: {EDUCATION.score}. Core studies in machine learning, database systems, algorithms, and software engineering.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Citation & Action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-tech text-xs text-slate-400">
                EDUCATION STATUS: COMPLETED JUNE 2026
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs font-tech text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>INSPECT PROJECTS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
