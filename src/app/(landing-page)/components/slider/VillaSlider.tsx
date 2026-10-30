"use client";

import ArchImage from "@/components/ArchImage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Pagination } from "swiper/modules";

interface VillaSliderProps {
  images: { src: string; caption: string }[];
}

// phone-only: one villa image at a time (the 3-up grid is too small there)
const VillaSlider: React.FC<VillaSliderProps> = ({ images }) => {
  return (
    <SwiperCarousel
      data={images}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      // Swiper's loop needs more slides than are visible; the hut room has only two
      loop={images.length > 2}
      slidesPerView={1.15}
      spaceBetween={12}
      className="review-slider w-full"
      renderSlide={(img) => (
        <figure className="flex flex-col gap-2">
          <ArchImage
            src={img.src}
            alt={img.caption}
            sizes="90vw"
            className="w-full aspect-[3/4]"
          />
          <figcaption className="text-xs text-light text-center">
            {img.caption}
          </figcaption>
        </figure>
      )}
    />
  );
};

export default VillaSlider;
