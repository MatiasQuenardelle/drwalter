import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaStar,
  FaPhone,
  FaUserMd,
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
        className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
      >
        {/* Layered background */}
        <div className="absolute inset-0">
          <Image
            src="/images/surgery/laparoscopic.png"
            alt="Cirugía laparoscópica"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/80" />
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(20,184,166,0.4)_0%,_transparent_60%)]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:py-24">
            {/* Left column — text */}
            <div className="order-2 lg:order-1">
              <div className="animate-fade-up mb-8 inline-flex items-center gap-2.5 bg-teal-500/10 text-teal-400 pl-1.5 pr-4 py-1.5 rounded-full text-sm font-medium border border-teal-500/20">
                <span className="bg-teal-500 text-white rounded-full p-1.5">
                  <FaUserMd className="text-xs" />
                </span>
                <span>Cirugía Bariátrica y de la Obesidad</span>
              </div>

              <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Transformá
                <br />
                tu vida
                <span className="block mt-2 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  con confianza
                </span>
              </h1>

              <p className="animate-fade-up-delay-2 text-base md:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
                Dr. Walter Rubén Pilchik — Más de 20 años de experiencia
                y más de 2.000 cirugías realizadas con los más altos estándares
                de seguridad y calidad en cirugía videolaparoscópica.
              </p>

              <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola Dr. Pilchik, me gustaría solicitar un turno para una consulta.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-teal-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-teal-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-[1.02]"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                  Reservar Turno
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 text-gray-300 border border-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
                >
                  Ver Servicios
                </a>
              </div>

              {/* Compact stats */}
              <div className="animate-fade-up-delay-3 mt-14 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  { number: "+20", label: "Años experiencia" },
                  { number: "+2000", label: "Cirugías" },
                  { number: "98%", label: "Satisfacción" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — image composition */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative animate-scale-in">
                {/* Main doctor image */}
                <div className="relative w-72 md:w-80 lg:w-[380px] xl:w-[440px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                  <Image
                    src="/images/doctor/drwalter.png"
                    alt="Dr. Walter Pilchik"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>

                {/* Floating card — experience */}
                <div className="absolute -left-4 md:-left-8 bottom-20 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg animate-fade-up-delay-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                      <FaAward className="text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">+20 Años</div>
                      <div className="text-gray-400 text-xs">de Experiencia</div>
                    </div>
                  </div>
                </div>

                {/* Floating card — satisfaction */}
                <div className="absolute -right-4 md:-right-8 top-20 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg animate-fade-up-delay-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <FaHeartbeat className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">98%</div>
                      <div className="text-gray-400 text-xs">Satisfacción</div>
                    </div>
                  </div>
                </div>

                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-[2rem] border border-teal-500/10 -z-10" />
                <div className="absolute -inset-8 rounded-[2.5rem] border border-teal-500/5 -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-gray-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Excelencia médica
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Combinamos experiencia, tecnología de punta y un trato humano
              para acompañarte en cada paso de tu transformación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUserMd className="text-2xl text-teal-600" />,
                title: "Especialista Certificado",
                desc: "Más de 20 años de experiencia en cirugía bariátrica y de la obesidad.",
              },
              {
                icon: <MdScience className="text-2xl text-teal-600" />,
                title: "Técnica Laparoscópica",
                desc: "Cirugía mínimamente invasiva para una recuperación más rápida y segura.",
              },
              {
                icon: <MdPeople className="text-2xl text-teal-600" />,
                title: "Equipo Multidisciplinario",
                desc: "Nutricionistas, psicólogos y especialistas trabajando juntos por tu bienestar.",
              },
              {
                icon: <MdHealthAndSafety className="text-2xl text-teal-600" />,
                title: "Seguimiento Integral",
                desc: "Acompañamiento pre y post operatorio personalizado para cada paciente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Procedimientos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos diferentes alternativas quirúrgicas y no quirúrgicas
              adaptadas a las necesidades de cada paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.id}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Más información
                    <span className="text-xs">&#8594;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE STRIP ===== */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(20,184,166,0.08)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">
                Tecnología avanzada
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Cirugía videolaparoscópica
                <span className="text-teal-400"> de última generación</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
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
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <FaCheckCircle className="text-teal-500 flex-shrink-0 text-sm" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/images/surgery/laparoscopic.png"
                  alt="Cirugía laparoscópica en quirófano"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square mt-8">
                <Image
                  src="/images/patients/patient-with-doctor-1.png"
                  alt="Dr. Pilchik con paciente"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/images/patients/patient-with-doctor-2.png"
                  alt="Dr. Pilchik con paciente"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square mt-8">
                <Image
                  src="/images/patients/patient-with-doctor-4.png"
                  alt="Dr. Pilchik con paciente"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="sobre-mi" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative shadow-xl">
                <Image
                  src="/images/doctor/drwalter.png"
                  alt="Dr. Walter Pilchik en congreso médico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gray-900 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <div className="text-2xl font-bold">+20</div>
                <div className="text-xs text-gray-400 mt-0.5">Años de experiencia</div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
                Sobre el doctor
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Dr. Walter Rubén Pilchik
              </h2>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaAward className="text-teal-600" />
                EQQO — Equipo Quirúrgico
              </div>
              <p className="text-gray-500 leading-relaxed mb-5">
                El Dr. Walter Rubén Pilchik es un reconocido especialista en
                cirugía de la obesidad y cirugía videolaparoscópica básica y
                avanzada. Con más de dos décadas de trayectoria, ha dedicado su
                carrera a transformar la vida de miles de pacientes que luchan
                contra la obesidad y sus enfermedades asociadas.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Su enfoque combina la excelencia quirúrgica con un trato humano
                y personalizado, entendiendo que cada paciente es único y merece
                una atención integral. Trabaja junto a un equipo
                multidisciplinario de nutricionistas, psicólogos y
                especialistas para garantizar los mejores resultados.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Cirugías Bariátricas", value: "+2000" },
                  { label: "Pacientes Atendidos", value: "+5000" },
                  { label: "Años de Experiencia", value: "+20" },
                  { label: "Tasa de Éxito", value: "98%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="text-lg font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
              >
                <FaInstagram className="text-lg" />
                Seguir en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PATIENT GALLERY ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Resultados reales
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Nuestros Pacientes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Cada imagen cuenta una historia de transformación, salud y una
              nueva vida.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: "/images/patients/patient-with-doctor-1.png", alt: "Dr. Pilchik con paciente" },
              { src: "/images/patients/result-1.png", alt: "Resultado de paciente" },
              { src: "/images/patients/patient-with-doctor-2.png", alt: "Dr. Pilchik con paciente" },
              { src: "/images/patients/result-3.png", alt: "Resultado de paciente" },
              { src: "/images/patients/patient-with-doctor-3.png", alt: "Dr. Pilchik con paciente" },
              { src: "/images/patients/result-2.png", alt: "Resultado de paciente" },
              { src: "/images/patients/patient-pre-surgery.png", alt: "Paciente pre-cirugía" },
              { src: "/images/patients/patient-with-doctor-4.png", alt: "Dr. Pilchik con paciente" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Testimonios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Historias reales de personas que transformaron su vida con la ayuda
              del Dr. Pilchik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {testimonial.image ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
                      {testimonial.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Consultorio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Ubicación
            </h2>
            <p className="text-gray-500">Buenos Aires, Argentina</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-96">
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
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
                Contacto
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Reservá tu turno
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Completá el formulario y nos comunicaremos con vos a la brevedad
                para coordinar tu consulta. También podés contactarnos
                directamente por WhatsApp.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors border border-gray-100"
                >
                  <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center text-white">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">WhatsApp</div>
                    <div className="text-xs text-gray-400">
                      Respuesta inmediata
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors border border-gray-100"
                >
                  <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                    <FaPhone className="text-sm" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Teléfono</div>
                    <div className="text-xs text-gray-400">
                      Lunes a Viernes 9:00 - 18:00
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors border border-gray-100"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                    <FaInstagram className="text-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Instagram</div>
                    <div className="text-xs text-gray-400">
                      @dr.walterrpilchik
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        <Image
          src="/images/patients/patient-with-doctor-3.png"
          alt="Dr. Pilchik con paciente"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">
            Comenzá hoy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Dá el primer paso hacia una vida más saludable
          </h2>
          <p className="text-gray-400 text-base mb-10 leading-relaxed">
            No esperes más. Agendá una consulta con el Dr. Pilchik y descubrí
            cómo la cirugía bariátrica puede transformar tu vida.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola Dr. Pilchik, me gustaría agendar una consulta.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-teal-500 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-teal-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-[1.02]"
          >
            <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
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
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        Envianos un mensaje
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        Completá tus datos y te contactamos por WhatsApp.
      </p>

      <div>
        <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1.5">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-gray-500 mb-1.5">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
          placeholder="Tu número de teléfono"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-1.5">
          Mensaje
        </label>
        <textarea
          id="message"
          name="text"
          rows={4}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
          placeholder="Contanos en qué podemos ayudarte..."
          defaultValue="Hola Dr. Pilchik, me gustaría solicitar un turno."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
      >
        <FaWhatsapp className="text-base" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
