import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AgriturismoSection from './components/AgriturismoSection';
import RoomsSection from './components/RoomsSection';
import ServicesSection from './components/ServicesSection';
import RestaurantSection from './components/RestaurantSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] font-sans antialiased text-gray-800 selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <AgriturismoSection />
        <RoomsSection />
        <ServicesSection />
        <RestaurantSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;