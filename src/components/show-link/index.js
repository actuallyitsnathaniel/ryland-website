function ShowLink(props) {
  return (
    <a href={props.link}>
      <p className="text-3xl text-center font-semibold p-0">{props.venue}</p>
      <p className="text-center font-semibold p-0">{props.date}</p>
      <p className="text-center p-0">{props.artists}</p>
      <img
        className="transition item-center duration-75 h-72 my-10 hover:-translate-y-1 hover:scale-115"
        src={props.thumbnail}
        alt={props.alt}
      />
    </a>
  );
}
export default ShowLink;
