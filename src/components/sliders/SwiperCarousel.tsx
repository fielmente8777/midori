"use client";

import { ReactNode, Suspense } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

// @import swiperr css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/free-mode";

interface SwiperCaroselProps<T> extends SwiperProps {
  data: T[];
  className?: string;
  swiperSlideClassName?: string;
  renderSlide: (item: T, index?: number) => ReactNode;
}

const SwiperCarousel = <T,>({
  data,
  className,
  swiperSlideClassName,
  renderSlide,
  ...props
}: SwiperCaroselProps<T>) => {
  // Swiper reads the clock while rendering; Suspense lets Cache Components stream it per request
  return (
    <Suspense>
      <Swiper className={className} {...props}>
        {data?.map((item, index) => (
          <SwiperSlide className={swiperSlideClassName} key={index}>
            {renderSlide(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </Suspense>
  );
};

export default SwiperCarousel;
