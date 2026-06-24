import React, { useState } from 'react'

const App = () => {


  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }

  function decreaseNum(){
    setnum(num-1);
  }

  function jump5Num(){
    setnum(num+5);
  }

  return (
    <div className='border'>

      <h1>{num}</h1>

      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Increase 5</button>

    </div>
  )
}

export default App
