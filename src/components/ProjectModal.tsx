import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Layers, 
  Cpu, 
  AlertTriangle,
  Lightbulb,
  Workflow
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#080f20] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-tech text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <span className="font-tech text-[10px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
            {project.previewBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        {/* Educational Project Warning for Medical Recommendation */}
        {project.isEducationalDisclaimer && (
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block font-tech mb-0.5">ACADEMIC & EDUCATIONAL PROJECT NOTICE</span>
              This system was engineered as a machine learning study on multi-class decision boundary splits and symptom vector classification. It is not a clinically certified medical diagnostic device.
            </div>
          </div>
        )}

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0c162c] border border-white/5">
            <div className="flex items-center gap-2 text-rose-300 font-tech text-xs font-bold mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>THE ENGINEERING CHALLENGE</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c162c] border border-cyan-500/20">
            <div className="flex items-center gap-2 text-cyan-300 font-tech text-xs font-bold mb-2">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <span>IMPLEMENTED SOLUTION</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Confirmed Technical Contributions */}
        <div className="mb-6">
          <h4 className="font-tech text-xs tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>CONFIRMED TECHNICAL CONTRIBUTIONS</span>
          </h4>
          <ul className="space-y-2">
            {project.confirmedContributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Decisions */}
        <div className="mb-6">
          <h4 className="font-tech text-xs tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-purple-400" />
            <span>KEY ARCHITECTURAL DECISIONS</span>
          </h4>
          <ul className="space-y-2">
            {project.architecturalDecisions.map((dec, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                <span>{dec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="font-tech text-xs tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>TECHNOLOGY STACK</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-tech text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links (Source Code & Demo) */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-slate-500 text-xs border border-white/5 cursor-not-allowed"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository Private</span>
            </button>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e1628] hover:bg-[#152038] text-white border border-white/10 text-xs font-medium transition-all"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Live Demonstration</span>
            </a>
          ) : (
            <span className="font-tech text-xs text-slate-400">
              // LIVE HOSTING CONFIGURED ON REQUEST
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
