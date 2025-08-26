import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Button1 = ({text, page}) => {
  return (
    <NavLink to={page} className='relative group'>
      <img src={assets.horror_button} alt="" className='w-[25vw] h-[6.3vw] opacity-80 group-hover:opacity-100 transition-all duration-500' />
      <span style={
        {
            fontFamily: 'Creepster, cursive'
        }
      } className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-[0.2vw] text-[2vw] whitespace-nowrap text-black group-hover:text-[2.3vw] group-hover:text-red-600 transition-all duration-500'>
        {text}
      </span>
    </NavLink>
  )
}

export default Button1;
