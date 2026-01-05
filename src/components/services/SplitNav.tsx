// components/SplitNav.tsx
'use client';

import { useState, useEffect } from 'react';

export default function SplitNav() {
  const [activeSection, setActiveSection] = useState<'hardware' | 'software'>('hardware');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset by 80px to account for the sticky header height
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const softwareSection = document.getElementById('software-section');
      if (!softwareSection) return;

      const softwareTop = softwareSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 2;

      if (softwareTop <= triggerPoint) {
        setActiveSection('software');
      } else {
        setActiveSection('hardware');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex w-full shadow-lg border-b border-gray-200">
      {/* Left Side: Hardware */}
      <button
        onClick={() => scrollToSection('hardware-section')}
        className={`
          w-1/2 py-6 text-xl font-bold uppercase tracking-widest transition-all duration-300
          ${activeSection === 'hardware' 
            ? 'bg-blue-600 text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]' 
            : 'bg-white text-gray-500 hover:bg-gray-50'}
        `}
      >
        Hardware
      </button>

      {/* Right Side: Website */}
      <button
        onClick={() => scrollToSection('software-section')}
        className={`
          w-1/2 py-6 text-xl font-bold uppercase tracking-widest transition-all duration-300
          ${activeSection === 'software' 
            ? 'bg-indigo-600 text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]' 
            : 'bg-white text-gray-500 hover:bg-gray-50'}
        `}
      >
        Web Development
      </button>
    </nav>
  );
}