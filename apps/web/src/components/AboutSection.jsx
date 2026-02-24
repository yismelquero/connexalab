import React from 'react';
import { motion } from 'framer-motion';
const AboutSection = () => {
  return <section className="min-h-screen bg-[#2f306b] py-20 px-6 relative overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f306b] via-purple-900 to-[#2f306b] opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff007a]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Illustration */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 p-2">
              <img src="https://horizons-cdn.hostinger.com/ee5c4d67-a529-4513-b11d-6454eaab08b0/aniadir-un-tiitulo-4-7RdqI.png" alt="Team collaborating with laptop in modern workspace" className="w-full h-auto rounded-2xl" />
            </div>
            <motion.a href="#contacto" className="inline-block bg-[#ff007a] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }}>
              ¡Únete a nuestro equipo!
            </motion.a>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">En Connexa Lab creemos que toda marca tiene el potencial de crecer si encuentra la forma correcta de comunicar su valor.
Somos un laboratorio creativo y estratégico que acompaña a empresas y emprendedores en el desarrollo de su identidad, su mensaje y su conexión con el público.</p>
            <p className="text-lg text-white/90 leading-relaxed">Combinamos creatividad, inteligencia artificial, tecnología y conocimientos para ayudarte a comunicar mejor, conectar con tu audiencia ideal y avanzar con propósito. Porque más que ideas, tenemos ideas que transforman marcas.</p>
            <p className="text-lg text-white/90 leading-relaxed"></p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;