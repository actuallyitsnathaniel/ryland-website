import poster from "../assets/images/thumbnails/fig-tree-sessions.png";

export type FeaturedShow = {
  id: string;
  title: string;
  /** ISO start instant. The card stays up until this moment, then drops off. */
  start: string;
  venue: string;
  place: string;
  note: string;
  cta: string;
  href: string;
  poster?: string;
  posterAlt?: string;
};

/** Shows seated somewhere other than Bandsintown. Partiful stays the RSVP. */
export const featuredShows: FeaturedShow[] = [
  {
    id: "fig-tree-2026-10-23",
    title: "Luca & Friends @ Fig Tree Sessions",
    start: "2026-10-24T02:00:00.000Z",
    venue: "Fig Tree Sessions",
    place: "Highland Park, Los Angeles",
    note: "Free · limited seats",
    cta: "RSVP",
    href: "https://partiful.com/e/VfgNQaNWJPDocaoyiEJE?c=SokDq5JI",
    poster,
    posterAlt:
      "Fig Tree Sessions flyer. Ethan Maxwell, Ryland, Jackson Sage, and Luca Ruscica. October 23rd, doors at 7pm. RSVP for the address.",
  },
];

const losAngeles = "America/Los_Angeles";

export function losAngelesDateKey(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: losAngeles,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

export function visibleFeaturedShows(now = Date.now()): FeaturedShow[] {
  return featuredShows.filter((show) => new Date(show.start).getTime() > now);
}

export function featuredShowDateKeys(shows: FeaturedShow[]): string[] {
  return shows.map((show) => losAngelesDateKey(show.start));
}

export function formatFeaturedShowDate(start: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: losAngeles,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(start));
}
