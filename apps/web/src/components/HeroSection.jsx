
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen bg-[#faf5ec] pt-24 pb-16 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2f306b] leading-tight">
              Ideas que transforman marcas
            </h1>
            <p className="text-lg md:text-xl text-[#2f306b]/80 leading-relaxed">
              En Connexa Lab damos vida a ideas para convertirlas en estrategias que hacen crecer marcas, conectan con su audiencia y crean experiencias inolvidables.
            </p>
            <motion.a 
              href="#servicios" 
              className="inline-block bg-[#ff007a] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              Conoce nuestros servicios
            </motion.a>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
              <img 
                src="https://horizons-cdn.hostinger.com/ee5c4d67-a529-4513-b11d-6454eaab08b0/9-Q7Xns.png" 
                alt="Creative workspace collaboration at Connexa Lab" 
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-square lg:aspect-[4/3] transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2f306b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#ff007a]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
