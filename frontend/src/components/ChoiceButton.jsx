import React from 'react'
import { assets } from '../assets/assets'

const ChoiceButton = ({text, page}) => {
  return (
    <button className='relative group cursor-pointer'>
      <img src={assets.choice_button} alt="" className='w-[17vw] h-[7.7vw] group-hover:opacity-100 transition-all' />
      <span style={
        {
            fontFamily: 'Creepster, cursive'
        }
      } className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-[0.2vw] text-[2.1vw] whitespace-nowrap text-white group-hover:text-[2.3vw] group-hover:text-red-500 transition-all duration-500'>
        {text}
      </span>
    </button>
  )
}

export default ChoiceButton;
