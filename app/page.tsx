import HomeNav from "@/components/home/HomeNav";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import HowItWorks from "@/components/home/HowItWorks";
import TeamSection from "@/components/home/TeamSection";
import HomeFooter from "@/components/home/HomeFooter";
import { WHATSAPP_URL } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <HomeNav />
      <HomeHero />
      <CategoryGrid />
      <HowItWorks />
      <TeamSection />
      {/* CTA band */}
      <section className="bg-green-700 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to get your own website?
        </h2>
        <p className="text-green-100 mb-8 max-w-lg mx-auto">
          View a demo, then WhatsApp us. We&apos;ll design, build & deliver your website in 7–14 days.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors"
        >
          Chat with us on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
      <HomeFooter />
    </main>
  );
}
