import { AlertTriangle } from "lucide-react";

interface Props {
  bgColor?: string;
  textColor?: string;
}

export default function DisclaimerBanner({
  bgColor = "#1a1a1a",
  textColor = "#f0c08a",
}: Props) {
  return (
    <div
      className="w-full py-2 px-4 text-center text-xs leading-relaxed"
      style={{ backgroundColor: bgColor, color: textColor }}
      role="banner"
    >
      <AlertTriangle className="inline w-3 h-3 mr-1 mb-0.5" aria-hidden="true" />
      <strong>हे फक्त Demo आहे</strong> — This is a <strong>DEMO</strong>{" "}
      website only. No real business data, photos, or names are used without
      permission. Not published or live.{" "}
      <a href="#" className="underline hover:opacity-80 ml-1" style={{ color: textColor }}>
        Infringement / Takedown policy
      </a>
    </div>
  );
}
