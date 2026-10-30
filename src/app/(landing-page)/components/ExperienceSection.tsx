import ArchImage from "@/components/ArchImage";
import Reveal from "@/components/Reveal";
import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

type ExperienceProps = typeof landingPageData.experienceSection;

const ExperienceSection: React.FC<ExperienceProps> = ({
  title,
  description,
  places,
  button,
  more,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-p1"
      containerClassName="flex flex-col gap-8 lg:gap-12"
    >
      <SectionHeading
        title={title}
        description={description}
        textCenter
        light
        titleClassName="max-w-lg"
        descriptionClassName="text-white!"
      />

      <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-5 items-start">
        {places.map((place, index) => (
          <div
            key={place.title}
            style={{ "--i": index } as React.CSSProperties}
            className={`place-card flex flex-col gap-3 ${index % 2 === 1 ? "mt-8 md:mt-12" : ""}`}
          >
            <ArchImage
              src={place.image}
              alt={place.title}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="place-card__media w-full aspect-[3/4]"
            />
            <h3 className="font-primary text-white text-base md:text-[22px]">
              {place.title}
            </h3>
            <p className="text-white/80 text-xs md:text-base">
              {place.description}
            </p>
          </div>
        ))}
      </Reveal>

      <LinkButton
        href={button.link}
        label={button.label}
        calendarIcon
        className={`${btnStyles.yellow} mx-auto max-sm:w-full! max-lg:py-2.5!`}
      />

      <div className="h-px w-full bg-white/30" />

      <div className="grid lg:grid-cols-[1fr_2.2fr] gap-8 lg:gap-16">
        <div className="flex flex-col gap-5">
          <SectionHeading
            title={more.title}
            level={3}
            light
            titleClassName="text-[1.75rem]/tight! md:text-4xl/tight! max-w-xs"
          />
          <div className="relative w-full max-lg:max-w-sm aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={more.image}
              alt="Reading a book at Midori"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <LinkButton
            href={more.button.link}
            label={more.button.label}
            calendarIcon
            className={`${btnStyles.yellow} max-lg:hidden`}
          />
        </div>
        <ul className="grid md:grid-cols-2 gap-x-8 content-start">
          {more.items.map((item) => (
            <li
              key={item.title}
              className="flex gap-3 border-t border-white/40 py-4 md:last:border-b md:[&:nth-last-child(2)]:border-b max-md:last:border-b"
            >
              <span className="text-accent text-lg mt-0.5 shrink-0">
                {item.icon}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-primary text-white text-sm md:text-[17px]">
                  {item.title}
                </p>
                <p className="text-white/80 text-xs md:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <LinkButton
          href={more.button.link}
          label={more.button.label}
          calendarIcon
          className={`${btnStyles.yellow} ${btnStyles.mobileCta}`}
        />
      </div>
    </SectionWithContainer>
  );
};

export default ExperienceSection;
