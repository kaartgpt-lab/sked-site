import { Wifi, Plug, Users, MapPin } from "lucide-react";
import { StackSection } from "./Sections";

export default function MembershipDetails() {
  const points = [
    {
      icon: Wifi,
      title: "Curated Wi‑Fi cafés",
      desc: "Handpicked venues with stable internet and good seating.",
    },
    {
      icon: Plug,
      title: "Charging points",
      desc: "Power near seats so you can go heads‑down for hours.",
    },
    {
      icon: Users,
      title: "Weekly co‑working",
      desc: "Show up, focus with the circle, and ship more consistently.",
    },
    {
      icon: MapPin,
      title: "City circles",
      desc: "Meet founders, freelancers, and WFH folks around you.",
    },
  ];
  return (
    <StackSection bg="bg-white">
      <div id="membership" className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Membership details
        </h2>
        <p className="mt-2 text-zinc-700 max-w-2xl">
          Join the circle in your city, access work‑friendly cafés, and enjoy
          member‑only perks. Public pricing is hidden for now — apply to get in.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-zinc-200 p-6"
            >
              <p.icon className="w-6 h-6 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StackSection>
  );
}
