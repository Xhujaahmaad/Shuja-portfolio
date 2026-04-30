import shopifyLogo from "./assets/shopify.svg";
import reactLogo from "./assets/react.svg";
import wordpressLogo from "./assets/wordpress.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const defaultSlides = [
  {
    image: shopifyLogo,
    title: "Shopify",
    description: "Custom Shopify development",
  },
  {
    image: reactLogo,
    title: "React",
    description: "Modern UI with React",
  },
  {
    image: wordpressLogo,
    title: "WordPress",
    description: "Fast & scalable websites",
  },
];

function ConceptSlider({ slides = defaultSlides }) {
  const dataToRender = slides.length > 0 ? slides : defaultSlides;
  const slidesPerView = Math.min(3, dataToRender.length);
  const canLoop = dataToRender.length > slidesPerView;

  return (
    <div className="slider-container" style={{ width: "100%" }}>
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation={dataToRender.length > 1}
  pagination={{ clickable: true }}
  autoplay={canLoop ? { delay: 3000, disableOnInteraction: false } : false}
  loop={canLoop}
  breakpoints={{
    0: {
      slidesPerView: 2.1,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
>
        {dataToRender.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: "100px" }}
              />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ConceptSlider;
