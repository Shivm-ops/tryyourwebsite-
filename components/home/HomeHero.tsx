import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

export default function HomeHero() {
  return (
    <section className="bg-stone-50 py-20 md:py-32 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <Sparkles className="w-3 h-3" />
          Kolhapur&apos;s demo-first web studio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          See your business website
          <span className="text-green-700 block">before you pay for it.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pick your business category below. See a full working demo designed
          for your industry. Then talk to us to make it truly yours — with your
          brand, your content, your prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demos"
            className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-green-800 transition-colors"
          >
            View demos
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-green-700 text-green-700 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors"
          >
            WhatsApp us
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          6 industries covered · All demos free to view · Based in Kolhapur, Maharashtra
        </p>
      </div>
    </section>
  );
}
