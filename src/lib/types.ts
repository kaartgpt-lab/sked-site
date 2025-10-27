// src/lib/types.ts
export type Meetup = {
  id: string;
  title: string;
  date: string; // ISO
  startTime?: string;
  endTime?: string;
  venue: string;
  cafeId?: string;
  priceINR?: number;
  coverImage?: string;
  status: "upcoming" | "past";
  description?: string;
  bookingUrl?: string;
};

export type Gig = {
  id: string;
  title: string;
  company: string;
  type: "Part-time" | "Full-time" | "Contract" | "Freelance";
  stipend?: string;
  location: string;
  tags?: string[];
  postedAt: string; // ISO
  description: string;
  applyUrl?: string;
  contactEmail?: string;
};

export type Cafe = {
  id: string;
  name: string;
  address: string;
  images?: string[];
  perks?: string[];
  rating?: number;
  mapsUrl?: string;
  badge?: string;
};

export type SectionTone = "light" | "dark";
