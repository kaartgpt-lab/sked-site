import { motion } from "framer-motion";
import Section from "../ui/Section";
import { fade } from "../animations/fade";

export default function USP() {
  const features = [
    {
      title: "Active in Kanpur (Lucknow & Dehradun next)",
      desc: "We’re starting where the demand is highest—your city circles are forming now.",
    },
    {
      title: "Café partners & perks",
      desc: "Handpicked spaces with great Wi-Fi, plugs, ambience—and exclusive member deals.",
    },
    {
      title: "Good people, strong habits",
      desc: "Make friends, beat loneliness, and build focus through weekly rituals.",
    },
  ];

  return (
    <Section className="py-16 sm:py-20">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:gap-8 md:grid-cols-3"
      >
        {features.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <h4 className="mb-2 text-xl font-serif font-light">{c.title}</h4>
            <p className="text-neutral-600 text-base">{c.desc}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
