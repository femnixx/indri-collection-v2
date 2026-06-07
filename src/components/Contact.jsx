import React, { useEffect, useState, useRef } from 'react';
// Mengimpor gambar peta langsung dari folder assets Anda
import mapsImg from '../assets/maps.jpg'; 

// Hook animasi scroll re-triggerable
function useScrollReveal(threshold = 0.1) {
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

export default function Contact() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.05);
  const baseTransition = 'transition-all ease-out duration-500';

  // Helper untuk memproses transformasi properti animasi reveal secara seragam (Cepat & Responsif)
  const getRevealProps = (delay = '0ms', direction = 'bottom', duration = '500ms') => {
    let transformClass = 'translate-y-6';
    if (direction === 'left') transformClass = '-translate-x-8';
    if (direction === 'right') transformClass = '-translate-x-8';

    return {
      style: { transitionDuration: duration, transitionDelay: sectionVisible ? delay : '0ms' },
      className: `${baseTransition} ${sectionVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${transformClass}`}`,
    };
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="px-[5%] py-24 bg-white relative overflow-hidden"
    >
      {/* Aksen dekoratif jahitan horizontal pada bagian atas sekat kontainer */}
      <div className="absolute top-0 left-0 w-full h-[6px] stitch-line-horizontal opacity-30" />

      {/* Grup Judul Utama */}
      <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
        <div 
          {...getRevealProps('50ms')}
          className={`text-[12px] tracking-[0.15em] uppercase text-[#5EA1E4] font-black mb-3 flex items-center justify-center gap-2.5 before:content-[''] before:w-6 before:h-[2px] before:bg-[#5EA1E4] ${getRevealProps('50ms').className}`}
        >
          Hubungi Kami
        </div>
        <h2 
          {...getRevealProps('150ms')}
          className={`font-sans text-3xl sm:text-4xl md:text-5xl text-[#1E2E42] font-black tracking-tight leading-[1.15] ${getRevealProps('150ms').className}`}
        >
          Kunjungi studio kami atau hubungi kami melalui <span className="text-[#5EA1E4] relative inline-block">layanan pilihan Anda</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-[980px] mx-auto mt-16">
        
        {/* Kartu Visual Peta Menggunakan peta asli dari assets */}
        <a 
          href="https://maps.google.com/?q=Jalan+Vinolia+no+22,+Jatimulyo,+Lowokwaru,+Kota+Malang" 
          target="_blank" 
          rel="noopener noreferrer" 
          {...getRevealProps('100ms', 'left', '600ms')}
          className={`block group rounded-[32px] overflow-hidden relative shadow-xl hover:shadow-[0_20px_45px_rgba(94,161,228,0.15)] transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.99] border border-slate-100 ${getRevealProps('100ms', 'left', '600ms').className}`}
        >
          {/* Gambar Peta Asli sebagai Background yang diimpor dari assets */}
          <div className="absolute inset-0 z-0">
            <img 
              src={mapsImg} 
              alt="Peta Lokasi Indri Collection" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Lapisan Gradasi Warna Gelap (Overlay) untuk memastikan kontras teks premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2E42]/95 via-[#1E2E42]/80 to-[#1E2E42]/45 z-10" />

          {/* Garis batas dekoratif putus-putus khas konveksi/tailor */}
          <div className="absolute inset-4 rounded-[20px] border border-dashed border-white/20 pointer-events-none group-hover:border-white/40 transition-colors z-20" />
          
          {/* Konten Utama Kartu Alamat */}
          <div className="relative z-20 h-full flex flex-col justify-between p-8 sm:p-12 text-center items-center">
            
            {/* Pin Penanda Lokasi Interaktif dengan Efek Memantul (Bounce) */}
            <div className="relative mb-6 drop-shadow-[0_8px_16px_rgba(94,161,228,0.4)]">
              {/* Gelombang bayangan di bawah pin */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full scale-100 group-hover:scale-75 transition-transform duration-500" />
              <div className="w-16 h-16 bg-[#5EA1E4] text-white rounded-2xl flex items-center justify-center text-3xl transform transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-6">
                📍
              </div>
            </div>

            <div>
              <h3 className="font-sans text-2xl font-black mb-3 text-white tracking-tight">Kunjungi Galeri</h3>
              <p className="text-slate-200 text-[14px] sm:text-base leading-relaxed font-normal mb-8 max-w-xs mx-auto">
                Jalan Vinolia no 22, Jatimulyo,<br />Lowokwaru, Kota Malang
              </p>
            </div>
            
            {/* Tombol Aksi Google Maps */}
            <span className="inline-flex items-center gap-2 bg-[#5EA1E4] hover:bg-[#4B8FD3] text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-colors shadow-md">
              Buka Google Maps 🗺️
            </span>
          </div>
        </a>

        {/* Daftar Saluran Kontak Media Sosial Sisi Kanan (Slide-in dari Kanan) */}
        <div className="flex flex-col justify-center gap-3">
          {[
            { icon: "✉", label: "Email", val: "indricollection@gmail.com", href: "mailto:indricollection@gmail.com" },
            { icon: "📷", label: "Instagram", val: "@indricollection", href: "https://instagram.com/indricollection" },
            { icon: "♪", label: "TikTok", val: "@indricollection07", href: "https://tiktok.com/@indricollection07" }
          ].map((item, idx) => {
            const itemReveal = getRevealProps(`${200 + idx * 80}ms`, 'right');

            return (
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={idx} 
                style={itemReveal.style}
                className={`flex items-center gap-4 p-5 rounded-[20px] border border-slate-100 bg-[#F4F9FF]/40 no-underline text-[#1E2E42] transition-all duration-300 hover:text-[#5EA1E4] hover:bg-[#F4F9FF] hover:translate-x-2 group shadow-xs hover:shadow-md ${itemReveal.className}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sm shrink-0 text-[#5EA1E4] shadow-xs group-hover:border-[#5EA1E4] group-hover:bg-white transition-all duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{item.label}</div>
                  <div className="text-[15px] text-[#1E2E42] font-bold mt-0.5 tracking-tight group-hover:text-[#5EA1E4] transition-colors">
                    {item.val}
                  </div>
                </div>
              </a>
            );
          })}
          
          {/* Jam Operasional */}
          <div 
            {...getRevealProps('450ms', 'bottom')}
            className={`mt-4 p-6 bg-[#F4F9FF]/70 rounded-[20px] border-l-4 border-[#5EA1E4] shadow-xs ${getRevealProps('450ms', 'bottom').className}`}
          >
            <h4 className="text-[11px] font-black uppercase text-[#5EA1E4] tracking-widest mb-1.5">Jam Operasional</h4>
            <p className="text-[14px] text-slate-600 font-semibold leading-relaxed">
              Senin – Sabtu: <span className="text-[#1E2E42]">10.00 – 20.00 WIB</span> <br /> 
              Minggu: <span className="text-[#1E2E42]">11.00 – 18.00 WIB</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}