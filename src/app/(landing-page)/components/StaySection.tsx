import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ArchImage from "@/components/ArchImage";
import Image from "next/image";
import { landingPageData } from "./pageData";
import VillaSlider from "./slider/VillaSlider";

type StayProps = typeof landingPageData.staySection;

const TagList = ({ tags }: { tags: string[] }) => (
  <ul className="dot-list flex flex-wrap gap-x-5 gap-y-1 text-xs md:text-base text-light">
    {tags.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);

const StaySection: React.FC<StayProps> = ({
  title,
  description,
  villas,
  hut,
}) => {
  // hut photos: beside the text on desktop, under the tags on smaller screens
  const hutImages = (className: string) => (
    <div className={`grid grid-cols-[1.25fr_1fr] gap-4 md:gap-5 items-end ${className}`}>
      <ArchImage
        src={hut.images[0].src}
        alt={hut.images[0].caption}
        sizes="(max-width: 1024px) 55vw, 25vw"
        className="w-full aspect-[3/4]"
      />
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={hut.images[1].src}
          alt={hut.images[1].caption}
          fill
          sizes="(max-width: 1024px) 45vw, 20vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  return (
    <SectionWithContainer
      sectionClassName="bg-background2"
      containerClassName="flex flex-col gap-8 lg:gap-12"
    >
      <SectionHeading
        title={title}
        description={description}
        textCenter
        descriptionClassName="max-w-xl"
      />

      {/* Villas */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-center">
        <div className="flex flex-col gap-4 min-w-0">
          <h3 className="font-primary font-light text-2xl md:text-4xl text-dark">
            {villas.title}
          </h3>
          <TagList tags={villas.tags} />
          {/* phones/tablets: slider sits right under the tags */}
          <div className="w-full min-w-0 lg:hidden mt-2">
            <VillaSlider images={villas.images} />
          </div>
          <p className="text-light text-sm md:text-[17px] mt-2 md:mt-3">
            {villas.description}
          </p>
          <ul className="flex flex-col">
            {villas.features.map((feature) => (
              <li
                key={feature}
                className="border-t border-line last:border-b py-2.5 text-sm md:text-[17px] text-dark"
              >
                {feature}
              </li>
            ))}
          </ul>
          <LinkButton
            href={villas.button.link}
            label={villas.button.label}
            calendarIcon
            className={`${btnStyles.green} text-white! max-lg:hidden`}
          />
        </div>
        <div className="max-lg:hidden grid grid-cols-3 gap-4 md:gap-5 items-start">
          {villas.images.map((img, index) => (
            <figure
              key={img.src}
              className={`flex flex-col gap-2 ${index === 1 ? "mt-8 md:mt-10" : ""}`}
            >
              <ArchImage
                src={img.src}
                alt={img.caption}
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="w-full aspect-[3/4]"
              />
              <figcaption className="text-xs md:text-sm text-light text-center">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <LinkButton
          href={villas.button.link}
          label={villas.button.label}
          calendarIcon
          className={`${btnStyles.green} ${btnStyles.mobileCta} text-white!`}
        />
      </div>

      <div className="h-px w-full bg-line" />

      {/* Hut room */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {hutImages("max-lg:hidden")}
        <div className="flex flex-col gap-4 min-w-0">
          <h3 className="font-primary font-light text-2xl md:text-4xl text-dark">
            {hut.title}
          </h3>
          <TagList tags={hut.tags} />
          {/* phones/tablets: same two images, right under the tags */}
          {hutImages("lg:hidden mt-2")}
          <p className="text-light text-sm md:text-[17px] mt-2 md:mt-3">
            {hut.description}
          </p>
          <LinkButton
            href={hut.button.link}
            label={hut.button.label}
            calendarIcon
            className={`${btnStyles.green} text-white! max-lg:mx-auto max-sm:w-full! max-lg:py-2.5!`}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StaySection;
