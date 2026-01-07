// app/page.tsx
import SplitNav from '@/components/services/SplitNav'; // Adjust path if needed
import HeroAnimation from '@/components/services/HeroAnimation';

export default function Page() {
  return (
    <main className="min-h-screen font-sans">
      
      {/* HERO SECTION */}
      {/* I increased height to h-[500px] to fit the animations nicely */}
      <div className="relative min-h-[500px] bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden pt-20 pb-10">
        
        {/* Background Gradient Effect (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
        
        {/* Content Content */}
        <div className="z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Services We Offer</h1>
          <p className="text-slate-400 mb-3 md:mb-10">Hardware Precision & Software Innovation</p>
          
          {/* INSERT ANIMATIONS HERE */}
          <HeroAnimation />
        </div>
        
      </div>

      {/* Insert the Navigation Component Here */}
      <SplitNav />

      {/* --- HARDWARE CONTENT --- */}
      {/* IMPORTANT: ID must match 'hardware-section' */}
      <section 
        id="hardware-section" 
        className="min-h-screen bg-slate-50 p-10 flex flex-col items-center pt-24"
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Hardware Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Roseman, we handle the heavy lifting.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
             <li>Custom PC Builds (Gaming & Workstation)</li>
             <li>Component Upgrades (GPU, RAM, NVMe)</li>
             <li>Troubleshooting & Repairs</li>
          </ul>
          {/* Add more hardware content here... */}
        </div>
      </section>

      {/* --- SOFTWARE CONTENT --- */}
      {/* IMPORTANT: ID must match 'software-section' */}
      <section 
        id="software-section" 
        className="min-h-screen bg-white p-10 flex flex-col items-center pt-24"
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">Website Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            We build the digital face of your business.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
             <li>Full-stack Web Applications (Next.js 14)</li>
             <li>Responsive UI Design (Tailwind CSS)</li>
             <li>Database Integration (PostgreSQL)</li>
          </ul>
           {/* Add more software content here... */}
        </div>
      </section>

    </main>
  );
}