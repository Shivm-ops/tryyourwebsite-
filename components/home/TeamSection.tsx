import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Shivam Patil",
    role: "Founder & Owner",
    email: "shivampatil2309@gmail.com",
    bio: "Turning Kolhapur's local businesses into premium digital brands.",
    color: "#059669",
    img: "/shivam-photo-cropped.jpeg"
  },
  {
    name: "Sahil Patil",
    role: "Full Stack Developer",
    email: null,
    bio: "Building the engine that powers every client website we deliver.",
    color: "#0284C7",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80"
  },
  {
    name: "Shweta Jadhav",
    role: "DevOps Engineer",
    email: null,
    bio: "Keeping every website fast, secure, and always live.",
    color: "#0D9488",
    img: "/shweta-photo-cropped.jpeg"
  },
  {
    name: "Coming Soon",
    role: "We are growing!",
    email: null,
    bio: "This spot is reserved for the next developer joining our mission.",
    color: "#64748B",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop&q=80"
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 px-4 bg-transparent border-t border-slate-100/50">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 uppercase mb-3">Kolhapur Creators</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Meet the Team</h2>
          <p className="text-slate-500 max-w-sm mx-auto mt-3 font-medium">
            A focused team engineering high-conversion web solutions.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center p-6 rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar */}
                <div 
                  className="w-20 h-20 rounded-2xl mx-auto mb-5 overflow-hidden shadow-inner border-2 transition-transform duration-500 group-hover:scale-105"
                  style={{ borderColor: `${member.color}25` }}
                >
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={80} 
                    height={80} 
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="font-extrabold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
                  {member.name}
                </h3>
                
                <span 
                  className="inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-4"
                  style={{ backgroundColor: `${member.color}15`, color: member.color }}
                >
                  {member.role}
                </span>

                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Email Link */}
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 hover:text-emerald-800 transition-colors border-t pt-4"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{member.email}</span>
                </a>
              ) : (
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-t pt-4">
                  Active Member
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
