import React, { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Sked Club – Full Page (TSX, final, responsive)
 * - Fixes previous syntax error (accidental "<select class{" artifact)
 * - All sections present: Hero, Welcome, Membership, USP, Cities, App, Join, Footer
 * - Keeps console.assert tests
 */

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section
    id={id}
    className={`relative w-full px-2 sm:px-4 lg:px-6 ${className || ""}`}
  >
    {/* inner container centers content while section stays full width */}
    <div className="mx-auto w-full max-w-7xl">{children}</div>
  </section>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-1 text-sm font-medium tracking-wide text-gray-700 backdrop-blur">
    {children}
  </span>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-1 text-sm font-semibold tracking-wide">
    {children}
  </span>
);

interface City {
  name: string;
  status: string;
  img: string;
  tone: string;
}

const cities: City[] = [
  {
    name: "Kanpur",
    status: "Live • Weekly meetups",
    img: "/kanpur.jpg",
    tone: "bg-stone-50",
  },
  {
    name: "Dehradun",
    status: "Coming soon",
    img: "https://images.unsplash.com/photo-1695722099520-564bb36a3a6b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
    tone: "bg-neutral-900 text-white",
  },
  {
    name: "Lucknow",
    status: "Onboarding cafés",
    img: "https://images.unsplash.com/photo-1601752874509-0e350467dc7b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1013",
    tone: "bg-stone-100",
  },
  {
    name: "More cities",
    status: "+5 in pipeline",
    img: "/delhi.jpg",
    tone: "bg-white",
  },
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
    <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
      {/* Logo Section */}
      <a href="#" className="flex items-center gap-2">
        <img src="/logo.svg" alt="SKED Club Logo" className="h-7 w-auto" />
      </a>
      <nav className="hidden items-center gap-6 text-base md:flex">
        <a href="#about" className="hover:opacity-70">
          About
        </a>
        <a href="#membership" className="hover:opacity-70">
          Membership
        </a>
        <a href="#cities" className="hover:opacity-70">
          Cities
        </a>
        <a href="#app" className="hover:opacity-70">
          App
        </a>
        <a href="#join" className="hover:opacity-70">
          Join
        </a>
      </nav>
      <a
        href="#join"
        className="rounded-full bg-neutral-900 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
      >
        Join Alpha
      </a>
    </div>
  </header>
);

const SkedClub: React.FC = () => {
  // simple runtime checks as lightweight tests
  useEffect(() => {
    const ids = ["about", "membership", "cities", "app", "join"]; // required sections
    ids.forEach((id) =>
      console.assert(document.getElementById(id), `Section #${id} should exist`)
    );
    console.assert(
      document.querySelectorAll("header").length === 1,
      "Exactly one <header> expected"
    );
    console.assert(
      document.querySelectorAll("footer").length === 1,
      "Exactly one <footer> expected"
    );
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-neutral-300/40">
      <Header />

      {/* Hero */}
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

      {/* Welcome */}
      <Section id="about" className="py-16 md:py-24">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Left Content */}
          <div className="space-y-5">
            <Badge>Welcome to SKED Club</Badge>
            <h2 className="text-4xl font-serif font-light tracking-tight md:text-5xl">
              WFH, but not alone.
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl">
              Micro-communities for remote workers, founders, and creatives
              across your city. Meet weekly at curated cafés, set goals, and get
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

          {/* Right Content (Images + Pricing Card) */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Image Grid */}
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

            {/* Why Paid Box */}
            <div className="w-full sm:w-3/4 rounded-xl border border-black/10 bg-white p-5 shadow-sm text-center">
              <p className="text-sm text-neutral-700">
                <span className="font-medium">Why paid?</span> Keeps circles
                genuine. Standard <span className="font-semibold">₹499/mo</span>
                , first 50 at <span className="font-semibold">₹149/mo</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Membership */}
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
                <p className="font-medium text-stone-100">
                  Exclusive membership
                </p>
                <p className="mt-1 text-stone-300">
                  SKED Membership is paid access to keep the community genuine.
                  It costs{" "}
                  <span className="font-semibold text-white">₹499/month</span> —
                  but for the first{" "}
                  <span className="font-semibold text-white">50 members</span>,
                  it's just{" "}
                  <span className="font-semibold text-white">₹149/month</span>.
                </p>
                <p className="mt-1 text-stone-400 italic">
                  Limited early access to ensure only serious, genuine members
                  join the circle.
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

      {/* USP */}
      <Section className="py-16 sm:py-20">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 md:grid-cols-3"
        >
          {[
            {
              title: "Active in Kanpur (Lucknow & Dehradun next)",
              desc: "We’re starting where the demand is highest—your city circles are forming now.",
            },
            {
              title: "Café partners & perks",
              desc: "Handpicked spaces with great Wi‑Fi, plugs, ambience—and exclusive member deals.",
            },
            {
              title: "Good people, strong habits",
              desc: "Make friends, beat loneliness, and build focus through weekly rituals.",
            },
          ].map((c) => (
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

      {/* Cities */}
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
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${c.tone} border border-black/5 ring-1 ring-black/5 transition hover:-translate-y-0.5`}
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

      {/* App */}
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
                circles—all from one app. Be first to try the beta.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-500">
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  iOS
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  Android
                </span>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                  WhatsApp integration
                </span>
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
                    {/* Background image inside phone */}
                    <img
                      src="/community.jpg"
                      alt="Cowork session"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Subtle overlay gradient */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

                    {/* Content overlay (text area at bottom) */}
                    {/* <div className="absolute bottom-0 left-0 right-0 space-y-2 p-3">
                      <div className="text-sm font-medium text-white/90 drop-shadow-sm">
                        Your city • This week
                      </div>
                      <div className="rounded-lg bg-neutral-900/90 p-3 text-stone-100 backdrop-blur-sm">
                        <div className="text-base">Kanpur • Friday Cowork</div>
                        <div className="text-sm opacity-80">
                          Seats left: 8 • RSVP
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Join */}
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
                nearest circle and share launch dates for meetups.
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

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <Section className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {/* Logo Section */}
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt="SKED Club Logo"
                  className="h-7 w-auto"
                />
              </a>
            </div>
            <p className="text-base text-neutral-600">
              Building city circles for remote work. ©{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center gap-6 text-base">
            <a
              href="https://www.instagram.com/sked.club?igsh=MTY3bmh1cngxcDZ6Yw=="
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/skedclub/"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
};

export default SkedClub;
