"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Stat = {
  label: string;
  value: number;
};

const stats: Stat[] = [
  { label: "Años de experiencia", value: 15 },
  { label: "Aliados estratégicos", value: 120 },
  { label: "Empleados", value: 250 },
  { label: "Oficinas a nivel nacional", value: 8 },
  { label: "Clientes satisfechos", value: 1000 },
];

export default function StatsSection() {
  const [counts, setCounts] = useState<number[]>(Array(stats.length).fill(0));
  const { ref, inView } = useInView({ threshold: 0.4 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inView) {
      let progress = 0;
      intervalRef.current = setInterval(() => {
        progress += 1;
        setCounts(
          stats.map((stat) =>
            Math.min(stat.value, Math.floor(stat.value * (progress / 100)))
          )
        );
        if (progress >= 100 && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }, 20);
    } else {
      // Reinicia al salir de la vista
      setCounts(Array(stats.length).fill(0));
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [inView]);

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Cifras que respaldan nuestra experiencia
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6">
              <div className="text-4xl font-extrabold text-blue-800">
                {counts[index].toLocaleString()}
              </div>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
