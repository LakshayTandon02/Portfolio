import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Code, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'preparing' | 'opened'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setSubmittedStatus('preparing');

    // Create mailto link with encoded parameters for reliable native delivery
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Lakshay,\n\n${formState.message}\n\n---\nFrom: ${formState.name} (${formState.email})`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSubmittedStatus('opened');
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#03060c] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-cyan opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 font-tech text-xs tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // TRANSMISSION CHANNEL</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            LET'S BUILD SOMETHING INTELLIGENT.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-sans">
            Have an interesting AI idea, engineering challenge, or opportunity? Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Communication Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#070e1c] border border-cyan-500/30 shadow-xl">
              <div className="font-tech text-xs text-cyan-400 uppercase tracking-wider mb-2">
                DIRECT INBOX //
              </div>
              <div className="font-display text-lg font-bold text-white break-all mb-4">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-tech">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Professional Profiles */}
            <div className="p-6 rounded-2xl bg-[#070e1c] border border-white/10 space-y-3">
              <div className="font-tech text-xs text-slate-400 uppercase tracking-wider mb-2">
                AUTHENTICATED PROFILES //
              </div>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0a1224] border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xs text-white">LinkedIn Profile</div>
                    <div className="font-tech text-[10px] text-slate-400">linkedin.com/in/lakshay02</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0a1224] border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xs text-white">GitHub Repositories</div>
                    <div className="font-tech text-[10px] text-slate-400">github.com/LakshayTandon02</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0a1224] border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-xs text-white">LeetCode Profile</div>
                    <div className="font-tech text-[10px] text-slate-400">leetcode.com/u/lakshay_tandon02</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Location & Relocation Readiness */}
            <div className="p-4 rounded-xl bg-[#070e1c] border border-white/10 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Based in <strong className="text-white">Mohali, Punjab, India</strong>. Open to on-site, hybrid, and remote roles.
              </span>
            </div>

          </div>

          {/* Right Column: Direct Message Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-tech text-xs text-cyan-400 font-bold tracking-wider">
                MESSAGE COMPOSER //
              </span>
              <span className="font-tech text-[10px] text-slate-400">
                DIRECT TO CLIENT DISPATCH
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-tech text-slate-300 mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#0a1224] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-slate-300 mb-1.5">
                    YOUR EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#0a1224] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-tech text-slate-300 mb-1.5">
                  SUBJECT / ROLE INQUIRY
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="AI Engineer Position / Project Collaboration"
                  className="w-full bg-[#0a1224] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-tech text-slate-300 mb-1.5">
                  MESSAGE BODY *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className="w-full bg-[#0a1224] border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={submittedStatus === 'preparing'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-300 transition-all cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {submittedStatus === 'preparing'
                    ? 'DISPATCHING TO MAIL CLIENT...'
                    : 'TRANSMIT MESSAGE VIA EMAIL'}
                </span>
              </button>

              {submittedStatus === 'opened' && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs text-center font-tech">
                  Mail composer invoked. If your mail client did not open automatically, reach out directly at {PERSONAL_INFO.email}.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
