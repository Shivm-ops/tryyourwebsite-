import { WHATSAPP_URL } from "@/lib/config";
import {
  LayoutDashboard,
  Receipt,
  Package,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const appTypes = [
  { icon: LayoutDashboard, label: "CRM & Lead Tracker" },
  { icon: Receipt,         label: "Billing & GST Software" },
  { icon: Package,         label: "Inventory Manager" },
  { icon: Users,           label: "Staff & HR Portal" },
  { icon: BarChart3,       label: "Sales Dashboard" },
  { icon: Zap,             label: "Custom Admin Panel" },
];

export default function BuildAppsSection() {
  return (
    <section className="relative py-24 px-4 border-t border-slate-100/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT — Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 text-[10px] font-extrabold uppercase tracking-wider text-violet-700 mb-5 border border-violet-100">
              <Sparkles className="w-3.5 h-3.5" />
              Beyond Websites
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              We also build{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                custom business
              </span>
              <br />
              applications for you.
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-md mx-auto lg:mx-0 mb-8">
              Need a billing system, CRM, inventory tracker, or a custom admin panel
              built specifically for your business? We design and develop it from
              scratch — tailored to your exact workflow, terminology, and team.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-violet-700/20 hover:shadow-violet-700/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 text-sm"
            >
              Tell us what you need
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT — App Type Cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {appTypes.map((app) => (
                <div
                  key={app.label}
                  className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-violet-300/50 transition-all duration-300 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                    <app.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug group-hover:text-violet-700 transition-colors">
                    {app.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Small footnote */}
            <p className="text-center text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-6">
              + Any custom application your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
