import React from 'react';

export default function KnowUs() {
  return (
    <section id="know-us" className="px-[5%] py-22 relative overflow-hidden bg-[#1C2B3A] text-white">
      <svg className="absolute top-6 right-[5%] opacity-10 pointer-events-none" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke="#D4A853" strokeWidth="1"/>
        <circle cx="60" cy="60" r="35" fill="none" stroke="#D4A853" strokeWidth="1"/>
        <circle cx="60" cy="60" r="15" fill="none" stroke="#D4A853" strokeWidth="1"/>
        <line x1="60" y1="5" x2="60" y2="115" stroke="#D4A853" strokeWidth=".5"/>
        <line x1="5" y1="60" x2="115" y2="60" stroke="#D4A853" strokeWidth=".5"/>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="reveal from-left border-3 border-[#D4A853]/30 rounded-[4px] p-3 inline-block">
          <div className="w-full h-[420px] bg-gradient-to-br from-[#2a3f52] to-[#3d5a70] rounded-[2px] flex flex-col items-center justify-center gap-2 text-white/50 text-sm shadow-inner">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="16" r="10" stroke="rgba(255,255,255,.4)" strokeWidth="1.5"/>
              <path d="M4 44 Q24 32 44 44" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>Foto Bu Indri</span>
          </div>
        </div>

        <div className="reveal from-right">
          <div className="text-[11px] tracking-[.2em] uppercase text-[#D4A853] mb-3 flex items-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-[#D4A853]">
            Kenali Kami Lebih Dalam
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl text-white font-bold leading-tight mb-4">
            Bu <em className="text-[#D4A853] not-italic">Indri,</em><br />Sang Penggerak
          </h2>
          <p className="text-white/70 text-[15px] leading-[1.9] font-light mb-4">
            Bu Indri adalah sosok di balik semua ini. Dengan keterbatasan fisik yang dimilikinya, ia justru memilih untuk berdiri dan membangun — bukan hanya untuk dirinya, tapi untuk banyak orang yang senasib.[cite: 1]
          </p>
          <div className="reveal delay-[150ms] border-l-3 border-[#D4A853] pl-6 pr-4 py-4 my-6 font-['Playfair_Display',serif] italic text-[17px] text-white/85 leading-[1.7] bg-white/5 rounded-r-[2px]">
            "Saya tidak ingin belas kasihan. Saya ingin karya kami dihargai karena kualitasnya, bukan karena keterbatasan kami."
          </div>
          <p className="text-white/70 text-[15px] leading-[1.9] font-light mb-4">
            Workshop Indri Collection bukan sekadar tempat produksi — ini adalah rumah, tempat belajar, dan ruang bangga bagi seluruh tim yang ada di dalamnya.[cite: 1]
          </p>
          
          <div className="flex flex-col gap-3 mt-6">
            {[
              "Pemberdayaan penyandang disabilitas melalui keahlian",
              "Kualitas jahitan yang tidak berkompromi",
              "Setiap mendapat sentuhan tangan dan hati secara detail"
            ].map((value, idx) => (
              <div 
                key={idx} 
                className={`reveal flex items-start gap-3 text-sm text-white/75 transition-transform duration-300 hover:translate-x-1`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-2 h-2 rounded-full bg-[#D4A853] shrink-0 mt-1.5 animate-pulse"></div>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}