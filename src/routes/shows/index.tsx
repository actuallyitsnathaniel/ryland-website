import SEO from "../../components/seo";
import BandsintownEvents from "../../components/bandsintown-events";
import BandsintownFollow from "../../components/bandsintown-follow";
import FeaturedShows from "../../components/featured-shows";
import {
  featuredShowDateKeys,
  visibleFeaturedShows,
} from "../../data/featured-shows";
import { pageInset } from "../../util/util";

const Shows = () => {
  const appId = import.meta.env.VITE_BANDSINTOWN_API_KEY;
  const featured = visibleFeaturedShows();

  return (
    <div
      className={`-mb-6 -mt-10 grid w-full grid-cols-1 items-start gap-8 text-center text-base leading-normal text-white md:-mt-6 min-[1301px]:-mt-8 ${
        featured.length > 0 ? "lg:grid-cols-3 lg:gap-x-12" : ""
      } ${pageInset}`}
    >
      <SEO
        title="Shows & Tour Dates - Ryland Live Concerts | Los Angeles"
        description="View upcoming Ryland concerts and tour dates in Los Angeles and beyond. Get tickets to indie rock shows, follow us on Bandsintown to be first to know about new tour announcements and live performances."
        url="https://www.weareryland.com/shows"
      />
      <h1 className="sr-only">Ryland Shows - Upcoming Concerts & Tour Dates</h1>
      {featured.length > 0 ? (
        <section
          aria-labelledby="featured-heading"
          className="flex min-w-0 flex-col items-center gap-4 lg:col-span-1 lg:border-r lg:border-white/15 lg:pr-12"
        >
          <h2 id="featured-heading" className="text-2xl tracking-[-0.02em]">
            Featured
          </h2>
          <FeaturedShows shows={featured} />
        </section>
      ) : null}
      {featured.length > 0 ? (
        <div className="h-px w-full bg-white/15 lg:hidden" aria-hidden="true" />
      ) : null}
      <section
        aria-labelledby="show-list-heading"
        className={`flex min-w-0 w-full flex-col items-center gap-4 ${
          featured.length > 0 ? "lg:col-span-2" : ""
        }`}
      >
        <h2 id="show-list-heading" className="sr-only">
          All shows
        </h2>
        <BandsintownEvents
          artistName="ryland"
          appId={appId}
          suppressDates={featuredShowDateKeys(featured)}
          hasFeatured={featured.length > 0}
        >
          <p className="text-lg tracking-[-0.02em]">
            Wanna be first to the show?
          </p>
          <BandsintownFollow />
        </BandsintownEvents>
      </section>
    </div>
  );
};

export default Shows;
