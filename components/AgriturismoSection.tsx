import React from 'react';
import { Wheat, Hotel } from 'lucide-react';

const AgriturismoSection: React.FC = () => {
  return (
    <section id="agriturismo" className="py-24 relative overflow-hidden bg-[#fdfbf7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> La Nostra Storia
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Un'oasi di pace <br/> 
              <span className="italic text-gray-500">alle porte di Foggia.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              L'Agriturismo Posta Bassi vi aspetta alla periferia di Foggia, ed è lieta di ospitarvi per ogni tipo di evento. 
              Immerso in un'atmosfera rustica ed elegante, caratterizzata da archi in mattoni e ampi spazi verdi, 
              il nostro agriturismo è il luogo ideale per riscoprire i sapori autentici della tradizione pugliese.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-serif text-xl mb-2 flex items-center gap-2">
                  <Wheat className="text-primary" size={20}/> Tradizione
                </h4>
                <p className="text-sm text-gray-500">Cucina tipica con prodotti a km 0 e ricette tramandate.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2 flex items-center gap-2">
                  <Hotel className="text-primary" size={20}/> Ospitalità
                </h4>
                <p className="text-sm text-gray-500">Camere accoglienti per un soggiorno immerso nella natura.</p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
                <a 
                href="https://www.tripadvisor.it/Hotel_Review-g187876-d2277591-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-red-900 transition-colors shadow-lg"
                >
                  Guarda le Camere
                </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            {/* Main image */}
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl h-[500px]">
                <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/dc/84/b2/posta-bassi-versione.jpg?w=1100&h=1100&s=1" 
                alt="Posta Bassi Architettura" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgriturismoSection;