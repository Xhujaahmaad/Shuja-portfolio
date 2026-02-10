import shopifylog from './assets/shopify.svg';
import reactlogo from './assets/react.svg'
import wordpresslogo from './assets/wordpress.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const defaultSlides = [
  { image: shopifylog, title: "Shopify", description: "Custom Shopify development" },
  { image: reactlogo, title: "React", description: "Modern UI with React" },
  { image: wordpresslogo, title: "WordPress", description: "Fast & scalable websites" },
];


function ConceptSlider({slides}) { 
 const dataToRender = slides && slides.length > 0 ? slides : defaultSlides;
  return (
    <div className="slider-container" style={{ width: "100%" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {dataToRender.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} style={{ width: '100px' }} />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConceptSlider;
