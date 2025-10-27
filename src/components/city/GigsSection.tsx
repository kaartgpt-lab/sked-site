import React from "react";
import type { Gig, SectionTone } from "../../lib/types";
import {
  arr,
  cardBorder,
  classNames,
  ghostBtn,
  primaryBtn,
  textMuted,
  textSubtle,
  toneWrap,
  formatDate,
} from "../../lib/ui";

export default function GigsSection({
  tone,
  city,
  gigs,
  allTags,
  query,
  setQuery,
  tag,
  setTag,
  type,
  setType,
  onPostGig,
}: {
  tone?: SectionTone;
  city: string;
  gigs: Gig[];
  allTags: string[];
  query: string;
  setQuery: (v: string) => void;
  tag: string | null;
  setTag: (v: string | null) => void;
  type: string | null;
  setType: (v: string | null) => void;
  onPostGig?: () => void;
}) {
  return (
    <section id="gigs" className={classNames("border-t", toneWrap(tone))}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-2xl font-semibold">Local Gigs & Openings</h3>
            <p className={classNames("mt-1", textMuted(tone))}>
              List a gig or apply to opportunities within the {city} circle.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPostGig}
              className={classNames(
                "px-3 py-1.5 rounded-lg text-sm",
                primaryBtn(tone)
              )}
            >
              Post a gig
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Search gigs, companies, keywords…"
            className={classNames(
              "w-full rounded-xl border px-3 py-2 text-sm bg-transparent",
              cardBorder(tone)
            )}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            value={tag ?? ""}
            onChange={(e) => setTag(e.target.value || null)}
            className={classNames(
              "w-full rounded-xl border px-3 py-2 text-sm bg-transparent",
              cardBorder(tone)
            )}
          >
            <option value="">All tags</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={type ?? ""}
            onChange={(e) => setType(e.target.value || null)}
            className={classNames(
              "w-full rounded-xl border px-3 py-2 text-sm bg-transparent",
              cardBorder(tone)
            )}
          >
            <option value="">All types</option>
            {["Part-time", "Full-time", "Contract", "Freelance"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            {tag && (
              <button
                onClick={() => setTag(null)}
                className="text-sm underline"
              >
                Clear tag
              </button>
            )}
            {type && (
              <button
                onClick={() => setType(null)}
                className="text-sm underline"
              >
                Clear type
              </button>
            )}
          </div>
        </div>

        {/* List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gigs.map((g) => (
            <article
              key={g.id}
              className={classNames(
                "rounded-2xl border p-4 flex flex-col",
                cardBorder(tone)
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold leading-tight">{g.title}</h4>
                  <p className={classNames("text-sm", textMuted(tone))}>
                    {g.company} · {g.type}
                  </p>
                </div>
                {g.stipend && (
                  <span
                    className={classNames(
                      "text-xs px-2 py-1 rounded-full border whitespace-nowrap",
                      cardBorder(tone)
                    )}
                  >
                    {g.stipend}
                  </span>
                )}
              </div>
              <p
                className={classNames(
                  "text-sm mt-3 line-clamp-3",
                  textMuted(tone)
                )}
              >
                {g.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {arr(g.tags)
                  .slice(0, 4)
                  .map((t) => (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      className={classNames(
                        "text-xs px-2 py-1 rounded-full border",
                        cardBorder(tone)
                      )}
                    >
                      {t}
                    </button>
                  ))}
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2">
                {g.applyUrl ? (
                  <a
                    href={g.applyUrl}
                    className={classNames(
                      "px-3 py-1.5 rounded-lg text-sm text-center flex-1",
                      primaryBtn(tone)
                    )}
                  >
                    Apply
                  </a>
                ) : g.contactEmail ? (
                  <a
                    href={`mailto:${
                      g.contactEmail
                    }?subject=${encodeURIComponent(
                      `Application: ${g.title} (${city})`
                    )}`}
                    className={classNames(
                      "px-3 py-1.5 rounded-lg text-sm text-center flex-1",
                      primaryBtn(tone)
                    )}
                  >
                    Email
                  </a>
                ) : null}
                <a
                  href={`#/gig/${g.id}`}
                  className={classNames(
                    "px-3 py-1.5 rounded-lg border text-sm",
                    ghostBtn(tone)
                  )}
                >
                  Details
                </a>
              </div>
              <p className={classNames("text-xs mt-2", textSubtle(tone))}>
                Posted {formatDate(g.postedAt)} • {g.location}
              </p>
            </article>
          ))}
          {gigs.length === 0 && (
            <div
              className={classNames(
                "md:col-span-2 lg:col-span-3 text-sm",
                textMuted(tone)
              )}
            >
              No gigs match your filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
