import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../ui/Section";
import { fade } from "../animations/fade";

const cities = [
  { name: "Kanpur", img: "/kanpur.jpg", status: "Active", tone: "bg-white" },
  {
    name: "Lucknow",
    img: "https://images.unsplash.com/photo-1601752874509-0e350467dc7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1013",
    status: "Coming Soon",
    tone: "bg-stone-50",
  },
  {
    name: "Dehradun",
    img: "https://images.unsplash.com/photo-1695722099520-564bb36a3a6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    status: "Coming Soon",
    tone: "bg-white",
  },
  {
    name: "Other Cities",
    img: "/delhi.jpg",
    status: "5+ on line",
    tone: "bg-white",
  },
];

export default function Cities() {
  const navigate = useNavigate();

  return (
    <Section id="cities" className="pt-6 pb-10 sm:pb-12">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="text-3xl font-serif font-light tracking-tight md:text-4xl">
          Sked is not just a community
        </h3>
        <a
          href="#join"
          className="text-sm font-semibold text-neutral-700 hover:underline"
        >
          Join your city →
        </a>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {cities.map((c) => (
          <motion.div
            key={c.name}
            onClick={() => navigate(`/city/${encodeURIComponent(c.name)}`)}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${c.tone} border border-black/5 ring-1 ring-black/5 transition hover:-translate-y-0.5`}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={c.img}
              alt={c.name}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-96"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
            <div className="absolute left-0 top-0 m-3 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white">
              {c.status}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="text-3xl font-semibold tracking-tight">
                {c.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
