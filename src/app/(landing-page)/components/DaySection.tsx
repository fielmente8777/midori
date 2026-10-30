import Reveal from "@/components/Reveal";
import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { landingPageData } from "./pageData";
import DaySlider from "./slider/DaySlider";

type DayProps = typeof landingPageData.daySection;

const DaySection: React.FC<DayProps> = ({
  title,
  description,
  images,
  button,
  timeline,
}) => {
  return (
    <SectionWithContainer containerClassName="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* min-w-0 stops the slider stretching the column past the screen edge */}
      <div className="flex flex-col items-center gap-6 min-w-0 lg:sticky lg:top-24">
        <SectionHeading
          title={title}
          description={description}
          textCenter
          descriptionClassName="max-w-xs"
        />
        <div className="w-full max-w-sm min-w-0">
          <DaySlider images={images} />
        </div>
        <LinkButton
          href={button.link}
          label={button.label}
          calendarIcon
          className={`${btnStyles.green} text-white! max-lg:hidden`}
        />
      </div>

      {/* timeline line draws down, then each step slides in one after another */}
      <Reveal>
        <ol className="day-timeline relative flex flex-col gap-6 pl-7 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-px before:bg-line">
          {timeline.map((item, index) => (
            <li
              key={item.time}
              style={{ "--i": index } as React.CSSProperties}
              className="day-step relative"
            >
              <span className="day-step__dot absolute -left-7 top-1 w-[11px] h-[11px] rounded-full border-2 border-p1 bg-background" />
              <p className="font-primary text-p1 text-xs md:text-base">
                {item.time}
              </p>
              <p className="text-dark text-sm md:text-lg">{item.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <LinkButton
        href={button.link}
        label={button.label}
        calendarIcon
        className={`${btnStyles.green} ${btnStyles.mobileCta} text-white!`}
      />
    </SectionWithContainer>
  );
};

export default DaySection;
