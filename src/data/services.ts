export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "bypass-gastrico",
    title: "Bypass Gástrico",
    shortDescription:
      "Procedimiento que reduce el tamaño del estómago y modifica el recorrido intestinal para lograr una pérdida de peso significativa y duradera.",
    fullDescription:
      "El bypass gástrico es una de las cirugías bariátricas más efectivas y realizadas en el mundo. Consiste en crear una pequeña bolsa gástrica y conectarla directamente al intestino delgado, lo que reduce la cantidad de alimentos que se pueden ingerir y la absorción de calorías. Es especialmente recomendada para pacientes con obesidad severa o con enfermedades metabólicas asociadas como la diabetes tipo 2. El Dr. Pilchik cuenta con amplia experiencia en esta técnica, realizándola por vía laparoscópica para una recuperación más rápida.",
    image: "/images/surgery/laparoscopic.png",
    features: [
      "Pérdida de peso del 60-80% del exceso",
      "Mejora significativa de la diabetes tipo 2",
      "Cirugía laparoscópica mínimamente invasiva",
      "Recuperación en 2-3 semanas",
      "Seguimiento nutricional incluido",
      "Resultados comprobados a largo plazo",
    ],
  },
  {
    id: "manga-gastrica",
    title: "Manga Gástrica (Sleeve)",
    shortDescription:
      "Cirugía que reduce el estómago en un 80%, creando una forma tubular que limita la ingesta de alimentos y reduce el apetito.",
    fullDescription:
      "La gastrectomía en manga o sleeve gástrico es un procedimiento restrictivo en el que se extirpa aproximadamente el 80% del estómago, dejando un tubo o manga estrecha. Esto no solo limita la cantidad de comida que se puede consumir, sino que también reduce la producción de grelina, la hormona del hambre. Es ideal para pacientes que buscan una opción menos compleja que el bypass, con excelentes resultados a mediano y largo plazo. El Dr. Pilchik realiza esta cirugía con técnica videolaparoscópica avanzada.",
    image: "/images/patients/patient-with-doctor-2.png",
    features: [
      "Pérdida de peso del 50-70% del exceso",
      "Reducción natural del apetito",
      "Sin malabsorción de nutrientes",
      "Procedimiento más corto que el bypass",
      "Menor riesgo de complicaciones",
      "Ideal como primer paso quirúrgico",
    ],
  },
  {
    id: "balon-intragastrico",
    title: "Balón Intragástrico",
    shortDescription:
      "Procedimiento no quirúrgico que coloca un balón en el estómago para generar saciedad temprana y facilitar la pérdida de peso.",
    fullDescription:
      "El balón intragástrico es una alternativa no quirúrgica para pacientes con sobrepeso u obesidad moderada. Se coloca por vía endoscópica (sin cirugía) y permanece en el estómago durante 6 a 12 meses, ocupando espacio y generando una sensación de saciedad temprana. Es una excelente opción para quienes no califican para cirugía bariátrica o prefieren un enfoque menos invasivo. El procedimiento se realiza de forma ambulatoria y el paciente puede retomar sus actividades al día siguiente.",
    image: "/images/patients/patient-with-doctor-3.png",
    features: [
      "Sin cirugía — procedimiento endoscópico",
      "Colocación ambulatoria en 20 minutos",
      "Pérdida de 15-25 kg en 6 meses",
      "Reversible y temporario",
      "Acompañamiento nutricional integral",
      "Ideal para obesidad moderada",
    ],
  },
  {
    id: "cirugia-revision",
    title: "Cirugía de Revisión",
    shortDescription:
      "Corrección o conversión de cirugías bariátricas previas que no lograron los resultados esperados o presentaron complicaciones.",
    fullDescription:
      "La cirugía de revisión bariátrica está destinada a pacientes que se sometieron previamente a un procedimiento bariátrico y no obtuvieron los resultados deseados, recuperaron peso o desarrollaron complicaciones. El Dr. Pilchik evalúa cada caso individualmente para determinar la mejor estrategia, que puede incluir la conversión de un tipo de cirugía a otro o la corrección de la cirugía original. Su experiencia en cirugía videolaparoscópica avanzada es fundamental para abordar estos casos complejos con seguridad.",
    image: "/images/patients/patient-pre-surgery.png",
    features: [
      "Evaluación personalizada de cada caso",
      "Conversión entre técnicas quirúrgicas",
      "Corrección de complicaciones previas",
      "Técnica laparoscópica avanzada",
      "Equipo multidisciplinario",
      "Seguimiento post-operatorio completo",
    ],
  },
];
