"use client";

import { landingPageData } from "@/app/(landing-page)/components/pageData";
import { usePathname } from "next/navigation";
import { SectionWithContainer } from "./sectionComponants";

const OfferSection = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-p1 py-1.5"
    >
      <p
        className="text-center text-white text-[11px] md:text-sm"
        dangerouslySetInnerHTML={{ __html: landingPageData.offer }}
      />
    </SectionWithContainer>
  );
};

export default OfferSection;
