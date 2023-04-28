import { useState, useEffect } from "react";

export const useMediaQuery = (width: number) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  const handler = (event: MediaQueryListEvent) => {
    setIsBreakpoint(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
    setIsBreakpoint(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [width]);

  return isBreakpoint;
};
