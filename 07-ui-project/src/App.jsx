import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'

const App = () => {

  const users = [
    {
      img : 'https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg',
      intro : '',
      tag : 'Satisfied'
    },
    {
      img : 'https://i.pinimg.com/1200x/e4/65/0b/e4650b57d3e258ee85c37c024186686c.jpg',
      intro : '',
      tag : 'UnderServed'
    },
    {
      img : 'https://i.pinimg.com/736x/8f/a0/d6/8fa0d69a0facec03261bc079d72ad48c.jpg',
      intro : '',
      tag : 'UnderBanked'
    },
  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
