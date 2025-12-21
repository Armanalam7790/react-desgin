import React from 'react'

const Section3 = () => {
  return (
    <div className='mt-8 px-10'>
       <div className="cards flex justify-between gap-4 ">

        <div className="card  p-6 rounded">
          <h1 className='text-2xl text-[#978e7e]'>DESIGNERS</h1>
          <span  className='text-5xl'>150+</span>
        </div>

        <div className="card  p-6 rounded">
         <h1 className='text-2xl text-[#978e7e]'>CLIENTS</h1>
          <span  className='text-5xl'>500+</span>
        </div>


        <div className="card  p-6 rounded">
        <h1 className='text-2xl text-[#978e7e] '>PASTERPIECES</h1>
         <span  className='text-5xl'>20K+</span>
        </div>


        <div className="card  p-6 rounded">
         <h1 className='text-2xl text-[#978e7e]'>EVENTS</h1>
            <span className='text-5xl'>50+</span>
        </div>

      </div>
    </div>
  )
}

export default Section3