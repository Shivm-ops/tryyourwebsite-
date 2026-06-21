"use client";
import { useEffect, useState } from "react";

type DemoData = {
  businessName?: string | null;
  photo?: string | null;
};

export default function DemoPhotoHero({
  overlayOpacity = 0.72,
  fallbackUrl,
}: {
  overlayOpacity?: number;
  fallbackUrl?: string;
}) {
  const [data, setData] = useState<DemoData | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("demoData");
      if (raw) setData(JSON.parse(raw));
    } catch {}
  }, []);

  const photoUrl = data?.photo || fallbackUrl;

  if (!photoUrl) return null;

  return (
    <>
      <img
        src={photoUrl}
        alt="Your business"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute inset-0"
        style={{ zIndex: 2, backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
      {data?.businessName && (
        <div
          className="absolute left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap backdrop-blur-sm border border-white/20"
          style={{
            zIndex: 25,
            top: "5.5rem",
            color: "rgba(255,255,255,0.92)",
            backgroundColor: "rgba(255,255,255,0.12)",
          }}
        >
          Previewing for: {data.businessName}
        </div>
      )}
    </>
  );
}
