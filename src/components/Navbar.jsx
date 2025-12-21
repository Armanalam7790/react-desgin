import React from 'react'
import Logo from './Logo'
import Navlist from './Navlist'

const Navbar = () => {
  return (
    <div className='flex items-center  justify-between px-5 py-3    '>
        <Logo />
        <Navlist />
    </div>
  )
}

export default Navbar