import { useEffect, useState } from "react";

export function useHexStops(
  names = ["--bg-stop-1-hex", "--bg-stop-2-hex", "--bg-stop-3-hex"]
) {
  const [stops, setStops] = useState(["#000000", "#000000", "#000000"]);

  const read = () => {
    const css = getComputedStyle(document.documentElement);
    setStops(names.map((n) => css.getPropertyValue(n).trim()));
  };

  useEffect(() => {
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  return stops;
}
