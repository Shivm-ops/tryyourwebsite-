import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Shield, Users, Clock, Lock, Star, Phone, MapPin } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#F0F9F6";
const BG_ALT = "#ffffff";
const PRIMARY = "#0E6670";
const TEXT = "#0A2929";
const MUTED = "#4A7870";
const BORDER = "#CCEAE2";

const stats = [
  { value: "15+", label: "Years of service" },
  { value: "5,000+", label: "Patients treated" },
  { value: "3", label: "Expert doctors" },
  { value: "100%", label: "Confidential" },
];

const doctors = [
  {
    initials: "PD",
    name: "Dr. Priya Desai",
    qual: "MBBS, MD",
    spec: "General Physician",
    exp: "15 years experience",
  },
  {
    initials: "RK",
    name: "Dr. Rohan Kulkarni",
    qual: "MBBS, DM",
    spec: "Cardiologist",
    exp: "12 years experience",
  },
  {
    initials: "AS",
    name: "Dr. Anita Sharma",
    qual: "MBBS, MD",
    spec: "Pediatrician",
    exp: "10 years experience",
  },
];

const services = [
  { name: "General Consultation", price: "₹300" },
  { name: "ECG", price: "₹299" },
  { name: "Blood Tests", price: "from ₹199" },
  { name: "X-Ray", price: "₹399" },
  { name: "Ultrasound", price: "₹799" },
  { name: "Vaccination", price: "Per dose" },
  { name: "Diabetes Management", price: "Consultation" },
  { name: "Physiotherapy", price: "₹499/session" },
];

const testimonials = [
  {
    text: "Dr. Desai is incredibly thorough and patient. Best GP I've ever visited in Kolhapur.",
    name: "Sunita R.",
    stars: 5,
  },
  {
    text: "The clinic is clean, modern, and the staff are very professional. Highly recommend.",
    name: "Rahul M.",
    stars: 5,
  },
  {
    text: "Quick appointment, no long wait times. Dr. Kulkarni explained everything clearly.",
    name: "Meera K.",
    stars: 5,
  },
];

const whyUs = [
  { icon: Shield, label: "15+ Years of trusted care" },
  { icon: Users, label: "Family-friendly clinic" },
  { icon: Clock, label: "Same-day appointments" },
  { icon: Lock, label: "Complete confidentiality" },
];

export default function ClinicPage() {
  return (
    <div className={`${jakarta.variable} ${dmSans.variable}`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#CCEAE2" textColor="#0A3A32" />
      <DemoNav
        businessName="Arogya Clinic"
        bgColor={BG_ALT}
        textColor={TEXT}
        accentColor={PRIMARY}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden"
        style={{ backgroundColor: BG, color: PRIMARY }}
      >
        <DemoPhotoHero />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: PRIMARY }}>
            Kolhapur · Since 2008
          </p>
          <h1
            className="font-[family-name:var(--font-jakarta)] text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: TEXT }}
          >
            Your health,
            <br />
            <span style={{ color: PRIMARY }}>our priority.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: MUTED }}>
            Trusted family healthcare in Kolhapur. Expert doctors, modern
            diagnostics, and compassionate care — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-sm" style={{ color: "#A0E8D8" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: PRIMARY }}>Expert Care</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold mb-3" style={{ color: TEXT }}>
              Meet our doctors
            </h2>
            <p className="text-sm" style={{ color: MUTED }}>Qualified, experienced and committed to your wellbeing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.initials}
                className="text-center p-8 rounded-2xl"
                style={{ border: `1px solid ${BORDER}`, backgroundColor: BG }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg text-white mx-auto mb-4"
                  style={{ backgroundColor: PRIMARY }}
                >
                  {doc.initials}
                </div>
                <p className="font-bold mb-0.5" style={{ color: TEXT }}>{doc.name}</p>
                <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>{doc.qual}</p>
                <p className="text-xs mb-1" style={{ color: MUTED }}>{doc.spec}</p>
                <p className="text-xs" style={{ color: MUTED }}>{doc.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: PRIMARY }}>What we offer</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold" style={{ color: TEXT }}>
              Services & Pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="flex justify-between items-center p-5 rounded-xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <span className="text-sm font-medium" style={{ color: TEXT }}>{svc.name}</span>
                <span className="text-sm font-bold" style={{ color: PRIMARY }}>{svc.price}</span>
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
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: PRIMARY }}>About us</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold mb-5" style={{ color: TEXT }}>
              15 years caring for Kolhapur families
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Arogya Clinic has been a trusted healthcare partner in Kolhapur since
              2008. Founded by Dr. Priya Desai, we started with a simple mission:
              to make quality healthcare accessible and compassionate.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Today, we serve over 5,000 patients a year, with a team of three
              specialist doctors and modern diagnostic equipment — all in one
              welcoming, family-friendly clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-center mb-12" style={{ color: TEXT }}>
            Why families choose us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ backgroundColor: BG_ALT, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: PRIMARY + "15" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: PRIMARY }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: TEXT }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: BG_ALT }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-center mb-12" style={{ color: TEXT }}>
            What our patients say
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
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: PRIMARY }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold" style={{ color: TEXT }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-2xl p-8" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG_ALT }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: PRIMARY }}>Contact</p>
            <div className="space-y-4 text-sm" style={{ color: MUTED }}>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
                <p>Near Civil Hospital, E Ward,<br />Kolhapur, Maharashtra 416003</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: PRIMARY }} />
                <p>+91 97654 32109</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: PRIMARY }} />
                <div>
                  <p>Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p>Sun: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-2xl p-8 flex flex-col justify-center text-center text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            <p className="text-lg font-bold mb-3">Want this website?</p>
            <p className="text-sm mb-6 opacity-80">
              Get a professional clinic website with doctor profiles, services list and appointment booking.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{ backgroundColor: "#fff", color: PRIMARY }}
            >
              Chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <DemoFooter
        businessName="Arogya Clinic"
        bgColor={BG_ALT}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={PRIMARY}
      />
    </div>
  );
}
