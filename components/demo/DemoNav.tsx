import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  businessName: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
}

export default function DemoNav({ businessName, bgColor, textColor, accentColor, borderColor }: Props) {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 py-3"
      style={{ backgroundColor: bgColor, borderBottom: `1px solid ${borderColor}` }}
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
        style={{ color: textColor, opacity: 0.65 }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        All demos
      </Link>
      <span className="text-sm font-bold tracking-wide" style={{ color: accentColor }}>
        {businessName.toUpperCase()}
      </span>
      <a
        href="https://wa.me/917499404640"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
        style={{ backgroundColor: accentColor, color: bgColor }}
      >
        Get this website
      </a>
    </nav>
  );
}
