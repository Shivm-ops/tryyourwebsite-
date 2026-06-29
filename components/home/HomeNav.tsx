"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Compass } from "lucide-react";

export default function HomeNav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? dark 
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 shadow-md py-2.5" 
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2.5" 
          : dark 
            ? "bg-transparent border-b border-slate-900/20 py-4" 
            : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link href="/" className={`flex items-center gap-2 text-base font-extrabold tracking-wider ${dark ? "text-white" : "text-slate-900"}`}>
          <Compass className="w-5 h-5 text-emerald-600 animate-spin" style={{ animationDuration: "15s" }} />
          <span>Webrise Studio</span>
          <span className="text-emerald-600">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider ${dark ? "text-slate-300" : "text-slate-600"}`}>
          <a href="/#demos" className={`hover:text-emerald-400 transition-colors relative py-1 group ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Demos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/#how" className={`hover:text-emerald-400 transition-colors relative py-1 group ${dark ? "text-slate-300" : "text-slate-600"}`}>
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <Link href="/pricing" className={`hover:text-emerald-400 transition-colors relative py-1 group ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
          </Link>
          <a href="/#team" className={`hover:text-emerald-400 transition-colors relative py-1 group ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/917499404640"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-extrabold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book a Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${dark ? "text-slate-300 hover:bg-slate-900/50" : "text-slate-700 hover:bg-slate-100/50"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={`md:hidden border-t px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 ${dark ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"}`}>
          <a 
            href="/#demos" 
            className={`block text-sm font-bold py-1 ${dark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"}`}
            onClick={() => setOpen(false)}
          >
            Demos
          </a>
          <a 
            href="/#how" 
            className={`block text-sm font-bold py-1 ${dark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"}`}
            onClick={() => setOpen(false)}
          >
            How It Works
          </a>
          <Link 
            href="/pricing" 
            className={`block text-sm font-bold py-1 ${dark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"}`}
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <a 
            href="/#team" 
            className={`block text-sm font-bold py-1 ${dark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"}`}
            onClick={() => setOpen(false)}
          >
            Team
          </a>
          <div className={`pt-4 border-t ${dark ? "border-slate-900" : "border-slate-100"}`}>
            <a
              href="https://wa.me/917499404640"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-sm font-bold py-3.5 rounded-full shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
