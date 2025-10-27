import type { Cafe, Gig, Meetup } from "../lib/types";

const daysFromNow = (n: number): string =>
  new Date(Date.now() + n * 24 * 3600 * 1000).toISOString();
const daysAgo = (n: number): string =>
  new Date(Date.now() - n * 24 * 3600 * 1000).toISOString();

export type City = {
  meta: {
    circleName: string;
    about: string;
  };
  upcomingMeetups: Meetup[];
  pastMeetups: Meetup[];
  gigs: Gig[];
  cafes: Cafe[];
};

export const cities: Record<string, City> = {
  kanpur: {
    meta: {
      circleName: "Kanpur Circle",
      about:
        "A local hub for founders, freelancers, and remote workers. Weekly coworking, skill-shares, and meetups.",
    },
    upcomingMeetups: [
      {
        id: "m-kanpur-01",
        title: "Sked Saturday Cowork @ Brew Lab",
        date: daysFromNow(3),
        startTime: "11:00",
        endTime: "14:00",
        venue: "Brew Lab, Swaroop Nagar",
        priceINR: 149,
        status: "upcoming",
        bookingUrl: "#/book/m-kanpur-01",
        coverImage: "https://picsum.photos/seed/kanpurcowork/800/400",
        description:
          "Focused coworking, intros, and a 15-min lightning talk: 'Finding your first 10 users in your city'.",
      },
      {
        id: "m-kanpur-02",
        title: "Founder Huddle #12 (Kanpur)",
        date: daysFromNow(10),
        startTime: "17:30",
        venue: "Roastery, Mall Road",
        priceINR: 149,
        status: "upcoming",
        bookingUrl: "#/book/m-kanpur-02",
        coverImage: "https://picsum.photos/seed/huddle/800/400",
        description:
          "Peer problem-solving: customer discovery, pricing, and first 10 users.",
      },
    ],
    pastMeetups: [
      {
        id: "m-kanpur-00",
        title: "Design Crit & Chai (Kanpur)",
        date: daysAgo(7),
        startTime: "18:00",
        venue: "Grounded Café, Civil Lines",
        status: "past",
        coverImage: "https://picsum.photos/seed/designcrit/800/400",
        description: "Figma to dev: sharing handoff tips and real critiques.",
      },
    ],
    gigs: [
      {
        id: "g-kanpur-01",
        title: "Social Media Intern (Kanpur)",
        company: "Local D2C Brand",
        type: "Part-time",
        stipend: "₹5k–8k/mo",
        location: "Civil Lines",
        tags: ["Social", "Content", "Canva"],
        postedAt: new Date().toISOString(),
        description:
          "Help us post 3x/week on IG + reels editing. Bonus if you know product photography.",
        applyUrl: "#/apply/g-kanpur-01",
      },
      {
        id: "g-kanpur-02",
        title: "Freelance Webflow Dev (Kanpur)",
        company: "Studio 91",
        type: "Freelance",
        location: "Remote in-city",
        tags: ["Webflow", "Frontend", "SEO"],
        postedAt: new Date().toISOString(),
        description:
          "Landing page rebuild with CMS (~3 weeks). Share portfolio and day rate.",
        contactEmail: "hello@studio91.example",
      },
      {
        id: "g-kanpur-03",
        title: "Barista for Weekend Pop-up",
        company: "Partner Café",
        type: "Contract",
        location: "Mall Road",
        tags: ["Operations", "Hospitality"],
        postedAt: new Date().toISOString(),
        description: "Support weekend rush; prior café experience preferred.",
        applyUrl: "#/apply/g-kanpur-03",
      },
    ],
    cafes: [
      {
        id: "c1",
        name: "Brew Lab",
        address: "Swaroop Nagar, Kanpur",
        perks: ["Wi-Fi", "Power", "Member 10% off", "Quiet 11–5"],
        mapsUrl: "https://maps.example/brewlab",
        badge: "Partner",
        images: ["https://picsum.photos/seed/brewlab/800/400"],
      },
      {
        id: "c2",
        name: "Roastery",
        address: "Mall Road, Kanpur",
        perks: ["Wi-Fi", "Outdoor", "Good for calls"],
        badge: "New",
        images: ["https://picsum.photos/seed/roastery/800/400"],
      },
    ],
  },

  dehradun: {
    meta: {
      circleName: "Dehradun Circle",
      about:
        "Hillside builders & remote folks. Cowork with mountain views, share playbooks, and ship.",
    },
    upcomingMeetups: [
      {
        id: "m-dun-01",
        title: "Dehradun Pop-up Cowork @ Rajpur Rd",
        date: daysFromNow(5),
        startTime: "10:00",
        endTime: "13:00",
        venue: "Maple Café, Rajpur Road",
        status: "upcoming",
        bookingUrl: "#/book/m-dun-01",
        coverImage: "https://picsum.photos/seed/dehradun/800/400",
        description: "Quiet block + 20-min founder roundtable.",
      },
    ],
    pastMeetups: [],
    gigs: [
      {
        id: "g-dun-01",
        title: "Product Designer (Freelance)",
        company: "Doonscape",
        type: "Freelance",
        location: "Hybrid",
        tags: ["UI", "Figma", "Prototyping"],
        postedAt: new Date().toISOString(),
        description: "Mobile onboarding revamp; 3–4 weeks, start ASAP.",
        applyUrl: "#/apply/g-dun-01",
      },
    ],
    cafes: [
      {
        id: "cd1",
        name: "Maple Café",
        address: "Rajpur Road, Dehradun",
        perks: ["Wi-Fi", "Outlets", "Mountain view"],
        images: ["https://picsum.photos/seed/maplecafe/800/400"],
        badge: "Partner",
      },
    ],
  },

  lucknow: {
    meta: {
      circleName: "Lucknow Circle",
      about:
        "Builders from Hazratganj to Gomti Nagar — cowork, meet, and collaborate on side projects.",
    },
    upcomingMeetups: [
      {
        id: "m-lko-01",
        title: "Lucknow Saturday Cowork",
        date: daysFromNow(8),
        startTime: "11:00",
        endTime: "14:00",
        venue: "Roast & Co., Gomti Nagar",
        status: "upcoming",
        bookingUrl: "#/book/m-lko-01",
        coverImage: "https://picsum.photos/seed/lucknow/800/400",
        description: "Deep work + goal-setting circle.",
      },
    ],
    pastMeetups: [],
    gigs: [
      {
        id: "g-lko-01",
        title: "Campus Outreach Lead",
        company: "Sked",
        type: "Part-time",
        location: "Multiple campuses",
        tags: ["Community", "Events"],
        postedAt: new Date().toISOString(),
        description: "Lead micro-meetups; track weekly signups.",
        contactEmail: "lucknow@sked.example",
      },
    ],
    cafes: [
      {
        id: "cl1",
        name: "Roast & Co.",
        address: "Gomti Nagar, Lucknow",
        perks: ["Wi-Fi", "Quiet hours 12–5", "Member 10% off"],
        images: ["https://picsum.photos/seed/roastco/800/400"],
      },
    ],
  },
};
