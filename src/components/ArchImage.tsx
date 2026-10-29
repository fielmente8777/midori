import Image from "next/image";

// "full" = half the image width (a true semicircle), number = px, string = any CSS length
export type ArchRadius = "full" | number | string;

interface ArchImageProps {
  src: string;
  alt: string;
  sizes: string;
  // size/aspect classes for the wrapper, e.g. "w-full aspect-[3/4]"
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  tl?: ArchRadius;
  tr?: ArchRadius;
  br?: ArchRadius;
  bl?: ArchRadius;
}

const toRadius = (value: ArchRadius) =>
  value === "full" ? "50cqw" : typeof value === "number" ? `${value}px` : value;

// clips any normal photo into an arch with CSS, so images never need to be pre-cut
const ArchImage: React.FC<ArchImageProps> = ({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "object-cover",
  priority,
  tl = "full",
  tr = "full",
  br = "1rem",
  bl = "1rem",
}) => {
  const style = {
    "--arch-tl": toRadius(tl),
    "--arch-tr": toRadius(tr),
    "--arch-br": toRadius(br),
    "--arch-bl": toRadius(bl),
  } as React.CSSProperties;

  return (
    <div className={`arch relative ${className}`} style={style}>
      <div className="arch__clip">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
        />
      </div>
    </div>
  );
};

export default ArchImage;
