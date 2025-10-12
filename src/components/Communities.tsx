import { Reveal, StackSection } from "./Sections";
import { communities } from "../data/communities";

export default function Communities() {
  return (
    <StackSection bg="bg-white">
      <div id="communities" className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Communities
        </h2>
        <p className="mt-2 text-zinc-700">
          Each community is a City Circle. Tap a card to see status and details.
        </p>
      </div>
      <div className="w-full mt-10">
        {communities.map((c, idx) => (
          <Reveal key={c.name} delay={idx * 80}>
            <div className="relative w-full">
              <div className="relative w-full aspect-[16/7]">
                <img
                  src={c.img}
                  alt={`${c.name} community`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
                  <div className="text-xs uppercase tracking-widest opacity-90">
                    {c.status}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">{c.name}</div>
                  <p className="mt-1 max-w-2xl text-sm md:text-base opacity-90">
                    {c.blurb}
                  </p>
                  <a
                    href="#apply"
                    className="inline-flex items-center mt-4 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium"
                  >
                    Apply for membership
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </StackSection>
  );
}
