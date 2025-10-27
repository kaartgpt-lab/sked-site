import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Meetup, SectionTone } from "../../lib/types";
import {
  classNames,
  toneWrap,
  cardBorder,
  textMuted,
  primaryBtn,
  ghostBtn,
  formatDate,
} from "../../lib/ui";

export default function MeetupsSection({
  tone,
  meetups,
  meetupTab,
  setMeetupTab,
  onBookMeetup,
}: {
  tone?: SectionTone;
  meetups: { upcoming: Meetup[]; past: Meetup[] };
  meetupTab: "upcoming" | "past";
  setMeetupTab: (t: "upcoming" | "past") => void;
  onBookMeetup?: (m: Meetup) => void;
}) {
  const list = meetupTab === "upcoming" ? meetups.upcoming : meetups.past;
  const navigate = useNavigate();
  const { cityName } = useParams();

  return (
    <section id="meetups" className={classNames("border-t", toneWrap(tone))}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold">Circle Meetups</h3>
          <div
            className={classNames(
              "inline-flex rounded-full border p-1",
              cardBorder(tone)
            )}
          >
            {(["upcoming", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setMeetupTab(tab)}
                className={classNames(
                  "px-3 py-1.5 text-sm rounded-full",
                  meetupTab === tab ? primaryBtn(tone) : ghostBtn(tone)
                )}
                aria-pressed={meetupTab === tab}
              >
                {tab === "upcoming" ? "Upcoming" : "Recent"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((m) => (
            <article
              key={m.id}
              onClick={() =>
                navigate(
                  `/city/${encodeURIComponent(
                    cityName || "kanpur"
                  )}/meetup/${encodeURIComponent(m.id)}`
                )
              }
              className={classNames(
                "rounded-2xl border overflow-hidden flex flex-col transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
                cardBorder(tone)
              )}
            >
              {/* Image */}
              {m.coverImage ? (
                <img
                  src={m.coverImage}
                  alt={m.title}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 w-full bg-gradient-to-br from-gray-100 via-white to-gray-200" />
              )}

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-semibold leading-snug">{m.title}</h4>
                <p className={classNames("text-sm mt-1", textMuted(tone))}>
                  {formatDate(m.date)}
                  {m.startTime ? ` · ${m.startTime}` : ""} · {m.venue}
                </p>

                {m.description && (
                  <p
                    className={classNames(
                      "text-sm mt-3 line-clamp-3",
                      textMuted(tone)
                    )}
                  >
                    {m.description}
                  </p>
                )}

                {/* Actions */}
                <div
                  className="mt-auto pt-4 flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()} // ✅ prevent parent click
                >
                  {m.status === "upcoming" &&
                    (m.bookingUrl || onBookMeetup) && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onBookMeetup) onBookMeetup(m);
                          else if (m.bookingUrl)
                            window.open(m.bookingUrl, "_blank");
                        }}
                        className={classNames(
                          "px-3 py-1.5 rounded-lg text-sm text-center flex-1",
                          primaryBtn(tone)
                        )}
                      >
                        Book now
                      </button>
                    )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        `/city/${encodeURIComponent(
                          cityName || "kanpur"
                        )}/meetup/${encodeURIComponent(m.id)}`
                      );
                    }}
                    className={classNames(
                      "px-3 py-1.5 rounded-lg border text-sm flex-1",
                      ghostBtn(tone)
                    )}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
