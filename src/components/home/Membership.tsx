import { motion } from "framer-motion";
import Section from "../ui/Section";
import Badge from "../ui/Badge";
import { fade } from "../animations/fade";

export default function Membership() {
  return (
    <div className="relative overflow-hidden border-y border-black/5 bg-neutral-900 text-stone-50">
      <Section id="membership" className="py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Badge>SKED Membership</Badge>
            <h3 className="text-4xl font-serif font-light tracking-tight leading-tight md:text-5xl">
              Perks, partners, and weekly sessions
            </h3>
            <ul className="grid gap-3 text-base/6 text-stone-200 md:text-lg">
              <li>• Reserved seats at partner cafés</li>
              <li>• Weekly co-working & goal check-ins</li>
              <li>• Discounts on coffee & meals</li>
              <li>• City WhatsApp circles + accountability pods</li>
            </ul>
            <div className="rounded-xl bg-white/10 p-4 text-sm text-stone-200">
              <p className="font-medium text-stone-100">Exclusive membership</p>
              <p className="mt-1 text-stone-300">
                ₹499/month — first 50 at ₹149/month. Paid access ensures only
                genuine members join.
              </p>
            </div>
            <a
              href="#join"
              className="inline-flex w-full sm:w-max items-center gap-2 rounded-full bg-stone-50 px-6 py-4 text-base font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5"
            >
              Apply for Alpha →
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img
              src="/d.jpg"
              alt="People working together"
              className="w-full max-w-md rounded-2xl object-cover shadow-lg object-center"
            />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
