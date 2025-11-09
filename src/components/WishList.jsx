import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WishList = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll("h2, p, button"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gifts"
      className="py-20 section container bg-pink-50 text-center"
    >
      <h2 className="font-playfair text-3xl text-gray-800 mb-4">
        Send Us a Wedding Gift 🎁
      </h2>
      <p className="font-body text-gray-600 max-w-md mx-auto mb-6">
        Your love and presence mean everything to us, but if you wish to bless
        us further, here’s a simple way to send a token of love.
      </p>

      <button
        className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
        onClick={() => (window.location.href = "https://www.amazon.com/")}
      >
        Send a Gift
      </button>
    </section>
  );
};

export default WishList;
