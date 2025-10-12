import { Users, Smartphone } from "lucide-react";
import { StackSection } from "./Sections";

export default function CommunityAndApp() {
  const items = [
    {
      icon: Users,
      title: "Community vibes",
      desc: "City‑based groups with weekly sessions, socials, pop‑ups, and skill‑shares.",
    },
    {
      icon: Smartphone,
      title: "Sked app (coming soon)",
      desc: "Discover cafés, book seats, see perks, and RSVP to city events — all in one place.",
    },
  ];
  return (
    <StackSection bg="bg-zinc-50">
      <div id="community-app" className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Community & Sked app
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-md border border-zinc-200 p-6"
            >
              <it.icon className="w-6 h-6 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {it.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StackSection>
  );
}
