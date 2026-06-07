import React, { useState, useEffect, useRef } from 'react';

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

// Data sampel produk katalog berdasarkan struktur visual di image_5b629a.jpg (Tanpa Properti Harga)
const collectionData = [
  { id: 1, title: 'Premium White Blazer', category: 'Formal', img: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&w=500&q=80' },
  { id: 2, title: 'Ruffled Linen Shirt', category: 'Casual', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 3, title: 'Classic Woven Straw Hat', category: 'Aksesoris', img: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=500&q=80' },
  { id: 4, title: 'Tailored Jumpsuit Black', category: 'Formal', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80' },
];

export default function Collection() {
  const [sectionRef, sectionVisible] = useScrollReveal(0.05);
  const carouselRef = useRef(null);

  // Navigasi geser linear mulus untuk track item carousel
  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = 320; 
    const gap = 24;
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
    
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const baseTransition = 'transition-all ease-out duration-700';

  return (
    <section 
      id="collection" 
      ref={sectionRef}
      className="px-[5%] py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Aksen Latar Belakang Grafis Siluet Gunting */}
      <div className="absolute left-[-10%] top-[20%] text-[180px] opacity-[0.02] select-none pointer-events-none">✂</div>

      {/* Bagian Kepala Judul / Header - Sesuai dengan Gambar image_5b629a.jpg */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 
          style={{ transitionDelay: '100ms' }}
          className={`font-sans text-4xl md:text-5xl text-[#1E2E42] font-black tracking-tight ${baseTransition}
            ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Koleksi <span className="text-[#5EA1E4]">Kami</span>
        </h2>
        <p 
          style={{ transitionDelay: '250ms' }}
          className={`text-slate-500 text-sm md:text-base max-w-xl mt-4 font-normal leading-relaxed ${baseTransition}
            ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Temukan pilihan busana premium yang dikurasi secara khusus untuk individu modern, dirancang dengan ketelitian tinggi oleh para ahli konveksi kami.
        </p>
        
        {/* Pembatas Jahitan Dekoratif Putus-putus Biru */}
        <div 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #5EA1E4 50%, transparent 50%)', 
            backgroundSize: '10px 100%',
            transitionDuration: '1000ms',
            transitionDelay: '400ms'
          }}
          className={`h-[2px] mt-6 ${baseTransition} ${sectionVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}
        />
      </div>

      {/* Area Pembungkus Slider Carousel */}
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Tombol Navigasi Kiri (Arrow Left) */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-30 w-12 h-12 rounded-full bg-white text-[#1E2E42] border border-slate-100 shadow-lg flex items-center justify-center hover:bg-[#5EA1E4] hover:text-white hover:border-[#5EA1E4] transition-all duration-300 active:scale-90"
          aria-label="Koleksi sebelumnya"
        >
          <span className="text-lg font-bold">‹</span>
        </button>

        {/* Tombol Navigasi Kanan (Arrow Right) */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-30 w-12 h-12 rounded-full bg-white text-[#1E2E42] border border-slate-100 shadow-lg flex items-center justify-center hover:bg-[#5EA1E4] hover:text-white hover:border-[#5EA1E4] transition-all duration-300 active:scale-90"
          aria-label="Koleksi berikutnya"
        >
          <span className="text-lg font-bold">›</span>
        </button>

        {/* Kontainer Utama Jalur Geser Track Item Swatch */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-4 px-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {collectionData.map((item, idx) => {
            // Efek pemunculan kartu secara bertahap (Staggered fade-in)
            const cardDelay = `${200 + idx * 100}ms`;
            
            return (
              <div
                key={item.id}
                style={{ transitionDelay: sectionVisible ? cardDelay : '0ms' }}
                className={`w-[290px] sm:w-[310px] flex-shrink-0 snap-start bg-white rounded-[24px] border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${baseTransition}
                  ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                {/* Frame Utama Gambar Visual Produk */}
                <div className="w-full h-[360px] relative overflow-hidden rounded-t-[24px] bg-slate-50">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Label Kategori Gantung Kain Tiruan */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1E2E42] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xs border border-white/40">
                    📍 {item.category}
                  </span>

                  {/* Panel Detail Jahitan yang Bergeser ke Atas saat Di-hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10324A]/90 via-[#10324A]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-6">
                    <div className="border border-dashed border-[#5EA1E4]/40 rounded-xl p-4 text-white text-center">
                      <span className="font-sans font-bold text-lg text-[#5EA1E4] block mb-1">Detail Kualitas</span>
                      <p className="text-[11px] text-slate-200 leading-relaxed font-light">Setiap potong kain diproses dengan teknik presisi tinggi demi mengutamakan kenyamanan esensial.</p>
                    </div>
                  </div>
                </div>

                {/* Bagian Informasi Teks Bawah Card (Tanpa Nilai Harga) */}
                <div className="p-6 relative bg-white rounded-b-[24px] border-t border-slate-50">
                  {/* Simulasi garis gantungan tag kecil */}
                  <div className="absolute top-0 left-8 w-[1px] h-3 bg-dashed bg-slate-200 pointer-events-none" />

                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-[#1E2E42] font-bold text-base tracking-tight truncate group-hover:text-[#5EA1E4] transition-colors duration-300 max-w-[170px] sm:max-w-[190px]">
                      {item.title}
                    </h3>
                    
                    {/* Tombol Detail diposisikan rata kanan di samping judul */}
                    <button 
                      className="text-xs bg-[#F4F9FF] text-[#5EA1E4] font-bold px-4 py-2 rounded-full border border-[#5EA1E4]/10 hover:bg-[#5EA1E4] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95 flex-shrink-0"
                    >
                      Detail ✂
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}