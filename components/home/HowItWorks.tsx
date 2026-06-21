import { Eye, Palette, Zap } from "lucide-react";

const steps = [
  {
    icon: Eye,
    number: "01",
    title: "Pick your category",
    desc: "Choose from 6 business types. Each has a fully designed, realistic demo website built for your industry.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Explore the demo",
    desc: "Scroll through a complete website — hero, about, products/services, gallery, pricing, and contact sections.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Talk to us, make it yours",
    desc: "WhatsApp us to get started. We'll swap in your brand, your content, and your products. Live in 7–14 days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            From demo to live website in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-700 mx-auto mb-5">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-green-700 tracking-widest mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
