import React from 'react';

export default function About() {
  return (
    <section id="about" className="px-[5%] py-20 relative overflow-hidden bg-white">
      <div className="reveal text-[11px] tracking-[.2em] uppercase text-[#0066AE] mb-3 flex items-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-[#0066AE]">
        Siapa Kami
      </div>
      <h2 className="reveal delay-[100ms] font-['Playfair_Display',serif] text-3xl sm:text-4xl text-[#002D54] leading-tight mb-4">
        Tentang <em className="text-[#0066AE] not-italic">Indri Collection</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
        <div className="reveal from-left relative">
          <div className="w-full h-[440px] bg-gradient-to-br from-[#0066AE] to-[#002D54] rounded-[6px] flex items-center justify-center text-center font-['Playfair_Display'] text-lg text-white/60 p-4 shadow-sm">
            <div className="flex flex-col items-center gap-2">
              <span>📸 Dokumentasi Workshop</span>
            </div>
          </div>
          <div className="absolute bottom-[-15px] right-[-15px] bg-[#002D54] text-white p-5 rounded-[4px] text-[13px] text-center shadow-md border border-white/5">
            <strong className="block font-['Playfair_Display',serif] text-[26px] text-[#4D96A8] font-bold">500+</strong>
            Produk Terjual
          </div>
        </div>

        <div className="reveal from-right">
          <p className="text-[15px] leading-[1.85] text-slate-600 font-light mb-4">
            Indri Collection lahir dari semangat yang sederhana namun kuat — bahwa setiap orang berhak berkarya, apapun kondisinya. Usaha konveksi ini berdiri dengan satu tekad: memberdayakan mereka yang selama ini sering terpinggirkan[cite: 1].
          </p>
          <p className="text-[15px] leading-[1.85] text-slate-600 font-light mb-4">
            Seluruh karyawan kami adalah penyandang disabilitas yang terampil, penuh dedikasi, dan bangga pada setiap jahitan yang mereka hasilkan. Setiap produk yang Anda terima membawa cerita, perjuangan, dan keahlian nyata[cite: 1].
          </p>
          
          <div className="w-full h-[1px] bg-slate-100 my-6"></div>
          
          <div className="flex gap-4 flex-wrap">
            {[
              { val: "10K+", label: "Pelanggan" },
              { val: "500+", label: "Produk" },
              { val: "5★", label: "Rating" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#F1F5F9] border border-slate-200 py-4 px-5 rounded-[4px] min-w-[110px] flex-1 text-center transition-all duration-300 hover:border-[#0066AE] hover:bg-white hover:shadow-sm"
              >
                <strong className="block font-['Playfair_Display',serif] text-[24px] text-[#0066AE] font-bold">{stat.val}</strong>
                <span className="text-[11px] text-slate-500 uppercase tracking-[.06em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}