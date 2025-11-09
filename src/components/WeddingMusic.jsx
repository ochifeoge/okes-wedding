import { useRef } from "react";
import song from "/song.mp3";
import { CiMusicNote1 } from "react-icons/ci";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useProvider } from "./AppProvider";

const WeddingMusic = () => {
  const overlayRef = useRef(null);
  const musicRef = useRef(null);
  const textRef = useRef(null);

  const { playing, audioRef, handlePlay } = useProvider();
  useGSAP(() => {
    // Create timeline for reveal first
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Step 1: Fade + slide up for the music note
    tl.fromTo(
      musicRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    // Step 2: Fade + slide up for text elements with stagger
    tl.fromTo(
      textRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      },
      "-=0.4" // overlap a bit for smoother timing
    );

    // Step 3: After reveal, start infinite pulse animation
    tl.to(
      musicRef.current,
      {
        scale: 1.1,
        ease: "circ.in",
        repeat: -1,
        duration: 1,
        yoyo: true,
      },
      "+=0.5" // small delay after reveal
    );
  }, []);

  return (
    <div>
      {!playing && (
        <div
          ref={overlayRef}
          className="fixed inset-0 cursor-pointer bg-gradient-to-b from-black/80 via-black/30 to-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          onClick={handlePlay}
        >
          <CiMusicNote1
            ref={musicRef}
            className="text-8xl text-white mb-5 drop-shadow-lg"
          />

          <div ref={textRef} className="flex flex-col items-center">
            <h2 className="text-5xl text-white font-great mb-3">
              Tap to begin
            </h2>
            <p className="text-white text-lg tracking-wide">Music will play</p>
          </div>
        </div>
      )}

      <audio ref={audioRef}>
        <source src={song} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default WeddingMusic;
