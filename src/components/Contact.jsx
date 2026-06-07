import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="px-[5%] py-20 relative overflow-hidden bg-[#002D54] text-white">
      <div className="text-center reveal">
        <div className="text-[11px] tracking-[.2em] uppercase text-[#4D96A8] mb-3 flex items-center justify-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-[#4D96A8]">
          Hubungi Kami
        </div>
        <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl leading-tight text-white">
          Temui <em className="text-[#4D96A8] not-italic">Kami</em>
        </h2>
        <p className="text-white/60 text-sm font-light mt-2">
          Kunjungi toko kami atau hubungi melalui media pilihan Anda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[840px] mx-auto mt-12">
        
        <a 
          href="https://maps.google.com/?q=Jalan+Vinolia+no+22,+Jatimulyo,+Lowokwaru,+Kota+Malang" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reveal from-left block group no-underline text-white bg-white/5 border border-white/10 rounded-[6px] p-8 text-center transition-all duration-300 hover:border-[#0066AE] hover:bg-white/10 active:scale-[0.99]"
        >
          <div className="w-14 h-14 bg-[#0066AE] rounded-full flex items-center justify-center mx-auto mb-4 text-[24px] group-hover:scale-105 transition-transform duration-300">📍</div>
          <h3 className="font-['Playfair_Display',serif] text-lg text-white font-bold mb-1">Kunjungi Toko Kami</h3>
          <p className="text-white/60 text-xs leading-[1.6] font-light mb-4">Jalan Vinolia no 22, Jatimulyo,<br />Lowokwaru, Kota Malang</p>
          <div className="w-16 h-[2px] bg-[#4D96A8] mx-auto opacity-40"></div>
        </a>

        <div className="reveal from-right flex flex-col gap-1">
          {[
            { icon: "✉", label: "Email", val: "indricollection@gmail.com", href: "mailto:indricollection@gmail.com" },
            { icon: "📷", label: "Instagram", val: "@indricollection", href: "https://instagram.com/indricollection" },
            { icon: "♪", label: "TikTok", val: "@indricollection07", href: "https://tiktok.com/@indricollection07" }
          ].map((item, idx) => (
            <a 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={idx} 
              className="flex items-center gap-4 py-3.5 border-b border-white/5 last:border-none no-underline text-white hover:text-[#4D96A8] transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[13px] shrink-0 text-[#4D96A8] group-hover:bg-[#4D96A8] transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] text-white/40 tracking-[.06em] uppercase">{item.label}</div>
                <div className="text-[13px] text-white/85 font-medium">{item.val}</div>
              </div>
            </a>
          ))}
          
          <div className="reveal delay-[200ms] mt-6 p-4 bg-white/5 rounded-[4px] border-l-2 border-[#4D96A8]">
            <h4 className="text-[11px] tracking-[.1em] uppercase text-[#4D96A8] font-bold mb-1.5">Jam Operasional</h4>
            <p className="text-[12px] text-white/60 font-light">
              Senin – Sabtu: 10.00 – 20.00 WIB<br />Minggu: 11.00 – 18.00 WIB
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}