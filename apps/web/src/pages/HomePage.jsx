
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import ClientsSection from '@/components/ClientsSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import Footer from '@/components/Footer.jsx';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Connexa Lab - Ideas que transforman marcas</title>
        <meta 
          name="description" 
          content="Connexa Lab es un laboratorio creativo especializado en marketing estratégico, diseño innovador y contenido digital. Transformamos ideas en experiencias memorables que conectan marcas con sus audiencias." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;
