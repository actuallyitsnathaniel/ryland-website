import { SocialLinks } from "../social-links";

const Footer = () => {
  return (
    <footer className="grid text-md text-white w-full text-center pt-5 mt-auto bottom-0">
      <div className="backdrop-blur-sm  bg-opacity-35 py-4">
        <div className="sm:hidden flex justify-center">
          <SocialLinks />
        </div>
        <p className="grid md:text-md">
          Copyright © {new Date().getFullYear()} Ryland
          <p>
            powered by&nbsp;
            <a
              className="underline underline-offset-8 "
              href="mailto:nathanielrbowman@gmail.com"
            >
              nathaniel bowman
            </a>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
