"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola Dr. Pilchik, me gustaría solicitar un turno.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
