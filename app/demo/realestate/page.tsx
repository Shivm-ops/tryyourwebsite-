import { DM_Sans, Libre_Baskerville } from "next/font/google";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Shield, CreditCard, MapPin, Award, BedDouble, Square } from "lucide-react";

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

const BG = "#F4F0E8";
const BG_ALT = "#ffffff";
const PRIMARY = "#1C3144";
const SECONDARY = "#B87333";
const TEXT = "#1A1A1A";
const MUTED = "#6A7A88";
const BORDER = "#E0D8C8";

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "500+", label: "Happy families" },
  { value: "100+", label: "Active listings" },
  { value: "₹0", label: "Hidden charges" },
];

const listings = [
  {
    type: "2 BHK Apartment",
    location: "Shahupuri",
    size: "950 sq ft",
    price: "₹45 Lakh",
    tag: "Ready to move",
  },
  {
    type: "3 BHK Apartment",
    location: "Rajarampuri",
    size: "1,350 sq ft",
    price: "₹78 Lakh",
    tag: "New launch",
  },
  {
    type: "Commercial Space",
    location: "Laxmipuri",
    size: "800 sq ft",
    price: "₹1.2 Crore",
    tag: "Prime location",
  },
  {
    type: "Bungalow",
    location: "Shivaji Park",
    size: "2,400 sq ft",
    price: "₹1.4 Crore",
    tag: "Luxury",
  },
  {
    type: "Villa",
    location: "Karvir",
    size: "3,200 sq ft",
    price: "₹1.8 Crore",
    tag: "Exclusive",
  },
  {
    type: "Residential Plot",
    location: "Bypass Road",
    size: "1,500 sq ft",
    price: "₹28 Lakh",
    tag: "Invest now",
  },
];

const whyUs = [
  { icon: Shield, label: "Legal expertise", desc: "Full documentation support & title verification" },
  { icon: CreditCard, label: "Home loan assistance", desc: "Tie-ups with 10+ leading banks" },
  { icon: MapPin, label: "Site visit support", desc: "Dedicated agent accompanies every visit" },
  { icon: Award, label: "Post-sale service", desc: "Society registration & possession assistance" },
];

const galleryColors = ["#E8E0D0", "#DDD5C5", "#E4DCD0", "#D8D0C0", "#EAE2D2", "#E0D8C8"];

export default function RealEstatePage() {
  return (
    <div className={`${baskerville.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#E0D8CA" textColor="#3A2A10" />
      <DemoNav
        businessName="Prestige Properties"
        bgColor={BG_ALT}
        textColor={TEXT}
        accentColor={SECONDARY}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
        style={{ backgroundColor: BG, color: PRIMARY }}
      >
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: SECONDARY }}>
            Kolhapur · Since 2008
          </p>
          <h1
            className="font-[family-name:var(--font-baskerville)] text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: PRIMARY }}
          >
            Find your place
            <br />
            <em>in Kolhapur.</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Premium residential, commercial & investment properties across
            Kolhapur. Trusted by 500+ families. Zero hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#listings"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              View Properties
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              Talk to an Agent
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold mb-1" style={{ color: SECONDARY }}>{s.value}</p>
              <p className="text-sm text-white opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: SECONDARY }}>
              Available now
            </p>
            <h2
              className="font-[family-name:var(--font-baskerville)] text-4xl font-bold"
              style={{ color: PRIMARY }}
            >
              Featured Properties
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((prop) => (
              <div
                key={prop.type + prop.location}
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${BORDER}` }}
              >
                {/* Property image placeholder */}
                <div className="h-44 relative" style={{ backgroundColor: "#E8E0D0" }}>
                  <div
                    className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: PRIMARY, color: "#fff" }}
                  >
                    {prop.tag}
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-base mb-1" style={{ color: PRIMARY }}>{prop.type}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: MUTED }} />
                    <p className="text-xs" style={{ color: MUTED }}>{prop.location}, Kolhapur</p>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5" style={{ color: MUTED }} />
                      <span className="text-xs" style={{ color: MUTED }}>{prop.type.includes("Plot") || prop.type.includes("Commercial") ? "Commercial" : "Residential"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-3.5 h-3.5" style={{ color: MUTED }} />
                      <span className="text-xs" style={{ color: MUTED }}>{prop.size}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg" style={{ color: SECONDARY }}>{prop.price}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-4 py-2 rounded-full"
                      style={{ backgroundColor: PRIMARY, color: "#fff" }}
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
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-[family-name:var(--font-baskerville)] text-4xl font-bold"
              style={{ color: PRIMARY }}
            >
              Why choose Prestige Properties
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: PRIMARY + "10" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: PRIMARY }} />
                </div>
                <p className="font-bold text-sm mb-1" style={{ color: PRIMARY }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 w-full">
            <div className="w-full rounded-2xl" style={{ backgroundColor: BORDER, height: "300px" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: SECONDARY }}>About us</p>
            <h2
              className="font-[family-name:var(--font-baskerville)] text-3xl font-bold mb-5"
              style={{ color: PRIMARY }}
            >
              Kolhapur&apos;s most trusted
              <br />
              <em>real estate partner</em>
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Prestige Properties has been Kolhapur&apos;s most trusted real estate
              partner since 2008. With 500+ successful transactions and deep
              knowledge of every neighbourhood, we help families find not just a
              house — but a home.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Our team handles everything from property search to legal
              documentation, home loan assistance, and post-sale registration —
              all under one roof, with zero hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-baskerville)] text-4xl font-bold text-center mb-10"
            style={{ color: PRIMARY }}
          >
            Our Properties
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryColors.map((color, i) => (
              <div key={i} className="rounded-2xl" style={{ backgroundColor: color, height: "200px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form (UI only) */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="font-[family-name:var(--font-baskerville)] text-3xl font-bold mb-3"
              style={{ color: PRIMARY }}
            >
              Get in touch
            </h2>
            <p className="text-sm" style={{ color: MUTED }}>
              Share your requirement and we&apos;ll find the perfect property for you.
            </p>
          </div>
          <div
            className="rounded-2xl p-8 space-y-5"
            style={{ border: `1px solid ${BORDER}`, backgroundColor: BG }}
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                disabled
                className="w-full px-4 py-3 rounded-xl text-sm border outline-none cursor-not-allowed"
                style={{ borderColor: BORDER, backgroundColor: BG_ALT, color: TEXT }}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                disabled
                className="w-full px-4 py-3 rounded-xl text-sm border outline-none cursor-not-allowed"
                style={{ borderColor: BORDER, backgroundColor: BG_ALT, color: TEXT }}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Requirement
              </label>
              <select
                disabled
                className="w-full px-4 py-3 rounded-xl text-sm border outline-none cursor-not-allowed"
                style={{ borderColor: BORDER, backgroundColor: BG_ALT, color: MUTED }}
              >
                <option>Select property type</option>
                <option>2 BHK Apartment</option>
                <option>3 BHK Apartment</option>
                <option>Bungalow / Villa</option>
                <option>Commercial</option>
                <option>Plot</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider mb-1 block" style={{ color: MUTED }}>
                Budget (in Lakhs)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹50L – ₹80L"
                disabled
                className="w-full px-4 py-3 rounded-xl text-sm border outline-none cursor-not-allowed"
                style={{ borderColor: BORDER, backgroundColor: BG_ALT, color: TEXT }}
              />
            </div>
            <p className="text-xs text-center" style={{ color: MUTED }}>
              * This is a demo form. Contact us via WhatsApp to enquire.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-bold py-3.5 rounded-full text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Send Enquiry via WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl p-8" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG_ALT }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: SECONDARY }}>
              Our office
            </p>
            <div className="space-y-4 text-sm" style={{ color: MUTED }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: PRIMARY }}>Address</p>
                <p>2nd Floor, Shahu Tower, Tarabai Park,<br />Kolhapur, Maharashtra 416003</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: PRIMARY }}>Phone</p>
                <p>+91 99001 23456</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: PRIMARY }}>Hours</p>
                <p>Mon–Sat: 9:00 AM – 7:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            <p className="text-lg font-bold mb-3">Want this website?</p>
            <p className="text-sm mb-6 opacity-80">
              Get a premium real estate website with property listings, filters, enquiry forms and agent profiles.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{ backgroundColor: SECONDARY, color: "#fff" }}
            >
              Chat with us on WhatsApp →
            </a>
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
