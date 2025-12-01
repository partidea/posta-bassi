import React from 'react';

const RestaurantSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Il Nostro Menù</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Eccellenze del Territorio</h2>
          <p className="text-gray-600 font-light">
            Proponiamo piatti che raccontano la nostra terra. Dalle paste fatte a mano alle carni selezionate.
            <br/><span className="text-primary font-medium">Disponibili opzioni senza glutine.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Meat */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-sm mb-6 relative h-80">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" 
                alt="Secondi di Carne" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-serif italic mb-2 group-hover:text-primary transition-colors">Secondi di Carne</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Tagli pregiati cucinati secondo la tradizione foggiana, accompagnati da contorni di stagione.</p>
          </div>

          {/* Card 2: Pasta - UPDATED IMAGE */}
          <div className="group cursor-pointer mt-0 md:-mt-12">
            <div className="overflow-hidden rounded-sm mb-6 relative h-80">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="http://www.postabassi.it/wp-content/uploads/2016/03/1361812189Caciocavallo_in_padella.jpg" 
                alt="Pasta Fresca" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-serif italic mb-2 group-hover:text-primary transition-colors">Pasta Fresca</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Orecchiette, troccoli e cavatelli fatti a mano ogni giorno dalle nostre massaie.</p>
          </div>

          {/* Card 3: Pizza */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-sm mb-6 relative h-80">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop" 
                alt="Pizza Napoletana" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-serif italic mb-2 group-hover:text-primary transition-colors">Pizze Bordo Alto</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Pizza stile napoletano con cornicione alto, cotta nel forno a legna con lievitazione naturale.</p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://www.tripadvisor.it/Restaurant_Review-g187876-d3222150-Reviews-Agriturismo_Posta_Bassi-Foggia_Province_of_Foggia_Puglia.html#Menu"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-transparent border border-gray-300 hover:border-primary hover:text-primary text-gray-800 px-8 py-3 uppercase text-xs font-bold tracking-widest transition-colors"
          >
            Vedi Menù su TripAdvisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;