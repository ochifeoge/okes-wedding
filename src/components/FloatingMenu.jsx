import {
  FaMusic,
  FaPause,
  FaHeart,
  FaGift,
  FaQrcode,
  FaHome,
} from "react-icons/fa";
import { useProvider } from "./AppProvider";
import { FaPeopleRoof } from "react-icons/fa6";

const FloatingMenu = () => {
  const { isPlaying, handlePause, handlePlay } = useProvider();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 flex  items-center flex-col gap-4 shadow-lg z-50">
      <button
        onClick={() => scrollToSection("hero")}
        className="text-primary cursor-pointer  hover:scale-[1.3] transition"
      >
        <FaHome size={20} />
      </button>
      <button
        onClick={() => scrollToSection("story")}
        className="text-primary cursor-pointer  hover:scale-[1.3] transition"
      >
        <FaHeart size={20} />
      </button>

      <button
        onClick={() => scrollToSection("info")}
        className="text-primary cursor-pointer  hover:scale-[1.3] transition"
      >
        <FaPeopleRoof size={20} />
      </button>
      <button
        onClick={() => scrollToSection("gifts")}
        className="text-primary cursor-pointer  hover:scale-[1.3] transition"
      >
        <FaGift size={20} />
      </button>
      <button
        onClick={() => scrollToSection("qr")}
        className="text-primary cursor-pointer  hover:scale-[1.3] transition"
      >
        <FaQrcode size={20} />
      </button>

      <button
        className={`cursor-pointer ${
          isPlaying ? "text-pink-400" : "text-primary "
        } hover:text-pink-300 transition`}
      >
        {isPlaying ? (
          <FaPause size={28} onClick={handlePause} />
        ) : (
          <FaMusic size={28} onClick={handlePlay} />
        )}
      </button>
    </div>
  );
};

export default FloatingMenu;
