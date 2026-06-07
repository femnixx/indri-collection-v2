import React, { useEffect, useState, useRef } from 'react';

// Re-triggerable scroll animation hook
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Hero() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.05);

  const handleScrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const baseTransition = 'transition-all ease-out duration-700';
  const wavePath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.1,26.11,144,43.68,207.23,61.75,321.39,56.44Z";

  const getRevealStyles = (delay = '0ms', transformClass = 'translate-y-8') => ({
    style: { transitionDelay: sectionVisible ? delay : '0ms' },
    className: `${baseTransition} ${sectionVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${transformClass}`}`,
  });

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-[95vh] bg-[#F4F9FF] flex items-center relative overflow-hidden px-[5%] pt-24 pb-32 font-serif"
    >
      
      {/* Decorative Graphics */}
      <div 
        style={{ transitionDuration: '1000ms', transitionDelay: sectionVisible ? '100ms' : '0ms' }}
        className={`absolute right-[8%] top-[18%] text-[140px] opacity-[0.03] select-none font-light ${baseTransition}
          ${sectionVisible ? 'scale-100 rotate-0 opacity-[0.03]' : 'scale-70 -rotate-12 opacity-0'}`}
      >
        🪡
      </div>
      
      <div 
        style={{ transitionDuration: '900ms', transitionDelay: sectionVisible ? '300ms' : '0ms' }}
        className={`absolute right-[32%] bottom-[20%] text-[60px] opacity-[0.04] select-none ${baseTransition}
          ${sectionVisible ? 'translate-y-0 rotate-12 opacity-[0.04]' : 'translate-y-10 rotate-0 opacity-0'}`}
      >
        🔘
      </div>

      <div 
        style={{ transitionDuration: '1200ms', transitionDelay: '0ms' }}
        className={`absolute right-[-5%] bottom-[5%] w-[500px] h-[500px] bg-[#5EA1E4]/5 rounded-tl-[120px] rounded-bl-[300px] rounded-tr-[200px] pointer-events-none ${baseTransition}
          ${sectionVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 max-w-[680px]">
        <div 
          style={getRevealStyles('100ms').style}
          className={`text-[24px] text-[#5EA1E4] mb-3 leading-none italic font-medium ${getRevealStyles('100ms').className}`}
        >
          Dibuat dengan ketelitian jari tangan...
        </div>
        
        <h1 
          style={getRevealStyles('250ms').style}
          className={`text-5xl sm:text-6xl md:text-7xl text-[#1E2E42] font-bold leading-[1.1] mb-6 tracking-tight ${getRevealStyles('250ms').className}`}
        >
          Discover Your<br />
          <span className="relative inline-block text-[#5EA1E4]">
            Perfect Style
          </span>
        </h1>

        <p 
          style={getRevealStyles('400ms').style}
          className={`text-slate-600 text-[16px] leading-[1.8] max-w-[520px] font-normal mb-10 ${getRevealStyles('400ms').className}`}
        >
          Indri Collection adalah usaha konveksi yang dijalankan sepenuhnya oleh penyandang disabilitas — membuktikan bahwa keterbatasan fisik bukan penghalang untuk berkarya dan menghasilkan kualitas jahitan premium.
        </p>

        <div 
          style={getRevealStyles('550ms', 'translate-y-6').style}
          className={`inline-block relative group ${getRevealStyles('550ms', 'translate-y-6').className}`}
        >
          <button 
            onClick={handleScrollToCollection}
            className="bg-[#5EA1E4] text-white border-2 border-transparent py-4 px-10 text-[15px] font-medium tracking-wide cursor-pointer rounded-full transition-all duration-300 hover:bg-white hover:text-[#5EA1E4] hover:border-[#5EA1E4] hover:shadow-[0_10px_25px_rgba(94,161,228,0.2)] hover:translate-y-[-2px] active:scale-95"
          >
            Explore Collection 
          </button>
        </div>
      </div>

      {/* ORGANIC WAVY BOTTOM SHAPE WITH STITCH */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          {/* Garis Jahitan (Stitch) */}
          <path 
            d={wavePath}
            fill="none"
            stroke="#5EA1E4" 
            strokeWidth="2"
            strokeDasharray="6,8" 
            className="opacity-40"
            style={{ transform: 'translateY(-4px)' }}
          />
          {/* Gelombang Utama */}
          <path 
            d={wavePath} 
            className="fill-white"
          ></path>
        </svg>
      </div>

    </section>
  );
}