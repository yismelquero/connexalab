import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

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

  const handleSubmit = async e => {
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

    // 🔥 ENVÍO REAL A NETLIFY
    const encodedData = new URLSearchParams({
      "form-name": "contacto",
      ...formData
    }).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData
      });

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

    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta nuevamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contacto" className="min-h-screen bg-[#ffcafb] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
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
                <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2f306b] mb-1">Ubicación</h3>
                  <p className="text-[#2f306b]/80">
                    Calle Cañada Strongest Nro. 1842, Torre Centrum, Piso 3.<br />
                    La Paz - Bolivia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2f306b] mb-1">Teléfono</h3>
                  <p className="text-[#2f306b]/80">+591 75231485</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2f306b] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2f306b] mb-1">Email</h3>
                  <p className="text-[#2f306b]/80">info@connexalab.com</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-2xl space-y-6"
            >

              {/* REQUIRED FOR NETLIFY */}
              <input type="hidden" name="form-name" value="contacto" />

              <div>
                <label className="block text-[#2f306b] font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff]"
                />
              </div>

              <div>
                <label className="block text-[#2f306b] font-semibold mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff]"
                />
              </div>

              <div>
                <label className="block text-[#2f306b] font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff]"
                />
              </div>

              <div>
                <label className="block text-[#2f306b] font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff]"
                />
              </div>

              <div>
                <label className="block text-[#2f306b] font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f4ff]"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#ff007a] text-white font-semibold px-8 py-4 rounded-full"
              >
                Enviar
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;