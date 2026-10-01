import {useEffect, useState} from "react";

/* Returns the id of the section currently in the upper part of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const sections = key
      .split(",")
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {rootMargin: "-35% 0px -60% 0px"}
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
