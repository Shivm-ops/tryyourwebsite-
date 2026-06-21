"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, Sparkles, Send } from "lucide-react";

interface Props {
  businessName: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
}

export default function DemoNav({ businessName, bgColor, textColor, accentColor, borderColor }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine section links based on the business name
  const getNavLinks = () => {
    const name = businessName.toLowerCase();
    if (name.includes("baker")) {
      return [
        { label: "Our Story", href: "#story" },
        { label: "Products", href: "#products" },
        { label: "Why Us", href: "#why-us" },
      ];
    } else if (name.includes("clinic")) {
      return [
        { label: "Doctors", href: "#doctors" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
      ];
    } else if (name.includes("fitness") || name.includes("powerzone")) {
      return [
        { label: "Memberships", href: "#membership" },
        { label: "Classes", href: "#classes" },
        { label: "Trainers", href: "#trainers" },
      ];
    } else if (name.includes("prestige") || name.includes("properties")) {
      return [
        { label: "Listings", href: "#listings" },
        { label: "Why Us", href: "#why-us" },
        { label: "Search", href: "#search" },
      ];
    } else if (name.includes("spice") || name.includes("garden")) {
      return [
        { label: "Our Story", href: "#story" },
        { label: "Menu", href: "#menu" },
        { label: "Events", href: "#private" },
      ];
    } else if (name.includes("bloom") || name.includes("glow")) {
      return [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Stylists", href: "#stylists" },
      ];
    }
    return [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
    ];
  };

  const navLinks = getNavLinks();

  // Helper to determine text brightness to adjust contrast
  const isDarkColor = (hex: string) => {
    const cleanHex = hex.replace("#", "");
    if (cleanHex.length === 3) {
      const r = parseInt(cleanHex.substring(0, 1) + cleanHex.substring(0, 1), 16);
      const g = parseInt(cleanHex.substring(1, 2) + cleanHex.substring(1, 2), 16);
      const b = parseInt(cleanHex.substring(2, 3) + cleanHex.substring(2, 3), 16);
      return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
    } else if (cleanHex.length === 6) {
      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);
      return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
    }
    return true;
  };

  const darkTheme = isDarkColor(bgColor);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? "shadow-lg backdrop-blur-md py-3" 
            : "py-4"
        }`}
        style={{
          backgroundColor: scrolled 
            ? `${bgColor}dd` 
            : bgColor,
          borderBottom: scrolled 
            ? `1px solid ${borderColor}` 
            : `1px solid ${borderColor}50`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back button */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-80"
            style={{ color: textColor, opacity: 0.7 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Demos</span>
          </Link>

          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2">
            <span 
              className="text-lg md:text-xl font-extrabold tracking-widest uppercase transition-all duration-300"
              style={{ color: accentColor }}
            >
              {businessName}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wide transition-all relative py-1 hover:opacity-100 group"
                style={{ color: textColor, opacity: 0.75 }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: accentColor }}
                />
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917499404640"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: accentColor,
                color: darkTheme ? "#000" : "#fff",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Get This Site
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl border md:hidden transition-colors"
              style={{ borderColor: `${borderColor}aa`, color: textColor }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] shadow-2xl transition-transform duration-300 flex flex-col p-6`}
          style={{
            backgroundColor: bgColor,
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            borderLeft: `1px solid ${borderColor}`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8 border-b pb-4" style={{ borderColor }}>
            <span className="font-extrabold uppercase text-sm tracking-widest" style={{ color: accentColor }}>
              {businessName}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg"
              style={{ color: textColor }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold tracking-wide transition-colors py-2 border-b border-dashed"
                style={{ color: textColor, borderColor: `${borderColor}40` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA inside drawer */}
          <div className="mt-auto pt-6 border-t" style={{ borderColor }}>
            <a
              href="https://wa.me/917499404640"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-bold text-sm py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: accentColor,
                color: darkTheme ? "#000" : "#fff",
              }}
            >
              <Send className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
