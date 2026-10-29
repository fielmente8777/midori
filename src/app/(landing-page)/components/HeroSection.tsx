import Form1 from "@/components/forms/Form1";
import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponants";
import Image from "next/image";
import { LuNavigation } from "react-icons/lu";
import { landingPageData } from "./pageData";

type HeroProps = typeof landingPageData.hero;

const HeroSection: React.FC<HeroProps> = ({
  tag,
  titleLight,
  titleBold,
  description,
  rating,
  image,
  highlights,
}) => {
  return (
    <>
      <Section defaultPadding={false} className="bg-background">
        <Container className="grid lg:grid-cols-2 lg:min-h-[560px]">
          <div className="flex flex-col justify-center gap-5 py-8 lg:py-12 lg:pr-10 max-lg:order-2">
            <p className="flex items-center gap-2 text-sm text-light">
              <LuNavigation className="text-p1" />
              {tag}
            </p>
            <h1 className="font-primary text-dark text-6xl/[0.95] md:text-7xl/[0.95] xl:text-8xl/[0.95] tracking-tight">
              <span className="font-extralight block">{titleLight}</span>
              <span className="font-medium">
                {titleBold}
                
              </span>
            </h1>
            <p className="text-light max-w-md">{description}</p>
            <div className="flex items-center gap-3 border-t border-line pt-5 max-w-md">
              <p className="font-primary font-extralight text-4xl text-dark">
                {rating.value}
              </p>
              <div className="flex flex-col">
                <span className="text-p1 text-xs md:text-sm tracking-widest">★★★★★</span>
                <span className="text-xs md:text-[15px] text-light">{rating.label}</span>
              </div>
            </div>
          </div>
          {/* image bleeds to the right edge of the screen on desktop */}
          <div className="relative max-lg:order-1 max-lg:-mx-4 aspect-[4/3] lg:aspect-auto lg:mr-[calc((min(100vw,1600px)-100%)/-2)]">
            <Image
              src={image}
              alt="Midori villas and linear pool"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-background2 border-y border-line"
        containerClassName="grid grid-cols-2 lg:grid-cols-4"
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 py-4 lg:py-6 lg:px-6 max-lg:even:pl-4 lg:first:pl-0 ${
              index !== highlights.length - 1 ? "lg:border-r" : ""
            } ${index % 2 === 0 ? "max-lg:border-r" : ""} ${
              index < 2 ? "max-lg:border-b" : ""
            } border-line`}
          >
            <span className="text-p1 text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="font-primary text-dark font-bold text-sm md:text-[17px]">
                {item.title}
              </p>
              <p className="text-light text-xs md:text-[15px] ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </SectionWithContainer>

      <SectionWithContainer
        sectionId="form"
        defaultPadding={false}
        sectionClassName="bg-p2 py-4 scroll-mt-4"
      >
        <Form1 />
      </SectionWithContainer>
    </>
  );
};

export default HeroSection;
