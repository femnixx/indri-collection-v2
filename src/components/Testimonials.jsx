import React from 'react';

export default function Testimonial() {
  const topRowReviews = [
    { 
      name: "Rian Aditya", 
      role: "Pelanggan Setia", 
      text: "Kualitas jahitan kemeja batiknya luar biasa rapi. Kerah kokoh dan potongan kainnya presisi. Sangat bangga memakai karya teman-teman disabilitas luar biasa ini." 
    },
    { 
      name: "Siti Rahma", 
      role: "Koordinator Komunitas", 
      text: "Pesan seragam custom untuk acara komunitas dalam jumlah banyak, semuanya selesai tepat waktu dengan kualitas finishing premium. Jahitannya kuat sekali!" 
    },
    { 
      name: "Budi Santoso", 
      role: "Pemilik UMKM", 
      text: "Sangat puas dengan pengerjaan kain tenunnya. Komunikasi selama proses pengerjaan sangat ramah. Rekomendasi utama untuk konveksi di Kota Malang!" 
    }
  ];

  const bottomRowReviews = [
    { 
      name: "Dewi Lestari", 
      role: "Pecinta Fashion Lokal", 
      text: "Potongan baju casual-nya pas banget di badan. Detail kecil seperti penempatan kancing dan jahitan tepi bener-bener diperhatikan secara detail." 
    },
    { 
      name: "Ahmad Fauzi", 
      role: "Pelanggan Seragam", 
      text: "Kainnya nyaman digunain dan pengerjaan bordir logo sangat detail. Hasil tidak kalah dengan konveksi skala besar nasional." 
    },
    { 
      name: "Mega Utami", 
      role: "Pelanggan Setia", 
      text: "Setiap helai kain kerasa dibuat pakai hati. Indri Collection ngebuktiin kalau keterbatasan fisik bukan halangan buat ngasilin produk berkualitas juara." 
    }
  ];

  // Menggandakan data ulasan tiga kali lipat untuk membangun rantai transisi tanpa putus (Seamless Infinite Loop)
  const extendedTopRow = [...topRowReviews, ...topRowReviews, ...topRowReviews];
  const extendedBottomRow = [...bottomRowReviews, ...bottomRowReviews, ...bottomRowReviews];

  const renderReviewCard = (review, idx, rowKey) => (
    <div 
      key={`${rowKey}-${idx}`} 
      className="w-[360px] sm:w-[400px] flex-shrink-0 bg-white rounded-[20px] p-6 sm:p-8 shadow-[0_6px_20px_rgba(94,161,228,0.03)] border border-slate-100 flex flex-col justify-between relative group select-none"
    >
      {/* Ikon Jarum Pentul/Peniti Dekoratif khas Konveksi */}
      <div className="absolute top-4 right-4 opacity-10 text-xl group-hover:opacity-40 transition-opacity">🧷</div>
      
      <div>
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-dashed border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5EA1E4] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              {review.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-sans text-[15px] font-bold text-[#1E2E42]">{review.name}</h4>
              <span className="text-[12px] text-slate-400 block">{review.role}</span>
            </div>
          </div>
          <span className="text-[#E28743] text-xs tracking-wider">★★★★★</span>
        </div>
        <p className="text-slate-600 text-[14px] leading-[1.65] font-normal italic">
          "{review.text}"
        </p>
      </div>
    </div>
  );

  return (
    <section id="testimonial" className="py-24 bg-[#F4F9FF] overflow-hidden relative bg-fabric-matrix">
      
      {/* Garis pembatas struktural horizontal */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200" />

      {/* Bagian Kepala Judul / Header Section - Terinspirasi dari image_5b7529.png */}
      <div className="text-center mb-16 px-4">
        <span className="font-sans text-sm font-bold tracking-widest text-[#5EA1E4] uppercase block mb-2">
          Testimoni Pelanggan
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl text-[#1E2E42] font-black tracking-tight leading-tight max-w-2xl mx-auto">
          Kata Mereka yang <span className="text-[#5EA1E4]">Mencintai Karya Kami</span>
        </h2>
      </div>

      {/* Jalur Lintasan Animasi Marquee Gulir Tanpa Batas */}
      <div className="flex flex-col gap-8 w-full max-w-[100vw] overflow-hidden relative">
        
        {/* Lapisan Gradien Efek Vinyet Lembut di Sisi Kiri & Kanan Trek */}
        <div className="absolute left-0 top-0 bottom-0 w-[8%] bg-gradient-to-r from-[#F4F9FF] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[8%] bg-gradient-to-l from-[#F4F9FF] to-transparent z-20 pointer-events-none" />

        {/* BARIS ATAS: Berjalan dari Kiri ke Kanan */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-right hover:[animation-play-state:paused] py-2">
            {extendedTopRow.map((review, idx) => renderReviewCard(review, idx, 'top'))}
          </div>
        </div>

        {/* BARIS BAWAH: Berjalan dari Kanan ke Kiri */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-left hover:[animation-play-state:paused] py-2">
            {extendedBottomRow.map((review, idx) => renderReviewCard(review, idx, 'bottom'))}
          </div>
        </div>

      </div>
    </section>
  );
}