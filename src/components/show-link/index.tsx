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
        <p className="text-xl ">{artists}</p>
        <p className="">{date}</p>
        <p className="p-0 m-0">{venue}</p>
        <img
          className="mx-auto transition duration-75 h-80 my-4 hover:-translate-y-1 hover:scale-115"
          src={thumbnail}
          alt={alt}
        />
      </div>
    </a>
  );
};
export default ShowLink;
