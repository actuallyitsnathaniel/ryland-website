import { useEffect, useState } from "react";
import { capitalizeFirstLetter, validateEmail, baseUrl } from "../../util/util";
import EmailTemplate from "./email";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const inputStyle =
    "flex mx-auto m-2 bg-opacity-20 rounded-md bg-white p-2 font-normal place-items-center w-full";

  const placeholderClasses = " placeholder:text-gray-300 placeholder:text-lg";

  const focusClasses = "focus-visible:outline-none focus:outline-white text-lg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (firstName !== "" && lastName !== "" && validateEmail(email)) {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          `/api/getData?firstName=${encodeURIComponent(
            firstName
          )}&lastName=${encodeURIComponent(
            lastName
          )}&emailAddress=${encodeURIComponent(
            email
          )}&htmlBody=${encodeURIComponent(EmailTemplate({ firstName }))}`
        );

        if (!response.ok) {
          throw new Error("Failed to submit data");
        }

        const data = await response.json(); // assuming your response is JSON
        console.log("Server response:", data);

        setSubmitted(true);
        setIsSubmitting(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("Failed to submit form. Please try again later.");
        setIsSubmitting(false);
      }
    } else {
      setError("Please fill in all fields correctly.");
    }
  };

  const handleDisabled = () => {
    return (
      submitted ||
      isSubmitting ||
      !(firstName !== "" && lastName !== "" && validateEmail(email))
    );
  };

  return (
    <form
      id="connect-form"
      className="flex flex-col items-center md:my-auto"
      onSubmit={handleSubmit}
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
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              setFirstName(capitalizeFirstLetter(e.target.value))
            }
            required
          />
          <input
            type="text"
            id="input-lastName"
            name="user_last_name"
            className={`${inputStyle} ${focusClasses} ${placeholderClasses}`}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirstLetter(e.target.value))}
            required
          />
          <input
            type="email"
            id="input-email"
            name="user_email"
            className={`${inputStyle} ${focusClasses} ${placeholderClasses}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={
            "flex transition duration-75 px-5 py-3 m-5 mx-auto rounded-lg outline outline-2 outline-white disabled:opacity-25 hover:enabled:-translate-y-1 hover:enabled:bg-gray-400 hover:enabled:bg-opacity-30 hover:enabled:outline-none"
          }
          disabled={handleDisabled()}
        >
          {isSubmitting ? "Submitting..." : submitted ? "Thanks!" : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
