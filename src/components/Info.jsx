import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const information = [
  {
    icon: <CiCalendar />,
    title: "When",
    description: "Saturday, December 6th, 2025",
  },
  {
    icon: <RiTimeLine />,
    title: "Time",
    description: "1:00 PM",
    extraDescription: "Ceremony followed by reception",
  },
  {
    icon: <IoLocationOutline />,
    title: "Where",
    description: "K16 Palm Beach Hotel, Edjeba",
    extraDescription: "Along NNPC Housing omplex Road, Delta State",
  },
];

const Info = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const heading = sectionRef.current.querySelector(".info-heading");
    const subHeading = sectionRef.current.querySelector(".info-sub");
    const boxes = gsap.utils.toArray(".info-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // 1️⃣ Reveal the heading + subheading
    tl.from([heading, subHeading], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    // 2️⃣ Reveal the boxes themselves
    tl.from(
      boxes,
      {
        opacity: 0,
        y: 60,
        stagger: 0.25,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3" // overlaps slightly with heading animation
    );

    // 3️⃣ Reveal inner content (icon, text, etc.)
    boxes.forEach((box) => {
      const inner = box.querySelectorAll(".inner");
      gsap.from(inner, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="container section" id="info">
      <div className="pt-20 text-center space-y-4 mb-8">
        <h3 className="info-heading font-great text-primary text-6xl md:text-8xl">
          Join us for our special day
        </h3>
        <p className="info-sub text-subtle">
          We would be honored to have you celebrate with us
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {information.map((info, index) => (
          <div
            key={index}
            className="info-box flex items-center flex-col gap-6 text-center"
          >
            <span className="inner w-16 h-16 rounded-full bg-accent text-primary text-4xl flex items-center justify-center">
              {info.icon}
            </span>
            <h3 className="inner text-3xl font-medium font-playfair">
              {info.title}
            </h3>
            <p className="inner text-lg">{info.description}</p>
            <p className="inner text-xs">{info?.extraDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
