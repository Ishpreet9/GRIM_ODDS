import React, { useRef } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game';
import { assets } from './assets/assets';

const App = () => {

  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.loop = true; // ensure loop
      audioRef.current.volume = 0.7;    // set volume to 70%
      audioRef.current.play();
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home handlePlay={handlePlay} />
    },
    {
      path: '/play',
      element: <Game />
    }
  ]);

  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router} />
      <audio src={assets.bg_music} ref={audioRef}></audio>
    </div>
  )
}

export default App
