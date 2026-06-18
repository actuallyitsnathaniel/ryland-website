import { Link } from "react-router-dom";

// Shared friendly screen — used by the 404 route and the ErrorBoundary.
export const ErrorScreen = ({
  headline = "This track doesn't exist 🎵",
  subtext = "Looks like this page wandered off — let's get you back to the music.",
}: {
  headline?: string;
  subtext?: string;
}) => (
  <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-white gap-6">
    <h1 className="font-sans-grotesk text-[clamp(2.5rem,7vw,4.5rem)] tracking-[-0.03em] font-bold">
      {headline}
    </h1>
    <p className="text-lg sm:text-xl text-orange-100 max-w-md">{subtext}</p>
    <Link
      to="/"
      className="p-4 px-6 transition duration-150 ease-in-out border border-white rounded-full hover:scale-110 hover:text-orange-200 hover:border-orange-200"
    >
      Back home
    </Link>
  </main>
);

const ErrorPage = () => <ErrorScreen />;

export default ErrorPage;
