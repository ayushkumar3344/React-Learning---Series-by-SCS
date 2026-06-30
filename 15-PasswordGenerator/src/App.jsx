import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);  
  const [password, setPassword] = useState('');


  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed){
      str += "0123456789"
    }

    if(charAllowed){
      str += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt.char;
    }

    setPassword(pass);
    console.log(pass);
    

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {},[])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 py-4 text-gray-500 bg-gray-700    text-center'>
        <h3 className='text-white text-center my-3 text-[1.3em]'>Password Generator</h3>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='w-full outline-none py-1 px-3 bg-white'
          placeholder='Password'
          readOnly/>
          <button className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {
              setLength(e.target.value);
             }}/>
             <label className='text-orange-400'> Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label className='text-orange-400' htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            className='cursor-pointer'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label className='text-orange-400' htmlFor="charInput">Special Symbols</label>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
