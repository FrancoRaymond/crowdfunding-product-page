import React from 'react'
import imgMobile from '../assets/images/image-hero-mobile.jpg'
import imgDesktop from '../assets/images/image-hero-desktop.jpg'

const Hero = ({size}) => {
  return (
    <div className='-mt-14 relative bg-gray-700 z-0'>
        {
            size > 640 ? <img src={imgDesktop} alt="" className='z-0'/> : <img src={imgMobile} alt=""/>
        }
    </div>
  )
}

export default Hero;