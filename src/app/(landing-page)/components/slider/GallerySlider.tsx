// "use client";

// import SwiperCarousel from "@/components/sliders/SwiperCarousel";
// import Image from "next/image";
// import { FreeMode } from "swiper/modules";

// interface GallerySliderProps {
//   images: { src: string; caption: string }[];
// }

// const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
//   return (
//     <SwiperCarousel
//       data={images}
//       modules={[FreeMode]}
//       freeMode
//       slidesPerView={1.6}
//       spaceBetween={12}
//       breakpoints={{
//         640: { slidesPerView: 2.5, spaceBetween: 16 },
//         1024: { slidesPerView: 4.25, spaceBetween: 16 },
//       }}
//       renderSlide={(item, index = 0) => (
//         <figure className="flex flex-col gap-2">
//           <div
//             className={`relative w-full aspect-[3/4] ${
//               index % 2 === 0 ? "arch" : "rounded-2xl overflow-hidden"
//             }`}
//           >
//             <Image
//               src={item.src}
//               alt={item.caption}
//               fill
//               sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 25vw"
//               className="object-cover"
//             />
//           </div>
//           <figcaption className="text-xs text-light text-center">
//             {item.caption}
//           </figcaption>
//         </figure>
//       )}
//     />
//   );
// };

// export default GallerySlider;

"use client";

import ArchImage from "@/components/ArchImage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

interface GallerySliderProps {
  images: { src: string; caption: string }[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  // share of images seen so far: visible slides + slides already passed
  const updateProgress = (s: SwiperType) => {
    const total = images.length;
    if (!total) return;
    const perView =
      typeof s.params.slidesPerView === "number" ? s.params.slidesPerView : 1;
    const seen = s.isEnd ? total : Math.min(total, s.activeIndex + perView);
    setProgress((seen / total) * 100);
  };

  const jumpTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!swiper) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    swiper.slideTo(Math.round(ratio * (images.length - 1)));
  };

  return (
    // plain block (not flex) so Swiper stays constrained to the container width
    <div className="w-full min-w-0">
      <SwiperCarousel
        data={images}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        rewind
        onSwiper={setSwiper}
        onAfterInit={updateProgress}
        onSlideChange={updateProgress}
        onBreakpoint={updateProgress}
        onResize={updateProgress}
        speed={700}
        slidesPerView={1.15}
        spaceBetween={12}
        className="gallery-slider"
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 16 },
          1024: { slidesPerView: 4.25, spaceBetween: 16 },
        }}
        renderSlide={(item, index = 0) => (
          <figure className="flex flex-col gap-2">
            <ArchImage
              src={item.src}
              alt={item.caption}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 25vw"
              className="w-full aspect-[3/4]"
              tl={index % 2 === 0 ? "full" : "1rem"}
              tr={index % 2 === 0 ? "full" : "1rem"}
            />
            <figcaption className="text-sm md:text-base text-light text-center">
              {item.caption}
            </figcaption>
          </figure>
        )}
      />
      <div
        role="progressbar"
        aria-label="Gallery progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        onClick={jumpTo}
        className="relative mt-5 h-1 w-full rounded-full bg-line cursor-pointer overflow-hidden"
      >
        <span
          className="absolute inset-y-0 left-0 rounded-full bg-p1 transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default GallerySlider;
