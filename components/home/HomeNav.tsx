"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-base font-semibold text-gray-900 tracking-tight">
          TryYourWebsite
          <span className="text-green-700">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#demos" className="hover:text-gray-900 transition-colors">Demos</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <Link href="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
          <a href="#team" className="hover:text-gray-900 transition-colors">Team</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/917499404640"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-green-800 transition-colors"
          >
            Book a Demo
          </a>
        </div>
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-3">
          <a href="#demos" className="block text-sm text-gray-600" onClick={() => setOpen(false)}>Demos</a>
          <a href="#how" className="block text-sm text-gray-600" onClick={() => setOpen(false)}>How it works</a>
          <Link href="/pricing" className="block text-sm text-gray-600" onClick={() => setOpen(false)}>Pricing</Link>
          <a href="#team" className="block text-sm text-gray-600" onClick={() => setOpen(false)}>Team</a>
          <a
            href="https://wa.me/917499404640"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-full text-center"
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}
