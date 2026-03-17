import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Especialista en cirugía bariátrica y de la obesidad.
              Cirugía videolaparoscópica básica y avanzada.
              Transformando vidas con profesionalismo y dedicación.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/servicios/bypass-gastrico" className="hover:text-white transition-colors">
                  Bypass Gástrico
                </a>
              </li>
              <li>
                <a href="/servicios/manga-gastrica" className="hover:text-white transition-colors">
                  Manga Gástrica
                </a>
              </li>
              <li>
                <a href="/servicios/balon-intragastrico" className="hover:text-white transition-colors">
                  Balón Intragástrico
                </a>
              </li>
              <li>
                <a href="/servicios/cirugia-revision" className="hover:text-white transition-colors">
                  Cirugía de Revisión
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-gray-600" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-gray-600" />
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @dr.walterrpilchik
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-600" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-600" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
