import React from 'react';

export default function KnowUs() {
  return (
    <section id="know-us" className="px-[5%] py-24 bg-[#F4F9FF] relative overflow-hidden font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
        
        {/* Kontainer Foto Profil */}
        <div className="reveal from-left md:order-2 relative">
          <div className="w-full h-[440px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center justify-center p-4">
            <span className="text-slate-400 text-sm italic">📸 Profile Picture Block</span>
          </div>
        </div>

        {/* Kontainer Konten Teks */}
        <div className="reveal from-right md:order-1">
          {/* Label Atas Organik Tanpa Garis Pembatas Kaku */}
          <div className="text-[14px] tracking-wide text-[#5EA1E4] font-medium mb-3 italic">
            Profil Singkat
          </div>
          
          <h2 className="text-3xl sm:text-4xl text-[#1E2E42] font-bold tracking-tight mb-5">
            Bu Indri, <span className="text-[#5EA1E4] italic font-medium">Sang Penggerak</span>
          </h2>
          
          <p className="text-slate-600 text-[16px] leading-[1.8] font-normal mb-5">
            Bu Indri adalah sosok di balik semua ini. Dengan keterbatasan fisik yang dimilikinya, ia justru memilih untuk berdiri dan membangun — bukan hanya untuk dirinya, tapi untuk banyak orang yang senasib.
          </p>
          
          {/* Blok Kutipan (Quote) dengan Style Serif Organik */}
          <div className="bg-white rounded-[16px] border-l-4 border-[#5EA1E4] p-6 my-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-slate-700 italic font-medium text-[16px] leading-[1.7]">
            "Saya tidak ingin belas kasihan. Saya ingin karya kami dihargai karena kualitasnya, bukan karena keterbatasan kami."
          </div>
          
          {/* Daftar Poin Keunggulan */}
          <div className="flex flex-col gap-4 mt-6">
            {[
              "Pemberdayaan penyandang disabilitas melalui keahlian nyata",
              "Kualitas jahitan premium yang tidak berkompromi",
              "Setiap helai kain mendapat perhatian detail secara penuh"
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="reveal from-bottom flex items-start gap-3 text-[15px] text-slate-600 font-normal italic"
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <span className="text-[#5EA1E4] mt-0.5">✦</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}