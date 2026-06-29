import { ArrowRight, Sparkles, MonitorCheck, LayoutGrid } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";
import dynamic from "next/dynamic";

const WebGPUBackground = dynamic(
  () => import("./WebGPUBackground"),
  { ssr: false }
);

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
      {/* 🌐 WebGPU 3D Background specifically for the Hero */}
      <div className="absolute inset-0 z-0">
        <WebGPUBackground />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Sub-badge pill */}
        <div className="inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-900 text-emerald-400 text-xs font-extrabold px-5 py-2 rounded-full mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Kolhapur&apos;s Demo-First Web Studio</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
          See your business website
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent block mt-2">
            before you pay a single rupee.
          </span>
        </h1>

        {/* Sub-desc */}
        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Select your industry below. Preview your business logo, custom images, and content on a real, high-performance website instantly. We design first, you approve second.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 text-sm"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Explore Demos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-200 font-bold px-8 py-4 rounded-full shadow-sm hover:bg-slate-900/80 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-md text-sm"
          >
            <MonitorCheck className="w-4 h-4 text-emerald-400" />
            <span>Chat with Founders</span>
          </a>
        </div>

        {/* Bottom micro-info */}
        <div className="flex justify-center items-center gap-6 flex-wrap mt-10 text-xs font-bold text-slate-400 tracking-wide uppercase">
          <span>⚡ 6 Industries Covered</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>🎁 Free Live Preview</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>📍 Handcrafted in Kolhapur</span>
        </div>
      </div>
    </section>
  );
}
