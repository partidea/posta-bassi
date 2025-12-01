import React from 'react';
import { Car, TreePine, GlassWater, Users, Accessibility, Baby } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <TreePine size={32} />,
      title: "Ampio Parco",
      desc: "Un giardino curato dove rilassarsi e passeggiare, immersi nella tranquillità della campagna foggiana."
    },
    {
      icon: <Car size={32} />,
      title: "Parcheggio Gratuito",
      desc: "Ampia area parcheggio privata e custodita a disposizione di tutti i nostri ospiti."
    },
    {
      icon: <GlassWater size={32} />,
      title: "Eventi Privati",
      desc: "Location ideale per matrimoni, battesimi, comunioni e feste private in un contesto esclusivo."
    },
    {
      icon: <Baby size={32} />,
      title: "Area Giochi",
      desc: "Spazio sicuro e attrezzato dedicato al divertimento dei più piccoli, mentre i genitori si rilassano."
    },
    {
      icon: <Accessibility size={32} />,
      title: "Accessibilità",
      desc: "Struttura priva di barriere architettoniche e dotata di servizi attrezzati per disabili."
    },
    {
      icon: <Users size={32} />,
      title: "Sale Meeting",
      desc: "Spazi interni versatili per incontri di lavoro, piccoli convegni o cene aziendali."
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
            <div>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 block">I Nostri Servizi</span>
                <h2 className="text-4xl font-serif text-white">Per un soggiorno perfetto</h2>
            </div>
            <p className="text-white/80 max-w-md text-right mt-6 md:mt-0 font-light text-sm">
                Ci prendiamo cura di ogni dettaglio per garantirvi un'esperienza senza pensieri.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => (
                <div key={index} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                        {service.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light border-l border-white/10 pl-4 group-hover:border-white/50 transition-colors">
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;