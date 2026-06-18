type PressHighlightType = {
  title: string;
  subtitle: string;
  url: string;
};

const PressHighlight = ({ title, subtitle, url }: PressHighlightType) => {
  return (
    <div>
      <div className="md:transition md:duration-75 md:hover:scale-105 md:origin-left">
        <a className="text-2xl" href={url}>
          &#9099; {title}
        </a>
      </div>
      <p className="text-lg text-white/60">{subtitle}</p>
    </div>
  );
};

export default PressHighlight;
