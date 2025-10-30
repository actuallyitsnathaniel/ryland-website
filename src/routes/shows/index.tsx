import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/seo";
import BandsintownEvents from "../../components/bandsintown-events";

const Shows = () => {
  const appId = import.meta.env.VITE_BANDSINTOWN_API_KEY;
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
    <main className="flex flex-col min-h-full h-full md:mt-16 text-center p-3 text-white items-center md:justify-center text-3xl">
      <SEO
        title="Shows & Tour Dates - Ryland Live Concerts | Los Angeles"
        description="View upcoming Ryland concerts and tour dates in Los Angeles and beyond. Get tickets to indie rock shows, follow us on Bandsintown to be first to know about new tour announcements and live performances."
        url="https://www.weareryland.com/shows"
      />
      <div className="mt-16 md:my-auto" />
      <h1 className="sr-only">Ryland Shows - Upcoming Concerts & Tour Dates</h1>
      <h2 className="sr-only">Live Performances</h2>
      <h3 className="sr-only">Concert Schedule</h3>
      <motion.div className="flex flex-col gap-5 items-center">
        <BandsintownEvents artistName="ryland" appId={appId} />
        <p className="text-xl pt-10">Wanna be first to the show?</p>
        <iframe
          src="https://bandsintown.com/artist/id_15555607/track_button?actor_type=ARTIST&background_color=rgba(180,126,0,1)&hover_color=rgba(221,151,74,1)&font=Helvetica&bitIcon=show&text=FOLLOW&text_color=rgba(255,255,255,1)&locale=en&display_tracker_count=hide&size=large&appId="
          title="newsletter-widget"
          className="translate-x-1 h-9 w-32 mx-auto justify-center"
          loading="lazy"
        ></iframe>
      </motion.div>
    </main>
  );
};

export default Shows;
