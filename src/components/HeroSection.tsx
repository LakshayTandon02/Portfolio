import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Code,
  Sparkles,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { IntelligenceCore3D } from './IntelligenceCore3D';

interface HeroSectionProps {
  onOpenAiPanel: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAiPanel, onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 radial-glow-cyan opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 radial-glow-violet opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Column: Editorial Technical Manifesto & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10 pt-4 lg:pt-0">
            
            {/* Identity Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 font-tech text-xs tracking-wider mb-6 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{PERSONAL_INFO.identityBadge}</span>
            </div>

            {/* Name Presentation */}
            <div className="font-tech text-slate-400 text-sm tracking-widest uppercase mb-1">
              // ARCHITECT & DEVELOPER
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-200 tracking-tight mb-3">
              {PERSONAL_INFO.name}
            </h2>

            {/* Oversized Cinematic Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06] text-white mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {PERSONAL_INFO.headline}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400">
                {PERSONAL_INFO.subHeadline}
              </span>
            </h1>

            {/* Supporting Bio Pitch */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.mission} Specializing in machine learning classification, Generative AI & LLM integration, modular React frontends, and structured analytical pipelines.
            </p>

            {/* Action Buttons Matrix */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1628] hover:bg-[#152038] text-slate-200 border border-white/10 hover:border-cyan-400/40 text-sm font-medium transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>About Me</span>
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 text-sm font-medium transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Social Profile Quick Links with Verified Targets */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-5">
              <span className="font-tech text-xs text-slate-400">
                PROFILES //
              </span>
              
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-tech text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-tech text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-tech text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Code className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>

              <button
                type="button"
                onClick={onOpenAiPanel}
                className="flex items-center gap-1.5 text-xs font-tech text-cyan-400 hover:underline ml-auto"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Assistant Terminal</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Intelligence Core Centerpiece (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[440px] sm:h-[500px] lg:h-[620px] flex items-center justify-center">
            
            {/* Visual Depth Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-cyan-500/10 animate-[spin_60s_linear_infinite]" />
              <div className="w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full border border-violet-500/10 border-dashed animate-[spin_90s_linear_infinite_reverse]" />
            </div>

            {/* The Real Three.js Intelligence Core */}
            <div className="relative w-full h-full">
              <IntelligenceCore3D interactive={true} />
            </div>

            {/* Spec Footnote */}
            <div className="absolute bottom-1 right-2 pointer-events-none font-tech text-[10px] text-slate-400/80 tracking-wider">
              ROTATION: INTERACTIVE // POINTER DAMPED
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
