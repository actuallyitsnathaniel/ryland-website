type ShowLinkType = {
  link: string;
  artists: string;
  date: string;
  venue: string;
  thumbnail: string;
  alt: string;
};
const ShowLink = ({
  link,
  artists,
  date,
  venue,
  thumbnail,
  alt,
}: ShowLinkType) => {
  return (
    <a href={link} className="text-center p-3">
      <div className="sm:mb-20 md:mb-10">
        <p className="text-xl">{artists}</p>
        <p className="">{date}</p>
        <p className="p-0 m-0">{venue}</p>
        <div
          id="thumbnail-wrapper"
          className="transition duration-75 hover:-translate-y-1 hover:scale-115"
        >
          <img className="mx-auto h-80 my-4" src={thumbnail} alt={alt} />
          <p className="p-0 m-0 text-xl">Click for tickets</p>
        </div>
      </div>
    </a>
  );
};
export default ShowLink;
