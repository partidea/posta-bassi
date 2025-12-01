import React from 'react';
import { Wheat, Hotel, History, ArrowRight } from 'lucide-react';

const AgriturismoSection: React.FC = () => {
  return (
    <section id="agriturismo" className="py-24 relative overflow-hidden bg-[#fdfbf7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Chi Siamo
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Dal passato <br/> 
              <span className="italic text-gray-500">all'accoglienza moderna.</span>
            </h2>
            <div className="w-20 h-1 bg-primary/20"></div>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              L'Agriturismo Posta Bassi vi aspetta alla periferia di Foggia. Quella che un tempo era una storica stazione di posta, oggi è un luogo incantato dove gli archi in mattoni originali abbracciano il comfort contemporaneo.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Siamo lieti di ospitarvi per ogni tipo di evento, dalla cena intima al grande ricevimento, offrendovi un'esperienza che unisce la genuinità della vita in campagna con l'eleganza di un servizio attento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 h-fit rounded-full text-primary">
                  <History size={24}/>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Storia</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Un restauro conservativo che mantiene viva l'anima del luogo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 h-fit rounded-full text-primary">
                  <Wheat size={24}/>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Natura</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Immersi nel verde, a pochi passi dalla città di Foggia.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
                <a 
                  href="#rooms" 
                  className="bg-primary text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-red-900 transition-all shadow-lg flex items-center gap-2 group"
                >
                  <Hotel size={16} /> Le Nostre Camere
                </a>
                <a 
                  href="#menu" 
                  className="bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center gap-2 group"
                >
                  Scopri la Cucina <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-12 lg:mt-0 order-1 lg:order-2">
            {/* Main image */}
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl h-[400px] md:h-[600px] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/dc/84/b2/posta-bassi-versione.jpg?w=1100&h=1100&s=1" 
                alt="Posta Bassi Architettura" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Vintage Photo Overlay - "Come Eravamo" */}
            <div className="absolute -bottom-10 -left-10 z-20 w-48 md:w-64 bg-white p-3 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative overflow-hidden border border-gray-200 sepia-[.60]">
                    <img 
                        src="http://www.postabassi.it/wp-content/gallery/esterni/thumbs/thumbs_A-184-Small.jpg" 
                        alt="Come Eravamo" 
                        className="w-full h-auto"
                    />
                </div>
                <p className="text-center font-serif italic text-gray-500 mt-2 text-sm">Come eravamo...</p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgriturismoSection;