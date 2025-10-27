// src/components/meetup/DetailsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animations/fade";

const Card = ({
  title,
  subtitle,
  children,
  dark,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
}) => (
  <div
    className={`rounded-2xl border border-black/10 p-6 text-left ${
      dark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
    }`}
  >
    {subtitle && (
      <div
        className={`text-sm font-medium ${
          dark ? "text-neutral-400" : "text-neutral-500"
        }`}
      >
        {subtitle}
      </div>
    )}
    {title && <div className="text-xl font-serif font-light">{title}</div>}
    {children && (
      <div
        className={`text-sm mt-1 ${
          dark ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        {children}
      </div>
    )}
  </div>
);

export default function DetailsSection({ event }: { event: any }) {
  return (
    <section className="py-12 sm:py-16 text-center bg-stone-100">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto flex max-w-5xl flex-col items-center gap-8"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <Card title={event.venue} subtitle="Where">
            {event.address}
          </Card>
          <Card title={event.dateHuman} subtitle="When">
            {event.timeHuman}
          </Card>
          <Card title={`${event.seats} seats`} subtitle="Capacity">
            RSVP required to confirm
          </Card>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          <Card title={event.priceMember} subtitle="Members" dark>
            <ul className="mt-3 text-neutral-300 text-sm list-disc list-inside">
              <li>Reserved seat</li>
              <li>Accountability check-in</li>
              <li>Partner café perks</li>
            </ul>
          </Card>
          <Card title={event.priceNonMember} subtitle="Non-members">
            <ul className="mt-3 text-neutral-700 text-sm list-disc list-inside">
              <li>Day pass seat</li>
              <li>Join group for the day</li>
              <li>Option to convert to membership</li>
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
