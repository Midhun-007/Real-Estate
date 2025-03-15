import  { useEffect, useState } from 'react'
import {assets} from  '../assets/assets'
import { NavLink, Outlet } from 'react-router-dom'
function Navbar() {
  const defmobilecss="md:hidden w-0 h-0 right-0 top-0 botton-0 overflow-hidden bg-red transition-all"
  const [showMobileMenu,setShowMobileMenu]=useState(defmobilecss)
  const mobilecss="md:hidden fixed w-full  right-0 top-0 botton-0 overflow-hidden bg-red transition-all"
  const [openclose,setOpenClose]=useState(0)
  useEffect(()=>{
    if(openclose){
      document.body.style.overflow='hidden'//toprevent scrolling if mobilemenu is open
    }
    else{
      document.body.style.overflow='hidden'
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
    <>
      <div className='gap-4 absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent gap-4'>
          <img src={assets.logo} alt="Logo" className='left-0' />
          <ul className="hidden md:flex gap-7 text-black bg-white shadow-md px-8 py-3 rounded-full fixed top-5 left-1/2 transform -translate-x-1/2">
            <NavLink 
              to="/profile" 
              className="cursor-pointer hover:text-gray-400 transition-all" 
              activeClassName="font-bold"
            >
              Profile
            </NavLink>
            <NavLink to="/" className="cursor-pointer hover:text-gray-400 transition-all">
              Home
            </NavLink>
            <NavLink to="/About" className="cursor-pointer hover:text-gray-400 transition-all">
              About
            </NavLink>
            <NavLink to="/Projects" className="cursor-pointer hover:text-gray-400 transition-all">
              Projects
            </NavLink>
            <NavLink to="/Testimonials" className="cursor-pointer hover:text-gray-400 transition-all">
              Testimonials
            </NavLink>
          </ul>
          <button className='hidden md:block bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition-all'>
            Signup
          </button>
          <img onClick={showMMobileMenu} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="Menu Icon" />
        </div>
        {/*---------mobile-menu----------*/}
        <div className={showMobileMenu}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={closeMobileMenu} src={assets.cross_icon} className='w-6' alt="Close Icon" />
          </div>
          <ul className='flex flex-col items-center cursor-pointer gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink to="/profile" className='px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all' onClick={closeMobileMenu}>
              Profile
            </NavLink>
            <NavLink to="/" className='px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all' onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink to="/About" className='px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all' onClick={closeMobileMenu}>
              About
            </NavLink>
            <NavLink to="/Projects" className='px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all' onClick={closeMobileMenu}>
              Projects
            </NavLink>
            <NavLink to="/Testimonials" className='px-4 py-2 rounded-full inline-block hover:bg-gray-200 transition-all' onClick={closeMobileMenu}>
              Testimonials
            </NavLink>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar