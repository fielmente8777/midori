import Headings from "./Headings";

interface SectionHeadingProps {
  title?: string;
  description?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  textCenter?: boolean;
  light?: boolean;
  wrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  level = 2,
  textCenter = false,
  light = false,
  wrapperClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-3 ${textCenter ? "items-center text-center" : ""} ${wrapperClassName}`}
    >
      {title && (
        <Headings
          level={level}
          heading={title}
          className={`font-primary font-extralight tracking-tight text-[2rem]/tight md:text-5xl/tight ${
            light ? "text-white" : "text-dark"
          } ${titleClassName}`}
        />
      )}
      {description && (
        <p
          className={`text-sm md:text-base ${light ? "text-white/85" : "text-light"} ${descriptionClassName}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
