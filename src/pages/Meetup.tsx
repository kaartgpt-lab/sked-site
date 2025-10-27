// src/pages/MeetupPage.tsx
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { cities } from "../data/cityData";
import type { Meetup } from "../lib/types";

import HeaderSection from "../components/meetup/Header";
import HeroSection from "../components/meetup/Hero";
import DetailsSection from "../components/meetup/Details";
import AgendaSection from "../components/meetup/Agenda";
import RSVPSection from "../components/meetup/RSVP";
import FAQSection from "../components/meetup/FAQ";

export default function MeetupPage() {
  const { cityName, meetupId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to RSVP section if hash is present
    if (location.hash === "#rsvp") {
      const el = document.getElementById("rsvp");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // slight delay ensures section is rendered
      }
    }
  }, [location.hash]);

  const cityKey = (cityName || "kanpur").toLowerCase();
  const city = cities[cityKey];

  const meetup: Meetup | undefined = city
    ? [...(city.upcomingMeetups || []), ...(city.pastMeetups || [])].find(
        (m) => m.id === meetupId
      )
    : undefined;

  if (!meetup) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 text-gray-700">
        <p className="text-2xl font-semibold mb-2">Meetup not found</p>
        <button
          onClick={() =>
            window.location.assign(
              `/city/${encodeURIComponent(cityName || "kanpur")}`
            )
          }
          className="rounded-full bg-neutral-900 px-5 py-3 text-white hover:-translate-y-0.5 hover:shadow transition"
        >
          Back to City
        </button>
      </div>
    );
  }

  const EVENT = {
    name: meetup.title,
    dateHuman: new Date(meetup.date).toLocaleDateString(),
    timeHuman: `${meetup.startTime || ""}${
      meetup.endTime ? ` – ${meetup.endTime}` : ""
    }`,
    venue: meetup.venue,
    address: "Check your email after RSVP for details.",
    mapLink: meetup.bookingUrl || "#",
    priceMember: "₹0 (included in membership)",
    priceNonMember: `₹${meetup.priceINR || 199} (day pass)`,
    seats: 25,
    coverImage:
      meetup.coverImage ||
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1600&auto=format&fit=crop",
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <HeaderSection city={cityName || "Kanpur"} />
      <HeroSection city={city} event={EVENT} />
      <DetailsSection event={EVENT} />
      <AgendaSection />
      <RSVPSection event={EVENT} />
      <FAQSection />
    </div>
  );
}
