import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CapabilityConstellation } from './components/CapabilityConstellation';
import { ProjectUniverse } from './components/ProjectUniverse';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIInteractionPanel } from './components/AIInteractionPanel';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03060c] text-[#f1f5f9] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Floating HUD Navigation */}
      <Navigation
        onOpenAiPanel={() => setAiPanelOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic 3D Hero */}
        <HeroSection
          onOpenAiPanel={() => setAiPanelOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* About: Human Behind the System */}
        <AboutSection />

        {/* Capability Constellation */}
        <CapabilityConstellation />

        {/* Featured Project Universe */}
        <ProjectUniverse />

        {/* Verified Experience Timeline */}
        <ExperienceTimeline />

        {/* Academic Foundation & Degree */}
        <EducationSection />

        {/* Accreditations & Certifications */}
        <CertificationsSection />

        {/* Contact & Transmission Channel */}
        <ContactSection />
      </main>

      {/* Technical Footer */}
      <Footer />

      {/* Interactive AI Terminal Modal */}
      <AIInteractionPanel
        isOpen={aiPanelOpen}
        onClose={() => setAiPanelOpen(false)}
      />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
