// Single source of truth for dated events shown on the site.
//
// To add an event: drop the flier image(s) in /public/images/... and add an
// entry below. Events hide themselves automatically once `endDate` (or `date`
// if there is no end date) has passed — no need to comment old ones out.

export type EventCategory = "kayaking" | "camping" | "hiking" | "special";

export type EventFlier = {
  src: string;
  alt: string;
};

export type RedtailsEvent = {
  id: string;
  title: string;
  category: EventCategory;
  /** First day of the event, "YYYY-MM-DD". Used for sorting. */
  date: string;
  /** Last day the event should stay listed, "YYYY-MM-DD" (e.g. rain date). */
  endDate?: string;
  /** Human-friendly date/time shown on the card. */
  displayDate: string;
  location: string;
  bookingUrl: string;
  /** One or more fliers (e.g. English + Spanish), shown side by side. */
  fliers: EventFlier[];
};

export const events: RedtailsEvent[] = [
  {
    id: "mens-paddle-2026-10",
    title: "Basecamp on Water: A Men's Paddle Experience",
    category: "kayaking",
    date: "2026-10-24",
    displayDate: "Saturday, October 24, 2026 · 9:30 AM",
    location: "York Hill Boat Ramp, Linwood, NC",
    bookingUrl:
      "https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/D0Ow9",
    fliers: [
      {
        src: "/images/kayaks/fliers/mens-paddle.png",
        alt: "Basecamp on Water men's paddle on the Yadkin River, October 24, 2026",
      },
    ],
  },
  {
    id: "november-drift-2026",
    title: "November Drift: Fall Afternoon Paddle",
    category: "kayaking",
    date: "2026-11-15",
    endDate: "2026-11-22", // rain-out date
    displayDate: "Sunday, November 15, 2026 · 1:00 PM (rain date Nov 22)",
    location: "Morrow Mountain State Park, Albemarle, NC",
    bookingUrl:
      "https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/okka1",
    fliers: [
      {
        src: "/images/kayaks/fliers/november-drift.png",
        alt: "November Drift Fall Afternoon Kayaking",
      },
      {
        src: "/images/kayaks/fliers/november-drift-es.png",
        alt: "Evento de Kayak de Otoño: Drift de Noviembre",
      },
    ],
  },
  {
    id: "family-campout-2026-09",
    title: "Family Campout & Kayak Experience",
    category: "camping",
    date: "2026-09-12",
    endDate: "2026-09-13",
    displayDate: "September 12–13, 2026 · 10:00 AM",
    location: "Lake Norman, NC",
    bookingUrl:
      "https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/N3z6k",
    fliers: [
      {
        src: "/images/camping/Family-campout.PNG",
        alt: "Family Campout at Lake Norman State Park",
      },
    ],
  },
];

/** Today's date in the visitor's time zone as "YYYY-MM-DD". */
const todayString = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

/** Events that haven't ended yet, soonest first. */
export const getUpcomingEvents = (category?: EventCategory) => {
  const today = todayString();
  return events
    .filter((event) => (event.endDate ?? event.date) >= today)
    .filter((event) => !category || event.category === category)
    .sort((a, b) => a.date.localeCompare(b.date));
};
