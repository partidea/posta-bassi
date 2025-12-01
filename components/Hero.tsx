import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Specific user requested image */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ 
          // User requested specific image for hero
          backgroundImage: 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/71/52/ba/posta-bassi.jpg?w=900&h=500&s=1")' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-0">
        <span className="text-white/90 text-sm md:text-base tracking-[0.3em] font-bold uppercase mb-4 animate-fade-in-up">
          Foggia, Puglia
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 drop-shadow-2xl opacity-0 animate-fade-in-up animation-delay-300">
          <span className="italic block">Benvenuti</span>
          <span className="text-4xl md:text-6xl lg:text-8xl block mt-2 font-light">a Posta Bassi</span>
        </h1>

        <div className="w-24 h-[1px] bg-primary mb-8 opacity-0 animate-fade-in-up animation-delay-500"></div>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up animation-delay-700">
          Tradizione, natura e sapori autentici alla periferia di Foggia.
        </p>

        <div className="flex flex-col md:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-1000">
          <button className="bg-primary hover:bg-white hover:text-primary text-white border-2 border-primary px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl">
            Scopri il Menù
          </button>
          <a href="https://www.tripadvisor.it/Hotel_Review-g187876-d2277591-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html" target="_blank" rel="noreferrer" className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center">
            Le Nostre Camere
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-kenburns {
          animation: kenburns 20s infinite alternate ease-in-out;
        }
        .animation-delay-300 { animation-delay: 300ms; animation-fill-mode: forwards; }
        .animation-delay-500 { animation-delay: 500ms; animation-fill-mode: forwards; }
        .animation-delay-700 { animation-delay: 700ms; animation-fill-mode: forwards; }
        .animation-delay-1000 { animation-delay: 1000ms; animation-fill-mode: forwards; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;