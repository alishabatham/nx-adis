import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import JoinMovement from './components/JoinMovement';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main>
        {/* Hero Section with Interactive HUD */}
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />

        {/* About Section */}
        <About />

        {/* Key Features 5 Cards */}
        <Features />

        {/* How It Works Workflow Pipeline */}
        <HowItWorks onOpenDemo={() => setIsDemoOpen(true)} />

        {/* Impact Section & Fleet ROI Calculator */}
        <Impact onOpenContact={() => setIsContactOpen(true)} />

        {/* Join Movement CTA */}
        <JoinMovement
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
