export const fetchSomeData = async () => {
  const response = await fetch("/api/youConnectedEmail");
  const data = await response.json();
  return data;
};

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

export const inputStyle =
  "flex mx-auto m-2 bg-opacity-20 rounded-md bg-white p-2 font-normal place-items-center w-72";
export const inputPlaceholderClasses =
  " placeholder:text-gray-300 placeholder:text-lg";
export const inputFocusClasses =
  "focus-visible:outline-none focus:outline-white text-lg";
