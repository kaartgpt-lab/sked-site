import { motion } from "framer-motion";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import { fade } from "../animations/fade";

export default function AppSection() {
  return (
    <div className="border-t border-black/5 bg-white/60">
      <Section id="app" className="py-16 sm:py-20">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid items-center gap-8 sm:gap-12 md:grid-cols-2"
        >
          <div className="order-2 space-y-4 md:order-1">
            <Badge>Sked App</Badge>
            <h3 className="text-4xl font-serif font-light tracking-tight md:text-5xl">
              Coming soon on iOS & Android
            </h3>
            <p className="max-w-prose text-neutral-700 text-lg">
              Reserve café seats, RSVP to sessions, and discover nearby
              circles—all from one app.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-neutral-500">
              {["iOS", "Android", "WhatsApp integration"].map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#join"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
              >
                Join the waitlist →
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="mx-auto w-[260px] rounded-[28px] border border-black/10 bg-neutral-900 p-2 shadow-xl md:w-[300px]">
              <div className="rounded-[24px] bg-white">
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[18px] border border-neutral-200">
                  <img
                    src="/community.jpg"
                    alt="Cowork session"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
