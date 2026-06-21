"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const quickReplies = [
  { label: "I want a demo for my business", key: "demo" },
  { label: "What's the pricing?", key: "pricing" },
  { label: "How long does it take?", key: "timeline" },
  { label: "Talk to a human", key: "human" },
];

const botResponses: Record<string, string> = {
  demo: "Great! We have demos for Bakery, Salon, Restaurant, Clinic, Gym, and Real Estate. Go back to the home page and click 'View Demo' for your category — then contact us to get your own!",
  pricing:
    "Our packages start from ₹8,999 for a static website, ₹18,999 for a dynamic site with admin panel, and ₹34,999 for e-commerce. Check our full Pricing page for details!",
  timeline:
    "Most websites are ready in 7–14 working days. E-commerce and custom projects take 3–4 weeks. We keep you updated at every step!",
  human: "REDIRECT_WHATSAPP",
};

export default function ChatbotWidget({ accentColor = "#15803D" }: { accentColor?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hi! I'm the TryYourWebsite assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string, key?: string) => {
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    const responseKey = key || "demo";
    const response = botResponses[responseKey] || "That's a great question! Please reach out to us on WhatsApp for a detailed answer.";

    if (response === "REDIRECT_WHATSAPP") {
      setTimeout(() => {
        const botMsg: Message = {
          id: Date.now() + 1,
          from: "bot",
          text: "Connecting you to our team on WhatsApp right now!",
        };
        setMessages((prev) => [...prev, botMsg]);
        window.open(WHATSAPP_URL, "_blank");
      }, 500);
    } else {
      setTimeout(() => {
        const botMsg: Message = { id: Date.now() + 1, from: "bot", text: response };
        setMessages((prev) => [...prev, botMsg]);
      }, 600);
    }
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ backgroundColor: accentColor }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 left-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: "480px", backgroundColor: "#fff" }}
          role="dialog"
          aria-label="Chat widget"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: accentColor }}
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-white" />
              <div>
                <p className="text-white text-sm font-semibold leading-none">Chat with us</p>
                <p className="text-white text-xs opacity-75 mt-0.5">Usually replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white opacity-75 hover:opacity-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "200px", maxHeight: "260px" }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
                    msg.from === "user"
                      ? "text-white rounded-br-sm"
                      : "bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm"
                  }`}
                  style={msg.from === "user" ? { backgroundColor: accentColor } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-3 pt-2 pb-1 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-2">Quick replies:</p>
              <div className="flex flex-col gap-1">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.key}
                    onClick={() => sendMessage(qr.label, qr.key)}
                    className="flex items-center justify-between text-left px-3 py-2 rounded-lg bg-white border border-gray-100 text-xs text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    {qr.label}
                    <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 p-3 bg-white border-t border-gray-100">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && input.trim() && sendMessage(input)}
              placeholder="Type your message..."
              className="flex-1 text-xs border border-gray-200 rounded-full px-3 py-2 outline-none focus:border-gray-400 bg-gray-50"
            />
            <button
              onClick={() => input.trim() && sendMessage(input)}
              className="flex items-center justify-center w-8 h-8 rounded-full text-white flex-shrink-0"
              style={{ backgroundColor: accentColor }}
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
