import ArchImage from "@/components/ArchImage";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

type AboutProps = typeof landingPageData.aboutSection;

const AboutSection: React.FC<AboutProps> = ({
  title,
  description,
  quote,
  quoteBy,
  quoteImage,
  image,
}) => {
  return (
    <SectionWithContainer containerClassName="grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
      <div className="flex flex-col gap-6 lg:gap-8">
        <SectionHeading
          title={title}
          description={description}
          titleClassName="max-w-md"
          descriptionClassName="max-w-lg"
        />
        <ArchImage
          src={image}
          alt="Bamboo deck beside the pool at Midori"
          sizes="100vw"
          framed
          className="lg:hidden w-[calc(100%-1.25rem)] max-w-md mx-auto aspect-[4/5]"
        />
        {/* founders' photo: top-left beside the quote, bottom-right under it on phones */}
        <figure className="flex max-md:flex-col gap-4 max-w-lg">
          <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden max-md:order-2 max-md:self-end">
            <Image
              src={quoteImage}
              alt={quoteBy}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <blockquote className="font-primary font-light text-dark md:text-xl">
              {quote}
            </blockquote>
            <figcaption className="text-xs md:text-base text-light max-md:text-right">
              {quoteBy}
            </figcaption>
          </div>
        </figure>
      </div>
      <ArchImage
        src={image}
        alt="Bamboo deck beside the pool at Midori"
        sizes="45vw"
        framed
        className="hidden lg:block w-[calc(100%-1.25rem)] max-w-lg justify-self-center aspect-[4/5]"
      />
    </SectionWithContainer>
  );
};

export default AboutSection;
