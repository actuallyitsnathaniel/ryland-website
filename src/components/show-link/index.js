function ShowLink(props) {
  return (
    <a href={props.link} className="text-center">
      <p className="text-xl font-semibold">{props.artists}</p>
      <p className="font-semibold">{props.date}</p>
      <p className="">{props.venue}</p>
      <div className="object-center">
        <img
          className="mx-auto transition duration-75 h-80 my-10 hover:-translate-y-1 hover:scale-115"
          src={props.thumbnail}
          alt={props.alt}
        />
      </div>
    </a>
  );
}
export default ShowLink;
