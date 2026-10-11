type PressHighlightType = {
  title: string;
  subtitle: string;
  url: string;
};

const PressHighlight = ({ title, subtitle, url }: PressHighlightType) => {
  return (
    <a
      className="group flex min-h-11 cursor-pointer flex-col justify-center gap-1 rounded-xl py-2 text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-balance text-xl tracking-[-0.02em] text-white/80 transition-colors duration-200 group-hover:text-white">
        {title}
      </span>
      <span className="text-lg text-white/60">{subtitle}</span>
    </a>
  );
};

export default PressHighlight;
