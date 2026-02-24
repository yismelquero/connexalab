import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {

  const clients = [
    {
      name: 'Centro Médico Buen Samaritano',
      image: 'https://res.cloudinary.com/dndjcfsof/image/upload/v1771720885/3_u9yeib.png',
      description: 'Centro de especialidades médicas y atención general'
    },
    {
      name: 'Segurepp',
      image: 'https://res.cloudinary.com/dndjcfsof/image/upload/v1771720885/1_cncekw.png',
      description: 'Importación de equipos médicos y de seguridad'
    },
    {
      name: 'The ChurrOH Spot',
      image: 'https://res.cloudinary.com/dndjcfsof/image/upload/v1771720884/2_rxhyjt.png',
      description: 'Food truck de postres calientes y bebidas premium'
    }
  ];

  return (
    <section id="clientes" className="min-h-screen bg-[#2f306b] py-20 px-6 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f306b] via-purple-900 to-[#2f306b] opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff007a]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white text-center mb-16"
        >
          Clientes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 p-3 border border-white/20">

                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={client.image}
                    alt={`${client.name} - ${client.description}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f306b] via-[#2f306b]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {client.name}
                </h3>
                <p className="text-white/70">{client.description}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;