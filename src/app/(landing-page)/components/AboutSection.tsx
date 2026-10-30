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
        {/* desktop: founders' photo top-left beside the quote.
            phones: quote first, then name (left) and photo (right) on one line */}
        <figure className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] items-center md:items-start gap-x-4 gap-y-0 md:gap-y-2 max-w-lg">
          <blockquote className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 font-primary font-light text-dark md:text-xl">
            {quote}
          </blockquote>
          <figcaption className="md:col-start-2 md:row-start-2 text-sm md:text-base text-light">
            {quoteBy}
          </figcaption>
          <div className="relative w-14 h-14 max-md:-my-1 md:w-12 md:h-12 shrink-0 rounded-full overflow-hidden md:col-start-1 md:row-start-1 md:row-span-2">
            <Image
              src={quoteImage}
              alt={quoteBy}
              fill
              sizes="56px"
              className="object-cover"
            />
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
