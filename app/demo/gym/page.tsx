import { DM_Sans, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Zap, Star, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#09090B";       // Matte dark charcoal
const BG_ALT = "#121214";   // Deep charcoal
const ACCENT = "#A3E635";   // High-voltage lime green
const TEXT = "#F4F4F5";     // Soft white
const MUTED = "#A1A1AA";    // Muted zinc gray
const BORDER = "#27272A";   // Dark zinc border

const stats = [
  { value: "10,000", label: "sq ft Facility" },
  { value: "500+", label: "Active members" },
  { value: "15", label: "Expert trainers" },
  { value: "20+", label: "Classes/week" },
];

const plans = [
  {
    name: "Basic Access",
    price: "₹799",
    period: "/month",
    features: ["Standard gym access (6am–10pm)", "Free locker facility", "Access to changing rooms"],
    popular: false,
  },
  {
    name: "Standard Group",
    price: "₹1,299",
    period: "/month",
    features: ["All group classes included", "2 personal trainer sessions/mo", "Full gym floor access", "Dedicated locker"],
    popular: true,
  },
  {
    name: "Premium Pro",
    price: "₹1,999",
    period: "/month",
    features: ["Unlimited class access", "4 personal trainer sessions", "Custom diet & nutrition plans", "24/7 Priority locker"],
    popular: false,
  },
];

const classes = [
  { name: "CrossFit HIIT", time: "Mon/Wed/Fri · 6:30 AM" },
  { name: "Power Vinyasa", time: "Tue/Thu · 7:00 AM" },
  { name: "Zumba Dance", time: "Mon/Wed · 6:00 PM" },
  { name: "Cardio Boxing", time: "Tue/Thu/Sat · 7:00 AM" },
  { name: "HIIT Circuits", time: "Daily · 5:30 AM" },
  { name: "Spin Cycling", time: "Mon–Fri · 6:00 AM" },
  { name: "Body Pump", time: "Sat/Sun · 8:00 AM" },
  { name: "Strength Build", time: "Daily · 4:00 PM" },
];

const trainers = [
  { name: "Akash Kadam", spec: "Strength & Conditioning", exp: "8 yrs experience", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&q=80" },
  { name: "Priti Sawant", spec: "Yoga & Flexibility", exp: "6 yrs experience", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop&q=80" },
  { name: "Rohan Shinde", spec: "Boxing & Calisthenics", exp: "5 yrs experience", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&q=80" },
];

const testimonials = [
  { text: "Lost 18kg in 5 months. PowerZone changed my life! The trainers really push you to your absolute limits.", name: "Suresh B.", stars: 5, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80" },
  { text: "Best gym in Kolhapur hands down. Clean, brand-new equipment and highly knowledgeable trainers.", name: "Pooja M.", stars: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" },
  { text: "The group classes are outstanding. Fun atmosphere, intense workouts, and awesome community vibe!", name: "Ajay P.", stars: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
  "https://images.unsplash.com/photo-1571731979149-75be7972a9ee?w=600&q=80",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80",
];

export default function GymPage() {
  return (
    <div className={`${bebas.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#1A1F0C" textColor="#A3E635" />
      <DemoNav
        businessName="PowerZone Fitness"
        bgColor={BG}
        textColor={TEXT}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" overlayOpacity={0.7} />
        <DemoStamp />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: `${ACCENT}12` }}
          aria-hidden="true"
        />
        <div className="relative z-20 max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: ACCENT }}>
            Kolhapur&apos;s Elite Strength Hub
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] leading-[0.85] mb-2 tracking-wide"
            style={{ fontSize: "clamp(80px, 14vw, 150px)", color: TEXT }}
          >
            NO LIMITS.
          </h1>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-[0.85] mb-8 tracking-wide"
            style={{ fontSize: "clamp(60px, 10vw, 110px)", color: ACCENT }}
          >
            NO EXCUSES.
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Push your performance in a 10,000 sq ft state-of-the-art facility. Led by certified expert coaches and a powerful community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#membership"
              className="px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-lime-500/20"
              style={{ backgroundColor: ACCENT, color: "#000" }}
            >
              View Membership Plans
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-sm border-2 bg-black/40 backdrop-blur-sm transition-all hover:bg-white/10"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Get Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-y border-zinc-800 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-[family-name:var(--font-bebas)] text-5xl mb-1 tracking-wider"
                style={{ color: ACCENT }}
              >
                {s.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Join the movement</p>
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider"
              style={{ color: TEXT }}
            >
              Choose Your Membership
            </h2>
            <p className="text-sm max-w-md mx-auto mt-2" style={{ color: MUTED }}>Flexible, value-driven plans customized for your personal physical goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl p-8 flex flex-col relative transition-transform duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: BG,
                  border: plan.popular ? `2px solid ${ACCENT}` : `1px solid ${BORDER}`,
                  boxShadow: plan.popular ? `0 10px 30px -10px ${ACCENT}25` : "none"
                }}
              >
                {plan.popular && (
                  <div
                    className="text-xs font-bold px-3 py-1 rounded-full absolute -top-3.5 right-6 uppercase tracking-wider"
                    style={{ backgroundColor: ACCENT, color: "#000" }}
                  >
                    Recommended
                  </div>
                )}
                <p
                  className="font-[family-name:var(--font-bebas)] text-3xl mb-1 tracking-wider"
                  style={{ color: ACCENT }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm font-semibold" style={{ color: MUTED }}>{plan.period}</span>
                </div>
                <ul className="space-y-4 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: MUTED }}>
                      <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-bold py-3.5 rounded-full transition-all"
                  style={
                    plan.popular
                      ? { backgroundColor: ACCENT, color: "#000" }
                      : { border: `2px solid ${BORDER}`, color: TEXT }
                  }
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Our Classes</p>
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl tracking-wider"
              style={{ color: TEXT }}
            >
              Weekly Training Schedule
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="p-6 rounded-2xl border bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                style={{ borderColor: BORDER }}
              >
                <p className="font-bold text-base mb-1" style={{ color: ACCENT }}>{cls.name}</p>
                <p className="text-xs" style={{ color: MUTED }}>{cls.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white text-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-slate-100">
              <Image 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80" 
                alt="Gym workout" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#76A613" }}>Our Facility</p>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl font-bold mb-6 tracking-wide leading-none">
              PUSH YOUR PERFORMANCE TO THE ABSOLUTE PEAK
            </h2>
            <p className="text-sm leading-relaxed mb-4 text-zinc-600">
              At PowerZone, we believe inside every athlete is a champion waiting to break free. Since our founding, we have provided Kolhapur&apos;s most intensive and modern physical training experience.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600">
              Equipped with imported weight stacks, full calisthenics rigs, heavy boxing zones, and a dedicated team of certified conditioning coaches, we are ready to take your lifestyle to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider"
              style={{ color: TEXT }}
            >
              Our Conditioning Coaches
            </h2>
            <p className="text-sm max-w-sm mx-auto mt-2" style={{ color: MUTED }}>Certified expert trainers with extensive experience in conditioning & strength.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="text-center rounded-3xl overflow-hidden border bg-zinc-950/50 hover:bg-zinc-950 transition-all duration-300 group"
                style={{ borderColor: BORDER }}
              >
                <div className="h-72 w-full relative overflow-hidden bg-zinc-900">
                  <Image src={t.img} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="font-bold text-lg text-white mb-0.5">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>{t.spec}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{t.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-bebas)] text-5xl text-center mb-16 tracking-wider"
            style={{ color: TEXT }}
          >
            The Iron Zone
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md relative h-64 border border-zinc-800 group">
                <Image
                  src={img}
                  alt={`Facility photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-bebas)] text-5xl text-center mb-16 tracking-wider"
            style={{ color: TEXT }}
          >
            Transformation Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-3xl bg-zinc-900/50 border hover:shadow-lg transition-shadow relative"
                style={{ borderColor: BORDER }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full relative overflow-hidden bg-zinc-800">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px]" style={{ color: MUTED }}>PowerZone Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-3xl p-10 bg-zinc-900/50 border" style={{ borderColor: BORDER }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>Find Us</p>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p style={{ color: MUTED }}>Plot 45, MIDC Road, Shiroli,<br />Kolhapur, Maharashtra 416122</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Call Us</p>
                  <p className="text-base font-bold" style={{ color: ACCENT }}>+91 98123 45678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold text-white">Regular Hours</p>
                  <p style={{ color: MUTED }}>Mon–Sat: 5:00 AM – 11:00 PM</p>
                  <p style={{ color: MUTED }}>Sunday: 6:00 AM – 1:00 PM</p>
                  <p className="text-[10px] text-zinc-500 mt-1">* 24/7 Access for Premium Members</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-3xl p-10 flex flex-col justify-center text-center text-black relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: ACCENT }}
          >
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-4">Want a website like this?</p>
              <p className="text-base mb-8 opacity-90 max-w-sm mx-auto">
                Get a bold, high-energy gym website with membership cards, class schedules, coach profiles, and call-to-actions built to recruit new members.
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
        businessName="PowerZone Fitness"
        bgColor={BG}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
