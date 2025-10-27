import React from "react";
import type { Cafe, SectionTone } from "../../lib/types";
import {
  cardBorder,
  classNames,
  chipBg,
  ghostBtn,
  textMuted,
  toneWrap,
} from "../../lib/ui";

export default function CafesSection({
  tone,
  city,
  cafes,
}: {
  tone?: SectionTone;
  city: string;
  cafes: Cafe[];
}) {
  return (
    <section id="cafes" className={classNames("border-t", toneWrap(tone))}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Partner Cafés</h3>
            <p className={classNames("mt-1", textMuted(tone))}>
              Work-friendly spots around {city} with Sked perks.
            </p>
          </div>
          <a href="#" className="text-sm underline">
            Suggest a café
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cafes.map((c) => (
            <article
              key={c.id}
              className={classNames(
                "rounded-2xl border overflow-hidden",
                cardBorder(tone)
              )}
            >
              {c.images?.[0] ? (
                <img
                  src={c.images[0]}
                  alt={c.name}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 w-full bg-gradient-to-br from-gray-100 via-white to-gray-200" />
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold leading-tight">{c.name}</h4>
                    <p
                      className={classNames(
                        "text-sm line-clamp-1",
                        textMuted(tone)
                      )}
                    >
                      {c.address}
                    </p>
                  </div>
                  {c.badge && (
                    <span
                      className={classNames(
                        "text-xs px-2 py-1 rounded-full border whitespace-nowrap",
                        cardBorder(tone)
                      )}
                    >
                      {c.badge}
                    </span>
                  )}
                </div>
                {c.perks && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.perks.slice(0, 4).map((p) => (
                      <span
                        key={p}
                        className={classNames(
                          "text-xs px-2 py-1 rounded-full",
                          chipBg(tone)
                        )}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={`#/cafe/${c.id}`}
                    className={classNames(
                      "px-3 py-1.5 rounded-lg border text-sm",
                      ghostBtn(tone)
                    )}
                  >
                    View
                  </a>
                  {c.mapsUrl && (
                    <a
                      href={c.mapsUrl}
                      className={classNames(
                        "px-3 py-1.5 rounded-lg border text-sm",
                        ghostBtn(tone)
                      )}
                    >
                      Maps
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
