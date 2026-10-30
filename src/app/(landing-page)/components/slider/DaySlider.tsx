"use client";

import ArchImage from "@/components/ArchImage";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Pagination } from "swiper/modules";

interface DaySliderProps {
  images: { src: string; caption: string }[];
}

// one arch at a time beside the day's timeline
const DaySlider: React.FC<DaySliderProps> = ({ images }) => {
  return (
    <SwiperCarousel
      data={images}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      speed={700}
      slidesPerView={1}
      spaceBetween={12}
      className="review-slider w-full"
      renderSlide={(img) => (
        <ArchImage
          src={img.src}
          alt={img.caption}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="w-full aspect-[7/8]"
        />
      )}
    />
  );
};

export default DaySlider;
