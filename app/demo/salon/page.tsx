"use client";
import { useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Star, Shield, Sparkles, Calendar } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#1A0F1A";
const BG_ALT = "#150C15";
const ACCENT = "#E8A9C8";
const TEXT = "#FFF5F8";
const MUTED = "#6A4A66";
const BORDER = "#2E1A2E";

const serviceCategories = [
  {
    key: "hair",
    label: "Hair",
    services: [
      { name: "Haircut & Styling", price: "₹299" },
      { name: "Hair Colour", price: "₹799+" },
      { name: "Keratin Treatment", price: "₹2,499" },
      { name: "Hair Spa", price: "₹599" },
    ],
  },
  {
    key: "skin",
    label: "Skin",
    services: [
      { name: "Classic Facial", price: "₹599" },
      { name: "Premium Facial", price: "₹999" },
      { name: "Cleanup", price: "₹399" },
    ],
  },
  {
    key: "nails",
    label: "Nails",
    services: [
      { name: "Manicure", price: "₹449" },
      { name: "Pedicure", price: "₹549" },
      { name: "Nail Art", price: "₹199+" },
    ],
  },
  {
    key: "special",
    label: "Special",
    services: [
      { name: "Bridal Package", price: "₹3,999+" },
      { name: "Pre-Wedding Glow", price: "₹1,999" },
    ],
  },
];

const stylists = [
  { initials: "AS", name: "Aisha Shaikh", role: "Senior Hair Stylist", exp: "8 yrs exp" },
  { initials: "PK", name: "Priya Kulkarni", role: "Skin & Beauty Expert", exp: "6 yrs exp" },
  { initials: "RM", name: "Riya More", role: "Nail Art Specialist", exp: "4 yrs exp" },
];

const whyUs = [
  { icon: Shield, label: "Private cozy studio" },
  { icon: Star, label: "Certified professionals" },
  { icon: Sparkles, label: "100% genuine products" },
  { icon: Calendar, label: "Online appointment" },
];

const galleryColors = ["#2A1A2A", "#251525", "#301A30", "#201020", "#281828", "#2E1E2E"];

export default function SalonPage() {
  const [activeTab, setActiveTab] = useState("hair");

  const activeCategory = serviceCategories.find((c) => c.key === activeTab)!;

  return (
    <div className={`${playfair.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#2A0F2A" textColor="#F0C8E0" />
      <DemoNav
        businessName="Bloom & Glow"
        bgColor={BG}
        textColor={TEXT}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
        style={{ backgroundColor: BG }}
      >
        <DemoPhotoHero />
        <DemoStamp />
        <div className="relative z-20 max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>
            Rajarampuri · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ color: TEXT }}
          >
            Where beauty <em>blooms.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: MUTED }}>
            Expert hair, skin & nail care in a serene, private studio.
            Because you deserve to feel extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              View Services
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 w-full">
            <div className="w-full rounded-2xl" style={{ backgroundColor: "#2A1A2A", height: "320px" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Our Story</p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6 leading-tight"
              style={{ color: TEXT }}
            >
              A sanctuary for self-care
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Bloom & Glow was founded with one belief — that every person
              deserves to feel extraordinary. Located in Rajarampuri, Kolhapur,
              our studio offers a calm escape from the everyday.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              We use only certified, genuine products and our stylists undergo
              regular training to bring you the very latest techniques in hair,
              skin, and nail care.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>What we offer</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold" style={{ color: TEXT }}>
              Services & Pricing
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {serviceCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeTab === cat.key
                    ? { backgroundColor: ACCENT, color: BG }
                    : { border: `1px solid ${BORDER}`, color: MUTED }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Service list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeCategory.services.map((svc) => (
              <div
                key={svc.name}
                className="flex justify-between items-center p-5 rounded-xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <span className="text-sm font-medium" style={{ color: TEXT }}>{svc.name}</span>
                <span className="text-sm font-bold" style={{ color: ACCENT }}>{svc.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-10" style={{ color: TEXT }}>
            Studio Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryColors.map((color, i) => (
              <div key={i} className="rounded-2xl" style={{ backgroundColor: color, height: "200px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Stylists */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-3" style={{ color: TEXT }}>
              Meet our stylists
            </h2>
            <p className="text-sm" style={{ color: MUTED }}>Certified, passionate, and here to make you shine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stylists.map((s) => (
              <div
                key={s.initials}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4"
                  style={{ backgroundColor: ACCENT + "30", color: ACCENT }}
                >
                  {s.initials}
                </div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>{s.name}</p>
                <p className="text-xs mb-1" style={{ color: ACCENT }}>{s.role}</p>
                <p className="text-xs" style={{ color: MUTED }}>{s.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-12" style={{ color: TEXT }}>
            Why book with us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: ACCENT + "20" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <p className="text-sm font-medium" style={{ color: TEXT }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl p-8" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG_ALT }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>Find us</p>
            <div className="space-y-4 text-sm" style={{ color: MUTED }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Address</p>
                <p>Shop 12, Rajarampuri 6th Lane,<br />Kolhapur, Maharashtra 416008</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Phone</p>
                <p>+91 98765 12345</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Hours</p>
                <p>Tue–Sun: 10:00 AM – 8:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ backgroundColor: ACCENT }}
          >
            <p className="text-lg font-bold mb-3" style={{ color: BG }}>Want this website?</p>
            <p className="text-sm mb-6" style={{ color: BG, opacity: 0.7 }}>
              Get a stunning website like this for your salon. Personalised with your services and branding.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{ backgroundColor: BG, color: ACCENT }}
            >
              Chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <DemoFooter
        businessName="Bloom & Glow"
        bgColor={BG}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
