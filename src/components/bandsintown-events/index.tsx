import React, { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { losAngelesDateKey } from "../../data/featured-shows";

interface Event {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  lineup: string[];
  offers: {
    type: string;
    url: string;
    status: string;
  }[];
  url: string;
}

interface BandsintownEventsProps {
  artistName: string;
  appId: string;
  initialView?: "upcoming" | "past";
  perPage?: number;
  /** Los Angeles calendar dates (YYYY-MM-DD) already shown as featured shows. */
  suppressDates?: string[];
  /** A featured show is already on the page, so an empty Upcoming list points back to it. */
  hasFeatured?: boolean;
}

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

function getIWasThereUrl(
  event: Event,
  appId: string,
  artistSlug: string
): string {
  const base = `https://www.bandsintown.com/e/${event.id}-${artistSlug}`;
  const params = new URLSearchParams({
    affil_code: appId,
    app_id: appId,
    came_from: "700",
    event_id: event.id,
    trigger: "rate",
    utm_campaign: "event",
    utm_medium: "web",
    utm_source: "widget",
  });
  return `${base}?${params.toString()}`;
}

const BandsintownEvents: React.FC<BandsintownEventsProps> = ({
  artistName,
  appId,
  initialView = "past",
  perPage = 5,
  suppressDates = [],
  hasFeatured = false,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"upcoming" | "past">(initialView);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURIComponent(
            artistName
          )}/events?app_id=${appId}&date=${view}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching events: ${response.statusText}`);
        }
        const data: Event[] = await response.json();
        setEvents(data);
        setCurrentPage(1);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [artistName, appId, view]);

  const suppressKey = suppressDates.join(",");

  // Memoize expensive calculations
  const { paginatedEvents, totalPages } = useMemo(() => {
    const hidden = new Set(suppressKey ? suppressKey.split(",") : []);
    const listed = events.filter(
      (event) => !hidden.has(losAngelesDateKey(event.datetime))
    );
    const startIndex = (currentPage - 1) * perPage;
    const reversedEvents = [...listed].reverse();
    const paginated = reversedEvents.slice(startIndex, startIndex + perPage);
    const pages = Math.ceil(listed.length / perPage);

    return {
      paginatedEvents: paginated,
      totalPages: pages,
    };
  }, [events, currentPage, perPage, suppressKey]);

  const tabClass = (active: boolean) =>
    `inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border px-5 tracking-[-0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
      active
        ? "border-yellow-600 bg-yellow-600 text-white"
        : "border-white/30 text-white/80 hover:border-yellow-600/60 hover:text-white"
    }`;

  const actionClass =
    "inline-flex min-h-11 cursor-pointer items-center rounded-full border border-white/30 px-4 text-sm tracking-[-0.02em] text-white/80 transition-colors duration-200 hover:border-yellow-600/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500";

  return (
    <div className="w-full text-white">
      <div className="mb-8 flex justify-center gap-3">
        <button
          type="button"
          aria-pressed={view === "upcoming"}
          onClick={() => setView("upcoming")}
          className={tabClass(view === "upcoming")}
        >
          Upcoming
        </button>
        <button
          type="button"
          aria-pressed={view === "past"}
          onClick={() => setView("past")}
          className={tabClass(view === "past")}
        >
          Past
        </button>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
            className="text-center py-4"
          >
            Loading events...
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
            className="py-4 text-center text-orange-400"
          >
            Error: {error}
          </motion.div>
        ) : (
          <motion.div
            key={`${view}-${currentPage}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
          >
            {paginatedEvents.length === 0 ? (
              <div className="py-4 text-center text-white/60">
                {hasFeatured && view === "upcoming"
                  ? "The next show is up top."
                  : "Nothing yet."}
              </div>
            ) : (
              <ul className="divide-y divide-white/15">
                {paginatedEvents.map((event) => {
                  const eventDate = new Date(event.datetime);
                  const formattedDate = eventDate.toLocaleDateString(
                    undefined,
                    {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  );

                  return (
                    <li key={event.id} className="py-4">
                      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left">
                        <div className="flex flex-col sm:w-1/3">
                          <p className="font-semibold tracking-[-0.02em]">
                            {formattedDate}
                          </p>
                          <p>{event.venue.name}</p>
                          <p className="text-sm italic text-white/60">
                            {event.lineup.join(", ")}
                          </p>
                        </div>

                        <div className="text-white/60 sm:w-1/3">
                          {event.venue.city}, {event.venue.region}
                        </div>

                        <div className="sm:w-1/3 sm:text-right">
                          {event.offers.length > 0 ? (
                            event.offers.map((offer, index) => (
                              <a
                                key={index}
                                href={offer.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={actionClass}
                              >
                                {offer.type === "Tickets"
                                  ? "Tickets"
                                  : offer.type}
                              </a>
                            ))
                          ) : (
                            <a
                              href={getIWasThereUrl(event, appId, "ryland")}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={actionClass}
                            >
                              I was there
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className={`${tabClass(false)} disabled:cursor-not-allowed disabled:opacity-40`}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="px-2 text-white/60">
                  {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className={`${tabClass(false)} disabled:cursor-not-allowed disabled:opacity-40`}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BandsintownEvents;
