import { useRef } from "react";
import { bgImg } from "./imports";
import WeddingMusic from "./WeddingMusic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bouquetRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 🎬 Reveal animation on load
    tl.fromTo(
      [bouquetRef.current, titleRef.current],
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.4 }
    );

    // 🌸 Parallax scroll effect for the bouquet
    gsap.to(bouquetRef.current, {
      yPercent: 200,

      ease: "linear",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // keeps motion tied to scroll
      },
    });
    gsap.to(bouquetRef.current, {
      rotation: 360,
      duration: 12, // speed of spin
      ease: "linear",
      repeat: -1,
    });
    gsap.to(titleRef.current, {
      y: -100,
      ease: "power",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex items-center justify-center bg-no-repeat flex-col h-dvh  overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center ",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

      {/* Parallax bouquet */}
      {/* <img
        ref={bouquetRef}
        src="/bouquet.png"
        className="absolute top-0 left-0 object-cover w-[200%] sm:w-[150%] md:w-[100%] opacity-80"
        alt="Bouquet overlay"
      /> */}

      <img
        ref={bouquetRef}
        src="/flower.png"
        className="absolute top-10 left-0 object-cover w-42 opacity-80"
        alt="Bouquet overlay"
      />

      {/* Wedding Music */}
      <WeddingMusic />

      {/* Hero Text */}
      <h1
        ref={titleRef}
        className="text-center text-white -mt-20 md:-mt-42! font-great text-5xl sm:text-6xl md:text-7xl px-4 z-20 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
      >
        Whispered in vows, now sung in joy.
      </h1>

      {/* Optional scroll indicator */}
      {/* <TfiArrowDown className="absolute bottom-6 text-3xl text-white opacity-70 animate-bounce" /> */}
    </section>
  );
};

export default Hero;
