import React from 'react'

const NavBar = ({handleNavClick}) => {
  return (
    <nav className='sticky top-0 z-[999] flex justify-between w-full '>
        <div className='hidden sm:block'>HC</div>
        <div>HOSOO CHA</div>
        <ul className='font-semibold menu-text md:text-[1.2rem] text-[1rem] text-right'>
            <li className='cursor-pointer' onClick={() => handleNavClick(1)}>HOME</li>
            <li className='cursor-pointer' onClick={() => handleNavClick(2)}>ABOUT</li>
            <li className='cursor-pointer' onClick={() => handleNavClick(3)}>PROJECTS</li>
            <li className='cursor-pointer' onClick={() => handleNavClick(4)}>CONTACT</li>
        </ul>
    </nav>
  )
}

export default NavBar