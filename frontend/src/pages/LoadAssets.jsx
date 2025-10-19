import React, { useCallback, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const assetsToPreload = [
  assets.idle,
  assets.rock_rock,
  assets.rock_paper,
  assets.rock_scissors,
  assets.paper_paper,
  assets.paper_rock,
  assets.paper_scissors,
  assets.scissors_scissors,
  assets.scissors_rock,
  assets.scissors_paper,
  assets.npc_die,
  assets.npc_alive,
  assets.player_alive,
  assets.player_die,
  assets.you_win,
  assets.you_lost,
];

const LoadAssets = () => {

  const [preloadedCount, setPreloadedCount] = useState(0);
  const [preloadedPercent, setPreloadedPercent] = useState(0);
  const navigate = useNavigate();

  const handleAssetLoad = useCallback(() => {
    // Use the functional update form to get the most recent count
    setPreloadedCount(currentCount => {
      const newCount = currentCount + 1;
      // --- FIX 1: Calculate percentage based on the new count ---
      const newPercent = Math.floor((newCount / assetsToPreload.length) * 100);
      setPreloadedPercent(newPercent);
      return newCount; // Return the new count for the state update
    });
  }, [assetsToPreload.length]);

  useEffect(() => {

    const videoElements = [];

    assetsToPreload.forEach(assetSrc => {
      console.log("preload started");
      const video = document.createElement('video');
      videoElements.push(video); //stoe element for cleanup
      video.src = assetSrc;
      video.addEventListener('canplaythrough', handleAssetLoad, { once: true });
      video.addEventListener('error', handleAssetLoad, { once: true });
    });

    return () => {
      // Now the cleanup function has a stable reference to handleAssetLoad
      videoElements.forEach(video => {
        // We can remove the listeners without causing an error
        video.removeEventListener('canplaythrough', handleAssetLoad);
        video.removeEventListener('error', handleAssetLoad);
      });
    };

  }, [assetsToPreload, handleAssetLoad]);

  useEffect(() => {
    if (preloadedPercent === 100) {
      const timer = setTimeout(() => {
        navigate('/play', { state: { unmute: true } });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [preloadedPercent])

  return (
    <div
      style={
        {
          backgroundImage: `url(${assets.home_bg})`
        }
      } className='relative w-screen h-screen bg-black bg-cover'>
      <img src={assets.texture} alt="" className='w-full h-full absolute opacity-30 mix-blend-overlay' />
      <div className='flex justify-center items-center absolute w-full h-full backdrop-blur-[0.3vw]'>
        <div className='flex flex-col gap-[1.2vw] justify-center items-center'>
          <div className='relative w-[40vw] h-[1.35vw] bg-black/50'>
            <div
              style={
                {
                  width: `${preloadedPercent}%`
                }
              } className='absolute h-full bg-white/90 opacity-100 transition-all duration-300'></div>
          </div>
          <span className='text-[1vw] text-white'>Loading assets...{preloadedPercent}</span>
        </div>
      </div>
    </div>
  )
}

export default LoadAssets
