import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  
  return (
    <div className='flex flex-nowrap gap-10 h-full overflow-x-auto rounded-4xl w-2/3 p-6'>
        <RightCard />
        <RightCard />
        <RightCard />
    </div>
  )
}

export default RightContent
