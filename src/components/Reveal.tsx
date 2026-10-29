"use client";

import { useEffect, useRef } from "react";

// adds `reveal-ready` on mount (so content stays visible without JS) and
// `is-visible` once the element scrolls into view; the motion itself is CSS
const Reveal: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window.IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    el.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
