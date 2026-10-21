import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Terminal,
  Code2,
  Database
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#03060d] border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 radial-glow-cyan opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 radial-glow-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              04 // PROFESSIONAL EXPERIENCE
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering In Practice.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Verified internship track records in frontend software engineering and data science workflows.
          </p>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node Marker */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#081020] border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                  {index === 0 ? <Code2 className="w-4 h-4" /> : <Database className="w-4 h-4" />}
                </div>

                {/* Date Tag pinned to Left for desktop */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className="font-tech text-xs text-cyan-300 font-bold block">
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <span className="font-tech text-[10px] text-slate-400">
                    TO {exp.period.split('–')[1] ? exp.period.split('–')[1].trim() : 'PRESENT'}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl">
                  
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-tech text-xs text-cyan-400 font-bold uppercase">
                          {exp.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-tech text-slate-400 gap-1">
                      <div className="flex items-center gap-1.5 md:hidden text-cyan-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {exp.summary}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 mb-6">
                    <div className="font-tech text-xs text-slate-400 uppercase tracking-wider mb-2">
                      KEY DELIVERABLES & IMPACT //
                    </div>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack used in this role */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                    <span className="font-tech text-[10px] text-slate-400 uppercase mr-1">
                      STACK:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-tech text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
