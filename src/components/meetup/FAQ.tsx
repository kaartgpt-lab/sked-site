// src/components/meetup/FAQSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { fade } from "../animations/fade";

const Card = ({
  subtitle,
  children,
}: {
  subtitle?: string;
  children?: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-black/10 p-6 bg-white text-left text-neutral-900">
    {subtitle && (
      <div className="text-sm font-medium text-neutral-500">{subtitle}</div>
    )}
    {children && (
      <div className="text-neutral-700 mt-2 text-sm">{children}</div>
    )}
  </div>
);

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 text-center bg-white">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-serif font-light tracking-tight text-neutral-900">
          Good to know
        </h2>
        <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
          <Card subtitle="Do I need to bring anything?">
            Laptop, charger, and your to-do list. Headphones recommended.
          </Card>
          <Card subtitle="Can non-members join?">
            Yes, via day pass. You can convert to membership after.
          </Card>
          <Card subtitle="Is there a dress code?">
            Casual and comfortable. Keep it café-friendly.
          </Card>
          <Card subtitle="How many seats are left?">
            Seats are limited. RSVP to lock yours—first come, first served.
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
