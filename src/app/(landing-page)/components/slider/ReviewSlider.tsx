"use client";

import { ReviewType } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";

const ReviewCard: React.FC<{ item: ReviewType }> = ({ item }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);

  // only show "Read more" when the text actually overflows 5 lines
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => {
      if (!expanded) setClamped(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div className="h-full rounded-2xl bg-background2 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-accent text-sm tracking-widest">★★★★★</p>
        {item.source && (
          <p className="text-dark/60 text-xs">via {item.source}</p>
        )}
      </div>
      <div className="flex-1 flex flex-col items-start gap-2">
        <p
          ref={textRef}
          className={`font-primary font-light text-dark md:text-[19px] ${
            expanded ? "" : "line-clamp-5"
          }`}
        >
          {item.review}
        </p>
        {(clamped || expanded) && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-p1 text-sm font-medium underline underline-offset-4"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-p1 text-white text-xs font-medium flex items-center justify-center">
          {item.name.charAt(0)}
        </span>
        <p className="text-sm md:text-base text-dark">{item.name}</p>
      </div>
    </div>
  );
};

const ReviewSlider: React.FC<{ reviews: ReviewType[] }> = ({ reviews }) => {
  return (
    <SwiperCarousel
      data={reviews}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      pagination={{ clickable: true }}
      slidesPerView={1.1}
      spaceBetween={16}
      className="review-slider"
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }}
      swiperSlideClassName="h-auto!"
      renderSlide={(item) => <ReviewCard item={item} />}
    />
  );
};

export default ReviewSlider;
