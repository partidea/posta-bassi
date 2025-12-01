import React from 'react';
import { Wifi, Wind, Tv, Coffee, Check } from 'lucide-react';

const RoomsSection: React.FC = () => {
  const rooms = [
    {
      title: "Suite Matrimoniale",
      description: "Un rifugio intimo e confortevole, arredato con mobili in arte povera e dettagli rustici. Ideale per coppie alla ricerca di relax.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/17/5f/3a/c6/camera-quadrupla.jpg",
      features: ["Letto King Size", "Vista Giardino", "Bagno Privato"]
    },
    {
      title: "Camera Familiare",
      description: "Spaziosa e luminosa, pensata per accogliere tutta la famiglia senza rinunciare allo stile. Ampia metratura e servizi dedicati.",
      image: "https://agriturismo-posta-bassi-guest-house.apuliahotelspage.com/data/Photos/OriginalPhoto/10879/1087999/1087999156/agriturismo-posta-bassi-foggia-photo-1.JPEG",
      features: ["Fino a 4 posti letto", "Area Relax", "Ingresso Indipendente"]
    },
    {
      title: "Dependance Rustica",
      description: "Per chi desidera la massima privacy, una soluzione immersa nel verde con accesso diretto al parco dell'agriturismo.",
      image: "https://agriturismo-posta-bassi-guest-house.apuliahotelspage.com/data/Photos/OriginalPhoto/7906/790618/790618785/agriturismo-posta-bassi-foggia-photo-33.JPEG",
      features: ["Patio Privato", "Angolo Tisaneria", "Silenzio Assoluto"]
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-[#f9f7f2]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Ospitalità</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Le Nostre Camere</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-light">
            Soggiornare a Posta Bassi significa risvegliarsi con i suoni della natura. 
            Ambienti curati dove la tradizione incontra il comfort moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif italic mb-4 text-gray-900">{room.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {room.description}
                </p>
                <div className="space-y-2 mb-8">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-600 uppercase tracking-wider font-bold">
                      <Check size={14} className="text-primary mr-2" /> {feat}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-gray-400">
                    <div className="flex gap-3">
                        <Wifi size={18} title="Wi-Fi Gratuito" />
                        <Wind size={18} title="Aria Condizionata" />
                        <Tv size={18} title="TV" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <a 
                href="https://www.tripadvisor.it/Hotel_Review-g187876-d2277591-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary hover:bg-red-800 text-white px-10 py-4 rounded-sm uppercase tracking-widest font-bold text-xs transition-colors shadow-xl"
             >
                Verifica Disponibilità
             </a>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;