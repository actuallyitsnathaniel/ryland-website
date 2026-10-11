import { FormEvent, useState } from "react";
import { capitalizeFirstLetter, validateEmail, fieldClass, pillPrimary, sectionTitle } from "../../util/util";
import { render } from "@react-email/render";

import YouConnectedEmail from "../../assets/emails/you-connected-email";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (firstName !== "" && lastName !== "" && validateEmail(email)) {
      setIsSubmitting(true);

      try {
        const htmlBody = await render(YouConnectedEmail({ firstName }), {
          pretty: true,
        });
        const response = await fetch(
          `/api/youConnectedEmail?firstName=${encodeURIComponent(
            firstName
          )}&lastName=${encodeURIComponent(
            lastName
          )}&emailAddress=${encodeURIComponent(
            email
          )}&htmlBody=${encodeURIComponent(htmlBody)}`
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

  const handleDisabled = () => submitted || isSubmitting;

  return (
    <form
      id="newsletter"
      className="flex w-full max-w-md flex-col items-center gap-6 text-xl leading-normal text-white"
      onSubmit={handleSubmit}
    >
      <h2 className={`${sectionTitle} text-center`}>Stay connected</h2>
      <div className="flex w-full flex-col gap-4">
        <label
          htmlFor="input-firstName"
          className="flex flex-col gap-2 text-left text-lg text-white/60"
        >
          First name
          <input
            type="text"
            id="input-firstName"
            name="user_first_name"
            autoComplete="given-name"
            className={fieldClass}
            value={firstName}
            onChange={(e) =>
              setFirstName(capitalizeFirstLetter(e.target.value))
            }
            required
          />
        </label>
        <label
          htmlFor="input-lastName"
          className="flex flex-col gap-2 text-left text-lg text-white/60"
        >
          Last name
          <input
            type="text"
            id="input-lastName"
            name="user_last_name"
            autoComplete="family-name"
            className={fieldClass}
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirstLetter(e.target.value))}
            required
          />
        </label>
        <label
          htmlFor="input-email"
          className="flex flex-col gap-2 text-left text-lg text-white/60"
        >
          Email
          <input
            type="email"
            id="input-email"
            name="user_email"
            autoComplete="email"
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      {error && (
        <p className="text-lg text-orange-400" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className={pillPrimary} disabled={handleDisabled()}>
        {isSubmitting ? "Submitting..." : submitted ? "Thanks!" : "Sign up"}
      </button>
      <address className="not-italic text-center text-lg text-white/60">
        <p>Ryland, Los Angeles, CA</p>
        <a
          className="inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4 transition-colors duration-200 hover:text-white"
          href="mailto:weareryland@gmail.com"
        >
          weareryland@gmail.com
        </a>
      </address>
    </form>
  );
};

export default Newsletter;
