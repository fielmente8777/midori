"use client";

import Accordion from "@/components/accordion/Accordion";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useState } from "react";
import { landingPageData } from "./pageData";

type FaqProps = typeof landingPageData.faq;

const Faq: React.FC<FaqProps> = ({ title, description, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWithContainer containerClassName="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-16">
      <SectionHeading
        title={title}
        description={description}
        wrapperClassName="lg:sticky lg:top-24 lg:self-start"
        titleClassName="max-w-xs"
        descriptionClassName="max-w-xs text-sm!"
      />
      <div className="border-t border-line">
        {items.map((item, index) => (
          <Accordion
            key={item.q}
            q={item.q}
            a={item.a}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Faq;
