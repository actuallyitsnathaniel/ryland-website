import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

// S/O to Nick Coughlin
// https://ncoughlin.com/posts/react-router-v6-hash-links/
const ScrollToHashElement = () => {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
