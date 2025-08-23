import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const Game = () => {
  const [rock, setRock] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (rock && videoRef.current) {
      setShowVideo(false); // hide before reset
      videoRef.current.currentTime = 0;

      const handleSeeked = () => {
        videoRef.current.play();
        setShowVideo(true); // show only when ready
      };

      videoRef.current.addEventListener("seeked", handleSeeked, { once: true });

      return () => {
        videoRef.current?.removeEventListener("seeked", handleSeeked);
      };
    } else {
      setShowVideo(false); // hide if rock is false
    }
  }, [rock]);

  return (
    <div className="relative w-full h-screen bg-neutral-700">
      <img src={assets.idle} alt="" className="absolute z-10 w-full h-full object-cover" />
      <video
        ref={videoRef}
        src={assets.rock}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute z-20 w-full h-full object-cover transition-opacity duration-300 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      />
      <button
        onClick={() => setRock(!rock)}
        className="absolute left-[50%] top-[80%] z-30 border-4 border-white bg-neutral-200 text-[2vw] px-10 py-2 hover:border-black"
      >
        Rock
      </button>
    </div>
  )
}

export default Game
