import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const RouletteButton = ({text}) => {
  return (
    <button onClick={()=>resetGameState()} className='relative group w-full h-full cursor-pointer'>
      <img src={assets.horror_button} alt="" className='w-[25vw] h-[6.3vw] opacity-60 invert group-hover:opacity-70 transition-all duration-500' />
      <span style={
        {
            fontFamily: 'Creepster, cursive'
        }
      } className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-[0.2vw] text-[2vw] text-white whitespace-nowrap group-hover:text-[2.3vw] group-hover:text-red-600 transition-all duration-500'>
        {text}
      </span>
    </button>
  )
}

export default RouletteButton;
