import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full w-1/2 py-5 px-6 flex flex-col justify-between'>
      <HeroText/>
       <Arrow/>
    </div>
  )
}

export default LeftContent
