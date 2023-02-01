import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

    const handleBackToTop = () => {
        window.scroll(0,0)
    }

const BackToTop = () => {
  return (
    <div className='fixed bottom-3 right-3'>
        <div onClick={handleBackToTop} className='p-3 bg-teal-500 z-50 rounded-lg shadow-lg cursor-pointer'>
            <FaArrowUp className='text-xl font-semibold text-white' />
        </div>
    </div>
  )
}

export default BackToTop