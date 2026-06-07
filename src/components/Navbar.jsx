{/* Navigasi Desktop dengan Efek Jahitan */}
<ul className="hidden md:flex gap-[36px] list-none m-0 p-0">
  {menuItems.map((item) => (
    <li key={item.id} className="relative py-2 group">
      <a 
        href={`#${item.id}`} 
        className={`text-[15px] font-medium transition-colors duration-500 block italic ${isScrolled ? 'text-white' : 'text-[#1E2E42]/85'}`}
      >
        {item.label}
      </a>
      
      {/* Elemen Stitching (Jahitan) */}
      <svg 
        className="absolute -bottom-1 left-0 w-full h-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <line 
          x1="0" y1="5" x2="100" y2="5" 
          stroke={isScrolled ? "white" : "#5EA1E4"} 
          strokeWidth="2" 
          strokeDasharray="4 4" 
        />
      </svg>
    </li>
  ))}
</ul>