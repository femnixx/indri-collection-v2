import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpeg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'about', label: 'Tentang Kami' },
    { id: 'know-us', label: 'Profil Bu Indri' },
    { id: 'collection', label: 'Koleksi Kami' },
    { id: 'testimonial', label: 'Testimoni' },
    { id: 'contact', label: 'Hubungi Kontak' },
  ];

  return (
    <>
      <style>{`
        @keyframes draw { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        .animate-draw { stroke-dasharray: 100; animation: draw 0.5s ease-out forwards; }
      `}</style>

      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between h-[72px] z-[100] px-[5%] transition-all duration-500 ease-in-out font-serif ${isScrolled ? 'bg-[#5EA1E4] shadow-md' : 'bg-transparent'}`}>
        
        {/* Brand Logo Link */}
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
          {/* Logo Container dengan Border & Shadow untuk kontras di background biru */}
          <div className={`transition-all duration-500 rounded-lg overflow-hidden border ${isScrolled ? 'border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-transparent'}`}>
            <div className="w-10 h-10 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
              <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <span className={`text-[23px] font-bold transition-all duration-500 group-hover:translate-x-1 ${isScrolled ? 'text-white' : 'text-[#1E2E42]'}`}>
            Indri Collection
          </span>
        </a>
        
        {/* Navigasi Desktop */}
        <ul className="hidden md:flex gap-[36px] list-none m-0 p-0">
          {menuItems.map((item) => (
            <li key={item.id} className="relative py-2 group">
              <a href={`#${item.id}`} className={`text-[15px] font-medium block italic transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-[#1E2E42]/85'}`}>
                {item.label}
              </a>
              
              <svg className="absolute -bottom-1 left-0 w-full h-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                <line 
                  x1="0" y1="5" x2="100" y2="5" 
                  stroke={isScrolled ? "white" : "#5EA1E4"} 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="animate-draw" 
                />
              </svg>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-1 z-50" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-[22px] h-[2px] block transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''} ${isScrolled || isOpen ? 'bg-white' : 'bg-[#1E2E42]'}`}></span>
          <span className={`w-[22px] h-[2px] block transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} ${isScrolled || isOpen ? 'bg-white' : 'bg-[#1E2E42]'}`}></span>
          <span className={`w-[22px] h-[2px] block transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''} ${isScrolled || isOpen ? 'bg-white' : 'bg-[#1E2E42]'}`}></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed md:hidden flex flex-col bg-white px-[5%] py-6 gap-4 w-full z-40 top-[72px] transition-all duration-300 shadow-xl ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {menuItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="text-[#1E2E42] font-medium italic">{item.label}</a>
        ))}
      </div>
    </>
  );
}