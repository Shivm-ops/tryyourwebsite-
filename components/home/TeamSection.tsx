import { Mail } from "lucide-react";

const team = [
  {
    initials: "SP",
    name: "Shivam Patil",
    role: "Founder & Owner",
    email: "shivampatil2309@gmail.com",
    bio: "Turning Kolhapur's local businesses into premium digital brands.",
    color: "#15803D",
  },
  {
    initials: "SP",
    name: "Sahil Patil",
    role: "Full Stack Developer",
    email: null,
    bio: "Building the engine that powers every client website we deliver.",
    color: "#1C3144",
  },
  {
    initials: "SJ",
    name: "Shweta Jadhav",
    role: "DevOps Engineer",
    email: null,
    bio: "Keeping every website fast, secure, and always live.",
    color: "#0E6670",
  },
  {
    initials: "?",
    name: "Coming soon",
    role: "Team member",
    email: null,
    bio: "We're growing! This spot is reserved for the next great addition.",
    color: "#9CA3AF",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the team</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A small, focused team building premium websites for Kolhapur&apos;s businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="text-center p-6 rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="font-semibold text-gray-900 mb-0.5">{member.name}</h3>
              <p className="text-xs font-medium mb-3" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1 text-xs text-green-700 hover:underline"
                >
                  <Mail className="w-3 h-3" />
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
