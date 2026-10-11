import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/seo";
import BandsintownEvents from "../../components/bandsintown-events";
import FeaturedShows from "../../components/featured-shows";
import {
  featuredShowDateKeys,
  visibleFeaturedShows,
} from "../../data/featured-shows";

const Shows = () => {
  const appId = import.meta.env.VITE_BANDSINTOWN_API_KEY;
  const featured = visibleFeaturedShows();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col text-center text-white items-center text-3xl">
      <SEO
        title="Shows & Tour Dates - Ryland Live Concerts | Los Angeles"
        description="View upcoming Ryland concerts and tour dates in Los Angeles and beyond. Get tickets to indie rock shows, follow us on Bandsintown to be first to know about new tour announcements and live performances."
        url="https://www.weareryland.com/shows"
      />
      <h1 className="sr-only">Ryland Shows - Upcoming Concerts & Tour Dates</h1>
      <motion.div className="flex w-full flex-col items-center gap-10 px-2 text-base leading-normal sm:px-8 lg:px-16 xl:px-24">
        <div
          className={`grid w-full grid-cols-1 items-start gap-10 ${
            featured.length > 0 ? "lg:grid-cols-3 lg:gap-x-12" : ""
          }`}
        >
          {featured.length > 0 ? (
            <section
              aria-labelledby="featured-heading"
              className="flex w-full flex-col items-center gap-6 lg:col-span-1 lg:border-r lg:border-white/15 lg:pr-12"
            >
              <h2
                id="featured-heading"
                className="text-2xl tracking-[-0.02em]"
              >
                Featured
              </h2>
              <FeaturedShows shows={featured} />
            </section>
          ) : null}
          {featured.length > 0 ? (
            <div
              className="h-px w-full bg-white/15 lg:hidden"
              aria-hidden="true"
            />
          ) : null}
          <section
            aria-labelledby="show-list-heading"
            className={`flex w-full flex-col items-center gap-6 ${
              featured.length > 0 ? "lg:col-span-2" : ""
            }`}
          >
            {featured.length > 0 ? (
              <h2
                id="show-list-heading"
                className="text-2xl tracking-[-0.02em] lg:self-start"
              >
                All shows
              </h2>
            ) : (
              <h2 id="show-list-heading" className="sr-only">
                All shows
              </h2>
            )}
            <BandsintownEvents
              artistName="ryland"
              appId={appId}
              suppressDates={featuredShowDateKeys(featured)}
              hasFeatured={featured.length > 0}
            />
          </section>
        </div>
        <p className="text-xl pt-10">Wanna be first to the show?</p>
        <iframe
          src="https://bandsintown.com/artist/id_15555607/track_button?actor_type=ARTIST&background_color=rgba(180,126,0,1)&hover_color=rgba(221,151,74,1)&font=Helvetica&bitIcon=show&text=FOLLOW&text_color=rgba(255,255,255,1)&locale=en&display_tracker_count=hide&size=large&appId="
          title="newsletter-widget"
          className="translate-x-1 h-9 w-32 mx-auto justify-center"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Shows;
