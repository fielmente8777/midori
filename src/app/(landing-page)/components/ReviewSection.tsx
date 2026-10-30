import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { landingPageData } from "./pageData";
import ReviewSlider from "./slider/ReviewSlider";

type ReviewProps = typeof landingPageData.reviewSection;

const ReviewSection: React.FC<ReviewProps> = ({
  title,
  description,
  ratings,
  reviews,
}) => {
  return (
    <SectionWithContainer containerClassName="flex flex-col gap-8 lg:gap-12">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-start">
        <SectionHeading
          title={title}
          description={description}
          titleClassName="max-w-xl"
          descriptionClassName="max-w-md"
        />
        <dl className="grid grid-cols-2 gap-x-5 md:gap-x-8">
          {ratings.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b border-line py-2.5"
            >
              <dt className="text-xs md:text-base text-light">{item.label}</dt>
              <dd className="text-sm md:text-[17px] text-dark">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="w-full min-w-0">
        <ReviewSlider reviews={reviews} />
      </div>
    </SectionWithContainer>
  );
};

export default ReviewSection;
