// import { useEffect } from "react";
import { motion } from "framer-motion";
import pageTransition from "../../util/transitionPage";

const Shows = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://widgetv3.bandsintown.com/main.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <main className="flex flex-col min-h-full h-full md:mt-16 text-center p-3 text-white items-center md:justify-center text-3xl">
      <div className="mt-16" />
      <motion.div className="flex flex-col gap-5 items-center">
        <div className="w-full max-w-5xl">
          <a
            className="bit-widget-initializer text-white"
            data-artist-name="id_15555607"
            data-background-color="rgba(255,255,255,0)"
            data-bit-logo-position="hidden"
            data-separator-color="rgba(255,255,255,0.15)"
            data-text-color="rgba(255,255,255,1)"
            data-font="Helvetica"
            data-auto-style="false"
            data-button-label-capitalization="uppercase"
            data-header-capitalization="uppercase"
            data-location-capitalization="uppercase"
            data-venue-capitalization="uppercase"
            data-display-local-dates="true"
            data-local-dates-position="tab"
            data-display-past-dates="true"
            data-display-details="false"
            data-display-lineup="true"
            data-display-start-time="true"
            data-social-share-icon="true"
            data-display-limit="all"
            data-date-format="MMM D, YYYY"
            data-date-orientation="horizontal"
            data-date-border-color="rgba(255,255,255,0.15)"
            data-date-border-width="1px"
            data-date-capitalization="capitalize"
            data-date-border-radius="24px"
            data-event-ticket-cta-size="medium"
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="false"
            data-event-ticket-cta-text-color="#ffffff"
            data-event-ticket-cta-bg-color="#aa7200"
            data-event-ticket-cta-border-color="#aa7200"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="4px"
            data-sold-out-button-text-color="#ffffff"
            data-sold-out-button-background-color="#aa7200"
            data-sold-out-button-border-color="#aa7200"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="left"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-text="RSVP"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="#ffffff"
            data-event-rsvp-cta-bg-color="#aa7200"
            data-event-rsvp-cta-border-color="#aa7200"
            data-event-rsvp-cta-border-width="0px"
            data-event-rsvp-cta-border-radius="4px"
            data-follow-section-position="hidden"
            data-play-my-city-position="bottom"
            data-play-my-city-alignment="center"
            data-play-my-city-header-text="Don’t see a show near you?"
            data-play-my-city-header-text-color="#ffffff"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="Request a Show"
            data-play-my-city-cta-icon="true"
            data-play-my-city-cta-text-color="#ffffff"
            data-play-my-city-cta-bg-color="#aa7200"
            data-play-my-city-cta-border-color="#aa7200"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="4px"
            data-optin-text-color="#ffffff"
            data-language="en"
          ></a>
        </div>
        <p className="text-2xl">Wanna be first to the show?</p>
        <iframe
          src="https://bandsintown.com/artist/id_15555607/track_button?actor_type=ARTIST&background_color=rgba(180,126,0,1)&hover_color=rgba(221,151,74,1)&font=Helvetica&bitIcon=show&text=FOLLOW&text_color=rgba(255,255,255,1)&locale=en&display_tracker_count=hide&size=large&appId="
          title="newsletter-widget"
          className="h-9 w-32"
          loading="lazy"
        ></iframe>
      </motion.div>
    </main>
  );
};

export default pageTransition(Shows);
