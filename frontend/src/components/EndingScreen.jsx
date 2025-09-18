import React from 'react'
import { assets } from '../assets/assets'
import Button1 from './Button1';

const EndingScreen = ({resetGameState, showEndingScreen, isGameWin}) => {
  return (
    <div className={`flex flex-col justify-evenly items-center absolute z-50 w-screen h-screen bg-black ${showEndingScreen ? 'flex' : 'hidden'}`}>
      {/* <img src={assets.texture} alt="" className='w-full h-full mix-blend-screen opacity-5 object-cover' /> */}
      {isGameWin ?
      <video src={assets.you_win} autoPlay muted loop className='relative z-60 w-[60%]'></video>
      :
      <video
      style={
        {
          clipPath: "inset(0 10% 0 10%)"
        }
      } src={assets.you_lost} autoPlay muted loop className='relative z-60 w-[60%]'></video>
      }

      <Button1 resetGameState={resetGameState} text={isGameWin ? 'Play Again' : 'Restart'}/>
    </div>
  )
}

export default EndingScreen
