"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Camera } from "lucide-react";
import { categories } from "@/lib/config";

type Category = (typeof categories)[0];

type Props = {
  category: Category;
  onClose: () => void;
};

function resizeImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.onload = () => {
        const MAX = 1200;
        const scale = Math.min(1, MAX / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export default function DemoRequestModal({ category, onClose }: Props) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [businessName, setBusinessName] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    setLoading(true);
    const resized = await resizeImage(file);
    setPhoto(resized);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      sessionStorage.setItem(
        "demoData",
        JSON.stringify({ businessName: businessName.trim() || null, photo })
      );
    } catch {}
    router.push(`/demo/${category.slug}`);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div
          className="px-7 pt-7 pb-6 flex items-start justify-between"
          style={{ backgroundColor: category.bgPreview }}
        >
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1"
              style={{ color: category.accentColor }}
            >
              {category.name}
            </p>
            <h2 className="text-xl font-bold text-white leading-snug">
              See your website<br />with your own photo
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white mt-0.5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5">
          {/* Business name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business name
            </label>
            <input
              type="text"
              placeholder="e.g. Sharma Bakery, City Salon…"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
          </div>

          {/* Photo upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business photo{" "}
              <span className="text-gray-400 font-normal">(becomes the hero background)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            {photo ? (
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ height: 160 }}
                onClick={() => fileRef.current?.click()}
              >
                <img src={photo} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold bg-black/50 px-4 py-2 rounded-full">
                    Change photo
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const f = e.dataTransfer.files[0];
                  if (f) handleFile(f);
                }}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                  dragging
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-green-400 hover:bg-green-50/40"
                }`}
              >
                {loading ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-400">Processing…</p>
                  </div>
                ) : (
                  <>
                    <Camera className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-500">Click or drag to upload</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP — any size</p>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-green-700 hover:bg-green-800 active:scale-[0.98] transition-all"
          >
            Show me my website preview →
          </button>

          <p className="text-center text-xs text-gray-400 pb-1">
            No sign-up · No payment · 100% free
          </p>
        </form>
      </div>
    </div>
  );
}
