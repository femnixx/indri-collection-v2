import React from 'react';
import { useEffect, useState, useRef } from 'react';

// Hook animasi scroll re-triggerable
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

export default function About() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.1);
  const base = 'transition-all ease-out';

  // Kontroler utama untuk langkah kemunculan (stagger) elemen standar
  const slideReveal = (direction = 'bottom', delay = '0ms', duration = '700ms') => {
    let transformState = 'translate-y-10';
    if (direction === 'left') transformState = '-translate-x-12';
    if (direction === 'right') transformState = 'translate-x-12';

    return {
      style: { transitionDuration: duration, transitionDelay: sectionVisible ? delay : '0ms' },
      className: `${base} ${sectionVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${transformState}`}`,
    };
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="px-[5%] py-24 bg-white relative overflow-hidden"
    >
      
      {/* Bagian Kepala Judul / Header */}
      <div className="text-center mb-16">
        <span 
          className={`${slideReveal('bottom', '100ms').className} font-sans text-sm font-bold tracking-widest text-[#5EA1E4] uppercase block mb-2`}
          style={slideReveal('bottom', '100ms').style}
        >
          Kisah Di Balik Layar
        </span>
        <h2 
          className={`${slideReveal('bottom', '250ms').className} font-sans text-3xl sm:text-4xl text-[#1E2E42] font-black tracking-tight`}
          style={slideReveal('bottom', '250ms').style}
        >
          Tentang <span className="text-[#5EA1E4]">Indri Collection</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
        
        {/* Frame Visual Bergaya Lembar Sampel Kain Perca */}
        <div 
          className={`${slideReveal('left', '200ms', '900ms').className} relative p-4 border-2 border-dashed border-[#5EA1E4]/30 rounded-[24px]`}
          style={slideReveal('left', '200ms', '900ms').style}
        >
          <div className="w-full h-[450px] bg-gradient-to-br from-[#F4F9FF] to-[#5EA1E4]/20 rounded-[18px] flex items-center justify-center relative overflow-hidden group">
            <span className="text-slate-400 font-medium text-xs tracking-wider uppercase transition-transform duration-500 group-hover:scale-105">
              📸 Galeri Konveksi
            </span>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-xs font-sans text-xs font-bold px-3 py-1.5 rounded-md text-[#1E2E42] shadow-xs">
              Malang Series 🧵
            </div>
          </div>
        </div>

        {/* Konten Teks Deskripsi dan Statistik */}
        <div className="flex flex-col">
          <p 
            className={`${slideReveal('right', '300ms').className} text-[15px] leading-[1.85] text-slate-600 mb-4 font-normal`}
            style={slideReveal('right', '300ms').style}
          >
            Indri Collection lahir dari semangat yang sederhana namun kuat — bahwa setiap orang berhak berkarya, apa pun kondisinya. Usaha konveksi ini berdiri dengan satu tekad: memberdayakan mereka yang selama ini sering terpinggirkan.
          </p>
          <p 
            className={`${slideReveal('right', '450ms').className} text-[15px] leading-[1.85] text-slate-600 mb-8 font-normal`}
            style={slideReveal('right', '450ms').style}
          >
            Seluruh karyawan kami adalah penyandang disabilitas yang terampil, penuh dedikasi, dan bangga pada setiap jahitan yang mereka hasilkan. Setiap produk yang Anda terima membawa cerita, perjuangan, dan keahlian nyata.
          </p>
          
          {/* Label Statistik yang Didesain Mirip Label Gantung / Hangtag Baju */}
          <div className="flex gap-6 flex-wrap mt-8">
            {[
              { val: "500+", label: "Produk Premium", desc: "Buatan Tangan" },
              { val: "10RB+", label: "Pelanggan Puas", desc: "Jahitan Terpercaya" }
            ].map((stat, idx) => {
              // Efek kemunculan kartu tag secara sekuensial setelah teks utama muncul
              const tagDelay = `${600 + idx * 150}ms`;
              const revealConfig = slideReveal('bottom', tagDelay, '800ms');
              
              return (
                <div 
                  key={idx} 
                  className={`${revealConfig.className} bg-[#F4F9FF] border-2 border-dashed border-[#5EA1E4]/40 pt-6 pb-5 px-6 rounded-tr-[24px] rounded-b-[8px] rounded-tl-[4px] relative flex-1 min-w-[150px] shadow-xs group hover:border-[#5EA1E4] transition-all duration-300 hover:-translate-y-1`}
                  style={revealConfig.style}
                >
                  {/* Lubang Tali Pengikat Label (Punch-Hole) */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full border border-[#5EA1E4] group-hover:bg-[#5EA1E4] transition-colors" />
                  
                  <div className="text-center mt-2">
                    <strong className="block text-[28px] text-[#1E2E42] font-black leading-none transition-colors group-hover:text-[#5EA1E4]">
                      {stat.val}
                    </strong>
                    <span className="text-[12px] text-[#5EA1E4] font-bold tracking-wide block mt-2">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5 italic">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}