import { useEffect, useState } from "react";

const DEFAULT_NAMES = ["--bg-stop-1-hex", "--bg-stop-2-hex", "--bg-stop-3-hex"] as const;

export function useHexStops(names: readonly string[] = DEFAULT_NAMES): string[] {
  const [stops, setStops] = useState<string[]>(() =>
    Array.from({ length: names.length }, () => "#000000")
  );

  useEffect(() => {
    const read = () => {
      const css = getComputedStyle(document.documentElement);
      setStops(names.map((n) => css.getPropertyValue(n).trim() || "#000000"));
    };

    read();

    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, [names]);

  return stops;
}
