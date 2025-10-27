// src/components/meetup/HeaderSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderSection({ city }: { city: string }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/90 backdrop-blur text-neutral-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <button
          onClick={() => navigate(`/city/${encodeURIComponent(city)}`)}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <div className="h-6 w-6 rounded bg-neutral-900" />
          <span className="font-extrabold tracking-wide">SKED</span>
        </button>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#rsvp" className="hover:opacity-70">
            RSVP
          </a>
          <a href="#agenda" className="hover:opacity-70">
            Agenda
          </a>
          <a href="#faq" className="hover:opacity-70">
            FAQ
          </a>
        </nav>
        <a
          href="#rsvp"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Reserve seat
        </a>
      </div>
    </header>
  );
}
