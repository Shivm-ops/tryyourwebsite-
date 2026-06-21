import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import HowItWorks from "@/components/home/HowItWorks";
import TeamSection from "@/components/home/TeamSection";
import HomeFooter from "@/components/home/HomeFooter";
import { WHATSAPP_URL } from "@/lib/config";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50/40 text-slate-800 antialiased overflow-x-hidden">
      {/* 🌐 High-Fidelity SVG Grid & Radial Glassmorphic Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
        
        {/* Radial gradient glow spots */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[150px]" />
        <div className="absolute bottom-[20%] left-1/3 w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[130px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <HomeNav />
        
        <main className="flex-grow">
          <HomeHero />
          
          <CategoryGrid />
          
          <HowItWorks />
          
          <TeamSection />
          
          {/* Glassmorphic CTA Band */}
          <section className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Internal absolute decorative orb */}
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 mb-6 border border-emerald-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Launch Program
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Ready to launch your own
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent block mt-1">
                    premium business website?
                  </span>
                </h2>
                
                <p className="text-sm md:text-base text-slate-500 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                  Choose a demo, preview your customized brand asset portfolio, and connect with our team. We design, code, build, and deliver your live web domain in 7 to 14 days.
                </p>
                
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10"
                >
                  <span>Chat with us on WhatsApp</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <HomeFooter />
      </div>
    </div>
  );
}
