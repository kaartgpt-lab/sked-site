import React from "react";
import { MapPin, Users, Coffee, Calendar, Briefcase } from "lucide-react";
import {
  cardBorder,
  classNames,
  primaryBtn,
  toneWrap,
  textMuted,
  textSubtle,
  ghostBtn,
} from "../../lib/ui";
import type { SectionTone, Meetup } from "../../lib/types";

export default function Hero({
  tone,
  city,
  circleName,
  about,
  stats,
  nextMeetup,
}: {
  tone?: SectionTone;
  city: string;
  circleName: string;
  about: string;
  stats: { upcoming: number; gigs: number; cafes: number };
  nextMeetup?: Meetup;
}) {
  return (
    <section
      className={classNames(
        "relative overflow-hidden border-b",
        toneWrap(tone)
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-normal">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <div
              className={classNames(
                "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs mb-4 backdrop-blur-sm",
                cardBorder(tone)
              )}
            >
              <MapPin size={14} className="opacity-70" />
              <span className="opacity-80">{city}</span>
              <span className="opacity-40">•</span>
              <span className="opacity-80">Community</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              {circleName}
            </h2>
            <div className="mt-2 h-1.5 w-28 rounded-full bg-gradient-to-r from-gray-400/60 to-transparent" />
            <p
              className={classNames(
                "mt-4 max-w-2xl text-base md:text-lg",
                textMuted(tone)
              )}
            >
              {about}
            </p>

            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <li
                className={classNames(
                  "rounded-xl border p-3 flex items-center gap-2",
                  cardBorder(tone)
                )}
              >
                <Calendar size={16} className="opacity-70" />
                <span>Weekly cowork</span>
              </li>
              <li
                className={classNames(
                  "rounded-xl border p-3 flex items-center gap-2",
                  cardBorder(tone)
                )}
              >
                <Briefcase size={16} className="opacity-70" />
                <span>Local gigs</span>
              </li>
              <li
                className={classNames(
                  "rounded-xl border p-3 flex items-center gap-2",
                  cardBorder(tone)
                )}
              >
                <Coffee size={16} className="opacity-70" />
                <span>Partner cafés</span>
              </li>
              <li
                className={classNames(
                  "rounded-xl border p-3 flex items-center gap-2",
                  cardBorder(tone)
                )}
              >
                <Users size={16} className="opacity-70" />
                <span>Founder network</span>
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div
                className={classNames(
                  "rounded-2xl border p-4",
                  cardBorder(tone)
                )}
              >
                <p className="text-2xl font-semibold">{stats.upcoming}</p>
                <p className={classNames("mt-1", textSubtle(tone))}>Upcoming</p>
              </div>
              <div
                className={classNames(
                  "rounded-2xl border p-4",
                  cardBorder(tone)
                )}
              >
                <p className="text-2xl font-semibold">{stats.gigs}</p>
                <p className={classNames("mt-1", textSubtle(tone))}>Gigs</p>
              </div>
              <div
                className={classNames(
                  "rounded-2xl border p-4",
                  cardBorder(tone)
                )}
              >
                <p className="text-2xl font-semibold">{stats.cafes}</p>
                <p className={classNames("mt-1", textSubtle(tone))}>
                  Partner cafés
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="#/membership"
                className={classNames(
                  "px-4 py-2 rounded-xl text-sm",
                  primaryBtn(tone)
                )}
              >
                Get membership
              </a>
              <a
                href="#/whatsapp"
                className={classNames(
                  "px-4 py-2 rounded-xl border text-sm",
                  ghostBtn(tone)
                )}
              >
                Join WhatsApp
              </a>
              <a
                href="#gigs"
                className={classNames(
                  "px-4 py-2 rounded-xl border text-sm",
                  ghostBtn(tone)
                )}
              >
                Browse gigs
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div
              className={classNames(
                "rounded-2xl border overflow-hidden shadow-sm",
                cardBorder(tone)
              )}
            >
              <div className="h-44 w-full bg-gradient-to-br from-gray-100/60 via-white/40 to-gray-200/40" />
              <div className="p-4">
                <p className={classNames("text-sm", textSubtle(tone))}>
                  Next meetup
                </p>
                <p className="font-medium mt-1">{nextMeetup?.title || "TBA"}</p>
                {nextMeetup && (
                  <p className={classNames("text-sm mt-1", textMuted(tone))}>
                    {new Date(nextMeetup.date).toLocaleDateString(undefined, {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}{" "}
                    · {nextMeetup.venue}
                  </p>
                )}
                <div className="mt-4 flex gap-2">
                  {nextMeetup?.bookingUrl && (
                    <a
                      href={nextMeetup.bookingUrl}
                      className={classNames(
                        "px-3 py-1.5 rounded-lg text-sm",
                        primaryBtn(tone)
                      )}
                    >
                      Book seat
                    </a>
                  )}
                  <a
                    href="#meetups"
                    className={classNames(
                      "px-3 py-1.5 rounded-lg border text-sm",
                      ghostBtn(tone)
                    )}
                  >
                    See all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
