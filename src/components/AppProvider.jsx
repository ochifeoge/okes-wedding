import { useContext } from "react";
import { createContext, useRef, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const [wasPlayingBeforeModal, setWasPlayingBeforeModal] = useState(false);

  function pauseForModal() {
    if (isPlaying) {
      setWasPlayingBeforeModal(true);
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function resumeAfterModal() {
    if (wasPlayingBeforeModal) {
      audioRef.current.play();
      setIsPlaying(true);
      setWasPlayingBeforeModal(false);
    }
  }

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
    setIsPlaying(true);
  };

  function handlePause() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <AppContext.Provider
      value={{
        handlePlay,
        handlePause,
        pauseForModal,
        resumeAfterModal,
        isPlaying,
        playing,
        audioRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useProvider = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useProvider must be used within AppProvider");
  }
  return context;
};

export { AppProvider as default, useProvider };
