import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import DemoNav from "@/components/demo/DemoNav";
import DemoFooter from "@/components/demo/DemoFooter";
import DemoStamp from "@/components/shared/DemoStamp";
import { WHATSAPP_URL } from "@/lib/config";
import { Shield, Users, Clock, Lock, Star, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import DemoPhotoHero from "@/components/demo/DemoPhotoHero";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const BG = "#F8FAFC";       // Very soft light slate
const BG_ALT = "#FFFFFF";   // Pure white
const PRIMARY = "#0F172A";  // Deep slate navy
const ACCENT = "#0EA5E9";   // Medical cyan blue
const ACCENT_GREEN = "#10B981"; // Healthy emerald green
const TEXT = "#1E293B";     // Charcoal text
const MUTED = "#64748B";    // Cool grey muted text
const BORDER = "#E2E8F0";   // Slate border

const stats = [
  { value: "15+", label: "Years of care" },
  { value: "5,000+", label: "Happy patients" },
  { value: "3", label: "Expert doctors" },
  { value: "100%", label: "Confidentiality" },
];

const doctors = [
  {
    name: "Dr. Priya Desai",
    qual: "MBBS, MD (Medicine)",
    spec: "General Physician",
    exp: "15 years experience",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Dr. Rohan Kulkarni",
    qual: "MBBS, DM (Cardiology)",
    spec: "Cardiologist",
    exp: "12 years experience",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Dr. Anita Sharma",
    qual: "MBBS, MD (Pediatrics)",
    spec: "Pediatrician",
    exp: "10 years experience",
    img: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=400&h=400&fit=crop&q=80",
  },
];

const services = [
  { name: "General Consultation", price: "₹300", tag: "Routine" },
  { name: "ECG Monitoring", price: "₹299", tag: "Cardiac" },
  { name: "Blood Profile Tests", price: "from ₹199", tag: "Diagnostics" },
  { name: "Digital X-Ray", price: "₹399", tag: "Imaging" },
  { name: "Ultrasound Scanning", price: "₹799", tag: "Diagnostics" },
  { name: "Child Vaccination", price: "Per dose", tag: "Pediatric" },
  { name: "Diabetes Management", price: "Custom plan", tag: "Chronic Care" },
  { name: "Physiotherapy Session", price: "₹499", tag: "Recovery" },
];

const testimonials = [
  {
    text: "Dr. Desai is incredibly thorough and patient. Best GP I've ever visited in Kolhapur. She took the time to explain my treatment plan.",
    name: "Sunita R.",
    role: "Regular Patient",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    text: "The clinic is immaculate, modern, and the scheduling is very professional. No long wait times. The staff are compassionate.",
    name: "Rahul M.",
    role: "Cardiology Patient",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    text: "Quick appointment, clean rooms and friendly behavior. Dr. Kulkarni explained my diagnosis very clearly and answered all questions.",
    name: "Meera K.",
    role: "Mother of 4yo Patient",
    stars: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
];

const whyUs = [
  { icon: Shield, label: "Trusted Care", desc: "15+ Years of family healthcare" },
  { icon: Users, label: "Family Focused", desc: "Dedicated pediatric & adult care" },
  { icon: Clock, label: "Fast Access", desc: "Same-day urgent appointments" },
  { icon: Lock, label: "Secure Records", desc: "100% private patient history" },
];

export default function ClinicPage() {
  return (
    <div className={`${jakarta.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`} style={{ backgroundColor: BG, color: TEXT }}>
      <DisclaimerBanner bgColor="#0EA5E9" textColor="#FFFFFF" />
      <DemoNav
        businessName="Arogya Clinic"
        bgColor={BG_ALT}
        textColor={PRIMARY}
        accentColor={ACCENT}
        borderColor={BORDER}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        <DemoPhotoHero fallbackUrl="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" overlayOpacity={0.4} />
        <DemoStamp />
        <div className="relative z-20 max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 md:p-14 rounded-3xl border border-slate-200/50 shadow-2xl">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>
            Kolhapur · Since 2008
          </p>
          <h1
            className="font-[family-name:var(--font-jakarta)] text-4xl md:text-6xl font-extrabold leading-[1.15] mb-6"
            style={{ color: PRIMARY }}
          >
            Your family&apos;s health,
            <br />
            <span style={{ color: ACCENT }}>our absolute priority.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: MUTED }}>
            Trusted, comprehensive family healthcare in Kolhapur. Expert specialized doctors, state-of-the-art diagnostics, and compassionate clinical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT }}
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 bg-white hover:bg-slate-50 transition-colors"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 shadow-inner" style={{ backgroundColor: PRIMARY }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-200/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Expert Care</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold mb-3" style={{ color: PRIMARY }}>
              Meet Our Medical Panel
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: MUTED }}>Highly qualified clinicians dedicated to keeping your family healthy and happy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="rounded-3xl overflow-hidden border bg-slate-50/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: BORDER }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="font-bold text-lg" style={{ color: PRIMARY }}>{doc.name}</p>
                  <p className="text-xs font-extrabold text-sky-600 mb-2 uppercase tracking-wide">{doc.qual}</p>
                  <p className="text-sm font-semibold mb-1" style={{ color: TEXT }}>{doc.spec}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{doc.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Clinics & Pricing</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-4xl font-extrabold" style={{ color: PRIMARY }}>
              Services & Diagnostics
            </h2>
            <p className="text-base mt-2" style={{ color: MUTED }}>Transparent fees with zero hidden charges. All laboratory tests available.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="flex justify-between items-center p-5 rounded-2xl bg-white shadow-sm border hover:shadow-md transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div>
                  <span className="text-sm font-bold block" style={{ color: PRIMARY }}>{svc.name}</span>
                  <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full mt-1 bg-sky-50 text-sky-600 uppercase tracking-wider">{svc.tag}</span>
                </div>
                <span className="text-sm font-extrabold" style={{ color: ACCENT_GREEN }}>{svc.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-slate-50">
              <Image 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80" 
                alt="Clinic Care" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-5 rounded-2xl shadow-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <div>
                <p className="text-sm font-bold">ISO Certified</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Safety Standards</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>About Arogya</p>
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl font-extrabold mb-5" style={{ color: PRIMARY }}>
              15 Years of Compassionate Care for Kolhapur Families
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Arogya Clinic has been a trusted pillar of family healthcare in Kolhapur since 2008. Founded by Dr. Priya Desai, we started with a singular mission: to make premium quality medical consultation accessible, respectful, and compassionate.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Today, we consult over 5,000 patients annually. Equipped with digital X-Ray facilities, standard cardiac testing setups, and a clean environment, we ensure all your primary healthcare needs are met under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-center mb-16" style={{ color: PRIMARY }}>
            Why Families Choose Arogya Clinic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-sm border hover:shadow-md transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <p className="text-sm font-extrabold mb-2" style={{ color: PRIMARY }}>{item.label}</p>
                <p className="text-xs" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-center mb-16" style={{ color: PRIMARY }}>
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-3xl bg-slate-50 border relative hover:shadow-lg transition-shadow"
                style={{ borderColor: BORDER }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: TEXT }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full relative overflow-hidden bg-slate-200">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: PRIMARY }}>{t.name}</p>
                    <p className="text-[10px]" style={{ color: MUTED }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-24 px-4" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-3xl p-10 bg-white border shadow-sm" style={{ borderColor: BORDER }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>Clinic Hours & Info</p>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold" style={{ color: PRIMARY }}>Address</p>
                  <p style={{ color: MUTED }}>Near Civil Hospital, E Ward,<br />Kolhapur, Maharashtra 416003</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold" style={{ color: PRIMARY }}>Phone Line</p>
                  <p className="text-base font-bold" style={{ color: ACCENT_GREEN }}>+91 97654 32109</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <div>
                  <p className="font-bold" style={{ color: PRIMARY }}>Consultation Hours</p>
                  <p style={{ color: MUTED }}>Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p style={{ color: MUTED }}>Sunday: 9:00 AM – 1:00 PM</p>
                </div>
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
                Get a clean, professional clinic website with custom doctor profiles, transparent services list, and a seamless booking button.
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
        businessName="Arogya Clinic"
        bgColor={BG_ALT}
        borderColor={BORDER}
        textColor={TEXT}
        accentColor={ACCENT}
      />
    </div>
  );
}
