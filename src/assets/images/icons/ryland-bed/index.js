import rylandBed from "./ryland-bed.svg";

export default function RylandBedIcon() {
  return (
    <div className="grid h-screen lg:pt-5 md:pt-2">
      <img
        className="max-w-3xl justify-self-center p-10"
        alt="ryland-bed-logo"
        aria-label="ryland-bed-logo"
        src={rylandBed}
      />
    </div>
  );
}
