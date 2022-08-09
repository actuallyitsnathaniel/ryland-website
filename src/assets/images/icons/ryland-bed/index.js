import rylandBed from "./ryland-bed.svg";

export default function RylandBedIcon() {
  return (
    <div className="grid h-max lg:p-1 md:pt-2 ">
      <img
        className="max-w-3xl justify-self-center p-5 sm:p-0 md:p-2 w-screen md:h-screen"
        alt="ryland-bed-logo"
        aria-label="ryland-bed-logo"
        src={rylandBed}
      />
    </div>
  );
}
