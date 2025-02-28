import React, { useEffect, useState } from 'react'
import {assets} from  '../assets/assets'
function Navbar() {
  const defmobilecss="md:hidden w-0 h-0 right-0 top-0 botton-0 overflow-hidden bg-white transition-all"
  const [showMobileMenu,setShowMobileMenu]=useState(defmobilecss)
  const mobilecss="md:hidden fixed w-full  right-0 top-0 botton-0 overflow-hidden bg-white transition-all"
  const [openclose,setOpenClose]=useState(0)
  useEffect(()=>{
    if(openclose){
      document.body.style.overflow='hidden'//toprevent scrolling if mobilemenu is open
    }
    else{
      document.body.style.overflow='auto'
    }
  },[openclose])
  function showMMobileMenu(){
    setShowMobileMenu(mobilecss)
    setOpenClose(1)
  }
  function closeMobileMenu(){
    setShowMobileMenu(defmobilecss)
    setOpenClose(0)
  }
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transperant scroll-smooth'>
    <img src={assets.logo} alt="" />
    <ul className='hidden md:flex gap-7 text-white'>
        <a href="#Header"className='cursor-pointer hover:text-gray-400' >Home</a>
        <a href="#About"className='cursor-pointer hover:text-gray-400' >About</a>
        <a href="#Projects"className='cursor-pointer hover:text-gray-400' >Projects</a>
        <a href="#Testimonials"className='cursor-pointer hover:text-gray-400' >Testimonials</a>

    </ul>
    <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
    <img onClick={showMMobileMenu} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer'></img>
</div>
    {/*---------mobile-menu----------*/}
    <div className={showMobileMenu} >
      <div className='flex justify-end p-6 cursor-pointer'>
        <img onClick={closeMobileMenu} src={assets.cross_icon} className='w-6'  />
      </div>
      <ul className='flex flex-col items-center cursor-pointer gap-2 mt-5 px-5 text-lg font-medium'>
        <a href="#Header" className='px-4
         py-2 rounded-full inline-block' onClick={closeMobileMenu}>Home</a>
         <a href="#About" className='px-4
         py-2 rounded-full inline-block' onClick={closeMobileMenu}>About</a>
         <a href="#Projects" className='px-4
         py-2 rounded-full inline-block' onClick={closeMobileMenu}>Projects</a>
         <a href="#Testimonials" className='px-4
         py-2 rounded-full inline-block' onClick={closeMobileMenu}>Testimonials</a>
      </ul>
    </div>
    </div>
  )
}

export default Navbar