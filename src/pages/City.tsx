// src/pages/CityPage.tsx
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Cafe, Gig, Meetup, SectionTone } from "../lib/types";
import { cities, City } from "../data/cityData";

// components
import Header from "../components/city/Header";
import Hero from "../components/city/Hero";
import MeetupsSection from "../components/city/MeetupSection";
import GigsSection from "../components/city/GigsSection";
import CafesSection from "../components/city/CafesSection";
import JoinCta from "../components/city/JoinCTA";
import PageFooter from "../components/city/PageFooter";

export type CityPageProps = {
  city?: string;
  circleName?: string;
  about?: string;
  upcomingMeetups?: Meetup[];
  pastMeetups?: Meetup[];
  gigs?: Gig[];
  cafes?: Cafe[];
  onBookMeetup?: (meetup: Meetup) => void;
  onPostGig?: () => void;
  sectionTones?: {
    hero?: SectionTone;
    meetups?: SectionTone;
    gigs?: SectionTone;
    cafes?: SectionTone;
    join?: SectionTone;
  };
};

export function CityPage({
  city,
  circleName,
  about,
  upcomingMeetups,
  pastMeetups,
  gigs,
  cafes,
  onBookMeetup,
  onPostGig,
  sectionTones = {
    hero: "light",
    meetups: "dark",
    gigs: "light",
    cafes: "dark",
    join: "light",
  },
}: CityPageProps) {
  const { cityName } = useParams();
  const resolvedCity = cityName
    ? decodeURIComponent(cityName)
    : city || "Kanpur";

  const [gigQuery, setGigQuery] = useState("");
  const [gigTag, setGigTag] = useState<string | null>(null);
  const [gigType, setGigType] = useState<string | null>(null);
  const [meetupTab, setMeetupTab] = useState<"upcoming" | "past">("upcoming");

  // ✅ typed city lookup
  const cityKey = resolvedCity.toLowerCase();
  const fromData: City | undefined = (cities as Record<string, City>)[cityKey];

  const meta = fromData?.meta;
  const resolvedCircleName =
    circleName || meta?.circleName || `${resolvedCity} Circle`;
  const resolvedAbout =
    about ||
    meta?.about ||
    "A local hub for founders, freelancers, and remote workers.";

  const upcomingMeetupsData =
    upcomingMeetups || fromData?.upcomingMeetups || [];
  const pastMeetupsData = pastMeetups || fromData?.pastMeetups || [];
  const gigsData = gigs || fromData?.gigs || [];
  const cafesData = cafes || fromData?.cafes || [];

  // ✅ typed tags extraction
  const allGigTags = useMemo(() => {
    const tags = gigsData.flatMap((g) => g.tags || []);
    return Array.from(new Set(tags)).slice(0, 12);
  }, [gigsData]);

  const filteredGigs = useMemo(() => {
    const q = gigQuery.toLowerCase().trim();
    return gigsData.filter((g) => {
      const matchesQuery =
        !q ||
        `${g.title} ${g.company} ${g.description}`.toLowerCase().includes(q);
      const matchesTag = !gigTag || (g.tags && g.tags.includes(gigTag));
      const matchesType = !gigType || g.type === gigType;
      return matchesQuery && matchesTag && matchesType;
    });
  }, [gigsData, gigQuery, gigTag, gigType]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ✅ dynamic header */}
      <Header city={resolvedCity} circleName={resolvedCircleName} />

      <Hero
        tone={sectionTones.hero}
        city={resolvedCity}
        circleName={resolvedCircleName}
        about={resolvedAbout}
        stats={{
          upcoming: upcomingMeetupsData.length,
          gigs: gigsData.length,
          cafes: cafesData.length,
        }}
        nextMeetup={upcomingMeetupsData[0]}
      />

      <MeetupsSection
        tone={sectionTones.meetups}
        meetups={{ upcoming: upcomingMeetupsData, past: pastMeetupsData }}
        meetupTab={meetupTab}
        setMeetupTab={setMeetupTab}
        onBookMeetup={(meetup) => {
          const city = encodeURIComponent(resolvedCity);
          const id = encodeURIComponent(meetup.id);
          // Navigate directly to the Meetup details page with #rsvp anchor
          window.location.href = `/city/${city}/meetup/${id}#rsvp`;
        }}
      />

      <GigsSection
        tone={sectionTones.gigs}
        city={resolvedCity}
        gigs={filteredGigs}
        allTags={allGigTags}
        query={gigQuery}
        setQuery={setGigQuery}
        tag={gigTag}
        setTag={setGigTag}
        type={gigType}
        setType={setGigType}
        onPostGig={onPostGig}
      />

      <CafesSection
        tone={sectionTones.cafes}
        city={resolvedCity}
        cafes={cafesData}
      />

      <JoinCta tone={sectionTones.join} city={resolvedCity} />

      <PageFooter
        tone={sectionTones.join}
        city={resolvedCity}
        circleName={resolvedCircleName}
      />
    </div>
  );
}
