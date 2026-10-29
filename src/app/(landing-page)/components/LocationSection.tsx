import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

type LocationProps = typeof landingPageData.locationSection;

const LocationSection: React.FC<LocationProps> = ({
  title,
  description,
  image,
  distances,
  note,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative isolate"
      containerClassName="grid lg:grid-cols-2 gap-8 items-end min-h-[380px] md:min-h-[420px] content-end"
    >
      <Image
        src={image}
        alt="Paddy fields around Midori"
        fill
        sizes="100vw"
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/40 to-black/10" />

      <SectionHeading
        title={title}
        description={description}
        light
        titleClassName="max-w-md"
        descriptionClassName="max-w-md"
      />
      <div className="flex flex-col gap-3 lg:items-end">
        <div className="flex gap-8 md:gap-10">
          {distances.map((item) => (
            <div key={item.label} className="flex flex-col">
              <p className="font-primary font-extralight text-white text-4xl md:text-[60px]">
                {item.value}
              </p>
              <p className="text-white/85 text-xs md:text-[15px]">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-white/70 text-xs md:text-sm">{note}</p>
      </div>
    </SectionWithContainer>
  );
};

export default LocationSection;
