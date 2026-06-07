import React from 'react';

export default function Collection() {
  const collections = [
    { title: "Batik Malang", label: "Kemeja", bg: "bg-[#0066AE]" },
    { title: "Tenun Modern", label: "Dress", bg: "bg-[#4D96A8]" },
    { title: "Custom Order", label: "Seragam", bg: "bg-[#002D54]" },
    { title: "Everyday Wear", label: "Casual", bg: "bg-slate-700" }
  ];

  return (
    <section id="collection" className="px-[5%] py-20 relative overflow-hidden bg-[#F1F5F9]">
      <div className="text-center mb-12">
        <div className="reveal text-[11px] tracking-[.2em] uppercase text-[#0066AE] mb-3 flex items-center justify-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-[#0066AE]">
          Produk Kami
        </div>
        <h2 className="reveal delay-[100ms] font-['Playfair_Display',serif] text-3xl sm:text-4xl text-[#002D54] leading-tight">
          Koleksi <em className="text-[#0066AE] not-italic">Pilihan</em>
        </h2>
        <p className="reveal delay-[200ms] text-slate-500 font-light text-sm mt-2">
          Setiap helai dibuat dengan ketelitian dan rasa bangga
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collections.map((item, idx) => (
          <div 
            key={idx} 
            className="reveal group rounded-[6px] overflow-hidden relative cursor-pointer bg-white shadow-xs border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className={`w-full h-[320px] ${item.bg} flex items-center justify-center font-light text-xs text-white/30 group-hover:scale-105 transition-transform duration-500`}>
              <span>Koleksi {idx + 1}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002D54]/95 via-[#002D54]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <div className="text-[11px] tracking-[.12em] uppercase text-[#4D96A8] transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 delay-[50ms]">
                {item.label}
              </div>
              <div className="font-['Playfair_Display',serif] text-base font-bold text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 delay-[100ms]">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}