import rylandBed from "./ryland-bed.svg";

export default function RylandBedIcon() {
  return (
    <div className="grid h-screen">
      <img
        className="max-w-3xl p-10 justify-self-center"
        alt="ryland-bed-logo"
        aria-label="ryland-bed-logo"
        src={rylandBed}
      />
    </div>
  );
}
