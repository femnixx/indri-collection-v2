import React from 'react';

export default function Hero() {
  const handleScrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[85vh] bg-[#0066AE] flex items-center relative overflow-hidden px-[5%] py-16">
      {/* Subtle Architectural Clean Grid Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bca-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bca-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[620px]">
        <div className="reveal text-[11px] tracking-[.25em] uppercase text-white/90 mb-5 flex items-center gap-2.5 before:content-[''] before:w-8 before:h-[1px] before:bg-white/80">
          Koleksi Handmade · Malang[cite: 1]
        </div>
        <h1 className="reveal delay-[100ms] font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[1.15] mb-6">
          Karya Tangan,<br /><em className="text-[#4D96A8] not-italic">Hati yang Kuat</em>
        </h1>
        <p className="reveal delay-[200ms] text-white/80 text-[15px] leading-[1.8] max-w-[480px] font-light mb-9">
          Indri Collection adalah usaha konveksi yang dijalankan sepenuhnya oleh penyandang disabilitas — membuktikan bahwa keterbatasan fisik bukan penghalang untuk berkarya dan berkreasi[cite: 1].
        </p>
        <button 
          onClick={handleScrollToCollection}
          className="reveal delay-[300ms] bg-white text-[#0066AE] border-none py-3.5 px-8 font-['Lato'] text-[13px] tracking-[.12em] uppercase cursor-pointer rounded-[4px] font-bold transition-all duration-300 hover:bg-[#4D96A8] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          Lihat Koleksi Kami
        </button>
      </div>
    </section>
  );
}