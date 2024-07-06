export const fetchSomeData = async () => {
  const response = await fetch("/api/getData");
  const data = await response.json();
  return data;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// todo: perhaps refactor this into checking with a database
// and see if they are subscribed to our list
export const validateEmail = (string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(string);
};

export const baseUrl = process.env.VERCEL_BRANCH_URL
  ? `https://${process.env.VERCEL_BRANCH_URL}`
  : "";
