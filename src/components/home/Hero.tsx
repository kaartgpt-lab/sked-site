import { motion } from "framer-motion";
import Section from "../ui/Section";
import { fade } from "../animations/fade";
import Pill from "../ui/Pill";

export default function Hero() {
  return (
    <Section className="py-14 sm:py-16 md:py-24">
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="grid items-center gap-8 sm:gap-10 md:grid-cols-2"
      >
        <div className="space-y-6">
          <Pill>A social co-working initiative</Pill>
          <h1 className="text-5xl font-serif font-light tracking-tight leading-tight md:text-6xl">
            Work remotely,{" "}
            <span className="text-neutral-700 italic">socially</span>.
          </h1>
          <p className="max-w-prose text-lg text-neutral-600 md:text-xl">
            SKED Clubs are communities of WFH folks who meet weekly at partner
            cafés for co-working, accountability, and genuine connection.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
            <a
              href="#join"
              className="w-full sm:w-auto rounded-full bg-neutral-900 px-6 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get early access
            </a>
            <a
              href="#membership"
              className="w-full sm:w-auto rounded-full border border-black/10 px-6 py-4 text-center text-base font-semibold hover:bg-stone-100"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src="/hero.jpg"
            alt="Café coworking"
            className="aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] w-full rounded-2xl object-cover shadow-md object-center"
          />
        </div>
      </motion.div>
    </Section>
  );
}
