import React from 'react'
import { assets } from '../assets/assets'
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";


const ChoiceButton = ({ text, page }) => {
  return (
    <button
      style={
        {
          fontFamily: 'Creepster, cursive'
        }
      } className='relative flex justify-center items-center gap-[0.7vw] group text-[2vw] bg-black/50 py-[0.3vw] text-white tracking-[0.51vw] min-w-[17vw] border-[0.3vw] border-white/50 rounded-[0.7vw] hover:border-white/80 transition-all duration-500 cursor-pointer'>
      {text}
      {
        text === 'rock' ?
        <FaHandRock className='text-[1.9vw] text-white group-hover:text-red-500 transition-all duration-500'/>
        :
        text === 'paper' ?
        <FaHandPaper className='text-[1.9vw] text-white group-hover:text-red-500 transition-all duration-500'/>
        :
        <FaHandScissors className='text-[1.9vw] text-white group-hover:text-red-500 transition-all duration-500'/>
      }
    </button>
  )
}

export default ChoiceButton;
