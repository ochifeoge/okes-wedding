import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QRCodeCanvas } from "qrcode.react";

gsap.registerPlugin(ScrollTrigger);

const QrCodeSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll("h2, p, canvas"),
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
      id="qr"
      className="py-20 container section bg-white text-center"
    >
      <h2 className="font-playfair text-3xl text-gray-800 mb-4">
        Share Our Love 💞
      </h2>
      <p className="font-body text-gray-600 max-w-md mx-auto mb-6">
        Scan this QR code to revisit our wedding page or share it with friends.
      </p>

      <div className="flex justify-center">
        <QRCodeCanvas
          value="https://google.com"
          size={160}
          bgColor="#fff"
          fgColor="#E91E63"
          level="H"
          includeMargin={true}
        />
      </div>
    </section>
  );
};

export default QrCodeSection;
