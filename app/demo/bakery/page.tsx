import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Clock, Leaf, Cake, Truck } from "lucide-react";
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

const BG = "#0E0C08";
const BG_ALT = "#130F0A";
const ACCENT = "#C8860A";
const TEXT = "#FAF6F0";
const MUTED = "#6A5040";
const BORDER = "#2A1E10";

const products = [
  {
    name: "Sourdough Loaf",
    price: "₹120",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=75",
    alt: "Freshly baked sourdough loaf",
  },
  {
    name: "Butter Croissant",
    price: "₹65",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=75",
    alt: "Flaky butter croissant",
  },
  {
    name: "Multigrain Bread",
    price: "₹140",
    img: null,
    alt: "Multigrain bread loaf",
  },
  {
    name: "Pavs (1 doz)",
    price: "₹40",
    img: null,
    alt: "A dozen fresh pavs",
  },
  {
    name: "Choc Truffle Cake",
    price: "₹450/kg",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=75",
    alt: "Rich chocolate truffle cake",
  },
  {
    name: "Black Forest Cake",
    price: "₹380/kg",
    img: null,
    alt: "Classic black forest cake",
  },
  {
    name: "Plum Cake",
    price: "₹350/kg",
    img: null,
    alt: "Traditional plum cake",
  },
  {
    name: "Almond Cookies (doz)",
    price: "₹180",
    img: null,
    alt: "A dozen almond cookies",
  },
];

const galleryColors = [
  "#241810", "#2A1C10", "#1E1408", "#281A0E", "#221208", "#2E1E12",
];

const features = [
  { icon: Clock, label: "Fresh daily from 6am" },
  { icon: Leaf, label: "No preservatives ever" },
  { icon: Cake, label: "Custom celebration cakes" },
  { icon: Truck, label: "Free delivery above ₹500" },
];

export default function BakeryPage() {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#2D1507" textColor="#F5C28A" />
      <DemoNav
        businessName="Shivam Bakers"
        bgColor={BG}
        textColor={TEXT}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden" style={{ backgroundColor: BG }}>
        <DemoPhotoHero />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>
            Est. 1995 · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ color: TEXT }}
          >
            Handcrafted with love,
            <br />
            <em>baked to perfection.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Kolhapur&apos;s most beloved artisan bakery. Sourdoughs, celebration
            cakes, croissants & pavs — baked fresh every morning since 1995.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Explore our breads & cakes
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Our Story</p>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: TEXT }}
            >
              Since 1995
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Shivam Bakers was founded in 1995 by Shivam More in the heart of
              Kolhapur. What started as a small oven and a handful of recipes
              has grown into the city&apos;s most beloved bakery.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Every loaf we bake carries three decades of craftsmanship.
              We source local wheat, use no artificial preservatives, and wake
              before dawn so your family gets the freshest bread every morning.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div
              className="w-full rounded-2xl"
              style={{ backgroundColor: "#1A1510", height: "320px" }}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Fresh Daily</p>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold"
              style={{ color: TEXT }}
            >
              Our Products
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <div className="relative h-40">
                  {product.img ? (
                    <Image
                      src={product.img}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundColor: "#241810" }} />
                  )}
                </div>
                <div className="p-4" style={{ backgroundColor: BG_ALT }}>
                  <p className="text-sm font-medium mb-1" style={{ color: TEXT }}>{product.name}</p>
                  <p className="text-sm font-bold" style={{ color: ACCENT }}>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl font-bold"
              style={{ color: TEXT }}
            >
              From our kitchen
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryColors.map((color, i) => (
              <div
                key={i}
                className="rounded-2xl"
                style={{ backgroundColor: color, height: "200px" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl font-bold"
              style={{ color: TEXT }}
            >
              Why Kolhapur loves us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: ACCENT + "20" }}
                >
                  <feat.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <p className="text-sm font-medium" style={{ color: TEXT }}>{feat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Business info */}
          <div
            className="flex-1 rounded-2xl p-8"
            style={{ border: `1px solid ${BORDER}`, backgroundColor: BG }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>
              Visit us
            </p>
            <div className="space-y-4 text-sm" style={{ color: MUTED }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Address</p>
                <p>Near Mahalaxmi Temple, Station Road,<br />Kolhapur, Maharashtra 416001</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Phone</p>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: TEXT }}>Hours</p>
                <p>Mon–Sat: 6:00 AM – 9:00 PM</p>
                <p>Sunday: 6:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
          {/* WhatsApp CTA */}
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ backgroundColor: ACCENT }}
          >
            <p className="text-lg font-bold mb-3" style={{ color: BG }}>Want this website?</p>
            <p className="text-sm mb-6" style={{ color: BG, opacity: 0.7 }}>
              Get a website just like this for your bakery, personalised with your brand and menu.
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
        businessName="Shivam Bakers"
        bgColor={BG}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
