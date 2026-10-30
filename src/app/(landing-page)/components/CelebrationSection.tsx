import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

type CelebrationProps = typeof landingPageData.celebrationSection;

const CelebrationSection: React.FC<CelebrationProps> = ({
  title,
  description,
  occasions,
  note,
  images,
  button,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background3"
      containerClassName="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-lg:order-2">
        <div className="lg:col-span-2 relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            src={images[0]}
            alt="Candlelit dinner set-up on the Paddy Deck"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        {images.slice(1).map((src, index) => (
          <div
            key={src}
            className="relative w-full aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Celebration table set-up ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 22vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <SectionHeading
          title={title}
          description={description}
          titleClassName="max-w-md"
          descriptionClassName="max-w-md"
        />
        <ul className="flex flex-wrap gap-2">
          {occasions.map((occasion) => (
            <li
              key={occasion}
              className="border border-p1 rounded-full px-3 py-1 text-xs md:text-sm text-dark"
            >
              {occasion}
            </li>
          ))}
        </ul>
        <p className="text-xs md:text-sm text-light">{note}</p>
        <LinkButton
          href={button.link}
          label={button.label}
          className={`${btnStyles.green} text-white! px-6! py-2.5!`}
        />
      </div>
    </SectionWithContainer>
  );
};

export default CelebrationSection;
