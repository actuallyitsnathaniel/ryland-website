import { Link } from "react-router-dom";
import { pillPrimary, sectionTitle } from "../../util/util";

// Shared friendly screen — used by the 404 route and the ErrorBoundary.
export const ErrorScreen = ({
  headline = "This track doesn't exist",
  subtext = "Looks like this page wandered off. Let's get you back to the music.",
}: {
  headline?: string;
  subtext?: string;
}) => (
  <div className="mx-auto flex max-w-md flex-col items-center gap-6 px-2 text-center text-xl leading-normal text-white">
    <h1 className={sectionTitle}>{headline}</h1>
    <p className="text-white/60">{subtext}</p>
    <Link to="/" className={pillPrimary}>
      Back home
    </Link>
  </div>
);

const ErrorPage = () => <ErrorScreen />;

export default ErrorPage;
