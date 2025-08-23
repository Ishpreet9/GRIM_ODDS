import React from 'react'
import { assets } from '../assets/assets'
import HorrorButton from '../components/HorrorButton'

const Home = () => {
  return (
    <div style={
      {
        backgroundImage: `url(${assets.home_bg})`
      }
    } className='relative w-screen h-screen bg-neutral-700 bg-cover'>
      <div className='absolute w-full h-full backdrop-blur-[0.3vw] bg-black/20 flex flex-col justify-evenly items-center'>
        <span style={
          {
            fontFamily: 'Creepster, cursive'
          }
        } className='text-[5.2vw] text-white tracking-[1vw] leading-none'>GRIM ODDS !</span>
        <div className='flex flex-col gap-[3vw]'>
          <HorrorButton text={'DARE TO PLAY'} page={'/play'}/>
          <HorrorButton text={'-SETTINGS-'} page={'/settings'}/>
        </div>
      </div>
    </div>
  )
}

export default Home
