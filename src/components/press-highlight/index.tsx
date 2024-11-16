type PressHighlightType = {
  title: string;
  subtitle: string;
  url: string;
};

const PressHighlight = ({ title, subtitle, url }: PressHighlightType) => {
  return (
    <div className="pb-6">
      <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
        <a className=" p-5 text-2xl" href={url}>
          {title}
        </a>
      </div>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default PressHighlight;
