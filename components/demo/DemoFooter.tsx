import { WHATSAPP_URL } from "@/lib/config";

interface Props {
  businessName: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
}

export default function DemoFooter({ businessName, bgColor, borderColor, textColor, accentColor }: Props) {
  return (
    <footer style={{ backgroundColor: bgColor, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm font-bold tracking-widest mb-1" style={{ color: accentColor }}>
              {businessName.toUpperCase()}
            </p>
            <p className="text-xs" style={{ color: textColor, opacity: 0.45 }}>
              This is a demo website created by TryYourWebsite, Kolhapur.
              Not a real business website.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full whitespace-nowrap"
            style={{ backgroundColor: accentColor, color: bgColor }}
          >
            Want this website? Chat with us →
          </a>
        </div>
        <div className="mt-6 pt-4 text-center text-xs" style={{ borderTop: `1px solid ${borderColor}`, color: textColor, opacity: 0.3 }}>
          Demo by TryYourWebsite · Kolhapur, Maharashtra · +91 74994 04640
        </div>
      </div>
    </footer>
  );
}
