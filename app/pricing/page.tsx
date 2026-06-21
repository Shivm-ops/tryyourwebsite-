import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";
import { pricingPlans, addons, WHATSAPP_URL } from "@/lib/config";
import { Check, MessageCircle, Zap } from "lucide-react";

export const metadata = {
  title: "Pricing — TryYourWebsite",
  description: "Transparent pricing for business websites in Kolhapur. Static, dynamic, e-commerce and custom packages.",
};

export default function PricingPage() {
  return (
    <main>
      <HomeNav />

      {/* Hero */}
      <section className="bg-stone-50 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
          No hidden fees. No surprises. Pay once, own your website. All packages
          include hosting for the first year.
        </p>
        <p className="text-sm text-green-700 font-medium">
          Based in Kolhapur · All prices in INR · GST as applicable
        </p>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col ${
                  plan.popular
                    ? "border-2 shadow-lg ring-1 ring-gray-900/5"
                    : "border-stone-200"
                }`}
                style={plan.popular ? { borderColor: plan.color } : {}}
              >
                {plan.popular && (
                  <div
                    className="text-xs font-bold text-white px-3 py-1 rounded-full w-fit mb-4"
                    style={{ backgroundColor: plan.color }}
                  >
                    Most popular
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    {plan.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold" style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                    {plan.duration && (
                      <span className="text-sm text-gray-400">{plan.duration}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold py-3 rounded-full transition-all hover:opacity-90"
                  style={
                    plan.popular
                      ? { backgroundColor: plan.color, color: "#fff" }
                      : {
                          border: `2px solid ${plan.color}`,
                          color: plan.color,
                        }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Optional add-ons</h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Enhance your website with these services — add at any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-white border border-stone-200 rounded-xl p-5 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-green-700" />
                  <span className="text-sm font-medium text-gray-800">{addon.name}</span>
                </div>
                <span className="text-sm font-bold text-green-700">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I pay all at once?",
                a: "We typically take 50% upfront to start the project and 50% on delivery. For custom projects we can discuss milestone payments.",
              },
              {
                q: "What's included in '1 year hosting'?",
                a: "We set up and manage your hosting on a reliable server for the first 12 months. After that, renewal is ₹2,999–₹4,999/year depending on traffic.",
              },
              {
                q: "Can I update the website myself?",
                a: "Business and higher plans come with a simple admin panel where you can update text, images, and products without any technical knowledge.",
              },
              {
                q: "Do you serve businesses outside Kolhapur?",
                a: "Yes! We work with businesses across Maharashtra and all of India. Most of our work is done remotely — meetings happen over WhatsApp and video calls.",
              },
              {
                q: "What if I need a category not listed in the demos?",
                a: "WhatsApp us — we build custom websites for any business type. The demos are examples of our quality, not a limit on what we can do.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-stone-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-700 py-14 px-4 text-center">
        <MessageCircle className="w-10 h-10 text-green-200 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3">Not sure which plan?</h2>
        <p className="text-green-100 mb-8 max-w-md mx-auto">
          Tell us about your business on WhatsApp and we&apos;ll recommend the right package for you — no pressure.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors"
        >
          Chat with us for free
        </a>
      </section>

      <HomeFooter />
    </main>
  );
}
