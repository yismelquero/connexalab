import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    // Validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo electrónico válido.",
        variant: "destructive"
      });
      return;
    }

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Success message
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto."
    });

    // Reset form
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      mensaje: ''
    });
  };
  return <section id="contacto" className="min-h-screen bg-[#ffcafb] py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
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
        }} className="space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2f306b] mb-6">
              ¡Hablemos!
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-[#2f306b]/90 leading-tight">
              Podemos transformar tu marca.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2f306b] mb-1">Ubicación</h3>
                <p className="text-[#2f306b]/80">
                  Calle Cañada Strongest Nro. 1842, Edificio Torre Centrum, Piso 3, Oficina 301.<br />
                  La Paz - Bolivia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2f306b] mb-1">Teléfono</h3>
                <p className="text-[#2f306b]/80">+591 75231485</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2f306b] mb-1">Email</h3>
                <p className="text-[#2f306b]/80">info@connexalab.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#2f306b] mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <motion.a href="#" whileHover={{
                scale: 1.1,
                y: -2
              }} className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center text-white hover:bg-[#ff007a] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a href="#" whileHover={{
                scale: 1.1,
                y: -2
              }} className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center text-white hover:bg-[#ff007a] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a href="#" whileHover={{
                scale: 1.1,
                y: -2
              }} className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center text-white hover:bg-[#ff007a] transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
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
        }}>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-[#2f306b] font-semibold mb-2">
                Nombre completo *
              </label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff] focus:border-[#ff007a] focus:outline-none transition-colors bg-white text-gray-900" placeholder="Tu nombre" />
            </div>

            <div>
              <label htmlFor="empresa" className="block text-[#2f306b] font-semibold mb-2">
                Empresa
              </label>
              <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff] focus:border-[#ff007a] focus:outline-none transition-colors bg-white text-gray-900" placeholder="Nombre de tu empresa" />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-[#2f306b] font-semibold mb-2">
                Número de teléfono
              </label>
              <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff] focus:border-[#ff007a] focus:outline-none transition-colors bg-white text-gray-900" placeholder="+52 55 1234 5678" />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#2f306b] font-semibold mb-2">
                Correo electrónico *
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff] focus:border-[#ff007a] focus:outline-none transition-colors bg-white text-gray-900" placeholder="tu@email.com" />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-[#2f306b] font-semibold mb-2">
                Mensaje *
              </label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff] focus:border-[#ff007a] focus:outline-none transition-colors resize-none bg-white text-gray-900" placeholder="Cuéntanos sobre tu proyecto..." />
            </div>

            <motion.button type="submit" whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="w-full bg-[#ff007a] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Enviar
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default ContactSection;