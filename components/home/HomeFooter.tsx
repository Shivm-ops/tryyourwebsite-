import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/config";

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-white font-semibold text-base mb-2">Webrise Studio</p>
            <p className="text-sm leading-relaxed text-gray-500">
              See your business website before you pay for it. Kolhapur&apos;s demo-first web studio.
            </p>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-3">Quick links</p>
            <div className="space-y-2 text-sm">
              <a href="/#demos" className="block hover:text-white transition-colors">View demos</a>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <a href="/#team" className="block hover:text-white transition-colors">Our team</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-medium mb-3">Contact us</p>
            <div className="space-y-2 text-sm">
              <p>{WHATSAPP_NUMBER}</p>
              <p>shivampatil2309@gmail.com</p>
              <p>Kolhapur, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2025 Webrise Studio. All rights reserved.</p>
          <p>Built with care in Kolhapur 🏙️</p>
        </div>
      </div>
    </footer>
  );
}
