import type { NewsItem } from "./types"

// Esta función simula la obtención de datos desde una API o base de datos
// En un entorno real, aquí conectarías con tu backend o CMS
export async function getNewsItems(): Promise<NewsItem[]> {
  // Datos proporcionados con el elemento 2 y 3 intercambiados
  return [
    {
      id: "1",
      category: "Servicio IA Destacado",
      title: "Video: Presentación General de la Empresa",
      description: "🎥 Ejemplo de Servicio de Video usando Avatares",
      imageUrl: "https://nuevaweb.isagis.com/images/Portada_podcast.png",
      url: "https://youtu.be/H9E7a7Mj4NE",
    },
    {
      id: "3", // Ahora este es el segundo elemento (antes era el tercero)
      category: "Servicio SIG Destacado",
      title: "Geo Aplicación de Experiencia IsaGIS Technologies.",
      description:
        "⚡ Ejemplo de un desarrollo ágil de aplicaciones SIG, una escena 3D para presentar la experiencia de la empresa.",
      imageUrl: "https://nuevaweb.isagis.com/images/Miniatura%20escena.JPG",
      url: "https://www.arcgis.com/home/webscene/viewer.html?webscene=d565c7e226ff4e64877897b814993ac7&viewpoint=cam:-63.52898242,9.87332955,15307146.727;342.002,0.147",
    },
    {
      id: "2", // Ahora este es el tercer elemento (antes era el segundo)
      category: "Historia de la Empresa",
      title: "El ADN de IsaGIS. Una Historia de Ingeniería y Tecnología.",
      description: "🎥 Experiencia detrás de la creación de IsaGIS.",
      imageUrl: "https://nuevaweb.isagis.com/images/Miniatura%20ADN.JPG",
      url: "https://youtu.be/iKEyeIVo3KM",
    },
    {
      id: "4",
      category: "Participación en Eventos",
      title: "Encuentro Esri 2022",
      description:
        "Participación en el encuentro de ArcGIS para Petróleo realizado por Esri Colombia, en donde se presentó la metodología Integrada de SIG e ingeniería para diseño de Gasoductos.",
      imageUrl: "https://nuevaweb.isagis.com/images/thumbnail_encuentro_esri.PNG",
      url: "https://youtu.be/8HKihts2Qno?si=Ie6dQTMjQA0o61cK&t=5052",
    },
    {
      id: "5",
      category: "Servicio de Ingeniería Destacado",
      title: "Proyecto Evaluación de Trazados de Gasodoductos.",
      description: "Resultados de la Evaluación de Trazados del Gasoducto Mamonal Jobo (SUMMUM - Promigas).",
      imageUrl: "https://nuevaweb.isagis.com/images/Miniatura%20Proyecto%20Jobo.JPG",
      url: "https://youtu.be/_vuTQrIxFj0",
    },
  ]
}
