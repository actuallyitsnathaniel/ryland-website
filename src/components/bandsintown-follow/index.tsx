import { pillPrimary } from "../../util/util";

const BandsintownFollow = () => {
  return (
    <a
      href="https://www.bandsintown.com/a/15555607"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Ryland on Bandsintown"
      className={`${pillPrimary} gap-2`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path d="M6.399 12.8v4.8H19.2v1.6H4.799V0H0v24h24V12.8H6.399Zm4.801-8H6.399v6.4H11.2V4.8Zm6.4 0h-4.8v6.4h4.8V4.8ZM24 0h-4.8v11.2H24V0Z" />
      </svg>
      Follow
    </a>
  );
};

export default BandsintownFollow;
