import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-28 bg-[#03060d] border-t border-white/5 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 radial-glow-cyan opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              06 // ACCREDITATIONS & CREDENTIALS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Verified Certifications.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Specialized programs spanning Generative AI frameworks, enterprise data simulations, and frontend web engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#070e1c] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-tech text-[10px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {cert.type}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-300 mb-3">
                    Issued by: {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                    {cert.verificationNote}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-tech text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
