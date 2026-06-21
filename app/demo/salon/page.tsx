"use client";
import { useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Star, Shield, Sparkles, Calendar, ArrowRight } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#FAF5F6";       // Pale rose blush
const BG_ALT = "#FFFFFF";   // Pure white
const PRIMARY = "#8B3B63";  // Deep royal rose plum
const ACCENT = "#DB2777";   // Vibrant rose pink
const TEXT = "#2A1B24";     // Deep warm plum text
const MUTED = "#7C6374";    // Muted mauve
const BORDER = "#EBE0E5";   // Soft rose border

const serviceCategories = [
  {
    key: "hair",
    label: "Hair",
    services: [
      { name: "Chic Haircut & Styling", desc: "Expert cutting followed by custom blowdry and texturing.", price: "₹299" },
      { name: "Balayage & Hair Colour", desc: "Premium hand-painted coloring tailored to your skin tone.", price: "₹799+" },
      { name: "Pro Keratin Treatment", desc: "Sleek, frizz-free treatment designed for damaged follicles.", price: "₹2,499" },
      { name: "Botanical Hair Spa", desc: "Deep hydration scalp massage using high-end hair mask cream.", price: "₹599" },
    ],
  },
  {
    key: "skin",
    label: "Skin",
    services: [
      { name: "Organic Charcoal Facial", desc: "Pore detoxification followed by high frequency massage.", price: "₹599" },
      { name: "Premium Glow Facial", desc: "Exfoliating gold dust facial that brightens dull skin instantly.", price: "₹999" },
      { name: "Radiance Skin Cleanup", desc: "Hydration cleansing for blackhead removal & exfoliation.", price: "₹399" },
    ],
  },
  {
    key: "nails",
    label: "Nails",
    services: [
      { name: "Signature Gel Manicure", desc: "Full nail shaping, cuticle therapy, and long-lasting gel coat.", price: "₹449" },
      { name: "Nourishing Pedicure", desc: "Warm floral soak, sugar scrub scrub, and soothing foot rub.", price: "₹549" },
      { name: "Chrome & Glitter Nail Art", desc: "Modern abstract patterns painted by our hand-artists.", price: "₹199+" },
    ],
  },
  {
    key: "special",
    label: "Special Packages",
    services: [
      { name: "Royal Bridal Package", desc: "Complete wedding day hair, high-definition makeup, and saree drape.", price: "₹3,999+" },
      { name: "Pre-Wedding Glow Package", desc: "Full body spa, facial, hair care, and manicure.", price: "₹1,999" },
    ],
  },
];

const stylists = [
  { name: "Aisha Shaikh", role: "Senior Hair Designer", exp: "8 yrs experience", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80" },
  { name: "Priya Kulkarni", role: "Skin & Beauty Expert", exp: "6 yrs experience", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80" },
  { name: "Riya More", role: "Nail Art Specialist", exp: "4 yrs experience", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
];

const whyUs = [
  { icon: Shield, label: "Private Studio", desc: "A cozy, clean and quiet sanctuary for your personal time." },
  { icon: Star, label: "Certified Staff", desc: "Highly skilled stylists trained in modern techniques." },
  { icon: Sparkles, label: "Premium Products", desc: "100% genuine and dermatologically tested cosmetics." },
  { icon: Calendar, label: "Hassle-Free Booking", desc: "Lock your session via direct WhatsApp message." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
];

export default function SalonPage() {
  const [activeTab, setActiveTab] = useState("hair");

  const activeCategory = serviceCategories.find((c) => c.key === activeTab)!;

  return (
    <div className={`${playfair.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#DB2777" textColor="#FFFFFF" />
      <DemoNav
        businessName="Bloom & Glow"
        bgColor={BG_ALT}
        textColor={TEXT}
        accentColor={PRIMARY}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80" overlayOpacity={0.45} />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-rose-100 shadow-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: PRIMARY }}>
            Rajarampuri · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
            style={{ color: TEXT }}
          >
            Where beauty
            <br />
            <span className="italic font-normal" style={{ color: ACCENT }}>blooms.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: MUTED }}>
            Indulge in hair makeover, organic skincare, and customized nail therapy in our private beauty studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: PRIMARY }}
            >
              View Services
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 bg-white transition-colors"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-50/50">
              <Image 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Salon session"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Our Philosophy</p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6 leading-tight"
              style={{ color: TEXT }}
            >
              A Sanctuary for Absolute Self-Care
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Bloom & Glow was built on a simple foundation — that self-care is a necessity, not an afterthought. Located in Kolhapur&apos;s Rajarampuri district, our studio provides a quiet, calming escape.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              We partner exclusively with premium cosmetics lines and our artists undergo training courses to guarantee that your skin, nails, and hair are treated with the highest care.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Our Services</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold" style={{ color: TEXT }}>
              Styling Menu & Prices
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-3 flex-wrap justify-center mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm"
                style={
                  activeTab === cat.key
                    ? { backgroundColor: PRIMARY, color: "#fff" }
                    : { border: `1px solid ${BORDER}`, color: MUTED, backgroundColor: BG_ALT }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Service list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.services.map((svc) => (
              <div
                key={svc.name}
                className="p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition-shadow flex flex-col justify-between"
                style={{ borderColor: BORDER }}
              >
                <div className="flex justify-between items-baseline gap-2 mb-2">
                  <span className="text-base font-bold" style={{ color: TEXT }}>{svc.name}</span>
                  <span className="text-base font-extrabold" style={{ color: PRIMARY }}>{svc.price}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-16" style={{ color: TEXT }}>
            Inside Bloom & Glow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md relative h-64 border-4 border-rose-50/20 group">
                <Image
                  src={img}
                  alt={`Salon highlight ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-3" style={{ color: TEXT }}>
              Meet Our Designers
            </h2>
            <p className="text-base max-w-sm mx-auto" style={{ color: MUTED }}>Passionate and certified professional artists dedicated to bringing your best look forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stylists.map((s) => (
              <div
                key={s.name}
                className="text-center rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: BORDER }}
              >
                <div className="h-72 w-full relative overflow-hidden bg-rose-50/50">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="font-bold text-lg" style={{ color: TEXT }}>{s.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>{s.role}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{s.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-16" style={{ color: TEXT }}>
            Why Clients Love Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-rose-50/20 border shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${PRIMARY}10` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: PRIMARY }} />
                </div>
                <p className="text-sm font-bold mb-2" style={{ color: TEXT }}>{item.label}</p>
                <p className="text-xs" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-3xl p-10 bg-white border shadow-sm" style={{ borderColor: BORDER }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>Studio Hours</p>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Address</p>
                <p style={{ color: MUTED }}>Shop 12, Rajarampuri 6th Lane,<br />Kolhapur, Maharashtra 416008</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Phone</p>
                <p className="text-base font-bold" style={{ color: PRIMARY }}>+91 98765 12345</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Working Hours</p>
                <p style={{ color: MUTED }}>Tue–Sun: 10:00 AM – 8:00 PM</p>
                <p style={{ color: MUTED }}>Monday: Closed</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-3xl p-10 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: PRIMARY }}
          >
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-4">Want a website like this?</p>
              <p className="text-base mb-8 opacity-90 max-w-sm mx-auto">
                Get a premium boutique salon website showing your styling menu, rates, specialist stylist profiles, location, and a WhatsApp booking action.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ color: PRIMARY }}
              >
                Chat with us on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/5" />
          </div>
        </div>
      </section>

      <DemoFooter
        businessName="Bloom & Glow"
        bgColor={BG_ALT}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={PRIMARY}
      />
    </div>
  );
}
