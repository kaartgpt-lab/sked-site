import React from "react";

export default function Header({
  city,
  circleName,
}: {
  city: string;
  circleName: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Sked • {city}
          </p>
          <h1 className="text-xl font-semibold">{circleName}</h1>
        </div>
        <nav className="flex items-center gap-2">
          <a
            href="#meetups"
            className="text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50"
          >
            Meetups
          </a>
          <a
            href="#gigs"
            className="text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50"
          >
            Gigs
          </a>
          <a
            href="#cafes"
            className="text-sm px-3 py-1.5 rounded-full border hover:bg-gray-50"
          >
            Partner Cafés
          </a>
          <a
            href="#join"
            className="text-sm px-3 py-1.5 rounded-full border bg-gray-900 text-white"
          >
            Join Circle
          </a>
        </nav>
      </div>
    </header>
  );
}
