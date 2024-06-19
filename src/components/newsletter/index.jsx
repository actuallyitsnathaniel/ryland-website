import { useRef, useState } from "react";

const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const inputStyle =
    "flex mx-auto m-2 bg-opacity-20 rounded-md bg-white p-2 font-normal place-items-center";

  const placeholderClasses = " placeholder:text-gray-300 placeholder:text-lg";

  const focusClasses = "focus-visible:outline-none focus:outline-white";

  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (firstName != "" && lastName != "" && email != "") {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitting(false);
            setSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const HandleDisabled = () => {
    if (!submitted) {
      if (firstName != "" && lastName != "" && email != "") {
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
      <div id="input-wrapper" className="justify-items-center">
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
            "flex transition duration-75 font-semibold px-5 py-3 m-5 mx-auto rounded-lg outline outline-2 outline-white disabled:opacity-25 hover:enabled:-translate-y-1 hover:enabled:bg-gray-400 hover:enabled:bg-opacity-30 hover:enabled:outline-none"
          }
          disabled={HandleDisabled()}
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
