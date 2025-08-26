import React from 'react'
import { assets } from '../assets/assets'
import HorrorButton from '../components/Button1'

const Home = () => {
  return (
    <div style={
      {
        backgroundImage: `url(${assets.home_bg})`
      }
    } className='relative w-screen h-screen bg-neutral-700 bg-cover'>
      <img src={assets.texture} alt="" className='absolute opacity-30 w-full h-full mix-blend-overlay' />
      <div className='absolute w-full h-full backdrop-blur-[0.3vw] flex flex-col justify-evenly items-center'>
        <div className='flex flex-col justify-center items-center gap-[1vw]'>
          <span style={
            {
              fontFamily: 'Creepster, cursive'
            }
          } className='text-[9vw] text-white tracking-[1vw] leading-none [text-shadow:0_0_21px_rgba(255,255,255,0.6)]'>GRIM ODDS !</span>
          <span
          style={
            {
              fontFamily: 'Creepster, cursive'
            }
          } className='text-[2vw] text-neutral-300 bg-red-700/50 px-[1vw] rounded-[0.2vw] tracking-[0.15vw] font-extralight'>"Every round is a gamble, every loss a bullet closer."</span>
        </div>
        <div className='flex flex-col gap-[2.1vw]'>
          <HorrorButton text={'DARE TO PLAY'} page={'/play'} />
          <HorrorButton text={'-SETTINGS-'} page={'/settings'} />
        </div>
      </div>
    </div>
  )
}

export default Home
