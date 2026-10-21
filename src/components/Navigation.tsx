import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Terminal, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Code2, 
  GraduationCap, 
  Award, 
  Mail, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  onOpenAiPanel: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { href: '#home', label: 'Home', icon: Cpu },
  { href: '#about', label: 'About', icon: Terminal },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#skills', label: 'Skills', icon: Code2 },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#certifications', label: 'Certifications', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC<NavigationProps> = ({ onOpenAiPanel, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll offset
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      {/* Floating HUD Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3.5' : 'py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between mx-auto transition-all duration-300 rounded-full px-4 sm:px-5 py-2 ${
              scrolled
                ? 'bg-[#060b17]/85 border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md'
                : 'bg-[#080f20]/50 border border-white/5 backdrop-blur-sm'
            }`}
          >
            {/* Identity Brand Glyph & Name */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full pr-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-tech font-bold text-sm group-hover:scale-105 transition-transform">
                LT
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-tech text-[10px] text-cyan-400/80 tracking-widest hidden sm:inline">
                  AI.ENGINEER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/15 font-semibold border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Right Action Cluster: Ask AI Terminal & Resume */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={onOpenAiPanel}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-tech font-medium bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-violet-500/15 border border-cyan-400/30 text-cyan-200 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
                title="Open Ask The Engine AI Terminal"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline">ASK THE ENGINE</span>
                <span className="sm:hidden font-mono">AI</span>
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-2">
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2 px-3">
              // TELEMETRY NAVIGATION MATRIX
            </div>
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiPanel();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-tech text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>LAUNCH AI ASSISTANT TERMINAL</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl border border-white/10 text-slate-300 text-sm font-medium"
            >
              View Verified Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
};
