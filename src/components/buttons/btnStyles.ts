// Midori button presets (kept outside the client LinkButton module so
// server components can import plain strings)
export const btnStyles = {
  green: "rounded-full bg-p1 border-p1 text-dark text-xs md:text-sm",
  yellow: "rounded-full bg-accent border-accent text-dark text-xs md:text-sm",
  outline: "rounded-full bg-transparent border-p1 text-dark text-xs md:text-sm",
  // bottom-of-section CTA below lg: full width on phones, centred above that
  mobileCta: "lg:hidden mx-auto max-sm:w-full! py-2.5!",
};
