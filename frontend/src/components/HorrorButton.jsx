import React from 'react'
import { NavLink } from 'react-router-dom'

const HorrorButton = ({text, page}) => {
  return (
    <NavLink to={page} className='relative border-[0.2vw] border-red-700 bg-red-700/5 hover:bg-red-700/15 px-[1.7vw] py-[0.7vw] rounded-[0.7vw] cursor-pointer group'>
        {/* use text size instead of scale because re-render makes animation janky providing horror vibe */}
      <span style={{
        fontFamily: 'Creepster, cursive'
      }} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[2vw] tracking-[0.4vw] text-red-500 group-hover:text-red-400 group-hover:text-[2.3vw] transition-all duration-500'>{text}</span>
      {/* dummy span to control div size */}
      <span style={{
        fontFamily: 'Creepster, cursive'
      }} className='opacity-0 text-[2vw] tracking-[0.4vw] text-red-500 group-hover:text-red-400 transition-all duration-500'>{text}</span>
      
    </NavLink>
  )
}

export default HorrorButton
