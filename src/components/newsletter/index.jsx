import { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../util/util";
const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const form = useRef();

  const inputStyle =
    "flex mx-auto m-2 bg-opacity-20 rounded-md bg-white p-2 font-normal place-items-center w-full";

  const placeholderClasses = " placeholder:text-gray-300 placeholder:text-lg";

  const focusClasses = "focus-visible:outline-none focus:outline-white text-lg";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    if (firstName != "" && lastName != "" && validateEmail(email)) {
      try {
        const response = await fetch("https://your-railway-app-url/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Failed to subscribe");
        }

        setSubmitted(true);
      } catch (err) {
        setError("Failed to subscribe. Please try again.");
      }
    }
  };

  const HandleDisabled = () => {
    if (!submitted) {
      if (firstName != "" && lastName != "" && validateEmail(email)) {
        return false;
      }
    }
    return true;
  };

  return (
    <form
      ref={form}
      id="connect-form"
      className="flex flex-col items-center md:my-auto"
    >
      <h2 className="text-4xl p-6 text-center">
        Sign up for the band newsletter!
      </h2>
      <div id="input-wrapper" className="justify-items-center w-2/3">
        <div className="grid">
          <input
            type="text"
            id="input-firstName"
            name="user_first_name"
            className={`${inputStyle} ${focusClasses} ${placeholderClasses}`}
            placeholder="first name"
            onChange={(e) => {
              setFirstName(capitalizeFirstLetter(e.target.value));
            }}
          />
          <input
            type="text"
            id="input-lastName"
            name="user_last_name"
            className={`${inputStyle} ${focusClasses} ${placeholderClasses}`}
            placeholder="last name"
            onChange={(e) => {
              setLastName(capitalizeFirstLetter(e.target.value));
            }}
          />
          <input
            type="email"
            id="input-email"
            name="user_email"
            className={`${inputStyle} ${focusClasses} ${placeholderClasses}`}
            placeholder="email@mail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={
            "flex transition duration-75 px-5 py-3 m-5 mx-auto rounded-lg outline outline-2 outline-white disabled:opacity-25 hover:enabled:-translate-y-1 hover:enabled:bg-gray-400 hover:enabled:bg-opacity-30 hover:enabled:outline-none"
          }
          disabled={HandleDisabled()}
          onClick={HandleSubmit}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
