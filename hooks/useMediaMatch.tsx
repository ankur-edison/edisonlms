import { useState, useEffect } from "react";

const isClient = typeof window !== "undefined";

function useMediaMatch(width: string) {
  const [mediaMatch, setMediaMatch] = useState(false);
  useEffect(() => {
    const maxWidth = window.matchMedia(`(max-width:${width})`);

    setMediaMatch(maxWidth.matches);

    maxWidth.addEventListener("change", (e) => {
      setMediaMatch(e.matches);
    });
  }, [width]);

  return isClient ? mediaMatch : undefined;
}

export default useMediaMatch;
