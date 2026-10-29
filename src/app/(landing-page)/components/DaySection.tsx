import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ArchImage from "@/components/ArchImage";
import { landingPageData } from "./pageData";

type DayProps = typeof landingPageData.daySection;

const DaySection: React.FC<DayProps> = ({
  title,
  description,
  image,
  button,
  timeline,
}) => {
  return (
    <SectionWithContainer containerClassName="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="flex flex-col items-center gap-6 lg:sticky lg:top-8">
        <SectionHeading
          title={title}
          description={description}
          textCenter
          descriptionClassName="max-w-xs"
        />
        <ArchImage
          src={image}
          alt="Mango trees beside the paddy at Midori"
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="w-full max-w-sm aspect-[7/8]"
        />
        <LinkButton
          href={button.link}
          label={button.label}
          calendarIcon
          className={`${btnStyles.green} text-white! max-lg:hidden`}
        />
      </div>

      <ol className="relative flex flex-col gap-6 pl-7 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-px before:bg-line">
        {timeline.map((item) => (
          <li key={item.time} className="relative">
            <span className="absolute -left-7 top-1 w-[11px] h-[11px] rounded-full border-2 border-p1 bg-background" />
            <p className="font-primary text-p1 text-xs md:text-[15px]">{item.time}</p>
            <p className="text-dark text-sm md:text-lg">{item.text}</p>
          </li>
        ))}
      </ol>

      <LinkButton
        href={button.link}
        label={button.label}
        calendarIcon
        className={`${btnStyles.green} text-white! lg:hidden mx-auto`}
      />
    </SectionWithContainer>
  );
};

export default DaySection;
