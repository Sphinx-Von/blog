import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react';

const Header = () => {
   const {setInput, input} = useAppContext();

   const inputRef = useRef()

   const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
   }

   const onClear = () => {
    setInput('')
    inputRef.current.value = ''
   }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5
            mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary
            '>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} alt="name" className='w-2.5'/>
            </div>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className='text-cyan-400'> Blogging </span><br/> Platform</h1>

           <p className="mx-auto my-6 sm:my-10 max-w-2xl text-center text-gray-600 text-base sm:text-lg leading-relaxed px-4">
  "Share your voice. Inspire the world."
</p>
<form onSubmit={onSubmitHandler} className="flex items-center max-w-lg mx-auto mt-8 overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm transition-all max-sm:scale-90">
  <input ref={inputRef}
    type="text"
    placeholder="Search for blogs"
    className="w-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
  >
    Search
  </button>
</form>



        </div>

        <div className='text-center'>
          {input &&
          <button onClick={onClear}
           className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
          } 
        </div>
      <img src={assets.gradientBackground} alt="background"  className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header
