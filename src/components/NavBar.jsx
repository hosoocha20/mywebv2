import React from 'react'

const NavBar = ({handleNavClick}) => {
  return (
    <nav className='sticky top-0 z-[9999] flex justify-between w-full '>
        <div className='hidden sm:block'>HC</div>
        <div>HOSOO CHA</div>
        <ul className='font-semibold menu-text md:text-[1.2rem] text-[1rem] sm:text-right text-center flex gap-x-[0.7rem] sm:flex-col justify-items-end items-end'>
            <li className='cursor-pointer  w-fit px-[3px] bg-my-yellow' onClick={() => handleNavClick(1)}>HOME</li>
            <li className='cursor-pointer  px-[3px]' onClick={() => handleNavClick(2)}>ABOUT</li>
            <li className='cursor-pointer  px-[3px]' onClick={() => handleNavClick(3)}>PROJECTS</li>
            <li className='cursor-pointer  px-[3px]' onClick={() => handleNavClick(4)}>CONTACT</li>
        </ul>
    </nav>
  )
}

export default NavBar