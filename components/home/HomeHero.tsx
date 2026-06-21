import { ArrowRight, Sparkles, MonitorCheck, LayoutGrid } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="relative py-24 md:py-36 px-4 text-center overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-emerald-300/30 blur-[100px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-20 right-10 w-[350px] h-[350px] rounded-full bg-sky-300/30 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-300/25 blur-[130px] animate-pulse" style={{ animationDuration: "15s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Sub-badge pill */}
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 text-emerald-800 text-xs font-extrabold px-5 py-2 rounded-full mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span>Kolhapur&apos;s Demo-First Web Studio</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
          See your business website
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 bg-clip-text text-transparent block mt-2">
            before you pay a single rupee.
          </span>
        </h1>

        {/* Sub-desc */}
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Select your industry below. Preview your business logo, custom images, and content on a real, high-performance website instantly. We design first, you approve second.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Explore Demos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-md border border-slate-200/60 text-slate-700 font-bold px-8 py-4 rounded-full shadow-sm hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-md"
          >
            <MonitorCheck className="w-4 h-4 text-emerald-600" />
            <span>Chat with Founders</span>
          </a>
        </div>

        {/* Bottom micro-info */}
        <div className="flex justify-center items-center gap-6 flex-wrap mt-10 text-xs font-bold text-slate-500 tracking-wide uppercase">
          <span>⚡ 6 Industries Covered</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>🎁 Free Live Preview</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>📍 Handcrafted in Kolhapur</span>
        </div>
      </div>
    </section>
  );
}
