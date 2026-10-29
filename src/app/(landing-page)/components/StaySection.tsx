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
  <ul className="dot-list flex flex-wrap gap-x-5 gap-y-1 text-xs md:text-[15px] text-light">
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
  return (
    <SectionWithContainer
      sectionClassName="bg-background2"
      containerClassName="flex flex-col gap-10 lg:gap-14"
    >
      <SectionHeading
        title={title}
        description={description}
        textCenter
        descriptionClassName="max-w-xl"
      />

      {/* Villas */}
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-primary font-light text-2xl md:text-4xl text-dark">
            {villas.title}
          </h3>
          <TagList tags={villas.tags} />
          <p className="text-light text-sm md:text-[17px]">
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
        <div className="w-full min-w-0 md:hidden">
          <VillaSlider images={villas.images} />
        </div>
        <div className="max-md:hidden grid grid-cols-3 gap-2 md:gap-4 items-start">
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
          className={`${btnStyles.green} text-white! lg:hidden`}
        />
      </div>

      <div className="h-px w-full bg-line" />

      {/* Hut room */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div className="grid grid-cols-[1.25fr_1fr] gap-3 items-end">
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
        <div className="flex flex-col gap-4">
          <h3 className="font-primary font-light text-2xl md:text-4xl text-dark">
            {hut.title}
          </h3>
          <TagList tags={hut.tags} />
          <p className="text-light text-sm md:text-[17px]">{hut.description}</p>
          <LinkButton
            href={hut.button.link}
            label={hut.button.label}
            calendarIcon
            className={`${btnStyles.green} text-white!`}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StaySection;
