"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
      <section id="demos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your business type
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Upload your photo and see your business name on a real website — before you pay a rupee.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelected(cat)}
                className="group rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 bg-white text-left w-full"
              >
                <div
                  className="h-32 flex flex-col items-start justify-end p-5 relative overflow-hidden"
                  style={{ backgroundColor: cat.bgPreview }}
                >
                  <div
                    className="absolute inset-0 opacity-10 text-9xl font-black flex items-center justify-end pr-6 pointer-events-none select-none"
                    style={{ color: cat.accentColor, filter: "blur(1px)" }}
                    aria-hidden="true"
                  >
                    {icons[cat.slug]}
                  </div>
                  <span className="text-2xl mb-2" aria-hidden="true">{icons[cat.slug]}</span>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: cat.accentColor }}
                  >
                    {cat.business}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{cat.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-green-700 group-hover:gap-3 transition-all">
                    Add your photo & preview
                    <ArrowRight className="w-4 h-4" />
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
