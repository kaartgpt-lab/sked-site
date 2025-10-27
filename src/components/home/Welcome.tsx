import { motion } from "framer-motion";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import { fade } from "../animations/fade";

export default function Welcome() {
  return (
    <Section id="about" className="py-16 md:py-24">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-12 md:grid-cols-2"
      >
        <div className="space-y-5">
          <Badge>Welcome to SKED Club</Badge>
          <h2 className="text-4xl font-serif font-light tracking-tight md:text-5xl">
            WFH, but not alone.
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl">
            Micro-communities for remote workers, founders, and creatives across
            your city. Meet weekly at curated cafés, set goals, and get
            accountability without the office.
          </p>

          <ul className="grid gap-4 text-neutral-700 sm:grid-cols-2">
            <li className="rounded-xl border border-black/10 bg-white px-5 py-4 text-base">
              • Weekly co-work sessions
            </li>
            <li className="rounded-xl border border-black/10 bg-white px-5 py-4 text-base">
              • Reserved seats & partner perks
            </li>
            <li className="rounded-xl border border-black/10 bg-white px-5 py-4 text-base">
              • City WhatsApp circles
            </li>
            <li className="rounded-xl border border-black/10 bg-white px-5 py-4 text-base">
              • Focus, friends & momentum
            </li>
          </ul>

          <p className="text-sm text-neutral-500">
            Currently active in Kanpur • Lucknow & Dehradun onboarding
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {["/a.jpg", "/b.jpg", "/c.jpg", "/e.jpg"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="SKED visual"
                className="w-36 h-36 sm:w-48 sm:h-48 rounded-xl object-cover shadow-sm"
              />
            ))}
          </div>

          <div className="w-full sm:w-3/4 rounded-xl border border-black/10 bg-white p-5 shadow-sm text-center">
            <p className="text-sm text-neutral-700">
              <span className="font-medium">Why paid?</span> Keeps circles
              genuine. Standard <span className="font-semibold">₹499/mo</span>,
              first 50 at <span className="font-semibold">₹149/mo</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
