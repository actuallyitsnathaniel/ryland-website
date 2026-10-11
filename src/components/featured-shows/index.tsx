import {
  formatFeaturedShowDate,
  type FeaturedShow,
} from "../../data/featured-shows";

const FeaturedShows = ({ shows }: { shows: FeaturedShow[] }) => {
  if (shows.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center gap-12 text-base leading-normal text-white">
      {shows.map((show) => (
          <a
            key={show.id}
            href={show.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs cursor-pointer flex-col items-center rounded-xl text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 sm:max-w-sm lg:max-w-none"
          >
            {show.poster ? (
              <img
                src={show.poster}
                alt={show.posterAlt ?? show.title}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-200 group-hover:brightness-110 group-hover:ring-white/30"
              />
            ) : null}
            <p className="mt-4 text-balance text-lg tracking-[-0.02em]">
              {show.title}
            </p>
            <p className="mt-1 tracking-[-0.02em]">
              {formatFeaturedShowDate(show.start)}
            </p>
            <p className="mt-1 text-white/60">{show.place}</p>
            <p className="text-white/60">{show.note}</p>
            <span className="mt-5 inline-flex min-h-11 items-center rounded-full border border-yellow-600 bg-yellow-600 px-8 text-sm tracking-[-0.02em] text-white transition-colors duration-200 group-hover:bg-yellow-500">
              {show.cta}
            </span>
          </a>
      ))}
    </div>
  );
};

export default FeaturedShows;
