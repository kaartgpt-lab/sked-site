import { motion } from "framer-motion";
import Section from "./ui/Section";
import Badge from "./ui/Badge";
import Pill from "./ui/Pill";
import { fade } from "./animations/fade";

export default function Join() {
  return (
    <div className="border-t border-black/5 bg-stone-100">
      <Section id="join" className="py-16 sm:py-20">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Badge>Join Alpha</Badge>
            <h3 className="text-3xl font-serif font-light tracking-tight md:text-4xl">
              Be early. Get perks.
            </h3>
            <p className="max-w-prose text-neutral-700">
              Tell us your city and how you work. We’ll invite you to the
              nearest circle.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Pill>WFH</Pill>
              <Pill>Founders</Pill>
              <Pill>Design • Tech • Ops</Pill>
            </div>
          </motion.div>

          <motion.form
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll reach out soon.");
            }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <input
                placeholder="First name"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
              />
              <input
                placeholder="Last name"
                className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="md:col-span-2 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
              />
              <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-700">
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Dehradun</option>
                <option>Other</option>
              </select>
              <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-neutral-700">
                <option>Founder</option>
                <option>Remote employee</option>
                <option>Freelancer / Creator</option>
                <option>Student</option>
              </select>
              <textarea
                rows={4}
                placeholder="Anything we should know?"
                className="md:col-span-2 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-700"
              />
              <button
                type="submit"
                className="md:col-span-2 rounded-xl bg-neutral-900 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
              >
                Request Invite
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </div>
  );
}
