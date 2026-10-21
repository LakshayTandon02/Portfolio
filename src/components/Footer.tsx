import React, { useState, useEffect } from 'react';
import { ChevronUp, Github, Linkedin, Code, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020409] border-t border-white/10 py-12 text-slate-400 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-white/5 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-display font-bold text-white text-base tracking-wide">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-tech text-xs text-cyan-400/80 tracking-wider">
                // THE INTELLIGENCE ENGINE
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              AI Engineer & Generative AI Developer. Building practical applications at the intersection of AI, software engineering, and data.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer ml-2"
              title="Return to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Telemetry Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-tech text-slate-400 gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>MOHALI, INDIA // 30.7046° N, 76.7179° E</span>
            <span className="text-cyan-400">IST: {timeStr || '15:30:00'} (UTC+5:30)</span>
          </div>

          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LAKSHAY TANDON</span>
            <span>•</span>
            <span className="text-slate-400">ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
