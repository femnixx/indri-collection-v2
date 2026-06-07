import React from 'react';

const reviews = [
  { name: "Sari W.", role: "Pelanggan Setia", text: "Kualitas jahitannya sangat rapi dan teliti. Saya sudah pesan 3x dan selalu puas!" },
  { name: "Budi P.", role: "UMKM Owner", text: "Seragam karyawan saya dari Indri Collection. Cepat, rapi, dan harganya fair." },
  { name: "Dina R.", role: "Ibu Rumah Tangga", text: "Baturannya cantik banget, warnanya tidak luntur setelah dicuci berkali-kali." },
  { name: "Eko S.", role: "Guru", text: "Senang bisa mendukung UMKM lokal yang punya cerita luar biasa ini." },
  { name: "Rina A.", role: "Mahasiswi", text: "Pesanan custom dress wisuda saya persis seperti yang diinginkan. Recommended!" },
  { name: "Hasan M.", role: "Pengusaha", text: "Kerjasama yang profesional. Pengiriman tepat waktu dan kemasan sangat baik." },
];

function TestimonialCard({ item }) {
  const initials = item.name.split(' ').map(w => w[0]).join('').substring(0, 2);
  return (
    <div className="bg-white border border-[#eddcc8] rounded-[4px] p-6 w-[300px] shrink-0 mr-5">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-[#EDD9C0] flex items-center justify-center font-bold text-sm text-[#C8956A] shrink-0">
            {initials}
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#1C2B3A]">{item.name}</div>
            <div className="text-[11px] text-[#999]">{item.role}</div>
          </div>
        </div>
        <div className="text-[#D4A853] text-[13px] tracking-[1px]">★★★★★</div>
      </div>
      <hr className="border-none border-t border-[#f0e8da] my-3" />
      <div className="text-[13px] text-[#666] leading-[1.7] font-light">{item.text}</div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  const row1 = [...reviews.slice(0, half), ...reviews.slice(0, half), ...reviews.slice(0, half)];
  const row2 = [...reviews.slice(half), ...reviews.slice(half), ...reviews.slice(half)];

  return (
    <section id="testimonial" className="py-22 bg-[#FDF8F2]">
      <div className="px-[5%] text-center">
        <div className="text-[11px] tracking-[.2em] uppercase text-[#C8956A] mb-3 flex items-center justify-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-[#C8956A] reveal">
          Kata Mereka
        </div>
        <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl text-[#1C2B3A] leading-tight reveal">
          Apa yang <em className="text-[#C8956A] not-italic">Pelanggan</em> Bilang
        </h2>
        <p className="text-[#888] font-light text-sm mt-2 reveal">
          Kepercayaan Anda adalah kebanggaan kami
        </p>
      </div>

      <div className="overflow-hidden mt-10 group">
        <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
          {row1.map((item, idx) => <TestimonialCard key={idx} item={item} />)}
        </div>
      </div>

      <div className="overflow-hidden mt-5 group">
        <div className="flex w-max pl-40 animate-marquee-right group-hover:[animation-play-state:paused]">
          {row2.map((item, idx) => <TestimonialCard key={idx} item={item} />)}
        </div>
      </div>
    </section>
  );
}