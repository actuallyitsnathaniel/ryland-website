import { useState } from "react";
import {
  capitalizeFirstLetter,
  validateEmail,
  inputStyle,
  inputPlaceholderClasses,
  inputFocusClasses,
} from "../../util/util";
import { render } from "@react-email/render";

import YouConnectedEmail from "./emails/you-connected-email";

const Newsletter = ({ isModalOpen, setModalOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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
          )}&htmlBody=${encodeURIComponent(
            render(YouConnectedEmail({ firstName }), { pretty: true })
          )}`
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
      id="newsletter"
      className={`flex flex-col md:my-auto md:mx-auto
            w-fit md:h-max rounded-md p-4 bg-gray-950 bg-opacity-90`}
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl p-10 text-center">Stay Connected&nbsp;</h2>
      <div id="input-wrapper" className="flex flex-col items-center">
        <div className="grid">
          <input
            type="text"
            id="input-firstName"
            name="user_first_name"
            className={`${inputStyle} ${inputFocusClasses} ${inputPlaceholderClasses}`}
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
            className={`${inputStyle} ${inputFocusClasses} ${inputPlaceholderClasses}`}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirstLetter(e.target.value))}
            required
          />
          <input
            type="email"
            id="input-email"
            name="user_email"
            className={`${inputStyle} ${inputFocusClasses} ${inputPlaceholderClasses}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`flex transition duration-75 px-5 py-3 m-5 mx-auto rounded-lg 
            outline outline-2 outline-white disabled:opacity-25 
            hover:enabled:-translate-y-1 hover:enabled:bg-gray-400 
            hover:enabled:bg-opacity-30 hover:enabled:outline-none
            ${isSubmitting && "animate-bounce"}`}
          disabled={handleDisabled()}
        >
          {isSubmitting ? "Submitting..." : submitted ? "Thanks!" : "Sign Up"}
        </button>
      </div>
      <p className="text-center text-sm bottom-0 pt-10">
        Contact us at&nbsp;
        <a className="underline" href="mailto:weareryland@gmail.com">
          weareryland@gmail.com
        </a>
      </p>
    </form>
  );
};

export default Newsletter;
