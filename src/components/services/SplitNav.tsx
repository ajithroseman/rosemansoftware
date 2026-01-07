// components/SplitNav.tsx
'use client';

import { useState, useEffect } from 'react';

export default function SplitNav() {
  const [activeSection, setActiveSection] = useState<'hardware' | 'software'>('hardware');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Determine offset based on screen width (mobile headers are usually shorter)
      // 80px for desktop, maybe 60px for mobile
      const offset = window.innerWidth < 768 ? 60 : 80; 
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const softwareSection = document.getElementById('software-section');
      if (!softwareSection) return;

      const softwareTop = softwareSection.getBoundingClientRect().top;
      // Trigger point slightly higher on mobile
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
    // Adjusted 'top' if your main header is shorter on mobile (e.g., top-14 md:top-16)
    <nav className="sticky top-14 md:top-16 z-40 flex w-full shadow-lg border-b border-gray-200 bg-white">
      {/* Left Side: Hardware */}
      <button
        onClick={() => scrollToSection('hardware-section')}
        className={`
          w-1/2 
          py-3 md:py-6  /* Reduced padding on mobile */
          text-xs sm:text-sm md:text-xl /* Smaller font on mobile */
          font-bold uppercase 
          tracking-normal md:tracking-widest /* Tighter tracking on mobile */
          transition-all duration-300
          flex items-center justify-center
          ${activeSection === 'hardware' 
            ? 'bg-blue-600 text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]' 
            : 'bg-white text-gray-500 hover:bg-gray-50'}
        `}
      >
        Hardware
      </button>

      {/* Right Side: Web Development */}
      <button
        onClick={() => scrollToSection('software-section')}
        className={`
          w-1/2 
          py-3 md:py-6 
          text-xs sm:text-sm md:text-xl 
          font-bold uppercase 
          tracking-normal md:tracking-widest
          transition-all duration-300
          flex items-center justify-center
          ${activeSection === 'software' 
            ? 'bg-indigo-600 text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)]' 
            : 'bg-white text-gray-500 hover:bg-gray-50'}
        `}
      >
        {/* Responsive Text: "Web Dev" on mobile, "Web Development" on desktop */}
        <span className="md:hidden">Web Dev</span>
        <span className="hidden md:inline">Web Development</span>
      </button>
    </nav>
  );
}