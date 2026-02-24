import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [{
    name: 'Inicio',
    href: '#inicio'
  }, {
    name: 'Servicios',
    href: '#servicios'
  }, {
    name: 'Clientes',
    href: '#clientes'
  }, {
    name: 'Contacto',
    href: '#contacto'
  }];
  return <footer className="bg-connexa-beige py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-connexa-indigo">Connexa Lab</h3>
            <p className="text-connexa-indigo/80">
              Transformando ideas en experiencias memorables que conectan marcas con sus audiencias.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-connexa-indigo mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-connexa-indigo/80 hover:text-connexa-magenta transition-colors duration-300">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-connexa-indigo mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-connexa-indigo/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Cañada Strongest Nro 1842.
La Paz - Bolivia.</span>
              </li>
              <li className="flex items-center gap-2 text-connexa-indigo/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+591 75231485</span>
              </li>
              <li className="flex items-center gap-2 text-connexa-indigo/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@connexalab.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-connexa-indigo mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <motion.a href="#" whileHover={{
              scale: 1.1,
              y: -2
            }} className="w-10 h-10 bg-connexa-indigo rounded-full flex items-center justify-center text-white hover:bg-connexa-magenta transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{
              scale: 1.1,
              y: -2
            }} className="w-10 h-10 bg-connexa-indigo rounded-full flex items-center justify-center text-white hover:bg-connexa-magenta transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{
              scale: 1.1,
              y: -2
            }} className="w-10 h-10 bg-connexa-indigo rounded-full flex items-center justify-center text-white hover:bg-connexa-magenta transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-connexa-indigo/20 pt-8">
          <p className="text-center text-connexa-indigo/70">
            © {currentYear} Connexa Lab. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;