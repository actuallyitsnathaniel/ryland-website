import { useState, useEffect, useCallback } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (debounceMs = 100): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [debounceMs]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
};