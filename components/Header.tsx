import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agriturismo', href: '#agriturismo' },
    { name: 'Camere', href: '#rooms' },
    { name: 'Servizi', href: '#services' },
    { name: 'Ristorante', href: '#menu' },
    { name: 'Eventi', href: '#news' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`transition-all duration-300 ${isScrolled ? 'w-12' : 'w-16 md:w-20'} overflow-hidden rounded-full border-2 border-primary/20 bg-white`}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHoaziqetfEXrmpSbInwPzyuK-vErq7oheQ&s" 
                alt="Posta Bassi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`flex flex-col ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} transition-opacity`}>
              <span className={`font-serif font-bold tracking-wider ${isScrolled ? 'text-gray-900' : 'text-white shadow-black drop-shadow-md'} uppercase text-sm md:text-base`}>
                Posta Bassi
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-primary' : 'text-white/90 drop-shadow-md'}`}>
                Agriturismo Foggia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact"
              className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
            >
              <Calendar size={14} />
              Prenota
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`xl:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-6 right-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary transition-colors">
            <X size={32} />
          </button>
        </div>
        
        <div className="h-full flex flex-col justify-center items-center space-y-6 p-8 overflow-y-auto">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHoaziqetfEXrmpSbInwPzyuK-vErq7oheQ&s" 
            alt="Logo" 
            className="w-20 mb-2"
          />
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xl font-serif italic text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 border-t border-gray-100 w-full flex flex-col items-center gap-4">
             <a href="tel:+390881700155" className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Phone size={18} /> +39 0881 700155
             </a>
             <button className="bg-primary text-white w-full max-w-xs py-4 rounded-sm uppercase tracking-widest font-bold text-xs">
                Prenota un Tavolo
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;