import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phone = "59175231485"; // Tu número SIN + ni espacios
  const message = encodeURIComponent(
    "Hola, vi su página web y me gustaría recibir información sobre sus servicios."
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppFloat;