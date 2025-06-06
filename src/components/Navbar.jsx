import React from 'react'
import logo from '../assets/images/logo.svg'
import close from '../assets/images/icon-close-menu.svg'
import hamburger from '../assets/images/icon-hamburger.svg'


const Navbar = ({size, menuOpen, setMenuOpen}) => {
  return (
    <div  className='py-3 px-2 sm:px-5 md:px-10 lg:px-24 z-50 flex align-center justify-between relative'>
        <img src={logo} alt="" className='size-auto'/>

        {
            size > 640 ? (
                <nav>
                    <ul className={`flex items-center gap-5 text-gray-50`}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">GetStarted</a></li>
                    </ul>
                </nav>
            ) : 
            (
                <nav className={`${menuOpen ? 'absolute top-12 bg-white w-11/12 left-1/2 -translate-x-1/2 rounded-md' : 'hidden'}`}>
                    <ul className={`${menuOpen ? 'flex flex-col  justify-center text-center' : ''}`}>
                        <li className={`${menuOpen ? 'py-5 border-b border-gray-200 font-semibold' : ''}`}><a href="#">About</a></li>
                        <li className={`${menuOpen ? 'py-4 border-b border-gray-200 font-semibold' : ''}`}><a href="#">Discover</a></li>
                        <li className={`${menuOpen ? 'py-4 font-semibold' : ''}`}><a href="#">GetStarted</a></li>
                    </ul>
                </nav>
            )
        }  
        <div className={`${size > 640 ? 'hidden' : 'block'}`}>
            { menuOpen ? 
                <img src={close} alt="" className='cursor-pointer' onClick={() => setMenuOpen(false)}/> : 
                <img src={hamburger} alt="" className='cursor-pointer' onClick={() => setMenuOpen(true)}/>
            }
        </div>
    </div>
  )
}

export default Navbar;
