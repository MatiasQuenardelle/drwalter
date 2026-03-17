import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialista en cirugía bariátrica y de la obesidad.
              Cirugía videolaparoscópica básica y avanzada.
              Transformando vidas con profesionalismo y dedicación.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/servicios/bypass-gastrico" className="hover:text-teal-400 transition-colors">
                  Bypass Gástrico
                </a>
              </li>
              <li>
                <a href="/servicios/manga-gastrica" className="hover:text-teal-400 transition-colors">
                  Manga Gástrica
                </a>
              </li>
              <li>
                <a href="/servicios/balon-intragastrico" className="hover:text-teal-400 transition-colors">
                  Balón Intragástrico
                </a>
              </li>
              <li>
                <a href="/servicios/cirugia-revision" className="hover:text-teal-400 transition-colors">
                  Cirugía de Revisión
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-teal-400" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-teal-400" />
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  @dr.walterrpilchik
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-teal-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-teal-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-teal-400" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
