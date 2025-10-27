// src/components/meetup/AgendaSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animations/fade";

const AgendaItem = ({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) => (
  <div className="rounded-xl border border-black/10 bg-white p-4 text-left text-neutral-900">
    <div className="text-sm font-medium text-neutral-500">{time}</div>
    <div className="text-lg font-serif font-light">{title}</div>
    <div className="text-neutral-700 text-sm mt-1">{desc}</div>
  </div>
);

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-12 sm:py-16 text-center bg-white">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <h2 className="text-4xl font-serif font-light tracking-tight">
          Agenda
        </h2>
        <p className="text-neutral-600 mt-2">
          A simple structure to make the most of 4 focused hours.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <AgendaItem
            time="Start"
            title="Arrivals & seating"
            desc="Grab coffee, meet your table, share what you're working on."
          />
          <AgendaItem
            time="+20 min"
            title="Goal round"
            desc="Each person sets one measurable goal for the session."
          />
          <AgendaItem
            time="+1.5 hr"
            title="Deep work sprint"
            desc="Headphones on, light chatter ok, stay accountable with your table."
          />
          <AgendaItem
            time="Break"
            title="Coffee / stretch"
            desc="Refill, quick chat. Perks available for members."
          />
          <AgendaItem
            time="+1.5 hr"
            title="Deep work sprint #2"
            desc="Back at it. Check-in at the 60-minute mark."
          />
          <AgendaItem
            time="Wrap"
            title="Wins & next steps"
            desc="Share progress, optional photo, next meetup details."
          />
        </div>
      </motion.div>
    </section>
  );
}
