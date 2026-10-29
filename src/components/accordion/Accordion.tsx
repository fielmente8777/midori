"use client";

import { LuPlus, LuX } from "react-icons/lu";

interface AccordionProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ q, a, isOpen, onToggle }) => {
  return (
    <div className="border-b border-line py-4">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-dark font-primary text-sm md:text-xl">{q}</h3>
        <span className="shrink-0 w-5 h-5 rounded-full bg-background2 text-p1 flex items-center justify-center text-xs">
          {isOpen ? <LuX /> : <LuPlus />}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-light text-sm md:text-[17px] max-w-xl">{a}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
