// app/page.tsx
import SplitNav from '@/components/services/SplitNav'; // Adjust path if needed

export default function Page() {
  return (
    <main className="min-h-screen font-sans">
      
      {/* Optional Hero Section (Starts above the sticky nav) */}
      <div className="h-64 bg-slate-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Roseman Services</h1>
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