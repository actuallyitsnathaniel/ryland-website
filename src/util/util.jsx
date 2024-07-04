export const fetchSomeData = async () => {
  const response = await fetch("/api/getData");
  const data = await response.json();
  return data;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const validateEmail = (string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(string);
};

export const sendEmail = (firstName, lastName, email) => {
  // TODO: https://react.email/docs/introduction
};
