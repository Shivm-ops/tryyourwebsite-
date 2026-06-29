import { Eye, Palette, Zap, Compass, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Eye,
    number: "01",
    title: "Pick Your Category",
    desc: "Choose from our 6 business sectors. Each has a fully realized, realistic demo template matching local standards.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Configure & Explore",
    desc: "Upload a logo or see how it handles fallback stock photos. Test the layout, check the mobile navbar, and click around.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Request Live Handover",
    desc: "Ping us on WhatsApp. Our developers import your domains, adjust text descriptions, and publish live in 7–14 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-4 bg-transparent border-t border-slate-900/40">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-teal-300/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase mb-3">No Guesswork</p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">How It Works</h2>
          <p className="text-slate-400 max-w-sm mx-auto mt-3 font-medium">
            From picking a mockup to owning a live custom website.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden md:block absolute top-7 left-[65%] w-[70%] h-0.5 border-t border-dashed border-slate-800" 
                  aria-hidden="true" 
                />
              )}

              {/* Number Badge */}
              <div className="text-[10px] font-extrabold tracking-widest text-emerald-400 mb-4 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 shadow-sm">
                STEP {step.number}
              </div>

              {/* Icon Container */}
              <div 
                className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/20"
                style={{
                  background: "linear-gradient(135deg, #10B981, #0D9488)",
                }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
