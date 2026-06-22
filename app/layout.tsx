import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ChatbotWidget from "@/components/shared/ChatbotWidget";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Webrise Studio — See your business website before you pay",
  description:
    "Kolhapur's demo-first web studio. See a full working demo website for your business category before paying. Bakery, Salon, Restaurant, Clinic, Gym, Real Estate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
