import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#0066AE] px-[5%] flex items-center justify-between h-[64px] sticky top-0 z-[100] shadow-sm">
        <div className="font-['Playfair_Display',serif] text-[20px] text-white font-bold tracking-[.04em]">
          ✦ Indri Collection
        </div>
        
        <ul className="hidden md:flex gap-[28px] list-none">
          {['about', 'know-us', 'collection', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-white/85 no-underline text-[13px] tracking-[.08em] uppercase font-medium transition-colors duration-200 hover:text-[#4D96A8]">
                {id.replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="flex md:hidden bg-none border-none cursor-pointer flex-col gap-[5px] p-1"
          aria-label="Menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-[22px] h-[2px] bg-white block transition-transform ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-[22px] h-[2px] bg-white block transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[22px] h-[2px] bg-white block transition-transform ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </nav>

      {isOpen && (
        <div className="flex md:hidden flex-col bg-[#0066AE] px-[5%] py-5 gap-4 absolute w-full left-0 z-50 shadow-xl">
          {['about', 'know-us', 'collection', 'contact'].map((id) => (
            <a 
              key={id}
              href={`#${id}`} 
              onClick={() => setIsOpen(false)}
              className="text-white/90 no-underline text-[14px] tracking-[.06em] uppercase border-b border-white/10 pb-3 hover:text-[#4D96A8]"
            >
              {id.replace('-', ' ')}
            </a>
          ))}
        </div>
      )}
    </>
  );
}