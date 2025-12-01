import React from 'react';
import { Calendar, Music, Utensils } from 'lucide-react';

const EventsSection: React.FC = () => {
  return (
    <section id="news" className="bg-[#fdfbf7] py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            <div className="text-center mb-16">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">News & Eventi</span>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Vivi Posta Bassi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Evento Principale */}
                <div className="bg-primary text-white p-12 rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="inline-block bg-white text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">Prossimo Evento</div>
                        <h3 className="text-3xl font-serif italic mb-4">L'Immacolata a Tavola</h3>
                        <p className="text-white/80 font-light mb-8 text-lg">
                            Domenica 08 Dicembre 2025. <br/>
                            Festeggia con noi con un menù speciale dedicato ai sapori della tradizione invernale pugliese.
                        </p>
                        <ul className="space-y-3 mb-8 text-sm text-white/90">
                            <li className="flex items-center gap-2"><Utensils size={16}/> Menù degustazione completo</li>
                            <li className="flex items-center gap-2"><Music size={16}/> Musica dal vivo</li>
                        </ul>
                        <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg transition-colors w-fit">
                            Prenota il tuo tavolo
                        </button>
                    </div>
                </div>

                {/* News Feed */}
                <div className="space-y-6">
                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                             <h4 className="font-serif text-xl text-gray-800">Cene Estive in Giardino</h4>
                             <span className="text-xs text-gray-400 font-mono">15 GIU</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Dal mese di giugno riapre il nostro ampio giardino per cene sotto le stelle. Prenota il tuo gazebo privato.
                        </p>
                    </div>
                    
                     <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300 hover:border-primary hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                             <h4 className="font-serif text-xl text-gray-800">Nuove Camere Disponibili</h4>
                             <span className="text-xs text-gray-400 font-mono">01 SET</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Abbiamo rinnovato le nostre suite per offrirvi ancora più comfort durante il vostro soggiorno in agriturismo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default EventsSection;