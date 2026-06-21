"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, ChevronRight, User, Bot } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const quickReplies = [
  { label: "✨ View business demo templates", key: "demo" },
  { label: "💰 Packages & Pricing?", key: "pricing" },
  { label: "⏳ Project launch timeline?", key: "timeline" },
  { label: "💬 Talk to a human on WhatsApp", key: "human" },
];

const botResponses: Record<string, string> = {
  demo: "We have fully responsive, stunning templates for Bakery, Salon, Restaurant, Clinic, Gym, and Real Estate. You can customize them with your own brand, text, and photos. Go back to our home page to see them!",
  pricing: "Our packages are highly transparent:\n• Starter Site: ₹8,999 (Static, 3 Pages)\n• Growth Site: ₹18,999 (Dynamic, Admin Panel)\n• E-commerce: ₹34,999 (Full Store & Payments)\nNo hidden maintenance fees!",
  timeline: "We pride ourselves on speed! Most standard business websites are built and deployed within 7 to 14 working days. Custom apps or e-commerce take 3 to 4 weeks.",
  human: "REDIRECT_WHATSAPP",
};

export default function ChatbotWidget({ accentColor = "#16A34A" }: { accentColor?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hello! Welcome to TryYourWebsite. I am your AI assistant. How can I help you shape your online business today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string, key?: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    
    // Trigger typing state
    setIsTyping(true);

    const responseKey = key || "default";
    const response = botResponses[responseKey] || "That sounds great! I'm currently in Demo mode, but our team is ready to answer this. Connect with us directly on WhatsApp for full specifications!";

    setTimeout(() => {
      setIsTyping(false);
      if (response === "REDIRECT_WHATSAPP") {
        const botMsg: Message = {
          id: Date.now() + 1,
          from: "bot",
          text: "Opening WhatsApp... You are being connected directly to our founders. Say hi!",
        };
        setMessages((prev) => [...prev, botMsg]);
        window.open(WHATSAPP_URL, "_blank");
      } else {
        const botMsg: Message = { id: Date.now() + 1, from: "bot", text: response };
        setMessages((prev) => [...prev, botMsg]);
      }
    }, 1200); // 1.2s typing lag to make it feel natural
  };

  return (
    <>
      {/* Floating launcher with pulse effect */}
      <div className="fixed bottom-6 left-6 z-50">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping" />
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none border border-white/20 cursor-pointer"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, #0F172A)`,
          }}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <MessageCircle className="w-5 h-5 text-white animate-bounce" />
          )}
        </button>
      </div>

      {/* Glassmorphic Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 left-6 z-50 w-[350px] max-w-[90vw] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          style={{ 
            height: "500px", 
            maxHeight: "80vh",
            backgroundColor: "rgba(255, 255, 255, 0.85)", 
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          role="dialog"
          aria-label="TryYourWebsite Assistant Chat"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-white/20"
            style={{ 
              background: `linear-gradient(135deg, ${accentColor}dd, #1E293Bdd)`,
              backdropFilter: "blur(5px)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <p className="text-white text-sm font-bold tracking-wide">Assistant</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-white/80 text-[10px] uppercase font-bold tracking-wider">Ready to Build</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="p-1 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-2.5 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-emerald-600" />
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl text-xs max-w-[78%] leading-relaxed shadow-sm whitespace-pre-line ${
                    msg.from === "user"
                      ? "text-white rounded-tr-none font-medium"
                      : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                  }`}
                  style={msg.from === "user" ? { background: `linear-gradient(135deg, ${accentColor}, #0F172A)` } : {}}
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-5 py-3 border-t border-slate-100/50 bg-white/40">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Frequently Asked</p>
              <div className="flex flex-col gap-1.5">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.key}
                    onClick={() => sendMessage(qr.label, qr.key)}
                    className="flex items-center justify-between text-left px-3.5 py-2 rounded-xl bg-white border border-slate-100 hover:border-emerald-300 hover:text-emerald-700 text-xs text-slate-700 transition-all shadow-sm hover:translate-x-1 cursor-pointer"
                  >
                    <span>{qr.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Send Input Bar */}
          <div className="p-4 border-t border-white/20 bg-white/60 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && input.trim() && sendMessage(input)}
              placeholder="Type or select a question..."
              className="flex-1 text-xs border border-slate-200 rounded-full px-4 py-3 outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-inner"
            />
            <button
              onClick={() => input.trim() && sendMessage(input)}
              className="flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
              style={{ backgroundColor: accentColor }}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
