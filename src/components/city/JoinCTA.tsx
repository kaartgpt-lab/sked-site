import React from "react";
import type { SectionTone } from "../../lib/types";
import {
  cardBorder,
  classNames,
  primaryBtn,
  ghostBtn,
  textMuted,
  toneWrap,
} from "../../lib/ui";

export default function JoinCta({
  tone,
  city,
}: {
  tone?: SectionTone;
  city: string;
}) {
  return (
    <section id="join" className={classNames("border-t", toneWrap(tone))}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div
          className={classNames(
            "rounded-3xl border p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
            cardBorder(tone)
          )}
        >
          <div>
            <h3 className="text-2xl font-semibold">Join the {city} Circle</h3>
            <p className={classNames("mt-1 max-w-prose", textMuted(tone))}>
              Become a Sked member for café perks, weekly coworking, and access
              to local gigs.
            </p>
          </div>
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
