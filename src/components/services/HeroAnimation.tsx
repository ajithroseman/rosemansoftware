'use client';

import { useEffect, useRef } from 'react';

export default function HeroAnimations() {
  const fanRef = useRef<HTMLDivElement>(null);
  const laptopScreenRef = useRef<HTMLDivElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null); 
  const stackContainerRef = useRef<HTMLDivElement>(null); 
  const stackLayerRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const cpuHeatRef = useRef<HTMLDivElement>(null);
  const rgbLightsRef = useRef<HTMLDivElement>(null);

  // --- EFFECT 1: HARDWARE PARTICLES & RGB ---
  useEffect(() => {
    // 1. Heat particles
    const createHeatParticle = () => {
      if (!cpuHeatRef.current) return;
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full pointer-events-none';
      particle.style.left = `${30 + Math.random() * 40}%`;
      particle.style.bottom = '15%';
      particle.style.opacity = '0';
      particle.style.filter = 'blur(1px)';
      cpuHeatRef.current.appendChild(particle);
      
      const duration = 1.5 + Math.random();
      const horizontal = (Math.random() - 0.5) * 30;
      void particle.offsetWidth; // Force reflow
      particle.style.transition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      particle.style.transform = `translate(${horizontal}px, -80px) scale(0)`;
      particle.style.opacity = '0.8';
      
      setTimeout(() => particle.remove(), duration * 1000);
    };
    const particleInterval = setInterval(createHeatParticle, 200);
    
    // 2. RGB cycling
    let rgbHue = 0;
    const rgbInterval = setInterval(() => {
      if (rgbLightsRef.current) {
        rgbHue = (rgbHue + 5) % 360;
        rgbLightsRef.current.style.boxShadow = `0 0 15px hsl(${rgbHue}, 100%, 60%), inset 0 0 10px hsl(${rgbHue}, 100%, 40%)`;
        rgbLightsRef.current.style.borderColor = `hsl(${rgbHue}, 80%, 70%)`;
      }
    }, 50);

    // 3. Data Flow
    const createDataParticle = () => {
      if (!stackContainerRef.current) return;
      const particle = document.createElement('div');
      const sizes = ['w-0.5 h-2', 'w-1 h-1', 'w-1.5 h-0.5'];
      const colors = ['bg-cyan-400', 'bg-blue-400', 'bg-indigo-400'];
      particle.className = `absolute ${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]} rounded-full z-40 pointer-events-none`;
      particle.style.left = `${20 + Math.random() * 60}%`;
      particle.style.bottom = '10%'; 
      particle.style.opacity = '0';
      stackContainerRef.current.appendChild(particle);
      
      const duration = 2 + Math.random();
      void particle.offsetWidth;
      particle.style.transition = `all ${duration}s ease-out`;
      particle.style.bottom = '80%';
      particle.style.opacity = '1';
      setTimeout(() => particle.style.opacity = '0', duration * 700);
      setTimeout(() => particle.remove(), duration * 1000);
    };
    const dataFlowInterval = setInterval(createDataParticle, 600);

    return () => {
      clearInterval(particleInterval);
      clearInterval(rgbInterval);
      clearInterval(dataFlowInterval);
    };
  }, []);

  // --- EFFECT 2: LAPTOP TYPING ---
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
            const span = document.createElement('span');
            span.className = char === ' ' ? '' : (lineIndex === 0 || lineIndex === 4 ? 'text-purple-400' : 'text-green-400');
            span.textContent = char;
            lineDiv.appendChild(span);
            
            // Cursor
            const oldCursors = screenContentRef.current?.querySelectorAll('.typing-cursor');
            oldCursors?.forEach(c => c.remove());
            if (lineIndex < codeLines.length) {
               const cursor = document.createElement('span');
               cursor.className = 'typing-cursor inline-block w-[2px] h-2 bg-green-400 ml-0.5';
               lineDiv.appendChild(cursor);
            }
          }, (lineIndex * 400) + (charIndex * 30));
        });
      });
      setTimeout(() => { if (screenContentRef.current) screenContentRef.current.innerHTML = ''; }, 6000);
    };
    setTimeout(createTypingEffect, 1000);
    const typingInterval = setInterval(createTypingEffect, 6500);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-16 mt-20 px-4 w-full max-w-6xl mx-auto">
      
      {/* 1. HARDWARE COOLER */}
        {/* 1. ENHANCED 3D CPU COOLER (Fixed Fan Rotation) */}
      <div className="flex flex-col items-center group transform hover:scale-105 transition-transform duration-300">
        <div className="relative w-44 h-44 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 rounded-2xl border border-slate-700/50 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-shadow duration-500">
          
          {/* Circuit Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-blue-500/20 rounded-full animate-ping-slow"></div>
          </div>
          
          {/* Heat Spreader Base */}
          <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-lg border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"></div>
          
          {/* CPU Die & Fan Assembly */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 shadow-inner flex items-center justify-center z-10">
            
            {/* The Spinning Element */}
            <div ref={fanRef} className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-24 h-24 animate-spin-slow">
                
                {/* BLADES: Added 'top-1/2 -mt-1' to force them to the exact center */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
                  <div 
                    key={rotation}
                    className="absolute top-1/2 left-0 w-full h-2 -mt-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded origin-center"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  ></div>
                ))}

              </div>
              
              {/* RGB Hub (Stationary or separate layer) */}
              <div ref={rgbLightsRef} className="absolute w-8 h-8 bg-slate-900 rounded-full z-20 border-2 border-slate-500 shadow-lg"></div>
            </div>
          </div>
          
          {/* Heat Pipe Decoration */}
          <div className="absolute -top-4 w-20 h-8 border-t-4 border-slate-600 rounded-t-full"></div>
          
          {/* Particles & Text */}
          <div ref={cpuHeatRef} className="absolute inset-0 pointer-events-none z-0"></div>
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-300 font-mono">38°C</span>
          </div>
        </div>
        <p className="text-blue-300 mt-6 text-sm font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Hardware Repair</p>
      </div>

      {/* 2. LAPTOP */}
      <div className="flex flex-col items-center -mt-8 mx-4 transform scale-110 group z-20">
        <div className="relative w-72 h-72 rounded-3xl flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] transition-all duration-500">
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="relative w-48 h-32 perspective-1000">
            <div ref={laptopScreenRef} className="absolute top-0 left-0 w-full h-full bg-slate-900 rounded-t-lg border-[3px] border-slate-700 origin-bottom animate-laptopOpen transform-style-3d shadow-2xl overflow-hidden">
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
          <div className="absolute w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-spin-slow-reverse pointer-events-none"></div>
        </div>
        <p className="text-white mt-2 text-xl font-bold tracking-tight drop-shadow-md">Roseman Services</p>
      </div>

      {/* 3. SOFTWARE STACK */}
      <div className="flex flex-col items-center group transform hover:scale-105 transition-transform duration-300">
        <div ref={stackContainerRef} className="relative w-44 h-44 bg-gradient-to-br from-indigo-900/90 to-violet-950/90 rounded-2xl border border-indigo-700/50 flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="relative w-24 h-32 transform-style-3d rotate-x-60 rotate-z-45 translate-y-6">
            <div ref={stackLayerRefs[0]} className="absolute bottom-0 w-full h-12 bg-slate-800 rounded border border-slate-600 shadow-lg animate-stack-bounce delay-0 z-10 flex items-center justify-center">
               <span className="text-[8px] text-slate-400 font-bold -rotate-45">DATA</span>
            </div>
            <div ref={stackLayerRefs[1]} className="absolute bottom-8 w-full h-12 bg-indigo-900/90 rounded border border-indigo-500 shadow-lg animate-stack-bounce delay-150 z-20 flex items-center justify-center backdrop-blur-sm">
               <span className="text-[8px] text-indigo-300 font-bold -rotate-45">API</span>
            </div>
            <div ref={stackLayerRefs[2]} className="absolute bottom-16 w-full h-12 bg-white/90 rounded border border-indigo-300 shadow-lg animate-stack-bounce delay-300 z-30 flex items-center justify-center">
               <div className="w-8 h-4 bg-indigo-100 rounded-sm -rotate-45 border border-indigo-200"></div>
            </div>
            <div className="absolute left-1/2 bottom-0 h-24 w-0.5 bg-indigo-500/30 transform -translate-x-1/2 -z-10"></div>
          </div>
        </div>
        <p className="text-indigo-300 mt-6 text-sm font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">Web Development</p>
      </div>
    </div>
  );
}