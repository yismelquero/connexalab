import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Megaphone, Palette, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      color: '#ffcafb',
      title: 'Estrategia y Marca',
      points: [
        'Planificación estratégica de negocio',
        'Branding e identidad visual',
        'Posicionamiento de marca',
        'Planes de comunicación',
        'Auditoría y diagnóstico de marca'
      ]
    },
    {
      icon: Megaphone,
      color: '#ff007a',
      title: 'Contenido y Medios Digitales',
      points: [
        'Gestión estratégica de redes sociales',
        'Publicidad digital (Meta Ads, Google Ads)',
        'Creación de contenido gráfico y audiovisual',
        'Community management profesional'
      ]
    },
    {
      icon: Palette,
      color: '#ff007a',
      title: 'Diseño y Experiencia Digital',
      points: [
        'Diseño UX/UI centrado en el usuario',
        'Desarrollo web y landing pages',
        'Optimización para dispositivos móviles',
        'Arquitectura de información'
      ]
    },
    {
      icon: TrendingUp,
      color: '#ffcafb',
      title: 'Conexión y Crecimiento',
      points: [
        'Estrategias de Growth marketing',
        'Análisis de métricas y optimización de conversiones',
        'Trade marketing y acciones BTL',
        'Material POP y merchandising corporativo',
        'Outsourcing y staffing especializado',
        'Capacitación en marketing, IA y habilidades blandas'
      ]
    }
  ];

  return (
    <section id="servicios" className="min-h-screen bg-[#f6f4ff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#2f306b] text-center mb-16"
        >
          Nuestros Servicios
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#2f306b] mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2f306b]/80">
                      <span className="text-[#ff007a] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;