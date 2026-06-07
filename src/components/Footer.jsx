import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111d27] px-[5%] pt-12 pb-6 text-white/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        <div>
          <div className="font-['Playfair_Display',serif] text-[22px] text-[#D4A853] font-bold mb-3">✦ Indri Collection</div>
          <p className="text-[13px] leading-[1.8] font-light max-w-[280px]">
            Usaha konveksi yang dijalankan oleh penyandang disabilitas dengan semangat dan keahlian penuh. Malang, Jawa Timur.
          </p>
        </div>
        
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[11px] tracking-[.12em] uppercase text-white/40 font-bold mb-1.5">Navigasi</h4>
          {['about', 'know-us', 'collection', 'testimonial', 'contact'].map((id) => (
            <a key={id} href={`#${id}`} className="block text-white/55 no-underline text-[13px] transition-colors duration-200 hover:text-[#D4A853]">
              {id.replace('-', ' ').replace('about', 'Tentang Kami').replace('know-us', 'Bu Indri').replace('collection', 'Koleksi').replace('testimonial', 'Testimoni').replace('contact', 'Kontak')}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="text-[11px] tracking-[.12em] uppercase text-white/40 font-bold mb-1.5">Ikuti Kami</h4>
          <a href="https://instagram.com/indricollection" target="_blank" rel="noopener noreferrer" className="block text-white/55 no-underline text-[13px] hover:text-[#D4A853]">Instagram</a>
          <a href="https://tiktok.com/@indricollection07" target="_blank" rel="noopener noreferrer" className="block text-white/55 no-underline text-[13px] hover:text-[#D4A853]">TikTok</a>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block text-white/55 no-underline text-[13px] hover:text-[#D4A853]">WhatsApp</a>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[12px]">© {new Date().getFullYear()} Indri Collection. All rights reserved.</p>
        <div className="flex gap-3">
          {[
            { tag: "ig", href: "https://instagram.com/indricollection" },
            { tag: "tt", href: "https://tiktok.com/@indricollection07" },
            { tag: "wa", href: "https://wa.me/628123456789" }
          ].map((soc, idx) => (
            <a 
              key={idx} 
              href={soc.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[13px] text-white/50 no-underline transition-colors duration-200 hover:border-[#D4A853] hover:text-[#D4A853]"
            >
              {soc.tag}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}