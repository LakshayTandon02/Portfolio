import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Activity, 
  BarChart3, 
  Database,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectUniverse: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'genai' | 'ml' | 'data'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Mini Interactive Previews state
  const [simChatInput, setSimChatInput] = useState('');
  const [simChatMessages, setSimChatMessages] = useState<Array<{ sender: 'user' | 'nova'; text: string }>>([
    { sender: 'nova', text: 'NOVA LLM Agent initialized via Mistral API client. Environment keys isolated. Ask me about system status.' }
  ]);
  const [symptomSelections, setSymptomSelections] = useState<string[]>(['Fever', 'Fatigue']);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const handleSimChatSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simChatInput.trim()) return;
    const userMsg = simChatInput.trim();
    setSimChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setSimChatInput('');

    setTimeout(() => {
      let reply = 'Context token parsed. Multi-turn session state preserved with temperature=0.3.';
      if (userMsg.toLowerCase().includes('model')) reply = 'Active engine: Mistral-7B via authenticated REST API endpoint.';
      if (userMsg.toLowerCase().includes('hello') || userMsg.toLowerCase().includes('hi')) reply = 'Greetings! Nova conversational worker ready.';
      setSimChatMessages(prev => [...prev, { sender: 'nova', text: reply }]);
    }, 400);
  };

  const toggleSymptom = (sym: string) => {
    setSymptomSelections(prev => 
      prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]
    );
  };

  return (
    <section id="projects" className="relative py-28 bg-[#040813] border-t border-white/5 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 radial-glow-cyan opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 radial-glow-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              03 // PROJECT UNIVERSE
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & Deployments.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-sans">
              Concrete implementations spanning conversational Generative AI, predictive machine learning classifiers, and multi-dimensional business analytics.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#080f20] border border-white/10 self-start md:self-end">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL SYSTEMS ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('genai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                selectedFilter === 'genai'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GENAI & LLMS
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('ml')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                selectedFilter === 'ml'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MACHINE LEARNING
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('data')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                selectedFilter === 'data'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DATA ANALYTICS & BI
            </button>
          </div>
        </div>

        {/* Cinematic Project Cards Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#070e1c] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-7 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-tech text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      PROJECT 0{index + 1} // {project.categoryLabel}
                    </span>
                    <span className="font-tech text-[10px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                      {project.previewBadge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Tech stack badge pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-tech text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-tech text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive In-Card Demonstration or Preview Box */}
                <div className="px-6 sm:px-7 py-3">
                  {project.id === 'nova-ai-chatbot' && (
                    <div className="rounded-xl bg-[#091122] border border-cyan-500/20 p-3.5 font-tech text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-cyan-400">
                        <span>LIVE TERMINAL SIMULATOR</span>
                        <span>MISTRAL-7B API</span>
                      </div>
                      <div className="space-y-2 max-h-32 overflow-y-auto pr-1 mb-2">
                        {simChatMessages.map((m, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded text-[11px] ${
                              m.sender === 'user'
                                ? 'bg-cyan-500/15 text-cyan-200 ml-6 text-right'
                                : 'bg-white/5 text-slate-300 mr-4'
                            }`}
                          >
                            <span className="font-bold opacity-60 block text-[9px] mb-0.5">
                              {m.sender === 'user' ? 'YOU' : 'NOVA AGENT'}
                            </span>
                            {m.text}
                          </div>
                        ))}
                      </div>
                      <form onSubmit={handleSimChatSend} className="flex gap-2">
                        <input
                          type="text"
                          value={simChatInput}
                          onChange={(e) => setSimChatInput(e.target.value)}
                          placeholder="Test context prompt..."
                          className="flex-1 bg-black/40 border border-white/10 rounded px-2.5 py-1 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                        />
                        <button
                          type="submit"
                          className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 rounded text-[11px] cursor-pointer"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  )}

                  {project.id === 'medical-recommendation-system' && (
                    <div className="rounded-xl bg-[#091122] border border-cyan-500/20 p-3.5 font-tech text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-cyan-400">
                        <span>DECISION TREE CLASSIFIER SIMULATOR</span>
                        <span className="text-amber-400">EDUCATIONAL USE ONLY</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mb-2">
                        Toggle test symptom vectors:
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {['Fever', 'Fatigue', 'Cough', 'Headache', 'Joint Pain'].map((sym) => {
                          const active = symptomSelections.includes(sym);
                          return (
                            <button
                              key={sym}
                              type="button"
                              onClick={() => toggleSymptom(sym)}
                              className={`px-2 py-0.5 rounded text-[10px] border transition-colors cursor-pointer ${
                                active
                                  ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200'
                                  : 'bg-white/5 border-white/10 text-slate-400'
                              }`}
                            >
                              {active ? `✓ ${sym}` : `+ ${sym}`}
                            </button>
                          );
                        })}
                      </div>
                      <div className="p-2 rounded bg-black/40 border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                        <span>MODEL OUTPUT:</span>
                        <span className="text-cyan-300 font-bold">
                          {symptomSelections.length > 2 ? 'Viral Infection Pattern' : 'Mild Fatigue Pattern'}
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === 'sales-performance-dashboard' && (
                    <div className="rounded-xl bg-[#091122] border border-cyan-500/20 p-3.5 font-tech text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-cyan-400">
                        <span>POWER BI DAX METRICS PREVIEW</span>
                        <span>STAR SCHEMA</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center py-1">
                        <div className="p-2 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">YoY REVENUE</div>
                          <div className="font-display text-sm font-bold text-emerald-400">+18.4%</div>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">AVG MARGIN</div>
                          <div className="font-display text-sm font-bold text-cyan-300">32.8%</div>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">ORDERS</div>
                          <div className="font-display text-sm font-bold text-purple-300">Multi-Channel</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-400 text-center mt-2">
                        DAX: CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))
                      </div>
                    </div>
                  )}

                  {project.id === 'data-cleaning-and-analysis' && (
                    <div className="rounded-xl bg-[#091122] border border-cyan-500/20 p-3.5 font-tech text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-cyan-400">
                        <span>PYTHON PIPELINE TRANSFORM AUDIT</span>
                        <span>PANDAS / NUMPY</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        <div className="flex items-center justify-between">
                          <span>1. Missing-Value Imputation:</span>
                          <span className="text-emerald-400 font-bold">Median Skew Treatment</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>2. Duplicate Removal:</span>
                          <span className="text-cyan-300 font-bold">Exact & Composite Keys</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>3. Outlier Profile:</span>
                          <span className="text-purple-300 font-bold">1.5 × IQR Boundaries</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === 'business-data-analysis-dashboard' && (
                    <div className="rounded-xl bg-[#091122] border border-cyan-500/20 p-3.5 font-tech text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-cyan-400">
                        <span>EXECUTIVE REPORTING ARCHITECTURE</span>
                        <span>SQL + POWER QUERY</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center py-1">
                        <div className="p-2 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">DATA PIPELINE</div>
                          <div className="font-display text-xs font-bold text-white">SQL Query Aggregations</div>
                        </div>
                        <div className="p-2 rounded bg-black/40 border border-white/5">
                          <div className="text-[10px] text-slate-400">BUSINESS SCOPE</div>
                          <div className="font-display text-xs font-bold text-cyan-300">Unit Economics & KPIs</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action Bar */}
                <div className="p-6 sm:p-7 pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 text-xs font-tech text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer group/btn"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <Maximize2 className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
