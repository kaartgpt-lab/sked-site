// src/components/meetup/RSVPSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animations/fade";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-1 text-sm font-semibold tracking-wide">
    {children}
  </span>
);

export default function RSVPSection({ event }: { event: any }) {
  return (
    <div className="border-y border-black/5 bg-stone-200">
      <section id="rsvp" className="py-16 sm:py-20 text-center">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6"
        >
          <Pill>Limited seats • {event.seats} total</Pill>
          <h2 className="text-4xl font-serif font-light tracking-tight">
            RSVP
          </h2>
          <p className="text-neutral-700 max-w-2xl">
            Tell us who you are and whether you're a member. We'll email your
            confirmation and seat details.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Your RSVP has been noted. We’ll email details.");
            }}
            className="grid w-full gap-4 rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm md:grid-cols-2"
          >
            <input
              placeholder="Full name"
              className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
            />
            <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-700">
              <option>Member</option>
              <option>Non-member</option>
            </select>
            <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-700">
              <option>Solo seat</option>
              <option>Bring a friend</option>
            </select>
            <textarea
              rows={4}
              placeholder="What will you work on?"
              className="md:col-span-2 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
            />
            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-neutral-900 text-white px-6 py-4 text-base font-semibold transition hover:-translate-y-0.5"
            >
              Confirm my seat
            </button>
          </form>

          <div className="text-xs text-neutral-500">
            By RSVPing you agree to our community guidelines (be kind, keep it
            productive, no spam).
          </div>
        </motion.div>
      </section>
    </div>
  );
}
