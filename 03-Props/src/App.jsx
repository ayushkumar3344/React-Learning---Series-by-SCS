import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Rishav' age={29} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzRaonOW1n7OgT1V1f1Jo1Ai7YSg3jJbqLQ&s'/>
      <Card user='Sourav Joshi' age={25} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNO0dkjfb91SduwB63fOaYxyzsh-Se_Bruw&s'/>
      <Card user='Preeti Zinta' age={41} img='https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png'/>
    </div>
  )
}

export default App
