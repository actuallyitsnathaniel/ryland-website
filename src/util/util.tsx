export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// todo: perhaps refactor this into checking with a database
// and see if they are subscribed to our list
export const validateEmail = (string: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(string);
};

export const baseUrl = process.env.VERCEL_BRANCH_URL
  ? `https://${process.env.VERCEL_BRANCH_URL}`
  : "";

export const pillBase =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border px-8 text-lg tracking-[-0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500";

export const pillPrimary = `${pillBase} border-yellow-600 bg-yellow-600 text-white hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-yellow-600`;

export const pillSecondary = `${pillBase} border-white/30 text-white/80 hover:border-yellow-600/60 hover:text-white`;

export const iconLinkClass =
  "group inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500";

export const fieldClass =
  "min-h-11 w-full rounded-xl border border-white/30 bg-black/60 px-4 text-xl text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500";

export const sectionTitle = "text-balance text-4xl tracking-[-0.02em]";

export const pageInset = "px-2 sm:px-8 lg:px-16 xl:px-24";
