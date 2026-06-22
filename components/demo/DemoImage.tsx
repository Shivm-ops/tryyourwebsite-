"use client";
import { useState, useEffect, useRef } from "react";
import { Camera } from "lucide-react";

function resizeDemoImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.onload = () => {
        const MAX = 1600;
        const scale = Math.min(1, MAX / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.92));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

interface DemoImageProps {
  /** Unique key per image slot. E.g. "bakery_product_1", "bakery_gallery_2" */
  storageKey: string;
  /** Default image URL shown before any upload */
  fallbackSrc: string;
  alt: string;
  /** Extra CSS classes for the <img> tag */
  className?: string;
  /**
   * When true the image fills the parent element (position:absolute inset-0).
   * The parent must have position:relative and a defined height.
   */
  fill?: boolean;
  style?: React.CSSProperties;
}

/**
 * Drop-in replacement for <Image> / <img> on demo pages.
 * Hover any photo → "📷 Change Photo" overlay appears → click → file picker opens.
 * The chosen image is saved to sessionStorage so it persists across page scrolls.
 */
export default function DemoImage({
  storageKey,
  fallbackSrc,
  alt,
  className = "",
  fill = false,
  style,
}: DemoImageProps) {
  const [src, setSrc] = useState<string>(fallbackSrc);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Restore saved photo on mount */
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(`demoImg_${storageKey}`);
      if (saved) setSrc(saved);
    } catch {}
  }, [storageKey]);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    setLoading(true);
    const resized = await resizeDemoImage(file);
    try { sessionStorage.setItem(`demoImg_${storageKey}`, resized); } catch {}
    setSrc(resized);
    setLoading(false);
  }

  const wrapperClass = fill
    ? "absolute inset-0 group cursor-pointer"
    : "relative group cursor-pointer w-full h-full";

  return (
    <div className={wrapperClass} onClick={() => inputRef.current?.click()}>
      {/* The actual image */}
      <img
        src={src}
        alt={alt}
        className={
          fill
            ? `absolute inset-0 w-full h-full object-cover ${className}`
            : `w-full h-full object-cover ${className}`
        }
        style={style}
      />

      {/* Hover / loading overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 pointer-events-none z-10 ${
          loading ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: "rgba(0,0,0,0.52)" }}
      >
        {loading ? (
          <div className="w-7 h-7 border-[3px] border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Camera className="w-7 h-7 text-white mb-2 drop-shadow" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-black/40 px-3 py-1 rounded-full">
              Change Photo
            </span>
          </>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onClick={(e) => e.stopPropagation()}
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (f) await handleFile(f);
          e.target.value = "";
        }}
      />
    </div>
  );
}
