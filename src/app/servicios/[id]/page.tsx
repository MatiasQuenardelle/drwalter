import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaArrowLeft,
  FaPhone,
} from "react-icons/fa";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: `${service.title} — Dr. Walter Pilchik`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — Dr. Walter Pilchik`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 text-sm font-medium mb-8 transition-colors"
        >
          <FaArrowLeft />
          Volver a Servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 mb-8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {service.fullDescription}
            </p>

            {/* Features */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Beneficios del procedimiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-teal-50 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Other services */}
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-12">
              Otros servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 2)
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/servicios/${s.id}`}
                    className="bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ¿Te interesa este procedimiento?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Agendá una consulta para evaluar si es la opción adecuada para
                vos.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hola Dr. Pilchik, me gustaría consultar sobre ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors w-full mb-3"
              >
                <FaWhatsapp className="text-lg" />
                Consultar por WhatsApp
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 bg-teal-50 text-teal-700 py-3 rounded-xl font-semibold hover:bg-teal-100 transition-colors w-full"
              >
                <FaPhone />
                Llamar al consultorio
              </a>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                  Incluye:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-teal-500 text-xs" />
                    Consulta pre-quirúrgica
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-teal-500 text-xs" />
                    Evaluación nutricional
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-teal-500 text-xs" />
                    Evaluación psicológica
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-teal-500 text-xs" />
                    Seguimiento post-operatorio
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-teal-500 text-xs" />
                    Plan nutricional personalizado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
