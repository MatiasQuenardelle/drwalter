export interface Testimonial {
  name: string;
  image?: string;
  quote: string;
  rating: number;
  procedure: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Flavia",
    image: "/images/patients/flavia.png",
    quote:
      "El Dr. Pilchik me cambió la vida. Después de años luchando con mi peso, la manga gástrica fue la mejor decisión. Bajé 45 kilos y me siento increíble. El seguimiento post-operatorio fue excelente.",
    rating: 5,
    procedure: "Manga Gástrica",
  },
  {
    name: "Priscila",
    image: "/images/patients/priscila.png",
    quote:
      "Estoy eternamente agradecida con el Dr. Pilchik y todo su equipo. La cirugía fue un éxito total y la recuperación fue mucho más rápida de lo que esperaba. Hoy disfruto de una vida completamente nueva.",
    rating: 5,
    procedure: "Bypass Gástrico",
  },
  {
    name: "Carolina M.",
    quote:
      "Tenía mucho miedo antes de la cirugía, pero el Dr. Pilchik me explicó todo con mucha paciencia y profesionalismo. El resultado superó todas mis expectativas. Lo recomiendo al 100%.",
    rating: 5,
    procedure: "Manga Gástrica",
  },
  {
    name: "Roberto G.",
    quote:
      "Después del bypass gástrico, mi diabetes mejoró enormemente y pude dejar la medicación. El Dr. Pilchik es un profesional excepcional con un trato muy humano.",
    rating: 5,
    procedure: "Bypass Gástrico",
  },
  {
    name: "María L.",
    quote:
      "El balón intragástrico fue perfecto para mí. Sin cirugía, sin internación, y logré bajar 20 kilos en 6 meses. El equipo del Dr. Pilchik me acompañó en todo momento.",
    rating: 5,
    procedure: "Balón Intragástrico",
  },
  {
    name: "Daniela S.",
    quote:
      "Me operé hace un año y no puedo creer el cambio. No solo bajé de peso, sino que recuperé mi autoestima y mi energía. El Dr. Pilchik es un genio en lo que hace.",
    rating: 5,
    procedure: "Manga Gástrica",
  },
];
