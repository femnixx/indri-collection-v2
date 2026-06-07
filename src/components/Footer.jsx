import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1E2E42] px-[5%] pt-16 pb-8 text-slate-300 relative overflow-hidden">
      {/* Garis Pembatas Atas Bergaya Pola Jahitan Putus-Putus */}
      <div 
        style={{ backgroundImage: 'linear-gradient(to right, #5EA1E4 40%, transparent 40%)', backgroundSize: '12px 100%' }}
        className="absolute top-0 left-0 w-full h-[2px] opacity-30"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-7xl mx-auto relative z-10">
        {/* Kolom 1: Profil / Brand Singkat */}
        <div>
          <div className="font-sans text-xl text-white font-black tracking-tight mb-4 flex items-center gap-2">
            <span className="text-[#5EA1E4]">🧵</span> Indri Collection
          </div>
          <p className="text-[13px] leading-[1.8] text-slate-400 max-w-[300px] font-normal">
            Usaha konveksi yang dijalankan oleh penyandang disabilitas dengan semangat, dedikasi, dan keahlian penuh. Malang, Jawa Timur.
          </p>
        </div>
        
        {/* Kolom 2: Navigasi Internal Internal */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] tracking-[.15em] uppercase text-[#5EA1E4] font-bold mb-2">Navigasi</h4>
          {['about', 'know-us', 'collection', 'testimonial', 'contact'].map((id) => (
            <a 
              key={id} 
              href={`#${id}`} 
              className="block text-slate-400 no-underline text-[13px] transition-colors duration-200 hover:text-[#5EA1E4] w-fit"
            >
              {id
                .replace('about', 'Tentang Kami')
                .replace('know-us', 'Profil Bu Indri')
                .replace('collection', 'Koleksi Kami')
                .replace('testimonial', 'Testimoni Pelanggan')
                .replace('contact', 'Hubungi Kontak')}
            </a>
          ))}
        </div>

        {/* Kolom 3: Media Sosial & Komunikasi */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] tracking-[.15em] uppercase text-[#5EA1E4] font-bold mb-2">Ikuti Kami</h4>
          <a href="https://instagram.com/indricollection" target="_blank" rel="noopener noreferrer" className="block text-slate-400 no-underline text-[13px] transition-colors duration-200 hover:text-white w-fit">
            📸 Instagram
          </a>
          <a href="https://tiktok.com/@indricollection07" target="_blank" rel="noopener noreferrer" className="block text-slate-400 no-underline text-[13px] transition-colors duration-200 hover:text-white w-fit">
            🎵 TikTok
          </a>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block text-slate-400 no-underline text-[13px] transition-colors duration-200 hover:text-white w-fit">
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* Bagian Bawah: Hak Cipta & Icon Bulat */}
      <div className="border-t border-slate-700/50 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[12px] text-slate-500 font-normal">
          © {new Date().getFullYear()} Indri Collection. Hak Cipta Dilindungi Undang-Undang.
        </p>
        
        {/* Tombol Sosial Media Berbentuk Lingkaran Minimalis */}
        <div className="flex gap-3">
          {[
            { tag: "IG", href: "https://instagram.com/indricollection" },
            { tag: "TT", href: "https://tiktok.com/@indricollection07" },
            { tag: "WA", href: "https://wa.me/628123456789" }
          ].map((soc, idx) => (
            <a 
              key={idx} 
              href={soc.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-[11px] text-slate-400 font-bold no-underline transition-all duration-300 hover:border-[#5EA1E4] hover:text-[#5EA1E4] hover:bg-slate-800"
            >
              {soc.tag}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}