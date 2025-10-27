// src/components/meetup/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animations/fade";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-1 text-sm font-medium tracking-wide text-gray-700 backdrop-blur">
    {children}
  </span>
);

export default function HeroSection({
  city,
  event,
}: {
  city: any;
  event: any;
}) {
  return (
    <section className="py-16 sm:py-20 text-center bg-neutral-900 text-white">
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-6"
      >
        <Badge>Hosted by {city.meta.circleName}</Badge>
        <h1 className="max-w-3xl text-5xl font-serif font-light tracking-tight leading-tight md:text-6xl text-white">
          {event.name}
        </h1>
        <p className="text-lg md:text-xl text-neutral-300">
          {event.dateHuman} • {event.timeHuman}
        </p>
        <p className="text-neutral-400">
          {event.venue} • {event.address}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={event.mapLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow transition"
          >
            Open in Maps
          </a>
        </div>
        <div className="flex justify-center pt-4">
          <img
            src={event.coverImage}
            alt={event.name}
            className="w-full max-w-4xl rounded-2xl object-cover shadow-md object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
