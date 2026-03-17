import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaStar,
  FaPhone,
  FaUserMd,
  FaHospital,
  FaHeartbeat,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdScience,
  MdHealthAndSafety,
  MdPeople,
} from "react-icons/md";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 overflow-hidden"
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-teal-700/50 text-teal-100 px-4 py-2 rounded-full text-sm">
            <FaUserMd />
            <span>Especialista en Cirugía Bariátrica</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformá tu vida
            <br />
            <span className="text-teal-300">con cirugía bariátrica</span>
          </h1>

          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dr. Walter Rubén Pilchik — Más de 20 años de experiencia en cirugía
            de la obesidad. Cirugía videolaparoscópica básica y avanzada con los
            más altos estándares de seguridad y calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola Dr. Pilchik, me gustaría solicitar un turno para una consulta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              Reservar Turno
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Ver Servicios
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "+20", label: "Años de experiencia" },
              { number: "+2000", label: "Cirugías realizadas" },
              { number: "98%", label: "Pacientes satisfechos" },
              { number: "+1500", label: "Seguidores" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-teal-300">
                  {stat.number}
                </div>
                <div className="text-sm text-teal-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos experiencia, tecnología de punta y un trato humano
              para acompañarte en cada paso de tu transformación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUserMd className="text-3xl text-teal-600" />,
                title: "Especialista Certificado",
                desc: "Más de 20 años de experiencia en cirugía bariátrica y de la obesidad.",
              },
              {
                icon: <MdScience className="text-3xl text-teal-600" />,
                title: "Técnica Laparoscópica",
                desc: "Cirugía mínimamente invasiva para una recuperación más rápida y segura.",
              },
              {
                icon: <MdPeople className="text-3xl text-teal-600" />,
                title: "Equipo Multidisciplinario",
                desc: "Nutricionistas, psicólogos y especialistas trabajando juntos por tu bienestar.",
              },
              {
                icon: <MdHealthAndSafety className="text-3xl text-teal-600" />,
                title: "Seguimiento Integral",
                desc: "Acompañamiento pre y post operatorio personalizado para cada paciente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="servicios" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes alternativas quirúrgicas y no quirúrgicas
              adaptadas a las necesidades de cada paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden bg-teal-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                    <FaHospital className="text-6xl text-white/30" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Ver más detalles →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE STRIP ===== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cirugía videolaparoscópica
                <span className="text-teal-400"> de última generación</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Utilizamos las técnicas más avanzadas en cirugía mínimamente
                invasiva, lo que permite incisiones más pequeñas, menos dolor
                post-operatorio y una recuperación significativamente más rápida.
              </p>
              <ul className="space-y-4">
                {[
                  "Incisiones de apenas 5-10mm",
                  "Menor riesgo de infección post-quirúrgica",
                  "Alta hospitalaria en 24-48 horas",
                  "Retorno a actividades en 7-14 días",
                  "Cicatrices prácticamente invisibles",
                  "Monitoreo continuo durante la cirugía",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <FaCheckCircle className="text-teal-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden bg-teal-800/50 aspect-square flex items-center justify-center">
                <FaHeartbeat className="text-6xl text-teal-400/50" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-teal-800/50 aspect-square flex items-center justify-center mt-8">
                <FaAward className="text-6xl text-teal-400/50" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-teal-800/50 aspect-square flex items-center justify-center">
                <FaUserMd className="text-6xl text-teal-400/50" />
              </div>
              <div className="rounded-2xl overflow-hidden bg-teal-800/50 aspect-square flex items-center justify-center mt-8">
                <FaHospital className="text-6xl text-teal-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="sobre-mi" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-teal-50 aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <FaUserMd className="text-8xl text-teal-300 mx-auto mb-4" />
                  <p className="text-teal-600 font-semibold">Dr. Walter Pilchik</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white rounded-2xl p-6 shadow-lg hidden md:block">
                <div className="text-3xl font-bold">+20</div>
                <div className="text-sm text-teal-100">Años de experiencia</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dr. Walter Rubén Pilchik
              </h2>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaAward />
                EQQO — Equipo Quirúrgico
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                El Dr. Walter Rubén Pilchik es un reconocido especialista en
                cirugía de la obesidad y cirugía videolaparoscópica básica y
                avanzada. Con más de dos décadas de trayectoria, ha dedicado su
                carrera a transformar la vida de miles de pacientes que luchan
                contra la obesidad y sus enfermedades asociadas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Su enfoque combina la excelencia quirúrgica con un trato humano
                y personalizado, entendiendo que cada paciente es único y merece
                una atención integral. Trabaja junto a un equipo
                multidisciplinario de nutricionistas, psicólogos y
                especialistas para garantizar los mejores resultados.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Cirugías Bariátricas", value: "+2000" },
                  { label: "Pacientes Atendidos", value: "+5000" },
                  { label: "Años de Experiencia", value: "+20" },
                  { label: "Tasa de Éxito", value: "98%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xl font-bold text-teal-700">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
              >
                <FaInstagram className="text-xl" />
                Seguir en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Historias reales de personas que transformaron su vida con la ayuda
              del Dr. Pilchik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.procedure}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ubicación
            </h2>
            <p className="text-gray-600">Buenos Aires, Argentina</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio"
            />
          </div>
        </div>
      </section>

      {/* ===== CONTACT / BOOKING ===== */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Reservá tu turno
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Completá el formulario y nos comunicaremos con vos a la brevedad
                para coordinar tu consulta. También podés contactarnos
                directamente por WhatsApp.
              </p>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-500">
                      Respuesta inmediata
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 bg-teal-50 hover:bg-teal-100 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-sm text-gray-500">
                      Lunes a Viernes 9:00 - 18:00
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-purple-50 hover:bg-purple-100 p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <FaInstagram className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-500">
                      @dr.walterrpilchik
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dá el primer paso hacia una vida más saludable
          </h2>
          <p className="text-teal-100 text-lg mb-10 leading-relaxed">
            No esperes más. Agendá una consulta con el Dr. Pilchik y descubrí
            cómo la cirugía bariátrica puede transformar tu vida.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola Dr. Pilchik, me gustaría agendar una consulta.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-50 transition-all hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="text-2xl text-green-600" />
            Agendar Consulta
          </a>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`https://wa.me/${siteConfig.whatsapp}`}
      method="get"
      target="_blank"
      className="space-y-5"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Envianos un mensaje
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Completá tus datos y te contactamos por WhatsApp.
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
          placeholder="Tu número de teléfono"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="text"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none"
          placeholder="Contanos en qué podemos ayudarte..."
          defaultValue="Hola Dr. Pilchik, me gustaría solicitar un turno."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
      >
        <FaWhatsapp className="text-lg" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
