function Footer() {
  return (
    <footer className="grid bg-black text-md text-white w-full text-center py-5">
      <p className="grid md:text-md">
        Copyright © {new Date().getFullYear()} Ryland
        <p>
          powered by{" "}
          <a
            className="underline underline-offset-8 "
            href="mailto:nathanielrbowman@gmail.com"
          >
            nathaniel bowman
          </a>
        </p>
      </p>
    </footer>
  );
}

export default Footer;
