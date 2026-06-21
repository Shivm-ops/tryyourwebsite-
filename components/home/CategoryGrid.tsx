"use client";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories } from "@/lib/config";
import DemoRequestModal from "./DemoRequestModal";

const icons: Record<string, string> = {
  bakery: "🥐",
  salon: "✂️",
  restaurant: "🍛",
  clinic: "🏥",
  gym: "💪",
  realestate: "🏠",
};

type Category = (typeof categories)[0];

export default function CategoryGrid() {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <>
      <section id="demos" className="relative py-24 px-4 bg-transparent border-t border-slate-100/50">
        {/* Ambient Blur Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none select-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 uppercase mb-3">Live Interactive Sandbox</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Choose your business category
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base font-medium">
              Click any industry card, load your custom assets, and generate a premium live preview on the spot.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelected(cat)}
                className="group rounded-3xl overflow-hidden border border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-emerald-300/40 transition-all duration-500 text-left w-full cursor-pointer flex flex-col justify-between"
              >
                {/* Header card preview */}
                <div
                  className="h-36 flex flex-col items-start justify-end p-6 relative overflow-hidden"
                  style={{ backgroundColor: `${cat.bgPreview}ee` }}
                >
                  <div
                    className="absolute inset-0 opacity-15 text-[10rem] font-black flex items-center justify-end pr-4 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110"
                    style={{ color: cat.accentColor, filter: "blur(0.5px)" }}
                    aria-hidden="true"
                  >
                    {icons[cat.slug]}
                  </div>
                  <span className="text-3xl mb-3 filter drop-shadow-md" aria-hidden="true">{icons[cat.slug]}</span>
                  <span
                    className="text-[10px] font-extrabold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-white/95 shadow-sm"
                    style={{ color: cat.accentColor }}
                  >
                    {cat.business}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-lg mb-2 group-hover:text-emerald-700 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6 font-medium">
                      {cat.desc}
                    </p>
                  </div>
                  
                  {/* Action Link Footer */}
                  <div 
                    className="flex items-center justify-between text-xs font-extrabold border-t pt-4 uppercase tracking-wider"
                    style={{ color: cat.accentColor, borderColor: "rgba(226, 232, 240, 0.6)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      Configure Preview
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center transition-all group-hover:translate-x-1 group-hover:bg-slate-100">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <DemoRequestModal
          category={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
