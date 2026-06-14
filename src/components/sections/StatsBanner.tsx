"use client";

import { Star } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    { value: "300+", label: "PROCESSES OPTIMIZED" },
    { value: "-47%", label: "COST PER TICKET" },
    { value: "+22h", label: "RECOVERED PER WEEK" },
    { value: "4.9", label: "AVG. CLIENT RATING", icon: true },
    { value: "100%", label: "TIME ZONE ALIGNED" },
  ];

  return (
    <section className="w-full bg-background pb-4 relative">
      {/* 
        To create the overlapping effect, we can pull the banner up slightly using a negative margin 
        or absolute positioning, but keeping it simple as a full-width or contained block is safer.
        The prompt says: "Definir una franja de ancho completo (full-width)."
        But the image shows it inside a container. Let's make the background full width, 
        or a contained dark box. We'll use a contained dark box that stretches if needed.
      */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative -mt-8 z-20">
        <div className="w-full bg-secondary text-white shadow-2xl rounded-sm hover:scale-[1.01] transition-transform duration-300">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 p-8 md:p-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-start justify-center px-4 md:px-8 hover:scale-105 transition-transform duration-300 cursor-default ${index === 4 ? "col-span-2 md:col-span-1 pt-6 md:pt-0" : index > 1 ? "pt-6 md:pt-0" : ""}`}
              >
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    {stat.value}
                  </span>
                  {stat.icon && <Star className="w-8 h-8 text-accent fill-accent" />}
                </div>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
