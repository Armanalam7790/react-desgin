import React from 'react'
import 'remixicon/fonts/remixicon.css'                                          
const Section1img = () => { 
  return (
    <div className='  h-[85vh] w-full relative px-5  rounded'>
        <img className='h-full  w-full object-cover object-top rounded' src="https://media.discordapp.net/attachments/1408052378137006112/1452133844965789696/hero.png?ex=6948b487&is=69476307&hm=2f88908e1525b5e9bd56c4cf272a426c43a17f88e3c6c44d308a6eba9bbb6bfb&=&format=webp&quality=lossless&width=1416&height=693" alt="" />

        <div className="sectionText   w-[80%] absolute top-70 left-70   ">
            <div className="innerText ">
                <h1 className='text-[7vw]  m-1 leading-[0.9] font-thin'>DESIGN</h1>
                <h1 className='text-[7vw] mx-57 m-1 leading-[0.9] font-thin'>& FREEDOM</h1>
            </div>

            <div className="para  m-4 flex justify-around">
                <p className='leading-none '>Explore lndependent Style by Embracing Uniqueness <br /> with Our Exclsive Designer Apparel</p>
                
                <h3> <i className="ri-arrow-down-line bg-[#343732] p-1.5 rounded-full"></i> LEARN MORE</h3>
            </div>


        </div>


        </div>

      
  )
}

export default Section1img