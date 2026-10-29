import LinkButton from "@/components/buttons/LinkButton";
import { btnStyles } from "@/components/buttons/btnStyles";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { landingPageData } from "./pageData";
import GallerySlider from "./slider/GallerySlider";

type GalleryProps = typeof landingPageData.gallerySection;

const GallerySection: React.FC<GalleryProps> = ({
  title,
  description,
  button,
  images,
}) => {
  return (
    <SectionWithContainer containerClassName="flex flex-col gap-8">
      <div className="flex max-md:flex-col md:items-end justify-between gap-4">
        <SectionHeading title={title} description={description} />
        <LinkButton
          href={button.link}
          label={button.label}
          calendarIcon
          className={btnStyles.outline}
        />
      </div>
      <div className="w-full min-w-0">
        <GallerySlider images={images} />
      </div>
    </SectionWithContainer>
  );
};

export default GallerySection;
