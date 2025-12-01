import React from 'react';
import { ArrowRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Photogallery</span>
            <h2 className="text-4xl font-serif text-gray-900">Scatti d'Autore</h2>
          </div>
          <div className="flex flex-col items-end gap-2">
              <a href="https://www.tripadvisor.it/Restaurant_Review-g187876-d3222150-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html" target="_blank" rel="noreferrer" className="flex items-center text-sm font-bold uppercase tracking-wider text-primary hover:text-red-900 transition-colors">
              Guarda tutte le foto su TripAdvisor <ArrowRight size={14} className="ml-2"/>
              </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* 1. Large item - Veranda */}
          <div className="col-span-2 row-span-2 rounded-sm overflow-hidden relative group">
            <img src="http://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/5f/44/bb/veranda.jpg?w=900&h=500&s=1" alt="Veranda Posta Bassi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-serif italic text-xl">La Veranda</div>
          </div>
          
          {/* 2. Small item - Food detail (Gluten free) */}
          <div className="col-span-1 row-span-1 rounded-sm overflow-hidden relative group">
            <img src="https://gluto-storage.b-cdn.net/immagini/locali/2753.jpg" alt="Specialità senza glutine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          {/* 3. Vertical item - Garden/Exterior */}
          <div className="col-span-1 row-span-2 rounded-sm overflow-hidden relative group">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/74/a4/e0/caption.jpg?w=1100&h=1100&s=1" alt="Esterno" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-serif italic text-xl">Il Parco</div>
          </div>
          
          {/* 4. Small item - Room */}
          <div className="col-span-1 row-span-1 rounded-sm overflow-hidden relative group">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/5f/3a/c6/camera-quadrupla.jpg" alt="Camere" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;