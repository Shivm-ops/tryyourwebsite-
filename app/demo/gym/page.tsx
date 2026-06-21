import { DM_Sans, Bebas_Neue } from "next/font/google";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Zap, Star } from "lucide-react";
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

const BG = "#080808";
const BG_ALT = "#0D0D0D";
const ACCENT = "#CCFF00";
const TEXT = "#F5F5F5";
const MUTED = "#555555";
const BORDER = "#1A1A1A";

const stats = [
  { value: "10,000", label: "sq ft Facility" },
  { value: "500+", label: "Active members" },
  { value: "15", label: "Expert trainers" },
  { value: "20+", label: "Classes/week" },
];

const plans = [
  {
    name: "Basic",
    price: "₹799",
    period: "/month",
    features: ["Gym access (6am–10pm)", "Locker facility", "Changing room"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹1,299",
    period: "/month",
    features: ["All group classes", "2 trainer sessions/month", "Gym access", "Locker"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1,999",
    period: "/month",
    features: ["Unlimited classes", "4 personal trainer sessions", "Nutrition guidance", "Gym access", "Priority locker"],
    popular: false,
  },
];

const classes = [
  { name: "CrossFit", time: "Mon/Wed/Fri 6:30am" },
  { name: "Power Yoga", time: "Tue/Thu 7:00am" },
  { name: "Zumba", time: "Mon/Wed 6:00pm" },
  { name: "Boxing", time: "Tue/Thu/Sat 7:00am" },
  { name: "HIIT", time: "Daily 5:30am" },
  { name: "Spinning", time: "Mon–Fri 6:00am" },
  { name: "Body Pump", time: "Sat/Sun 8:00am" },
];

const trainers = [
  { initials: "AK", name: "Akash Kadam", spec: "Strength & Conditioning", exp: "8 yrs" },
  { initials: "PS", name: "Priti Sawant", spec: "Yoga & Flexibility", exp: "6 yrs" },
  { initials: "RS", name: "Rohan Shinde", spec: "Boxing & HIIT", exp: "5 yrs" },
];

const testimonials = [
  { text: "Lost 18kg in 5 months. PowerZone changed my life!", name: "Suresh B.", stars: 5 },
  { text: "Best gym in Kolhapur. Clean, modern equipment and great trainers.", name: "Pooja M.", stars: 5 },
  { text: "The group classes are incredible. I never miss a Zumba session!", name: "Ajay P.", stars: 5 },
];

const galleryColors = ["#111111", "#141414", "#0F0F0F", "#131300", "#0E0E00", "#121200"];

export default function GymPage() {
  return (
    <div className={`${bebas.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#181F00" textColor="#CCFF00" />
      <DemoNav
        businessName="PowerZone Fitness"
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
        {/* accent glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: ACCENT + "08" }}
          aria-hidden="true"
        />
        <div className="relative z-20 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>
            Kolhapur&apos;s Premier Fitness Club
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] leading-none mb-4"
            style={{ fontSize: "clamp(80px, 15vw, 160px)", color: TEXT, letterSpacing: "0.05em" }}
          >
            NO LIMITS.
          </h1>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none mb-8"
            style={{ fontSize: "clamp(60px, 10vw, 120px)", color: ACCENT, letterSpacing: "0.05em" }}
          >
            NO EXCUSES.
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            State-of-the-art equipment, expert trainers & group classes for all
            levels. Your transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#membership"
              className="px-8 py-3.5 rounded-full font-bold text-sm"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              View Membership Plans
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-sm border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Get Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4" style={{ backgroundColor: ACCENT }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl mb-1"
                style={{ color: BG, letterSpacing: "0.05em" }}
              >
                {s.value}
              </p>
              <p className="text-xs font-bold" style={{ color: BG, opacity: 0.65 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Join now</p>
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl"
              style={{ color: TEXT, letterSpacing: "0.05em" }}
            >
              Membership Plans
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: BG,
                  border: plan.popular ? `2px solid ${ACCENT}` : `1px solid ${BORDER}`,
                }}
              >
                {plan.popular && (
                  <div
                    className="text-xs font-bold px-3 py-1 rounded-full w-fit mb-4"
                    style={{ backgroundColor: ACCENT, color: BG }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  className="font-[family-name:var(--font-bebas)] text-2xl mb-1"
                  style={{ color: ACCENT, letterSpacing: "0.05em" }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold" style={{ color: TEXT }}>{plan.price}</span>
                  <span className="text-sm" style={{ color: MUTED }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                      <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-bold py-3 rounded-full"
                  style={
                    plan.popular
                      ? { backgroundColor: ACCENT, color: BG }
                      : { border: `1px solid ${BORDER}`, color: TEXT }
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
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Schedule</p>
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl"
              style={{ color: TEXT, letterSpacing: "0.05em" }}
            >
              Group Classes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="p-5 rounded-xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{cls.name}</p>
                <p className="text-xs" style={{ color: MUTED }}>{cls.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-[family-name:var(--font-bebas)] text-5xl"
              style={{ color: TEXT, letterSpacing: "0.05em" }}
            >
              Our Trainers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((t) => (
              <div
                key={t.initials}
                className="text-center p-8 rounded-2xl"
                style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4"
                  style={{ backgroundColor: ACCENT, color: BG }}
                >
                  {t.initials}
                </div>
                <p className="font-bold mb-0.5" style={{ color: TEXT }}>{t.name}</p>
                <p className="text-xs mb-1" style={{ color: ACCENT }}>{t.spec}</p>
                <p className="text-xs" style={{ color: MUTED }}>{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-[family-name:var(--font-bebas)] text-5xl text-center mb-10"
            style={{ color: TEXT, letterSpacing: "0.05em" }}
          >
            The Facility
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryColors.map((color, i) => (
              <div key={i} className="rounded-2xl" style={{ backgroundColor: color, height: "200px" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-[family-name:var(--font-bebas)] text-5xl text-center mb-12"
            style={{ color: TEXT, letterSpacing: "0.05em" }}
          >
            Transformation Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: BG, border: `1px solid ${BORDER}` }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: ACCENT }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-bold" style={{ color: ACCENT }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl p-8" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG_ALT }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>Find us</p>
            <div className="space-y-3 text-sm" style={{ color: MUTED }}>
              <p>Plot 45, MIDC Road, Shiroli,<br />Kolhapur, Maharashtra 416122</p>
              <p>+91 98123 45678</p>
              <p>Open 24/7 for Premium members</p>
              <p>Regular hours: 5:00 AM – 11:00 PM</p>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ backgroundColor: ACCENT }}
          >
            <p className="text-lg font-bold mb-3" style={{ color: BG }}>Want this website?</p>
            <p className="text-sm mb-6" style={{ color: BG, opacity: 0.7 }}>
              Get a bold, high-energy website for your gym with membership plans, class schedules and trainer profiles.
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
        businessName="PowerZone Fitness"
        bgColor={BG}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
