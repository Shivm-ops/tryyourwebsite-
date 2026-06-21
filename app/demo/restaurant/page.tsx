import { DM_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#0C0A09";       // Velvet dark charcoal/black
const BG_ALT = "#1C1917";   // Deep warm stone
const ACCENT = "#EA580C";   // Vibrant fire orange
const ACCENT_GOLD = "#EAB308"; // Golden saffron
const TEXT = "#FAFAF9";     // Off-white
const MUTED = "#A8A29E";    // Warm grey
const BORDER = "#292524";   // Stone border

const menuCategories = [
  {
    label: "Starters",
    items: [
      { name: "Clay-Oven Paneer Tikka", desc: "Cottage cheese cubes marinated in mustard oil & spices, charred in tandoor.", price: "₹299" },
      { name: "Signature Chicken Tikka", desc: "Boneless chicken marinated overnight in Kashmiri chilli yogurt.", price: "₹349" },
      { name: "Saffron Veg Platter", desc: "Assorted tandoori mushrooms, seekh kababs, and hara bhara tikki.", price: "₹249" },
      { name: "Hara Bhara Kabab", desc: "Crisp patties made with minced spinach, green peas, and local spices.", price: "₹229" },
    ],
  },
  {
    label: "Mains",
    items: [
      { name: "Kolhapuri Chicken Special", desc: "Succulent chicken cooked in a fiery local sesame-coconut gravy.", price: "₹269" },
      { name: "Heritage Dal Makhani", desc: "Black lentils simmered for 16 hours over hot embers with butter & cream.", price: "₹189" },
      { name: "Slow-Cooked Mutton Biryani", desc: "Long-grain basmati layered with tender mutton & saffron extract.", price: "₹349" },
      { name: "Classic Paneer Butter Masala", desc: "Paneer cubes tossed in a rich, mildly sweet tomato-cashew sauce.", price: "₹219" },
    ],
  },
  {
    label: "Tandoor Breads",
    items: [
      { name: "Butter Naan", desc: "Flaky clay-oven flatbread brushed with organic butter.", price: "₹49" },
      { name: "Garlic & Herbs Naan", desc: "Infused with toasted garlic cloves and fresh cilantro.", price: "₹59" },
      { name: "Whole-Wheat Tandoori Roti", desc: "Healthy rustic bread baked in our tandoor oven.", price: "₹39" },
      { name: "Lachha Paratha", desc: "Multi-layered whole wheat bread baked to a golden crisp.", price: "₹55" },
    ],
  },
  {
    label: "Desserts",
    items: [
      { name: "Hot Gulab Jamun", desc: "Deep-fried milk dumplings soaked in cardamom-infused sugar syrup.", price: "₹89" },
      { name: "Saffron Rabdi Kulfi", desc: "Traditional slow-reduced frozen milk ice cream with pistachios.", price: "₹99" },
      { name: "Kolhapuri Shrikhand", desc: "Sweet strained yogurt flavored with pure saffron and almonds.", price: "₹79" },
    ],
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&q=80",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
];

export default function RestaurantPage() {
  return (
    <div className={`${playfair.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#EA580C" textColor="#FFFFFF" />
      <DemoNav
        businessName="The Spice Garden"
        bgColor={BG}
        textColor={TEXT}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" overlayOpacity={0.65} />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto bg-black/60 backdrop-blur-sm p-8 md:p-14 rounded-3xl border border-stone-800 shadow-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
            Est. 2010 · Kolhapur
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
            style={{ color: TEXT }}
          >
            Where every meal
            <br />
            <span className="italic font-normal" style={{ color: ACCENT_GOLD }}>tells a story.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Authentic North Indian & Kolhapuri cuisine, slow-cooked in charcoal clay tandoors and served with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
            >
              View Full Menu
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border transition-colors bg-white/5 hover:bg-white/10"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Our Story</p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6 leading-tight"
              style={{ color: TEXT }}
            >
              Culinary Heritage Simmered to Perfection
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              The Spice Garden has been serving Kolhapur&apos;s finest Indian cuisine since 2010. Our kitchen honours heirloom recipes while sourcing local spices directly from regional spice estates.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              From our slow-simmered, rich Dal Makhani to our fiery tandoor-roasted cottage cheese, every dish carries the rich fragrance of handcrafted charcoal cooking.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800">
              <Image 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef cooking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Our Menu</p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold"
              style={{ color: TEXT }}
            >
              What&apos;s Cooking Today
            </h2>
          </div>
          <div className="space-y-16">
            {menuCategories.map((cat) => (
              <div key={cat.label}>
                <h3
                  className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-8 pb-3 border-b"
                  style={{ color: ACCENT_GOLD, borderColor: BORDER }}
                >
                  {cat.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex flex-col justify-between group">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="text-base font-bold text-stone-100 group-hover:text-amber-500 transition-colors">{item.name}</span>
                        <div className="flex-1 border-b border-dashed border-stone-700 mx-2" />
                        <span className="text-base font-extrabold" style={{ color: ACCENT }}>{item.price}</span>
                      </div>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining Banner */}
      <section className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border shadow-inner"
            style={{ backgroundColor: `${ACCENT}08`, borderColor: `${ACCENT}25` }}
          >
            <h3
              className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4"
              style={{ color: ACCENT_GOLD }}
            >
              Private Dining & Celebrations
            </h3>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: MUTED }}>
              Celebrate birthdays, corporate banquets, kitty parties, or intimate family reunions in our private banquet hall. Customized multi-course tasting menus available.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: ACCENT }}
            >
              Enquire Banquet Room
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-16"
            style={{ color: TEXT }}
          >
            A Feast for the Eyes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md relative h-64 border border-stone-850 group">
                <Image
                  src={img}
                  alt={`Dining experience ${i + 1}`}
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
          <div className="flex-1 rounded-3xl p-10 border bg-black shadow-sm" style={{ borderColor: BORDER }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>Visit Us</p>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Our Address</p>
                  <p style={{ color: MUTED }}>Near Rankala Lake, Bindu Chowk,<br />Kolhapur, Maharashtra 416002</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Call for Reservations</p>
                  <p className="text-base font-bold" style={{ color: ACCENT_GOLD }}>+91 99876 54321</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Kitchen Timings</p>
                  <p style={{ color: MUTED }}>Lunch: 12:00 PM – 3:30 PM</p>
                  <p style={{ color: MUTED }}>Dinner: 7:00 PM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-3xl p-10 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: ACCENT }}
          >
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-4">Want a website like this?</p>
              <p className="text-base mb-8 opacity-90 max-w-sm mx-auto">
                Get a premium, responsive dining website complete with tandoori/curry menu layouts, reservations calls, private dining sections, and gallery cards.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-black text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Chat with us on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10" />
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10" />
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
