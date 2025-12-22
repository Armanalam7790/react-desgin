import React from 'react'
import Sec5left from './Sec5left'
import Sec5right from './Sec5right'

const Section5 = () => {
  return (
    <div className='  px-10'>
      <h1 className='text-3xl m-4 '>OUR ADVATAGES</h1>
     <div className=' flex mt-10 gap-4'>
        <Sec5left />
        <Sec5right />
     </div>
    </div>
  )
}

export default Section5