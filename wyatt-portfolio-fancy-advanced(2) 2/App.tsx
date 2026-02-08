import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, SOCIAL_LINKS, HERO_IMAGE } from './constants';
import { ArrowRightIcon } from './components/Icons';
import { Reveal } from './components/Reveal';
import { Button } from './components/Button';

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
};

// --- Dedicated Deep-Dive Landing Pages ---

const WorkView: React.FC = () => (
  <div className="bg-zinc-50 min-h-screen pt-40 pb-24 px-6 md:px-12 text-zinc-900">
    <div className="max-w-[1920px] mx-auto">
      <Reveal className="mb-24" width="100%">
        <h1 className="text-8xl md:text-[14rem] font-bold tracking-tighter leading-[0.85] mb-8 uppercase text-zinc-900">Portfolio</h1>
        <div className="h-1 w-32 bg-orange-600 mb-8"></div>
        <p className="text-xl text-zinc-600 max-w-2xl font-light leading-relaxed">A comprehensive archive of cinematic visual assets and strategic brand deployments. Every frame is engineered for maximum conversion and brand authority.</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
        <div className="group hover-trigger cursor-none">
          <Reveal>
            <div className="aspect-video bg-zinc-900 overflow-hidden rounded-sm mb-8 shadow-2xl relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0Gpx-8Yxqr8?rel=0&modestbranding=1&showinfo=0" 
                title="Wyatt Trigger Showreel" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
            <div className="flex justify-between items-end border-b border-zinc-300 pb-6">
              <div>
                <h2 className="text-4xl font-bold mb-2 uppercase tracking-tight">Official Showreel</h2>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Cinematography • Art Direction</p>
              </div>
              <span className="text-4xl text-orange-600 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Reveal>
        </div>
        <div className="group md:mt-48 hover-trigger cursor-none">
          <Reveal delay={200}>
            <div className="aspect-video bg-zinc-900 overflow-hidden rounded-sm mb-8 shadow-2xl relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JHbx6o3_w5c?rel=0&modestbranding=1&showinfo=0" 
                title="Brand Campaign" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>
            <div className="flex justify-between items-end border-b border-zinc-300 pb-6">
              <div>
                <h2 className="text-4xl font-bold mb-2 uppercase tracking-tight">Commercial Identity</h2>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Production • Motion Design</p>
              </div>
              <span className="text-4xl text-orange-600 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
);

const ServicesView: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <div className="bg-[#050505] text-white min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto">
      <Reveal className="mb-32" width="100%">
        <h1 className="text-8xl md:text-[14rem] font-bold tracking-tighter leading-[0.85] mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">Services</h1>
        <p className="text-2xl text-zinc-400 max-w-2xl font-light">End-to-end visual infrastructure for brands that demand authority.</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-48">
        <div className="p-10 md:p-16 border border-white/5 rounded-sm bg-white/[0.02] backdrop-blur-sm group hover:bg-orange-600/10 hover:border-orange-600/30 transition-all duration-500 hover-trigger">
           <span className="text-orange-500 font-mono mb-6 block text-lg">01 /</span>
           <h2 className="text-5xl font-bold mb-10 tracking-tight uppercase">Visual Production</h2>
           <ul className="space-y-6 text-xl text-zinc-400 font-light group-hover:text-white transition-colors">
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>High-End Commercials & Spots</li>
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Narrative Brand Documentaries</li>
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Kinetic Motion Graphics</li>
           </ul>
        </div>
        <div className="p-10 md:p-16 border border-white/5 rounded-sm bg-white/[0.02] backdrop-blur-sm group hover:bg-orange-600/10 hover:border-orange-600/30 transition-all duration-500 hover-trigger">
           <span className="text-orange-500 font-mono mb-6 block text-lg">02 /</span>
           <h2 className="text-5xl font-bold mb-10 tracking-tight uppercase">Brand Strategy</h2>
           <ul className="space-y-6 text-xl text-zinc-400 font-light group-hover:text-white transition-colors">
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Identity Architecture Systems</li>
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Visual Language Audits</li>
             <li className="flex items-center gap-4"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Multi-Platform Content Roadmaps</li>
           </ul>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <Reveal>
          <Button label="Start Your Project" variant="filled" color="orange" onClick={() => onNavigate('contact')} className="px-12 py-6 text-xl font-bold uppercase hover-trigger" />
        </Reveal>
      </div>
    </div>
  </div>
);

const AboutView: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <div className="bg-white text-zinc-900 min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-32 items-center">
        <div className="md:col-span-5 relative">
           <Reveal>
             <div className="aspect-[3/4] rounded-sm overflow-hidden bg-zinc-200 shadow-2xl relative">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" alt="Wyatt" />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
             </div>
           </Reveal>
        </div>
        <div className="md:col-span-7">
           <Reveal delay={200}>
              <h1 className="text-8xl md:text-[11rem] font-bold tracking-tighter leading-[0.85] mb-12 uppercase text-zinc-900">Wyatt <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Trigger</span></h1>
              <p className="text-3xl font-medium leading-relaxed text-zinc-800 mb-8 tracking-tight">Merging raw cinematography with rigorous strategic branding.</p>
              <div className="w-24 h-1 bg-zinc-900 mb-8"></div>
              <p className="text-xl text-zinc-500 leading-relaxed font-light mb-12 max-w-2xl">Based in Los Angeles, Wyatt leads a specialized creative practice focused on impact. His methodology prioritizes the 'Why' before the 'How', ensuring every frame serves a broader strategic objective.</p>
              <div className="flex gap-4">
                 <Button label="View Showreel" variant="filled" color="black" onClick={() => onNavigate('work')} className="hover-trigger" />
                 <Button label="Email Wyatt" variant="outline" color="black" onClick={() => window.location.href = 'mailto:info@wyatt-trigger.com'} className="hover-trigger" />
              </div>
           </Reveal>
        </div>
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => (
  <div className="bg-orange-600 text-white min-h-screen pt-40 pb-24 px-6 md:px-12 selection:bg-white selection:text-orange-600">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
       <div className="md:col-span-5">
          <Reveal>
             <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-12 uppercase">Trigger <br/> Impact.</h1>
             <p className="text-2xl font-medium mb-16 opacity-90 max-w-md">Currently accepting select projects for Q4 2025 and 2026. Let's build the visual legacy of your brand.</p>
          </Reveal>
       </div>
       <div className="md:col-span-7 bg-black/10 p-10 md:p-16 rounded-sm backdrop-blur-xl border border-black/5">
          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! Wyatt will be in touch soon.'); }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <label className="block text-xs uppercase font-bold tracking-widest mb-2 opacity-50">Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl transition-all placeholder:text-white/20 hover-trigger" placeholder="Enter your name" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase font-bold tracking-widest mb-2 opacity-50">Company</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl transition-all placeholder:text-white/20 hover-trigger" placeholder="Organization Name" />
                </div>
             </div>
             <div className="group">
                <label className="block text-xs uppercase font-bold tracking-widest mb-2 opacity-50">The Mission</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl resize-none placeholder:text-white/20 hover-trigger" placeholder="Tell me about your goals and project timeline..."></textarea>
             </div>
             <button type="submit" className="w-full bg-white text-orange-600 font-bold py-6 rounded-full text-xl hover:bg-black hover:text-white transition-all shadow-2xl active:scale-95 hover-trigger uppercase tracking-widest">Send Inquiry</button>
          </form>
       </div>
    </div>
  </div>
);

const HomeView: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const scrollInto = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* 01: Hero */}
      <header id="home-hero" className="relative w-full min-h-screen overflow-hidden flex flex-col bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-50">
          <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover object-center animate-[scale_1.1_ease-out_3s] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 to-transparent"></div>
        </div>
        <div className="relative z-10 flex-grow flex flex-col justify-between px-6 md:px-12 py-24 md:py-16 max-w-[1920px] mx-auto w-full text-white">
          <div className="hidden md:flex justify-start w-full">
            <button onClick={() => onNavigate('work')} className="group hover-trigger flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-zinc-300 hover:text-white transition-colors border border-white/10 hover:border-orange-500/50">
              <span className="text-sm font-medium tracking-wide">New Showreel 2025</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white group-hover:scale-110 transition-transform">
                <ArrowRightIcon className="w-2.5 h-2.5" />
              </span>
            </button>
          </div>
          <div className="mt-auto md:mt-0 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            <div className="md:col-span-12 flex flex-col items-center md:items-start text-center md:text-left">
                <Reveal className="pb-8" width="100%">
                  <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.9] text-white uppercase mix-blend-lighten">
                    Visuals That <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Trigger</span> Action.
                  </h1>
                </Reveal>
                <Reveal delay={200} className="mt-8 flex flex-col md:flex-row items-center gap-12 border-l border-orange-600/50 md:pl-8">
                  <p className="text-lg md:text-2xl text-zinc-300 max-w-lg text-center md:text-left leading-relaxed font-light">Wyatt Trigger is a multidisciplinary creative practice blending cinematic storytelling with strategic brand development.</p>
                  <div className="flex gap-4">
                    <Button label="View Work" variant="filled" color="orange" onClick={() => scrollInto('home-work')} className="hover-trigger" />
                    <Button label="About Me" variant="outline" color="white" onClick={() => scrollInto('home-intro')} className="hover-trigger" />
                  </div>
                </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* 02: Intro/Philosophy */}
      <section id="home-intro" className="py-24 md:py-48 px-6 md:px-12 bg-white text-zinc-900 relative">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <Reveal>
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-4">Philosophy</h2>
              <div className="text-6xl font-black text-zinc-900 leading-none">IMPACT <br/><span className="text-orange-600">FIRST</span></div>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal delay={100}><p className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-16 text-zinc-900">I don't just make things look good. I engineer <span className="underline decoration-orange-600 underline-offset-8 decoration-4">content that connects.</span></p></Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                   <h3 className="text-xl font-bold uppercase mb-4 text-orange-600">Precision</h3>
                   <p className="text-lg text-zinc-600 leading-relaxed">Every frame is calculated. We use high-speed cinema robotics and advanced lighting to create visuals that stop the scroll.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold uppercase mb-4 text-orange-600">Strategy</h3>
                   <p className="text-lg text-zinc-600 leading-relaxed">Beauty without purpose is waste. We build visual systems that align directly with your quarterly growth targets.</p>
                 </div>
              </div>
              <button onClick={() => onNavigate('services')} className="mt-16 inline-flex items-center gap-4 text-zinc-900 text-lg font-bold hover:text-orange-600 transition-colors uppercase tracking-wide group text-center md:text-left hover-trigger">
                <span className="flex items-center justify-center w-12 h-12 border border-zinc-200 rounded-full group-hover:border-orange-600 transition-colors"><ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
                Explore My Services
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03: Services List */}
      <section id="home-services" className="bg-[#050505] text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto w-full">
          <Reveal><h3 className="text-6xl md:text-9xl font-bold tracking-tighter mb-24 uppercase">Full Spectrum <br/> <span className="text-zinc-700">Creative.</span></h3></Reveal>
          <div className="border-t border-white/10">
            {/* Service Item 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 group hover:bg-white/[0.03] transition-colors px-4 -mx-4 hover-trigger cursor-none">
              <div className="md:col-span-2"><span className="font-mono text-orange-600 text-xl">01 /</span></div>
              <div className="md:col-span-4">
                  <h4 className="text-4xl md:text-5xl font-bold mb-6 uppercase text-zinc-300 group-hover:text-white transition-colors">Video Production</h4>
                  <div className="flex flex-wrap gap-2"><span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">Cinematography</span><span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">Motion</span></div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-xl leading-relaxed font-light transition-colors">I produce commercial-grade video content that captures attention. From brand documentaries to high-octane social assets, every frame is intentional.</p>
              </div>
            </div>
            {/* Service Item 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 group hover:bg-white/[0.03] transition-colors px-4 -mx-4 hover-trigger cursor-none">
              <div className="md:col-span-2"><span className="font-mono text-orange-600 text-xl">02 /</span></div>
              <div className="md:col-span-4">
                  <h4 className="text-4xl md:text-5xl font-bold mb-6 uppercase text-zinc-300 group-hover:text-white transition-colors">Brand Strategy</h4>
                  <div className="flex flex-wrap gap-2"><span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">Identity</span><span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300">Audits</span></div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-xl leading-relaxed font-light transition-colors">Defining the 'Why' before the 'How'. I build resilient brand identities that resonate with your core audience and stand the test of time.</p>
              </div>
            </div>
          </div>
          <div className="mt-16"><Button label="Explore All Services" variant="outline" color="white" onClick={() => onNavigate('services')} className="hover-trigger" /></div>
        </div>
      </section>

      {/* 04: Featured Work Preview */}
      <section id="home-work" className="bg-zinc-100 py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto w-full">
          <Reveal><h2 className="text-7xl md:text-[10rem] font-bold text-zinc-900 text-center tracking-tighter leading-[0.8] mb-32 uppercase">Selected <br/> Projects</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-video bg-zinc-900 rounded-sm overflow-hidden shadow-2xl relative hover-trigger">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0Gpx-8Yxqr8?rel=0&modestbranding=1&showinfo=0" 
                title="Nature Archive Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            <div className="aspect-video bg-zinc-900 rounded-sm overflow-hidden shadow-2xl md:mt-32 relative hover-trigger">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JHbx6o3_w5c?rel=0&modestbranding=1&showinfo=0" 
                title="Brand Narrative Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-32"><Button label="View Full Portfolio" variant="outline" color="black" onClick={() => onNavigate('work')} className="hover-trigger text-xl px-12 py-4" /></div>
        </div>
      </section>

      {/* 05: CTA */}
      <section id="home-cta" className="bg-orange-600 text-white py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <Reveal className="relative z-10">
          <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter mb-8 uppercase leading-[0.85]">Let's Create <br/> Impact.</h2>
          <Button label="Start a Project" variant="filled" color="white" className="mt-12 px-12 py-6 text-xl uppercase font-bold hover-trigger" onClick={() => onNavigate('contact')} />
        </Reveal>
      </section>
    </div>
  );
};

// --- Main App Controller ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  const navigateTo = (page: string) => {
    setCurrentPage(page.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen selection:bg-orange-600 selection:text-white font-sans overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Persistent Navigation Pill */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isMenuOpen ? 'mix-blend-normal text-white' : 'text-white mix-blend-difference'}`}>
        <div className="flex justify-between items-center px-6 md:px-12 py-8">
          {/* Logo Button */}
          <button onClick={() => navigateTo('home')} className={`group hover-trigger relative z-50 block w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${scrolled || isMenuOpen ? '' : 'bg-transparent'}`}>
            <div className="w-10 h-10 text-current">
               <svg viewBox="0 0 24 24" fill="none" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                 <g className="origin-[7px_5.5px] group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
                     <circle cx="7" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                     <path d="M7 3V8M4.5 5.5H9.5" stroke="currentColor" strokeWidth="2" />
                 </g>
                 <g className="origin-[15px_5.5px] group-hover:-rotate-[360deg] transition-transform duration-1000 ease-in-out">
                     <circle cx="15" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                     <path d="M15 3V8M12.5 5.5H17.5" stroke="currentColor" strokeWidth="2" />
                 </g>
                 <rect x="2.5" y="9" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="2" className={`transition-colors duration-300 ${isMenuOpen ? 'fill-white/20' : 'fill-transparent'}`} />
                 <path d="M19.5 14L22.5 12V18L19.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="16.5" cy="12" r="1.5" className="fill-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
               </svg>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <div className={`hidden md:flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 border border-white/20 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl shadow-lg text-white' : 'bg-white/5 backdrop-blur-md text-white'}`}>
             {NAV_ITEMS.map((item) => (
               <button 
                 key={item.index} 
                 onClick={() => navigateTo(item.label)}
                 className={`px-4 py-1 text-[11px] font-bold transition-all uppercase tracking-[0.2em] hover:text-orange-500 hover-trigger ${currentPage === item.label.toLowerCase() ? 'text-orange-500' : 'text-zinc-200'}`}
               >
                 {item.label}
               </button>
             ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 hover-trigger ${scrolled || isMenuOpen ? '' : ''}`}>
            <span className={`block w-8 h-[2px] bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
            <span className={`block w-8 h-[2px] bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="w-full h-full flex flex-col justify-center items-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="w-full max-w-screen-xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
             <div className="md:col-start-3 md:col-span-8 flex flex-col items-center md:items-start gap-4">
                {NAV_ITEMS.map((item) => (
                  <button key={item.index} onClick={() => navigateTo(item.label)} className="group flex items-baseline gap-6 md:gap-12 text-6xl md:text-9xl font-bold tracking-tighter hover:text-orange-500 transition-colors duration-300 uppercase hover-trigger">
                    <span className="text-sm md:text-xl font-mono text-zinc-700 group-hover:text-orange-500/50 transition-colors translate-y-[-1.5rem] md:translate-y-[-3rem]">{item.index}</span>
                    <span className={currentPage === item.label.toLowerCase() ? 'text-orange-500' : 'text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600'}>{item.label}</span>
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      <main className="min-h-screen">
        {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
        {currentPage === 'work' && <WorkView />}
        {currentPage === 'services' && <ServicesView onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutView onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* Universal Footer */}
      <footer className="bg-[#050505] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="mb-24">
             <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-zinc-900 select-none uppercase hover:text-zinc-800 transition-colors duration-500">Wyatt Trigger</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-24">
             <div className="md:col-start-1 md:col-span-4">
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-bold">Navigation</h4>
               <ul className="flex flex-col gap-4 text-3xl font-bold text-zinc-500">
                 {NAV_ITEMS.map(item => (
                   <li key={item.index}><button onClick={() => navigateTo(item.label)} className="hover:text-white transition-colors text-left uppercase hover-trigger">{item.label}</button></li>
                 ))}
               </ul>
             </div>
             <div className="md:col-start-6 md:col-span-3">
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-bold">Socials</h4>
               <ul className="flex flex-col gap-4 text-xl font-medium text-zinc-500">
                 {SOCIAL_LINKS.map(link => (
                   <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover-trigger">{link.label}</a></li>
                 ))}
               </ul>
             </div>
             <div className="md:col-start-10 md:col-span-3">
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-6 font-bold">Location</h4>
               <div className="mb-12">
                 <p className="text-xl font-medium text-zinc-400 mb-2">UK / California</p>
                 <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold">Available Worldwide</p>
               </div>
               
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-bold">Contact</h4>
               <button onClick={() => navigateTo('contact')} className="text-base md:text-xl text-white underline decoration-zinc-800 hover:decoration-orange-600 underline-offset-8 uppercase font-bold hover-trigger whitespace-nowrap">info@wyatt-trigger.com</button>
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 gap-8">
             <div className="flex gap-2 items-center"><div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div><span className="text-[10px] font-bold text-zinc-600 tracking-[0.3em] uppercase">© 2025 WYATT TRIGGER • VISUALS & STRATEGY</span></div>
             <div className="flex gap-8 text-[10px] text-zinc-600 font-bold tracking-widest uppercase"><button className="hover:text-white transition-colors hover-trigger">Privacy</button><button className="hover:text-white transition-colors hover-trigger">Terms</button></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;