import { DM_Sans, Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Shield, CreditCard, MapPin, Award, BedDouble, Square, ArrowRight, Star } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#FAF9F6";       // Luxury warm alabaster stone
const BG_ALT = "#FFFFFF";   // Pure white
const PRIMARY = "#0F172A";  // Midnight obsidian navy
const SECONDARY = "#B45309"; // Warm luxury bronze/gold
const TEXT = "#1E293B";     // Deep charcoal
const MUTED = "#64748B";    // Soft grey
const BORDER = "#EBE8E0";   // Warm stone border

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "500+", label: "Happy families" },
  { value: "100+", label: "Premium listings" },
  { value: "₹0", label: "Hidden charges" },
];

const listings = [
  {
    type: "2 BHK Premium Apartment",
    location: "Shahupuri",
    size: "950 sq ft",
    price: "₹45 Lakh",
    tag: "Ready to move",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80",
  },
  {
    type: "3 BHK Luxury Residence",
    location: "Rajarampuri",
    size: "1,350 sq ft",
    price: "₹78 Lakh",
    tag: "New launch",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80",
  },
  {
    type: "Modern Commercial Space",
    location: "Laxmipuri",
    size: "800 sq ft",
    price: "₹1.2 Crore",
    tag: "Prime location",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
  },
  {
    type: "Exclusive Heritage Bungalow",
    location: "Shivaji Park",
    size: "2,400 sq ft",
    price: "₹1.4 Crore",
    tag: "Luxury",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80",
  },
  {
    type: "Contemporary Skyline Villa",
    location: "Karvir",
    size: "3,200 sq ft",
    price: "₹1.8 Crore",
    tag: "Exclusive",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80",
  },
  {
    type: "Premium Residential Plot",
    location: "Bypass Road",
    size: "1,500 sq ft",
    price: "₹28 Lakh",
    tag: "Invest now",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80",
  },
];

const whyUs = [
  { icon: Shield, label: "Legal Expertise", desc: "Full documentation support & verification." },
  { icon: CreditCard, label: "Home Loan Support", desc: "Partnerships with 10+ leading banks." },
  { icon: MapPin, label: "Guided Site Visits", desc: "Private vehicle & agent accompanies every visit." },
  { icon: Award, label: "Post-Sale Service", desc: "Society registration & possession handholding." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
];

export default function RealEstatePage() {
  return (
    <div className={`${baskerville.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#B45309" textColor="#FFFFFF" />
      <DemoNav
        businessName="Prestige Properties"
        bgColor={BG_ALT}
        textColor={PRIMARY}
        accentColor={SECONDARY}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" overlayOpacity={0.4} />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-slate-200/50 shadow-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: SECONDARY }}>
            Kolhapur · Since 2008
          </p>
          <h1
            className="font-[family-name:var(--font-baskerville)] text-4xl md:text-6xl font-bold leading-[1.15] mb-6"
            style={{ color: PRIMARY }}
          >
            Find your perfect place
            <br />
            <span className="italic" style={{ color: SECONDARY }}>in Kolhapur.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: MUTED }}>
            Premium residential apartments, commercial spaces & investment plots across Kolhapur. Sourced by specialists, trusted by 500+ local families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#listings"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: PRIMARY }}
            >
              View Properties
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 bg-white transition-colors"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              Talk to an Agent
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 shadow-inner" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold mb-1" style={{ color: SECONDARY }}>{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: SECONDARY }}>Available listings</p>
            <h2
              className="font-[family-name:var(--font-baskerville)] text-4xl font-bold"
              style={{ color: PRIMARY }}
            >
              Featured Properties
            </h2>
            <p className="text-base mt-2" style={{ color: MUTED }}>Browse through handpicked villas, residential layouts, and commercial hubs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((prop) => (
              <div
                key={prop.type + prop.location}
                className="rounded-3xl overflow-hidden border bg-slate-50/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: BORDER }}
              >
                <div className="h-56 relative overflow-hidden bg-slate-200">
                  <Image
                    src={prop.img}
                    alt={prop.type}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider shadow-sm"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    {prop.tag}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="font-bold text-lg mb-1" style={{ color: PRIMARY }}>{prop.type}</p>
                  <div className="flex items-center gap-1.5 mb-4">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <p className="text-xs font-semibold" style={{ color: MUTED }}>{prop.location}, Kolhapur</p>
                  </div>
                  <div className="flex items-center gap-4 mb-6 border-y py-3" style={{ borderColor: BORDER }}>
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4 text-slate-400" />
                      <span className="text-xs" style={{ color: MUTED }}>{prop.type.includes("Plot") || prop.type.includes("Commercial") ? "Commercial" : "Residential"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4 text-slate-400" />
                      <span className="text-xs" style={{ color: MUTED }}>{prop.size}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-extrabold text-xl" style={{ color: SECONDARY }}>{prop.price}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-[family-name:var(--font-baskerville)] text-4xl font-bold"
              style={{ color: PRIMARY }}
            >
              Why Choose Prestige Properties
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-3xl bg-white border shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${PRIMARY}10` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: PRIMARY }} />
                </div>
                <p className="font-bold text-base mb-2" style={{ color: PRIMARY }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-slate-100">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
                alt="Broker team" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: SECONDARY }}>Our Ethos</p>
            <h2
              className="font-[family-name:var(--font-baskerville)] text-3xl md:text-4xl font-bold mb-5"
              style={{ color: PRIMARY }}
            >
              Kolhapur&apos;s Most Trusted
              <br />
              <span className="italic" style={{ color: SECONDARY }}>Real Estate Advisory</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: MUTED }}>
              Prestige Properties has been Kolhapur&apos;s most reliable property portal since 2008. Guided by a team of professional brokers, legal consultants, and asset advisors, we ensure client transactions are 100% verified and stress-free.
            </p>
            <p className="text-base leading-relaxed" style={{ color: MUTED }}>
              Our workflow takes care of property inspections, land titles verification, society coordination, home loans, and registry filing — ensuring zero hidden charges and absolute security.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-baskerville)] text-4xl font-bold text-center mb-16"
            style={{ color: PRIMARY }}
          >
            Premium Architecture Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md relative h-64 border-4 border-white group">
                <Image
                  src={img}
                  alt={`Architecture photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form UI */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-[family-name:var(--font-baskerville)] text-3xl font-bold mb-3"
              style={{ color: PRIMARY }}
            >
              Custom Property Search
            </h2>
            <p className="text-base" style={{ color: MUTED }}>
              Submit your desired dimensions and budget, and our agents will send match alerts.
            </p>
          </div>
          <div
            className="rounded-3xl p-8 space-y-5 border shadow-sm"
            style={{ borderColor: BORDER, backgroundColor: BG }}
          >
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Name"
                disabled
                className="w-full px-4 py-3.5 rounded-2xl text-sm border outline-none cursor-not-allowed bg-white"
                style={{ borderColor: BORDER, color: TEXT }}
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                disabled
                className="w-full px-4 py-3.5 rounded-2xl text-sm border outline-none cursor-not-allowed bg-white"
                style={{ borderColor: BORDER, color: TEXT }}
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Preferred Zone
              </label>
              <select
                disabled
                className="w-full px-4 py-3.5 rounded-2xl text-sm border outline-none cursor-not-allowed bg-white"
                style={{ borderColor: BORDER, color: MUTED }}
              >
                <option>Select property location</option>
                <option>Shahupuri</option>
                <option>Rajarampuri</option>
                <option>Tarabai Park</option>
                <option>MIDC Shiroli</option>
              </select>
            </div>
            <p className="text-xs text-center" style={{ color: MUTED }}>
              * This is a demo form. Connect on WhatsApp to start your search.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-bold py-4 rounded-full text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: PRIMARY }}
            >
              Send Requirement via WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-3xl p-10 bg-white border shadow-sm" style={{ borderColor: BORDER }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: SECONDARY }}>
              Our Office
            </p>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-bold mb-1" style={{ color: PRIMARY }}>Headquarters</p>
                <p style={{ color: MUTED }}>2nd Floor, Shahu Tower, Tarabai Park,<br />Kolhapur, Maharashtra 416003</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: PRIMARY }}>Hotline</p>
                <p className="text-base font-bold" style={{ color: SECONDARY }}>+91 99001 23456</p>
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: PRIMARY }}>Working Hours</p>
                <p style={{ color: MUTED }}>Mon–Sat: 9:00 AM – 7:00 PM</p>
                <p style={{ color: MUTED }}>Sunday: By appointment only</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-3xl p-10 flex flex-col justify-center text-center text-white relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: PRIMARY }}
          >
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-4">Want a website like this?</p>
              <p className="text-base mb-8 opacity-80 max-w-sm mx-auto">
                Get a premium real estate broker website with map listings, pricing grids, guided site-visit calls, and client collection leads.
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
        businessName="Prestige Properties"
        bgColor={BG_ALT}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={SECONDARY}
      />
    </div>
  );
}
