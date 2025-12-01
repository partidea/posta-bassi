import React from 'react';
import { Clock, MapPin, Star, Coffee } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#f9f7f2] border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-white transition-colors">
          <Clock className="text-primary mb-4" size={32} />
          <h4 className="font-serif text-xl mb-4">Orari</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li className="flex justify-between"><span>Lun</span> <span className="font-bold">Chiuso</span></li>
            <li className="flex justify-between"><span>Mar-Sab</span> <span>12:30-15 / 19:30-23:30</span></li>
            <li className="flex justify-between"><span>Dom</span> <span>12:30-15 / 19:30-23:30</span></li>
          </ul>
        </div>

        <div className="p-12 border-b md:border-b-0 lg:border-r border-gray-200 hover:bg-white transition-colors">
          <MapPin className="text-primary mb-4" size={32} />
          <h4 className="font-serif text-xl mb-4">Dove Siamo</h4>
          <p className="text-sm text-gray-500 mb-4">
            Via Manfredonia km. 196 200<br/>
            71100 Foggia (FG)
          </p>
          <a href="https://maps.google.com/?q=Agriturismo+Posta+Bassi+Foggia" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">Vedi su Mappa</a>
        </div>

        <div className="p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-white transition-colors">
          <Star className="text-primary mb-4" size={32} />
          <h4 className="font-serif text-xl mb-4">TripAdvisor</h4>
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[#00af87]"></div>)}
          </div>
          <p className="text-sm font-bold text-gray-800">Eccellenza</p>
          <a href="https://www.tripadvisor.it/Restaurant_Review-g187876-d3222150-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html" target="_blank" rel="noreferrer" className="text-xs text-primary underline mt-2 inline-block">Leggi le recensioni</a>
        </div>

         <div className="p-12 hover:bg-white transition-colors bg-primary/5">
          <Coffee className="text-primary mb-4" size={32} />
          <h4 className="font-serif text-xl mb-4">Contatti</h4>
          <p className="text-sm text-gray-500 mb-4">
            Info & Prenotazioni:
            <br/><span className="text-lg font-bold text-gray-900">+39 0881 700155</span>
          </p>
          <a href="mailto:info@postabassi.it" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">Invia Email</a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;