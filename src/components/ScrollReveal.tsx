"use client";

import { useEffect } from "react";

// page-wide, minimal: each block inside a section fades up the first time it
// scrolls into view. Blocks already on screen at load (the hero) are left alone,
// and blocks with their own <Reveal> animation are skipped.
const ScrollReveal: React.FC = () => {
  useEffect(() => {
    if (typeof window.IntersectionObserver === "undefined") return;

    const blocks = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section > .max_width > :not(.reveal)"
      )
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    blocks.forEach((el) => {
      const index = Array.prototype.indexOf.call(
        el.parentElement?.children ?? [],
        el
      );
      el.style.setProperty("--fx-i", String(Math.min(index, 4)));
      el.classList.add("fx-ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("fx-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    blocks.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
