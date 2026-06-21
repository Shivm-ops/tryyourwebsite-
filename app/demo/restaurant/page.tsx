import { DM_Sans, Playfair_Display } from "next/font/google";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Phone, MapPin, Clock } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#1C0F08";
const BG_ALT = "#160B05";
const ACCENT = "#E8760A";
const TEXT = "#FFF8F0";
const MUTED = "#6A4020";
const BORDER = "#2E1810";

const menuCategories = [
  {
    label: "Starters",
    items: [
      { name: "Paneer Tikka", price: "₹299" },
      { name: "Chicken Tikka", price: "₹349" },
      { name: "Veg Platter", price: "₹249" },
      { name: "Hara Bhara Kabab", price: "₹229" },
    ],
  },
  {
    label: "Mains",
    items: [
      { name: "Chicken Biryani", price: "₹249" },
      { name: "Dal Makhani", price: "₹189" },
      { name: "Mutton Rogan Josh", price: "₹349" },
      { name: "Paneer Butter Masala", price: "₹219" },
      { name: "Kolhapuri Chicken", price: "₹269" },
      { name: "Palak Paneer", price: "₹199" },
    ],
  },
  {
    label: "Breads",
    items: [
      { name: "Butter Naan", price: "₹49" },
      { name: "Garlic Naan", price: "₹59" },
      { name: "Tandoori Roti", price: "₹39" },
      { name: "Lachha Paratha", price: "₹55" },
    ],
  },
  {
    label: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "₹89" },
      { name: "Kulfi", price: "₹99" },
      { name: "Shrikhand", price: "₹79" },
      { name: "Kheer", price: "₹69" },
    ],
  },
];

const galleryColors = ["#2A1508", "#241005", "#301A0A", "#200E05", "#281208", "#2E1A0C"];

export default function RestaurantPage() {
  return (
    <div className={`${playfair.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#2A1005" textColor="#F5C88A" />
      <DemoNav
        businessName="The Spice Garden"
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
        <div className="relative z-20 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>
            Est. 2010 · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ color: TEXT }}
          >
            Where every meal
            <br />
            <em>tells a story.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Authentic North Indian cuisine, slow-cooked and served with heart.
            From Kolhapuri specials to buttery Mughlai classics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              View Full Menu
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Reserve a Table
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
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6"
              style={{ color: TEXT }}
            >
              Cooking with heart since 2010
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              The Spice Garden has been serving Kolhapur&apos;s finest Indian cuisine
              since 2010. Our kitchen honours traditional recipes while using the
              freshest local ingredients sourced directly from farmers.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              From the fiery Kolhapuri chicken to the silky Dal Makhani simmered
              overnight — every dish at The Spice Garden carries the soul of
              Indian culinary tradition.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full rounded-2xl" style={{ backgroundColor: "#2A1508", height: "320px" }} />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Our Menu</p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
              style={{ color: TEXT }}
            >
              What&apos;s cooking today
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {menuCategories.map((cat) => (
              <div key={cat.label}>
                <h3
                  className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-5 pb-3"
                  style={{ color: ACCENT, borderBottom: `1px solid ${BORDER}` }}
                >
                  {cat.label}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: TEXT }}>{item.name}</span>
                      <span className="text-sm font-bold" style={{ color: ACCENT }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private dining banner */}
      <section className="py-16 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ backgroundColor: ACCENT + "15", border: `1px solid ${ACCENT}30` }}
          >
            <h3
              className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-3"
              style={{ color: ACCENT }}
            >
              Private Dining & Events
            </h3>
            <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: MUTED }}>
              Celebrate birthdays, anniversaries, kitty parties, and corporate lunches in our
              private dining room. Customised menus available. Capacity: up to 40 guests.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-bold"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-10"
            style={{ color: TEXT }}
          >
            A feast for the eyes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryColors.map((color, i) => (
              <div key={i} className="rounded-2xl" style={{ backgroundColor: color, height: "200px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl p-8" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>Visit us</p>
            <div className="space-y-4 text-sm" style={{ color: MUTED }}>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <p>Near Rankala Lake, Bindu Chowk,<br />Kolhapur, Maharashtra 416002</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                <p>+91 99876 54321</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p>Lunch: 12:00 PM – 3:30 PM</p>
                  <p>Dinner: 7:00 PM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ backgroundColor: ACCENT }}
          >
            <p className="text-lg font-bold mb-3" style={{ color: BG }}>Want this website?</p>
            <p className="text-sm mb-6" style={{ color: BG, opacity: 0.7 }}>
              Get a beautiful restaurant website with your full menu, gallery and reservation system.
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
        businessName="The Spice Garden"
        bgColor={BG}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
