'use client';

import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import HowItWorks from "@/components/home/HowItWorks";
import TeamSection from "@/components/home/TeamSection";
import BuildAppsSection from "@/components/home/BuildAppsSection";
import HomeFooter from "@/components/home/HomeFooter";
import { WHATSAPP_URL } from "@/lib/config";
import { ArrowRight, Sparkles } from "lucide-react";
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <HomeNav dark={true} />
        
        <main className="flex-grow">
          <HomeHero />
          
          <CategoryGrid />
          
          <HowItWorks />
          
          <BuildAppsSection />
          
          <TeamSection />
          
          {/* Glassmorphic CTA Band */}
          <section className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center border border-slate-900 bg-slate-950/40 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Internal absolute decorative orb */}
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 mb-6 border border-slate-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Launch Program
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Ready to launch your own
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block mt-1">
                    premium business website?
                  </span>
                </h2>
                
                <p className="text-sm md:text-base text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
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
