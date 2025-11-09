import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { bgImg } from "./imports";

const images = [
  { src: bgImg, caption: "Our first photo together 💕" },
  { src: bgImg, caption: "The engagement moment 💍" },
  { src: bgImg, caption: "A walk to forever 🌸" },
  { src: bgImg, caption: "Dancing under the stars ✨" },
  { src: bgImg, caption: "The joy of 'Yes!' 💞" },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-16 bg-linear-to-b from-pink-50 to-white overflow-hidden">
      <h2 className="text-center font-playfair text-3xl md:text-4xl text-gray-800 mb-10">
        Our Love Story in Pictures 💖
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.1} // default for mobile
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 6000, // time between slides (ms)
          disableOnInteraction: false, // keeps autoplay after manual swipe
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container relative"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative transition-all duration-500 ${
                activeIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-70 blur-sm"
              }`}
            >
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px]"
              />
              {activeIndex === index && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 rounded-full font-light backdrop-blur-sm">
                  {item.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="swiper-button-prev absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20">
          <FaChevronLeft
            size={14}
            className="  text-pink-600 hover:text-pink-700 transition"
          />
        </div>
        <div className="swiper-button-next absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20">
          <FaChevronRight
            size={14}
            className="  text-pink-600 hover:text-pink-700 transition"
          />
        </div>

        {/* Pagination */}
        <div className="swiper-pagination bottom-4!"></div>
      </Swiper>
    </div>
  );
};

export default ImageGallery;
