import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    matchMedia(`(min-width: ${innerWidth}px)`).matches ===
      matchMedia(query).matches
  );

  useEffect(() => {
    function updateMedia() {
      setMatches(matchMedia(query).matches);
    }
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [matches]);

  return matches;
}
