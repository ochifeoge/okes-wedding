import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useState } from "react";
import {
  bgImg,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  video1,
  video2,
  video3,
  video4,
} from "./imports";
import { useProvider } from "./AppProvider";

const media = [
  { type: "image", src: image1, caption: "The beginning of everything ❤️" },
  {
    type: "video",
    src: video1,
    caption: "A moment that still makes us smile 🎥",
  },
  { type: "image", src: image2, caption: "Two hearts, one story 💕" },
  {
    type: "video",
    src: video2,
    caption: "Caught in a memory we love reliving ✨",
  },
  {
    type: "image",
    src: image3,
    caption: "Every step with you feels like home 🌸",
  },
  { type: "video", src: video3, caption: "A little dance, a lot of love 💫" },
  { type: "image", src: image4, caption: "Growing together, beautifully 🌹" },
  {
    type: "video",
    src: video4,
    caption: "A laughter we never want to forget 🎬",
  },
  { type: "image", src: image5, caption: "Moments that warm the heart 💛" },
  {
    type: "image",
    src: image6,
    caption: "Forever starts with memories like these 🤍",
  },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // modal states
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const { pauseForModal, resumeAfterModal } = useProvider();

  // Open modal
  const handleVideoClick = (videoSrc) => {
    pauseForModal();
    setCurrentVideo(videoSrc);
    setOpen(true);
  };

  // Close modal
  const handleClose = () => {
    setOpen(false);
    resumeAfterModal();
    setCurrentVideo(null);
  };

  return (
    <div className="relative container py-16 overflow-hidden">
      <h2 className="text-center font-playfair text-3xl md:text-4xl text-gray-800 mb-10">
        Our Love Story in Pictures 💖
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.1}
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
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container relative"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative transition-all duration-500 ${
                activeIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-70 blur-sm"
              }`}
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  loading="lazy"
                  className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px]"
                />
              )}

              {/* VIDEO THUMBNAIL */}
              {item.type === "video" && (
                <div
                  onClick={() => handleVideoClick(item.src)}
                  className="cursor-pointer relative"
                >
                  <video
                    src={item.src}
                    loading="lazy"
                    className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px]"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-3xl">
                    ▶
                  </div>
                </div>
              )}

              {activeIndex === index && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm md:text-base px-3 py-2 rounded-full font-light backdrop-blur-sm">
                  {item.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="swiper-button-prev absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <FaChevronLeft className="text-pink-600" />
        </div>
        <div className="swiper-button-next absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <FaChevronRight className="text-pink-600" />
        </div>
      </Swiper>

      {/* VIDEO MODAL */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {currentVideo && (
            <video
              src={currentVideo}
              autoPlay
              controls
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
