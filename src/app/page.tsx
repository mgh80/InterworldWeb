"use client";

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const services = [
  {
    title: "Fletes Marítimos",
    description: "Envía tu carga por vía marítima con cobertura global.",
    image: "/maritimo.png",
  },
  {
    title: "Fletes Aéreos",
    description:
      "Ideal para cargas urgentes. Llegamos rápido a cualquier destino del mundo.",
    image: "/aereo.png",
  },
  {
    title: "Fletes Terrestres",
    description: "Transporte terrestre seguro y puntual a nivel nacional.",
    image: "/terrestre.png",
  },
  {
    title: "OTM: Transporte Multimodal",
    description:
      "Conectamos modos de transporte en una sola operación logística eficiente.",
    image: "/otm.png",
  },
  {
    title: "NVOCC",
    description:
      "Consolidamos tus envíos con total respaldo como operador NVOCC autorizado.",
    image: "/nvocc.png",
  },
  {
    title: "Seguro de Contenedor",
    description:
      "Protege tu carga durante todo el trayecto con nuestros seguros especializados.",
    image: "/seguro.png",
  },
  {
    title: "Transporte Nacional FCL, LCL y Refrigerado",
    description:
      "Soluciones para todo tipo de carga: contenedor completo, compartido o refrigerado.",
    image: "/refrigerado.png",
  },
  {
    title: "Carga en Tránsito Aduanero",
    description:
      "Expertos en OTM y DTA para operaciones de tránsito bajo control aduanero.",
    image: "/aduanero.png",
  },
  {
    title: "Expresos (Cargas Urgentes)",
    description:
      "Movemos tu carga de forma urgente con seguimiento personalizado.",
    image: "/expresos.png",
  },
  {
    title: "Distribución Urbana",
    description:
      "Entregas rápidas, eficientes y seguras en zonas urbanas clave.",
    image: "/urbana.png",
  },
  {
    title: "ITR (Inland Transport Rule)",
    description:
      "Gestionamos el traslado terrestre previo o posterior al transporte marítimo.",
    image: "/itr.png",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🎥 Sección de Video Portada */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/home_video.mp4" type="video/mp4" />
          Tu navegador no soporta video en HTML5.
        </video>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 max-w-6xl text-white">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            Conectamos tu mundo
          </h1>
          <p className="text-lg mb-8 max-w-xl drop-shadow-md">
            Logística internacional eficiente, inteligente y segura para
            empresas que mueven el mundo. Transporte terrestre, aéreo y marítimo
            desde un solo lugar.
          </p>
          <Link
            href="/services"
            className="bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Conoce nuestros servicios
          </Link>
        </div>
      </div>

      {/* 🚚 Sección de Servicios Destacados con Scroll Snap */}
      <section className="bg-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            Soluciones logísticas destacadas
          </h2>

          <div className="relative">
            {/* Flecha Izquierda */}
            <button
              onClick={() => scroll(-300)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-100"
            >
              <ChevronLeftIcon className="h-6 w-6 text-blue-700" />
            </button>

            {/* Carrusel horizontal */}
            <div
              ref={scrollRef}
              className="flex space-x-10 overflow-x-auto snap-x snap-mandatory scroll-smooth px-8 pb-4 hide-scrollbar"
            >
              {services.map((srv, i) => (
                <div key={i} className="snap-start shrink-0 w-[300px]">
                  <ServiceCard {...srv} />
                </div>
              ))}
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={() => scroll(300)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-100"
            >
              <ChevronRightIcon className="h-6 w-6 text-blue-700" />
            </button>
          </div>
        </div>
      </section>
      <StatsSection />
    </>
  );
}
