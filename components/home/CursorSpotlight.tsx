"use client";
import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      // Update position directly to avoid React state re-renders for buttery-smooth 60fps movement
      glowRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-emerald-400/10 via-teal-400/5 to-transparent blur-[110px] z-0 pointer-events-none opacity-0 md:opacity-100 will-change-transform transition-opacity duration-300"
      style={{
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    />
  );
}
