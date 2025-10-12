import { Reveal } from "./Sections";

export default function Intro() {
  return (
    <section id="intro" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-zinc-900">
            Work from curated cafés.{" "}
            <span className="text-orange-600">Meet your city.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-zinc-700">
            Discover work‑friendly cafés with reliable Wi‑Fi and charging
            points. Join weekly co‑working sessions and plug into your local
            remote‑work community.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
