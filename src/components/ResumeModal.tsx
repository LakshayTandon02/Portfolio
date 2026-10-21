import React from 'react';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS, CERTIFICATIONS, CAPABILITY_CLUSTERS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#090f1e] border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 px-6 bg-[#060b17] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-tech text-xs text-white font-bold tracking-wider">
              VERIFIED CURRICULUM VITAE // LAKSHAY TANDON
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-tech text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090f1e] text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white print:text-black mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <div className="font-tech text-xs sm:text-sm text-cyan-400 print:text-blue-700 font-semibold mb-3">
              {PERSONAL_INFO.title}
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-tech text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-300">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                LinkedIn
              </a>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-300">
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-sm">
                    <span className="font-bold text-white print:text-black">{exp.role}</span>
                    <span className="font-tech text-xs text-cyan-300 print:text-gray-600">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-gray-700 italic">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 pt-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h2>
            <div className="flex flex-wrap items-center justify-between text-sm">
              <span className="font-bold text-white print:text-black">{EDUCATION.degree}</span>
              <span className="font-tech text-xs text-cyan-300 print:text-gray-600">{EDUCATION.period}</span>
            </div>
            <div className="text-xs text-slate-400 print:text-gray-700">
              {EDUCATION.institution} • {EDUCATION.location} • <strong className="text-white print:text-black">{EDUCATION.score}</strong>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div>
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-3 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" />
              <span>VERIFIED KEY PROJECTS</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-[#060b17] print:bg-gray-100 border border-white/5 print:border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-white print:text-black">{p.title}</span>
                    <span className="text-[10px] font-tech text-slate-400">{p.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div>
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-3">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CAPABILITY_CLUSTERS.slice(0, 4).map((c) => (
                <div key={c.id}>
                  <strong className="text-white print:text-black block text-[11px] mb-1 font-tech uppercase">
                    {c.name}:
                  </strong>
                  <span className="text-slate-300 print:text-gray-800">
                    {c.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-2">
            <h2 className="font-tech text-xs tracking-widest text-cyan-400 print:text-blue-800 uppercase font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>CERTIFICATIONS & RECOGNITION</span>
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Note */}
        <div className="p-3 px-6 bg-[#060b17] border-t border-white/10 text-center text-[11px] font-tech text-slate-400 shrink-0">
          DOCUMENT CONTAINS ONLY VERIFIED DATA POINTS // NO ARBITRARY EXPERIENCE RATINGS
        </div>
      </div>
    </div>
  );
};
