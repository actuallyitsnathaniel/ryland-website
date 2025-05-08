import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
}

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
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
  initialView = "upcoming",
  perPage = 5,
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

  const startIndex = (currentPage - 1) * perPage;
  const paginatedEvents = events.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(events.length / perPage);

  return (
    <div className="max-w-[90vw] mx-auto text-white">
      <div className="flex justify-center space-x-8 mb-8">
        <button
          onClick={() => setView("upcoming")}
          className={`px-4 py-2 rounded ${
            view === "upcoming" ? "underline" : ""
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setView("past")}
          className={`px-4 py-2 rounded ${view === "past" ? "underline" : ""}`}
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
            className="text-center py-4 text-red-500"
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
              <div className="text-center py-4">Nothing yet.</div>
            ) : (
              <ul className="w-[90vw] mx-auto divide-y divide-white/20">
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
                      <div className="flex flex-row items-center justify-between text-sm md:text-base text-white w-full">
                        {/* Left Section: Date, Venue, Lineup */}
                        <div className="flex flex-col text-left min-w-[40%]">
                          <p className="font-semibold">{formattedDate}</p>
                          <p>{event.venue.name}</p>
                          <p className="text-sm italic text-white/70">
                            {event.lineup.join(", ")}
                          </p>
                        </div>

                        {/* Middle Section: City, State */}
                        <div className="text-center text-white/80 min-w-[25%]">
                          {event.venue.city}, {event.venue.region}
                        </div>

                        {/* Right Section: Tickets or “I was there” */}
                        <div className="text-right min-w-[25%]">
                          {event.offers.length > 0 ? (
                            event.offers.map((offer, index) => (
                              <a
                                key={index}
                                href={offer.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-xs md:text-sm px-4 py-2 bg-yellow-600 hover:bg-blue-700 transition rounded"
                              >
                                {offer.type === "Tickets"
                                  ? "Buy Tickets"
                                  : offer.type}
                              </a>
                            ))
                          ) : (
                            <a
                              href={getIWasThereUrl(event, appId, "ryland")}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-xs md:text-sm px-4 py-2 bg-yellow-600 hover:bg-blue-700 transition rounded"
                            >
                              I was there ✋🏻
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
              <div className="flex justify-center space-x-2 mt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="text-lg px-3 py-1 rounded hover:bg-gray-700 bg-opacity-75 border"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="text-lg px-3 py-1">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="text-lg px-3 py-1 rounded bg-yellow-600 hover:bg-yellow-500"
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
