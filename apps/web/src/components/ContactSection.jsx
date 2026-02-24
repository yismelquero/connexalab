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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 FUNCIÓN QUE ENVÍA A NETLIFY
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    const encode = (data) =>
      Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contacto",
          ...formData
        })
      });

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos 💛"
      });

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
        description: "No se pudo enviar el mensaje.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contacto" className="min-h-screen bg-[#ffcafb] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2f306b] mb-6">
              ¡Hablemos!
            </h2>
            <p className="text-2xl font-semibold text-[#2f306b]/90">
              Podemos transformar tu marca.
            </p>
          </div>

          <div className="space-y-6">

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-[#2f306b]" />
              <p className="text-[#2f306b]/80">
                Calle Cañada Strongest Nro. 1842 — La Paz, Bolivia
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-[#2f306b]" />
              <p className="text-[#2f306b]/80">+591 75231485</p>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-[#2f306b]" />
              <p className="text-[#2f306b]/80">info@connexalab.com</p>
            </div>

          </div>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-2xl space-y-6"
          >

            {/* CLAVE PARA NETLIFY */}
            <input type="hidden" name="form-name" value="contacto" />

            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo *"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <textarea
              name="mensaje"
              placeholder="Mensaje *"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-[#ff007a] text-white py-4 rounded-full font-semibold"
            >
              Enviar
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;