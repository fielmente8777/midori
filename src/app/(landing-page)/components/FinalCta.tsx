import Form1 from "@/components/forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { landingPageData } from "./pageData";

type FinalCtaProps = typeof landingPageData.finalCta;

const FinalCta: React.FC<FinalCtaProps> = ({ title, description }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-p1"
      containerClassName="flex flex-col gap-6"
    >
      <SectionHeading title={title} textCenter light />
      <Form1 />
      <p className="text-sm md:text-lg text-white text-center ">{description}</p>
    </SectionWithContainer>
  );
};

export default FinalCta;
