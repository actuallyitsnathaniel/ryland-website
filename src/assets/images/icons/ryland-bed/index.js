import rylandBed from "./ryland-bed.svg";
import "./index.css";

export default function RylandBedIcon() {
  return (
    <div className="ryland-bed-logo-wrapper">
      <object
        className="ryland-bed-logo"
        alt="ryland-bed-logo"
        aria-label="ryland-bed-logo"
        data={rylandBed}
        type="image/svg+xml"
      />
    </div>
  );
}
