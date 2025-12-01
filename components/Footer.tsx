import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="font-serif text-3xl italic mb-4">Posta Bassi</h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Un'esperienza autentica nel cuore della Puglia. Cucina tradizionale, ospitalità genuina e un'atmosfera indimenticabile.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
             <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light uppercase tracking-widest">
          <p>© 2024 Agriturismo Posta Bassi. P.Iva: 02072720713</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;