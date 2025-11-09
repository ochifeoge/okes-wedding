import { useRef } from "react";
import { GiSelfLove } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll("p, h2, svg");

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section is 80% into viewport
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container section" id="story">
      <div className="pt-20 text-center flex flex-col gap-4">
        <GiSelfLove className="self-center text-8xl text-primary" />
        <h2 className="font-playfair text-5xl">Our Story</h2>
        <p className="paragraph">
          Our love story began on a beautiful spring day when fate brought us
          together. From the first moment our eyes met, we knew there was
          something special between us.
        </p>
        <p className="paragraph">
          Through countless adventures, shared dreams, and endless laughter, our
          bond grew stronger with each passing day. We've built a foundation of
          trust, respect, and unconditional love that will last a lifetime.
        </p>
        <p className="text-pink-400 font-playfair text-2xl!">
          "Love is not about how many days, months, or years you have been
          together. Love is about how much you love each other every single
          day."
        </p>
        <p className="paragraph">
          Now, we're ready to embark on the greatest adventure of all — spending
          forever together. We can't wait to celebrate this special moment with
          our closest family and friends.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
