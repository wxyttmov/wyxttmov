import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, SOCIAL_LINKS, HERO_IMAGE } from './constants';
import { ArrowRightIcon } from './components/Icons';
import { Reveal } from './components/Reveal';
import { Button } from './components/Button';

// --- Dedicated Deep-Dive Landing Pages ---

const WorkView: React.FC = () => (
  <div className="bg-zinc-100 min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto">
      <Reveal className="mb-24">
        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none mb-8 uppercase">Portfolio</h1>
        <p className="text-xl text-zinc-500 max-w-2xl font-light italic">A comprehensive archive of cinematic visual assets and strategic brand deployments. Every frame is engineered for maximum conversion and brand authority.</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
        <div className="group">
          <Reveal>
            <div className="aspect-video bg-zinc-300 overflow-hidden rounded-2xl mb-8 shadow-2xl relative border border-zinc-200">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0Gpx-8Yxqr8?rel=0&modestbranding=1&showinfo=0" 
                title="Wyatt Trigger Showreel" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              ></iframe>
            </div>
            <h2 className="text-4xl font-bold mb-2 uppercase">Official Showreel</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm">Cinematography • Art Direction • Creative Strategy</p>
          </Reveal>
        </div>
        <div className="group md:mt-48">
          <Reveal delay={200}>
            <div className="aspect-video bg-zinc-300 overflow-hidden rounded-2xl mb-8 shadow-2xl relative border border-zinc-200">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JHbx6o3_w5c?rel=0&modestbranding=1&showinfo=0" 
                title="Brand Campaign" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              ></iframe>
            </div>
            <h2 className="text-4xl font-bold mb-2 uppercase">Commercial Identity</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm">Production • Motion Design • Visual Effects</p>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
);

const ServicesView: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <div className="bg-[#0f1012] text-white min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto">
      <Reveal className="mb-32">
        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none mb-8 uppercase">Services</h1>
        <p className="text-xl text-zinc-400 max-w-2xl font-light">End-to-end visual infrastructure for brands that demand authority and precision. We don't just "make content"—we build the triggers for your business growth.</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-48">
        <div className="p-10 md:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-sm group hover:border-orange-500/50 transition-colors">
           <span className="text-orange-500 font-mono mb-6 block text-lg">01 /</span>
           <h2 className="text-5xl font-bold mb-10 tracking-tight uppercase">Visual Production</h2>
           <ul className="space-y-6 text-xl text-zinc-400 font-light">
             <li>• High-End Commercials & Spots</li>
             <li>• Narrative Brand Documentaries</li>
             <li>• Kinetic Motion Graphics</li>
             <li>• Professional Post-Production & Color</li>
           </ul>
        </div>
        <div className="p-10 md:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-sm group hover:border-orange-500/50 transition-colors">
           <span className="text-orange-500 font-mono mb-6 block text-lg">02 /</span>
           <h2 className="text-5xl font-bold mb-10 tracking-tight uppercase">Brand Strategy</h2>
           <ul className="space-y-6 text-xl text-zinc-400 font-light">
             <li>• Identity Architecture Systems</li>
             <li>• Visual Language Audits</li>
             <li>• Multi-Platform Content Roadmaps</li>
             <li>• Market Sentiment Analysis</li>
           </ul>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <Reveal>
          <Button label="Start Your Project" variant="filled" color="orange" onClick={() => onNavigate('contact')} className="px-12 py-6 text-xl font-bold uppercase" />
        </Reveal>
      </div>
    </div>
  </div>
);

const AboutView: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <div className="bg-white text-zinc-900 min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-32 items-center">
        <div className="md:col-span-5">
           <Reveal><div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Wyatt" /></div></Reveal>
        </div>
        <div className="md:col-span-7">
           <Reveal delay={200}>
              <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-12 uppercase">Wyatt <br/> Trigger</h1>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-zinc-800 mb-8 tracking-tight italic">Merging raw cinematography with rigorous strategic branding.</p>
              <p className="text-xl text-zinc-500 leading-relaxed font-light mb-8">Based in Los Angeles, Wyatt leads a specialized creative practice focused on impact. His methodology prioritizes the 'Why' before the 'How', ensuring every frame serves a broader strategic objective. Whether shooting on 35mm film or digital cinema arrays, the goal is always the same: resonance.</p>
              <div className="flex gap-4">
                 <Button label="View Showreel" variant="filled" color="orange" onClick={() => onNavigate('work')} />
                 <Button label="Email Wyatt" variant="outline" color="black" onClick={() => window.location.href = 'mailto:info@wyatt-trigger.com'} />
              </div>
           </Reveal>
        </div>
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => (
  <div className="bg-orange-600 text-white min-h-screen pt-40 pb-24 px-6 md:px-12">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32">
       <div className="md:col-span-5">
          <Reveal>
             <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12 uppercase">Trigger <br/> Impact.</h1>
             <p className="text-2xl font-medium mb-16 opacity-90 max-w-md">Currently accepting select projects for Q4 2025 and 2026. Let's build the visual legacy of your brand. Fill out the form or reach out directly.</p>
          </Reveal>
       </div>
       <div className="md:col-span-7 bg-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-xl border border-white/20">
          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! Wyatt will be in touch soon.'); }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input required type="text" className="bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl transition-all placeholder:text-white/40" placeholder="Full Name" />
                <input type="text" className="bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl transition-all placeholder:text-white/40" placeholder="Organization (Optional)" />
             </div>
             <textarea required rows={4} className="bg-transparent border-b border-white/30 py-4 focus:border-white outline-none text-xl resize-none w-full placeholder:text-white/40" placeholder="Tell me about your goals and project timeline..."></textarea>
             <button type="submit" className="w-full bg-white text-orange-600 font-bold py-6 rounded-full text-xl hover:bg-zinc-900 hover:text-white transition-all shadow-2xl active:scale-95">Send Inquiry</button>
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
      <header id="home-hero" className="relative w-full min-h-screen overflow-hidden flex flex-col bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
          <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover object-center animate-[scale_1.1_ease-out_3s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>
        <div className="relative z-10 flex-grow flex flex-col justify-between px-6 md:px-12 py-24 md:py-16 max-w-[1920px] mx-auto w-full text-white">
          <div className="hidden md:flex justify-start w-full">
            <button onClick={() => onNavigate('work')} className="group flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-zinc-300 hover:text-white transition-colors border border-white/10 hover:border-orange-500/50">
              <span className="text-sm font-medium tracking-wide">New Showreel 2025</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white group-hover:scale-110 transition-transform">
                <ArrowRightIcon className="w-2.5 h-2.5" />
              </span>
            </button>
          </div>
          <div className="mt-auto md:mt-0 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            <div className="md:col-span-10 flex flex-col items-center md:items-start text-center md:text-left">
                <Reveal className="pb-16">
                  <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[1.2] text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 uppercase">
                    Visuals That <br/> Trigger Action.
                  </h1>
                </Reveal>
                <Reveal delay={200} className="mt-4 flex flex-col md:flex-row items-center gap-8">
                  <p className="text-lg md:text-xl text-zinc-400 max-w-md text-center md:text-left leading-relaxed font-light">Wyatt Trigger is a multidisciplinary creative practice blending cinematic storytelling with strategic brand development.</p>
                  <div className="flex gap-4">
                    <Button label="View Work" variant="filled" color="orange" onClick={() => scrollInto('home-work')} />
                    <Button label="About Me" variant="outline" color="white" onClick={() => scrollInto('home-intro')} />
                  </div>
                </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* 02: Intro/Philosophy */}
      <section id="home-intro" className="py-24 md:py-48 px-6 md:px-12 bg-white text-zinc-900">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3"><Reveal><h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-zinc-300">Philosophy <br/> <span className="text-orange-600 font-black">Impact</span></h2></Reveal></div>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal delay={100}><p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-12">I don't just make things look good. I engineer <span className="text-orange-600">content that connects.</span> From high-end production to resilient brand identity.</p></Reveal>
            <Reveal delay={200}><button onClick={() => onNavigate('services')} className="inline-flex items-center gap-4 text-zinc-900 text-lg font-bold hover:text-orange-600 transition-colors uppercase tracking-wide group text-center md:text-left">
                <span className="flex items-center justify-center w-12 h-12 border border-zinc-200 rounded-full group-hover:border-orange-600 transition-colors"><ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
                Explore My Services
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03: Services List */}
      <section id="home-services" className="bg-[#0f1012] text-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto w-full">
          <Reveal><h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-24 uppercase">Full Spectrum <br/> <span className="text-zinc-600">Creative.</span></h3></Reveal>
          <div className="border-t border-white/10">
            {/* Service Item 01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4">
              <div className="md:col-span-2"><span className="font-mono text-orange-600">01 /</span></div>
              <div className="md:col-span-4">
                  <h4 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Video Production</h4>
                  <div className="flex flex-wrap gap-2"><span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider">Cinematography</span><span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider">Motion</span></div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">I produce commercial-grade video content that captures attention. From brand documentaries to high-octane social assets, every frame is intentional. I specialize in cinematic lighting and high-speed motion.</p>
              </div>
            </div>
            {/* Service Item 02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4">
              <div className="md:col-span-2"><span className="font-mono text-orange-600">02 /</span></div>
              <div className="md:col-span-4">
                  <h4 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Brand Strategy</h4>
                  <div className="flex flex-wrap gap-2"><span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider">Identity</span><span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider">Audits</span></div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">Defining the 'Why' before the 'How'. I build resilient brand identities that resonate with your core audience and stand the test of time. Strategic messaging is at the core of every visual asset.</p>
              </div>
            </div>
          </div>
          <div className="mt-16"><Button label="Explore All Services" variant="outline" color="white" onClick={() => onNavigate('services')} /></div>
        </div>
      </section>

      {/* 04: Featured Work Preview */}
      <section id="home-work" className="bg-zinc-100 py-24 md:py-48 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto w-full">
          <Reveal><h2 className="text-6xl md:text-9xl font-bold text-zinc-900 text-center tracking-tighter leading-[0.85] mb-24 uppercase">Selected <br/> Projects</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-video bg-zinc-300 rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0Gpx-8Yxqr8?rel=0&modestbranding=1&showinfo=0" 
                title="Nature Archive Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video bg-zinc-300 rounded-2xl overflow-hidden shadow-xl border border-zinc-200 md:mt-24">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JHbx6o3_w5c?rel=0&modestbranding=1&showinfo=0" 
                title="Brand Narrative Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-24"><Button label="View Full Portfolio" variant="outline" color="black" onClick={() => onNavigate('work')} /></div>
        </div>
      </section>

      {/* 05: CTA */}
      <section id="home-cta" className="bg-orange-600 text-white py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <Reveal className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 uppercase">Let's Create <br/> Impact.</h2>
          <Button label="Start a Project" variant="filled" color="white" className="mt-8 px-12 py-6 text-xl uppercase font-bold" onClick={() => onNavigate('contact')} />
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

  // Use INSTANT scroll for page transitions to ensure reveal animations start clean and consistent
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  const navigateTo = (page: string) => {
    setCurrentPage(page.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-zinc-900 selection:bg-orange-100 selection:text-orange-900 font-sans overflow-x-hidden">
      
      {/* Persistent Navigation Pill */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isMenuOpen ? 'mix-blend-normal text-white' : 'text-white mix-blend-difference'}`}>
        <div className="flex justify-between items-center px-6 md:px-12 py-8">
          {/* Logo Button */}
          <button onClick={() => navigateTo('home')} className={`group relative z-50 block w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent hover:bg-white/20'}`}>
            <div className="w-10 h-10 text-current">
               <svg viewBox="0 0 24 24" fill="none" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                 {/* Reel Left */}
                 <g className="origin-[7px_5.5px] group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
                     <circle cx="7" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                     <path d="M7 3V8M4.5 5.5H9.5" stroke="currentColor" strokeWidth="2" />
                 </g>
                 {/* Reel Right */}
                 <g className="origin-[15px_5.5px] group-hover:-rotate-[360deg] transition-transform duration-1000 ease-in-out">
                     <circle cx="15" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                     <path d="M15 3V8M12.5 5.5H17.5" stroke="currentColor" strokeWidth="2" />
                 </g>
                 {/* Camera Body */}
                 <rect x="2.5" y="9" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="2" className={`transition-colors duration-300 ${isMenuOpen ? 'fill-white/20' : 'fill-transparent'}`} />
                 {/* Lens */}
                 <path d="M19.5 14L22.5 12V18L19.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 {/* Rec Dot */}
                 <circle cx="16.5" cy="12" r="1.5" className="fill-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
               </svg>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <div className={`hidden md:flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 border border-white/10 ${scrolled ? 'bg-zinc-900/90 backdrop-blur-xl shadow-lg text-white' : 'bg-white/5 backdrop-blur-md text-white'}`}>
             {NAV_ITEMS.map((item) => (
               <button 
                 key={item.index} 
                 onClick={() => navigateTo(item.label)}
                 className={`px-4 py-1 text-[10px] font-bold transition-all uppercase tracking-[0.2em] hover:text-orange-500 ${currentPage === item.label.toLowerCase() ? 'text-orange-500 underline underline-offset-4' : 'text-zinc-300'}`}
               >
                 {item.label}
               </button>
             ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/10 backdrop-blur-md' : ''}`}>
            <span className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
            <span className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0f1012] z-40 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="w-full h-full flex flex-col justify-center items-center text-white">
          <div className="w-full max-w-screen-xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-start-3 md:col-span-8 flex flex-col items-center md:items-start gap-4">
                {NAV_ITEMS.map((item) => (
                  <button key={item.index} onClick={() => navigateTo(item.label)} className="group flex items-baseline gap-6 md:gap-12 text-5xl md:text-8xl font-bold tracking-tighter hover:text-orange-500 transition-colors duration-300 uppercase">
                    <span className="text-sm md:text-xl font-mono text-zinc-600 group-hover:text-orange-500/50 transition-colors translate-y-[-1.5rem] md:translate-y-[-3rem]">{item.index}</span>
                    <span className={currentPage === item.label.toLowerCase() ? 'text-orange-500' : ''}>{item.label}</span>
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
      <footer className="bg-[#0f1012] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="mb-24">
             <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-zinc-800 select-none uppercase">Wyatt Trigger</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-24">
             <div className="md:col-start-1 md:col-span-4">
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-bold">Navigation</h4>
               <ul className="flex flex-col gap-4 text-3xl font-bold text-zinc-400">
                 {NAV_ITEMS.map(item => (
                   <li key={item.index}><button onClick={() => navigateTo(item.label)} className="hover:text-white transition-colors text-left uppercase">{item.label}</button></li>
                 ))}
               </ul>
             </div>
             <div className="md:col-start-6 md:col-span-3">
               <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-bold">Socials</h4>
               <ul className="flex flex-col gap-4 text-xl font-medium text-zinc-400">
                 {SOCIAL_LINKS.map(link => (
                   <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{link.label}</a></li>
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
               <button onClick={() => navigateTo('contact')} className="text-xl text-white underline decoration-zinc-600 hover:decoration-orange-600 underline-offset-8 uppercase font-bold">info@wyatt-trigger.com</button>
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 gap-8">
             <div className="flex gap-2 items-center"><div className="w-2 h-2 bg-orange-600 rounded-full"></div><span className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase">© 2025 WYATT TRIGGER • VISUALS & STRATEGY</span></div>
             <div className="flex gap-8 text-[10px] text-zinc-600 font-bold tracking-widest uppercase"><button className="hover:text-white transition-colors">Privacy</button><button className="hover:text-white transition-colors">Terms</button></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;