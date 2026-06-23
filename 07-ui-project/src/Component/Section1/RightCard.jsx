import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import RightCardContent from './RightCardContent';

const RightCard = () => {
  return (
    <div className='h-full w-50 rounded-4xl shrink-0 overflow-hidden relative'>
      <img className='h-full w-full object-cover' src="https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg" alt="Professinal" />
      <RightCardContent />
    </div>
  )
}

export default RightCard;