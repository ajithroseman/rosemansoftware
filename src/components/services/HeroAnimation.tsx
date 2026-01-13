'use client';

import { useEffect, useRef, useState } from 'react';

// Define types for our particles to keep TypeScript happy
type HeatParticle = {
  id: number;
  left: string;
  delay: string;
  duration: string;
};

type DataParticle = {
  id: number;
  left: string;
  color: string;
  size: string;
  delay: string;
  duration: string;
};

export default function HeroAnimations() {
  const [mounted, setMounted] = useState(false);
  const [heatParticles, setHeatParticles] = useState<HeatParticle[]>([]);
  const [dataParticles, setDataParticles] = useState<DataParticle[]>([]);
  
  const screenContentRef = useRef<HTMLDivElement>(null);
  const laptopScreenRef = useRef<HTMLDivElement>(null); // Fixed: Ref restored

  useEffect(() => {
    setMounted(true);

    // 1. Generate Heat Particles only on client
    const newHeatParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: `${30 + Math.random() * 40}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${1.5 + Math.random()}s`
    }));
    setHeatParticles(newHeatParticles);

    // 2. Generate Data Particles only on client
    const newDataParticles = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      left: `${20 + Math.random() * 60}%`,
      color: ['bg-cyan-400', 'bg-blue-400', 'bg-indigo-400'][Math.floor(Math.random() * 3)],
      size: ['w-0.5 h-2', 'w-1 h-1', 'w-1.5 h-0.5'][Math.floor(Math.random() * 3)],
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random()}s`
    }));
    setDataParticles(newDataParticles);
  }, []);

  // --- EFFECT: LAPTOP TYPING ---
  useEffect(() => {
    const createTypingEffect = () => {
      if (!screenContentRef.current) return;
      const codeLines = ["const services = {", "  hardware: 'Repair',", "  software: 'Web Dev',", "  status: 'Online',", "};"];
      
      screenContentRef.current.innerHTML = '';
      
      codeLines.forEach((line, lineIndex) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'font-mono text-[6px] md:text-[8px] mb-0.5 leading-tight text-blue-300 whitespace-pre';
        screenContentRef.current?.appendChild(lineDiv);
        
        line.split('').forEach((char, charIndex) => {
          setTimeout(() => {
            if (!screenContentRef.current) return;
            const span = document.createElement('span');
            span.className = char === ' ' ? '' : (lineIndex === 0 || lineIndex === 4 ? 'text-purple-400' : 'text-green-400');
            span.textContent = char;
            lineDiv.appendChild(span);
            
            const oldCursor = screenContentRef.current?.querySelector('.typing-cursor');
            if (oldCursor) oldCursor.remove();

            if (lineIndex < codeLines.length) {
               const cursor = document.createElement('span');
               cursor.className = 'typing-cursor inline-block w-[2px] h-2 bg-green-400 ml-0.5';
               lineDiv.appendChild(cursor);
            }
          }, (lineIndex * 400) + (charIndex * 30));
        });
      });
    };

    const startTimeout = setTimeout(createTypingEffect, 1000);
    const typingInterval = setInterval(createTypingEffect, 6500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingInterval);
    };
  }, []);

  if (!mounted) return <div className="h-96"></div>;

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-5 md:mt-20 px-4 w-full max-w-6xl mx-auto">


      {/* 1. HARDWARE COOLER */}
      <div className="flex flex-col items-center group transform hover:scale-105 transition-transform duration-300 will-change-transform">
        <div className="relative w-44 h-44 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 rounded-2xl border border-slate-700/50 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-shadow duration-500">
          
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-blue-500/20 rounded-full animate-ping-slow"></div>
          </div>
          
          <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-lg border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"></div>
          
          <div className="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 shadow-inner flex items-center justify-center z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-24 h-24 animate-spin-slow will-change-transform">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
                  <div 
                    key={rotation}
                    className="absolute top-1/2 left-0 w-full h-2 -mt-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded origin-center"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  ></div>
                ))}
              </div>
              <div 
                className="absolute w-8 h-8 bg-slate-900 rounded-full z-20 border-2 shadow-lg mobile-optimized-shadow"
                style={{ animation: 'rgbCycle 4s linear infinite' }}
              ></div>
            </div>
          </div>
          
          <div className="absolute -top-4 w-20 h-8 border-t-4 border-slate-600 rounded-t-full"></div>
          
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
             {heatParticles.map((p) => (
               <div 
                 key={p.id}
                 className="absolute w-1 h-1 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full blur-[0.5px]"
                 style={{
                   left: p.left,
                   bottom: '15%',
                   animation: `floatUp ${p.duration} ease-out infinite`,
                   animationDelay: p.delay
                 }}
               />
             ))}
          </div>

          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded border border-slate-700 z-30">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-300 font-mono">38°C</span>
          </div>
        </div>
        <p className="text-blue-300 mt-6 text-sm font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Hardware Repair</p>
      </div>

      {/* 2. LAPTOP */}
      <div className="flex flex-col items-center -mt-8 mx-4 transform scale-110 group z-20">
        <div className="relative w-72 h-60 md:h-72 rounded-3xl flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-all duration-500">
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="relative w-48 h-32 perspective-1000">
            <div ref={laptopScreenRef} className="absolute top-0 left-0 w-full h-full bg-slate-900 rounded-t-lg border-[3px] border-slate-700 origin-bottom animate-laptopOpen transform-style-3d shadow-2xl overflow-hidden will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none"></div>
              <div className="w-full h-full bg-slate-950 p-2 flex flex-col relative overflow-hidden">
                <div className="flex gap-1.5 mb-2 opacity-50">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
                <div ref={screenContentRef} className="screen-content flex-1"></div>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-6 w-[125%] h-3 bg-slate-700 rounded-b-xl shadow-2xl transform-style-3d border-t border-slate-600">
              <div className="w-16 h-0.5 bg-slate-500 mx-auto mt-1 rounded opacity-50"></div>
            </div>
          </div>
        </div>
        <p className="text-sky-300 -mt-8 text-xl font-bold tracking-tight drop-shadow-md mb-5">system support</p>
      </div>

      {/* 3. Web Development */}
      <div className="flex flex-col items-center group transform hover:scale-105 transition-transform duration-300 will-change-transform">
        <div className="relative w-44 h-44 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl border border-indigo-500/30 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-shadow duration-500">
          <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {dataParticles.map((p) => (
               <div 
                 key={p.id}
                 className={`absolute ${p.size} ${p.color} rounded-full z-40`}
                 style={{
                   left: p.left,
                   bottom: '10%',
                   animation: `dataFlow ${p.duration} ease-out infinite`,
                   animationDelay: p.delay
                 }}
               />
             ))}
          </div>

          <div className="relative w-32 h-24 bg-[#0d1117] rounded-lg border border-slate-700 shadow-2xl flex flex-col overflow-hidden transform group-hover:-translate-y-1 transition-transform">
            <div className="h-4 bg-[#161b22] flex items-center px-2 gap-1 border-b border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/70"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/70"></div>
            </div>
            <div className="p-3 space-y-1.5">
              <div className="flex gap-1">
                <div className="h-1.5 w-8 bg-purple-400/60 rounded"></div>
                <div className="h-1.5 w-12 bg-blue-400/60 rounded"></div>
              </div>
              <div className="flex gap-1 ml-3">
                <div className="h-1.5 w-16 bg-emerald-400/40 rounded animate-[pulse_1.5s_ease-in-out_infinite]"></div>
              </div>
              <div className="flex gap-1 ml-3">
                <div className="h-1.5 w-10 bg-orange-400/40 rounded animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="h-1.5 w-4 bg-slate-600 rounded"></div>
              </div>
              <div className="h-1.5 w-4 bg-purple-400/60 rounded"></div>
            </div>
            <div className="absolute right-2 bottom-2 text-indigo-400/40 font-mono text-xl select-none group-hover:text-indigo-400/80 transition-colors">
              {`{ }`}
            </div>
          </div>
          <div className="absolute top-6 right-4 px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/40 text-[7px] text-blue-300 font-mono animate-bounce">HTML</div>
          <div className="absolute bottom-6 left-4 px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[7px] text-emerald-300 font-mono animate-bounce [animation-delay:0.5s]">CSS</div>
        </div>
        <p className="text-indigo-300 mt-6 text-sm font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">Web Development</p>
      </div>
    </div>
  );
}