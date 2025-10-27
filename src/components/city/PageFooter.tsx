import React from "react";
import { ArrowUp, Instagram, Mail, Twitter } from "lucide-react";
import type { SectionTone } from "../../lib/types";
import {
  cardBorder,
  classNames,
  primaryBtn,
  textMuted,
  textSubtle,
  toneWrap,
} from "../../lib/ui";

export default function PageFooter({
  tone,
  city,
  circleName,
}: {
  tone?: SectionTone;
  city: string;
  circleName: string;
}) {
  return (
    <footer className={classNames("border-t", toneWrap(tone))}>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold">Sked • {city}</span>
              <span className={classNames("text-xs", textSubtle(tone))}>
                Community
              </span>
            </div>
            <p
              className={classNames(
                "mt-3 max-w-prose text-sm",
                textMuted(tone)
              )}
            >
              {circleName} helps founders, freelancers, and remote workers in{" "}
              {city} connect, cowork, and grow together through weekly sessions,
              gigs, and partner cafés.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                aria-label="Email"
                href={`mailto:${city.toLowerCase()}@sked.example`}
                className={classNames(
                  "p-2 rounded-full border",
                  cardBorder(tone)
                )}
              >
                <Mail size={16} />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className={classNames(
                  "p-2 rounded-full border",
                  cardBorder(tone)
                )}
              >
                <Instagram size={16} />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className={classNames(
                  "p-2 rounded-full border",
                  cardBorder(tone)
                )}
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul
              className={classNames("mt-3 space-y-2 text-sm", textMuted(tone))}
            >
              <li>
                <a href="#meetups" className="hover:underline">
                  Meetups
                </a>
              </li>
              <li>
                <a href="#gigs" className="hover:underline">
                  Gigs & Openings
                </a>
              </li>
              <li>
                <a href="#cafes" className="hover:underline">
                  Partner Cafés
                </a>
              </li>
              <li>
                <a href="#join" className="hover:underline">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get updates</h4>
            <p className={classNames("mt-2 text-sm", textMuted(tone))}>
              Occasional emails about new meetups and gigs in {city}.
            </p>
            <form
              className="mt-3 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className={classNames(
                  "flex-1 rounded-xl border px-3 py-2 text-sm bg-transparent",
                  cardBorder(tone)
                )}
                aria-label="Email address"
              />
              <button
                className={classNames(
                  "px-3 py-2 rounded-xl text-sm",
                  primaryBtn(tone)
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t pt-4">
          <p className={classNames("text-xs", textSubtle(tone))}>
            Sked © {new Date().getFullYear()} • {city} Circle ·{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={classNames(
              "inline-flex items-center gap-1 text-xs",
              textMuted(tone)
            )}
          >
            <ArrowUp size={14} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
