import rylandBed from "./ryland-bed.svg";

export default function RylandBedIcon() {
  return (
    <div className="grid">
      <img
        className="max-w-2xl justify-self-center md:pb-7 px-12 md:px-0 mt-[35%] md:mt-[25%] lg:mt-[3%] mb-[50%] md:mb-[15%] w-screen lg:h-screen"
        alt="ryland-bed-logo"
        aria-label="ryland-bed-logo"
        src={rylandBed}
      />
    </div>
  );
}
