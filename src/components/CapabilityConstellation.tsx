import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Database, 
  Wrench, 
  Terminal, 
  Check, 
  SlidersHorizontal,
  Info,
  Network
} from 'lucide-react';
import { CAPABILITY_CLUSTERS, SkillItem } from '../data/portfolioData';

export const CapabilityConstellation: React.FC = () => {
  const [selectedClusterId, setSelectedClusterId] = useState<string>('ai-ml');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(
    CAPABILITY_CLUSTERS[0].items[0]
  );
  const [viewMode, setViewMode] = useState<'constellation' | 'tabular'>('constellation');

  const currentCluster = CAPABILITY_CLUSTERS.find(c => c.id === selectedClusterId) || CAPABILITY_CLUSTERS[0];

  const getClusterIcon = (id: string) => {
    switch (id) {
      case 'ai-ml': return Cpu;
      case 'software-dev': return Code2;
      case 'data-analytics': return Database;
      case 'databases-tools': return Wrench;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className="relative py-28 bg-[#03060d] border-t border-white/5 overflow-hidden">
      {/* Ambient background textures */}
      <div className="absolute top-1/3 right-0 w-96 h-96 radial-glow-cyan opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 radial-glow-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-tech text-xs tracking-widest text-cyan-400 mb-2">
              02 // CAPABILITY CONSTELLATION
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Modular Skills Matrix.
            </h2>
          </div>
          
          {/* View Mode Toggle (Constellation vs Tabular) */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#091122] border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode('constellation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                viewMode === 'constellation'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>CLUSTER MAP</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('tabular')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                viewMode === 'tabular'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FULL DIRECTORY</span>
            </button>
          </div>
        </div>

        {/* Constellation View Mode */}
        {viewMode === 'constellation' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cluster Navigation Hub (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="font-tech text-xs text-slate-400 tracking-wider mb-2">
                // SELECT DOMAIN CLUSTER
              </div>

              {CAPABILITY_CLUSTERS.map((cluster) => {
                const Icon = getClusterIcon(cluster.id);
                const isSelected = cluster.id === selectedClusterId;
                return (
                  <button
                    key={cluster.id}
                    type="button"
                    onClick={() => {
                      setSelectedClusterId(cluster.id);
                      setSelectedSkill(cluster.items[0]);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer group flex items-start justify-between ${
                      isSelected
                        ? 'bg-[#0b1426] border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/30'
                        : 'bg-[#060b17] border-white/10 hover:border-white/20 hover:bg-[#080f20]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`font-display font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {cluster.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {cluster.description}
                        </div>
                      </div>
                    </div>
                    <span className="font-tech text-[10px] text-slate-400 mt-0.5 ml-2">
                      {cluster.items.length}
                    </span>
                  </button>
                );
              })}

              {/* Verified Ethics Note */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 mt-6">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-tech font-bold mb-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>TRANSPARENCY STANDARD</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every capability reflects confirmed coursework, project builds, or internship duties. No fabricated skill percentage ratings or arbitrary years are assigned.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Constellation Nodes & Inspector (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Active Cluster Details Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
                  <div>
                    <span className="font-tech text-xs text-cyan-400 font-semibold tracking-wider">
                      DOMAIN // {currentCluster.name}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">
                      {currentCluster.description}
                    </h3>
                  </div>
                  <span className="font-tech text-xs text-slate-400">
                    CLICK ANY NODE TO INSPECT
                  </span>
                </div>

                {/* Node Grid Representation */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {currentCluster.items.map((item) => {
                    const isSelected = selectedSkill?.name === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedSkill(item)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative group ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                            : 'bg-[#0a1224] border-white/5 hover:border-cyan-500/30 hover:bg-[#0d172e] text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-tech text-[10px] text-cyan-400/80 uppercase">
                            {item.category}
                          </span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        </div>
                        <div className="font-display font-semibold text-sm tracking-wide">
                          {item.name}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Node Deep-Dive Inspector Panel */}
                {selectedSkill && (
                  <div className="p-5 rounded-xl bg-[#091122] border border-cyan-500/30 shadow-inner">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="font-tech text-xs text-cyan-300 font-bold uppercase tracking-wider">
                          INSPECTING: {selectedSkill.name}
                        </span>
                      </div>
                      <span className="font-tech text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                        {selectedSkill.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-sans">
                      {selectedSkill.detail}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        ) : (
          /* Accessible Tabular / Directory View Fallback */
          <div className="space-y-8">
            {CAPABILITY_CLUSTERS.map((cluster) => {
              const Icon = getClusterIcon(cluster.id);
              return (
                <div key={cluster.id} className="p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {cluster.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cluster.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cluster.items.map((item) => (
                      <div key={item.name} className="p-3.5 rounded-xl bg-[#0a1224] border border-white/5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-semibold text-sm text-white">
                            {item.name}
                          </span>
                          <span className="font-tech text-[10px] text-cyan-400/80">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
