export type Community = { name: string; status: 'Live' | 'Waitlist'; img: string; blurb: string }

export const communities: Community[] = [
  {
    name: 'Kanpur',
    status: 'Live',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80&auto=format&fit=crop',
    blurb: 'Weekly café co‑working, member perks, and a friendly remote crew.',
  },
  {
    name: 'Dehradun',
    status: 'Live',
    img: 'https://images.unsplash.com/photo-1600697395544-ab6a0a8b9897?w=1920&q=80&auto=format&fit=crop',
    blurb: 'Mountain air, laptop‑friendly cafés, and focused sessions every week.',
  },
  {
    name: 'Lucknow',
    status: 'Waitlist',
    img: 'https://images.unsplash.com/photo-1558985220-1b6484b7cb71?w=1920&q=80&auto=format&fit=crop',
    blurb: 'Join early to help us pick cafés and kickstart the first city circle.',
  },
]