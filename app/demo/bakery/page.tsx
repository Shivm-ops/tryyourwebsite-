import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Clock, Leaf, Cake, Truck, ArrowRight } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#FDFBF7";       // Warm white cream
const BG_ALT = "#F7F2E8";   // Darker warm cream
const ACCENT = "#8C4A32";   // Rich terracotta brown
const ACCENT_GOLD = "#D97706"; // Golden honey/amber
const TEXT = "#2D1D16";     // Deep chocolate brown
const MUTED = "#6B584E";    // Muted cocoa brown
const BORDER = "#EAE1D4";   // Light cream border

const products = [
  {
    name: "Sourdough Loaf",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=75",
    alt: "Freshly baked sourdough loaf",
  },
  {
    name: "Butter Croissant",
    price: "₹65",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=75",
    alt: "Flaky butter croissant",
  },
  {
    name: "Multigrain Bread",
    price: "₹140",
    img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&q=75",
    alt: "Multigrain bread loaf",
  },
  {
    name: "Pavs (1 doz)",
    price: "₹40",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=75",
    alt: "A dozen fresh pavs",
  },
  {
    name: "Choc Truffle Cake",
    price: "₹450/kg",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=75",
    alt: "Rich chocolate truffle cake",
  },
  {
    name: "Black Forest Cake",
    price: "₹380/kg",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=75",
    alt: "Classic black forest cake",
  },
  {
    name: "Plum Cake",
    price: "₹350/kg",
    img: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?w=500&q=75",
    alt: "Traditional plum cake",
  },
  {
    name: "Almond Cookies (doz)",
    price: "₹180",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=75",
    alt: "A dozen almond cookies",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
];

const features = [
  { icon: Clock, label: "Fresh daily from 6am" },
  { icon: Leaf, label: "No preservatives ever" },
  { icon: Cake, label: "Custom celebration cakes" },
  { icon: Truck, label: "Free delivery above ₹500" },
];

export default function BakeryPage() {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#8C4A32" textColor="#FAF6F0" />
      <DemoNav
        businessName="Shivam Bakers"
        bgColor={BG_ALT}
        textColor={TEXT}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80" overlayOpacity={0.6} />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto backdrop-blur-[2px] bg-white/40 p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
            Est. 1995 · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-extrabold leading-[1.15] mb-6"
            style={{ color: TEXT }}
          >
            Handcrafted with love,
            <br />
            <span className="italic" style={{ color: ACCENT }}>baked to perfection.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto font-medium" style={{ color: MUTED }}>
            Kolhapur&apos;s most beloved artisan bakery. Sourdoughs, celebration
            cakes, croissants & pavs — baked fresh every morning since 1995.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
            >
              Explore our breads & cakes
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 transition-all hover:bg-white/50"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="story" className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Our Story</p>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: TEXT }}
            >
              Three Decades of Crafting Daily Joy
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Shivam Bakers was founded in 1995 by Shivam More in the heart of
              Kolhapur. What started as a small oven and a handful of family recipes
              has grown into the city&apos;s most beloved bakery.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              Every loaf we bake carries three decades of craftsmanship.
              We source local wheat, use zero artificial preservatives, and wake
              before dawn so your family gets the warmest, freshest bread every morning.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80"
                alt="Baker working"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-amber-100/50">
              <p className="text-3xl font-extrabold" style={{ color: ACCENT }}>30+</p>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: MUTED }}>Years of baking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT_GOLD }}>Fresh Daily</p>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold"
              style={{ color: TEXT }}
            >
              Our Oven Specialties
            </h2>
            <p className="text-base mt-3 max-w-md mx-auto" style={{ color: MUTED }}>Hand-shaped, slow-fermented, and baked with premium ingredients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border bg-white group"
                style={{ borderColor: BORDER }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-lg font-bold mb-1 font-[family-name:var(--font-cormorant)]" style={{ color: TEXT }}>{product.name}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-base font-extrabold" style={{ color: ACCENT }}>{product.price}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-4 py-2 rounded-full border transition-colors group-hover:bg-[#8C4A32] group-hover:text-white"
                      style={{ borderColor: ACCENT, color: ACCENT }}
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-us" className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold"
              style={{ color: TEXT }}
            >
              Why Kolhapur Loves Shivam Bakers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="flex flex-col items-center text-center p-8 rounded-3xl border bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
                  <feat.icon className="w-7 h-7" style={{ color: ACCENT }} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider" style={{ color: TEXT }}>{feat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl font-bold"
              style={{ color: TEXT }}
            >
              From Our Kitchen to Your Table
            </h2>
            <p className="text-base mt-2" style={{ color: MUTED }}>A glimpse behind the scenes at our Rajarampuri bakeshop.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md relative h-64 border-4 border-white group">
                <Image
                  src={img}
                  alt={`Bakery creation ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Business info */}
          <div
            className="flex-1 rounded-3xl p-10 border bg-white shadow-sm"
            style={{ borderColor: BORDER }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>
              Visit us
            </p>
            <div className="space-y-6 text-base">
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Our Address</p>
                <p style={{ color: MUTED }}>Near Mahalaxmi Temple, Station Road,<br />Kolhapur, Maharashtra 416001</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Order Hotline</p>
                <p className="text-lg font-bold" style={{ color: ACCENT }}>+91 98765 43210</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: TEXT }}>Bakeshop Hours</p>
                <p style={{ color: MUTED }}>Mon–Sat: 6:00 AM – 9:00 PM</p>
                <p style={{ color: MUTED }}>Sunday: 6:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
          {/* WhatsApp CTA */}
          <div
            className="flex-1 rounded-3xl p-10 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-xl"
            style={{ backgroundColor: ACCENT }}
          >
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-4">Want a website like this?</p>
              <p className="text-base mb-8 opacity-90 max-w-sm mx-auto">
                Get a beautiful, high-converting website for your bakery. Showcase your menu, allow direct WhatsApp orders, and grow your local customer base.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-amber-900 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                style={{ color: ACCENT }}
              >
                Chat with us on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* background circle decor */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10" />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10" />
          </div>
        </div>
      </section>

      <DemoFooter
        businessName="Shivam Bakers"
        bgColor={BG_ALT}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
