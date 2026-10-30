import ArchImage from "@/components/ArchImage";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

type PhotoshootProps = typeof landingPageData.photoshootSection;

const Caption: React.FC<{ text: string }> = ({ text }) => (
  <span className="absolute left-2 bottom-2 md:left-3 md:bottom-3 rounded-full bg-white px-3 py-1 text-[10px] md:text-xs text-dark">
    {text}
  </span>
);

const PhotoshootSection: React.FC<PhotoshootProps> = ({
  title,
  description,
  button,
  images,
  shoots,
  highlights,
}) => {
  const [arch, wide, ...small] = images;

  return (
    <SectionWithContainer
      sectionClassName="bg-p1"
      containerClassName="flex flex-col gap-8 lg:gap-10"
    >
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-12 lg:items-start">
        <SectionHeading title={title} light titleClassName="max-w-md" />
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-base text-white max-w-md">
            {description}
          </p>
          <LinkButton
            href={button.link}
            label={button.label}
            className="rounded-full bg-white border-white text-dark text-xs md:text-sm px-6! py-2.5!"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-3">
        <div className="relative lg:row-span-2">
          <ArchImage
            src={arch.src}
            alt={arch.caption}
            sizes="(max-width: 1024px) 100vw, 33vw"
            br={0}
            bl={0}
            className="w-full h-full max-lg:aspect-[4/5] min-h-full"
          />
          <Caption text={arch.caption} />
        </div>
        <div className="relative lg:col-span-2 aspect-[4/3] lg:aspect-[12/5] rounded-2xl overflow-hidden">
          <Image
            src={wide.src}
            alt={wide.caption}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
          <Caption text={wide.caption} />
        </div>
        {small.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] lg:aspect-[6/5] rounded-2xl overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.caption}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <Caption text={image.caption} />
          </div>
        ))}
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
        {shoots.map((shoot, index) => (
          <li
            key={shoot.title}
            className="flex flex-col gap-2 border-t border-white/40 pt-3"
          >
            <span className="font-primary font-extralight text-white text-3xl md:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-primary text-white text-base md:text-lg">
              {shoot.title}
            </h3>
            <p className="text-white/80 text-xs md:text-sm">
              {shoot.description}
            </p>
          </li>
        ))}
      </ol>

      <ul className="flex flex-wrap gap-2">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full bg-white px-3 py-1 text-xs md:text-sm text-dark"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default PhotoshootSection;
