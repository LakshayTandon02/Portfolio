import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-28 bg-[#040813] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 radial-glow-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              05 // ACADEMIC FOUNDATION
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Computer Science & Engineering.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-sans">
            Formal engineering degree with concentrated coursework in statistical machine learning, algorithms, and distributed systems.
          </p>
        </div>

        {/* Cinematic Card Layout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#070e1c] border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Score Summary (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-tech text-xs mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>FOUR-YEAR UNDERGRADUATE DEGREE</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {EDUCATION.degree}
                </h3>

                <div className="text-base font-semibold text-slate-300 mb-4">
                  {EDUCATION.institution}
                </div>

                <div className="space-y-2 text-xs font-tech text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DURATION: {EDUCATION.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LOCATION: {EDUCATION.location}</span>
                  </div>
                </div>
              </div>

              {/* CGPA Score Spotlight Card */}
              <div className="p-5 rounded-xl bg-[#0a1428] border border-cyan-500/30 shadow-lg mt-auto">
                <div className="font-tech text-xs text-cyan-400 mb-1">CUMULATIVE GRADE POINT AVERAGE</div>
                <div className="font-display text-3xl font-extrabold text-white flex items-baseline gap-2">
                  <span>{EDUCATION.score.split(':')[1]?.trim() || '7.86 / 10'}</span>
                  <span className="text-xs font-tech text-slate-400 font-normal">ACCREDITED</span>
                </div>
              </div>
            </div>

            {/* Coursework & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              
              {/* Highlights */}
              <div>
                <div className="font-tech text-xs text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>ACADEMIC FOCUS & COMPETENCY HIGHLIGHTS</span>
                </div>
                <ul className="space-y-2.5">
                  {EDUCATION.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Courses */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-tech text-xs text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>CORE CURRICULUM</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION.keyCourses.map((c, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#0a1224] border border-white/5 text-xs text-slate-300 font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
