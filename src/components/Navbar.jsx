import  { useContext, useEffect, useState } from 'react'
import {assets} from  '../assets/assets'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './AuthContext'

function Navbar() {
  const defmobilecss="md:hidden w-0 h-0 right-0 top-0 botton-0 overflow-hidden bg-red transition-all"
  const [showMobileMenu,setShowMobileMenu]=useState(defmobilecss)
  
  const [openclose,setOpenClose]=useState(0)
  const {isSignedUp}=useContext(AuthContext);
  const {isLogin}=useContext(AuthContext)
  useEffect(()=>{
    if(openclose){
      document.body.style.overflow='hidden'//toprevent scrolling if mobilemenu is open
    }
    else{
      document.body.style.overflow='hidden'
    }
  },[openclose])
  const navigate=useNavigate();
 
  
  
  return (
    <>
    {/* Navbar Container */}
    <div className="absolute top-0 left-0 w-full z-50 scrollbar-hide ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        
        {/* Logo */}
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="w-32 cursor-pointer" 
          onClick={() => navigate('/')} 
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-900 bg-white shadow-md px-8 py-3 rounded-full">
        <NavLink to="/Profile" className="hover:text-gray-500 transition-all">Profile</NavLink>
          <NavLink to="/" className="hover:text-gray-500 transition-all">Home</NavLink>
          <NavLink to="/About" className="hover:text-gray-500 transition-all">About</NavLink>
          <NavLink to="/Projects" className="hover:text-gray-500 transition-all">Projects</NavLink>
          <NavLink to="/Testimonials" className="hover:text-gray-500 transition-all">Testimonials</NavLink>
          <NavLink to="/Cart" className="hover:text-gray-500 transition-all">Cart</NavLink>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          {!isLogin&&<button 
            onClick={() => navigate('/login')} 
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
          >
            Login
          </button>}
          {isLogin&&<button 
            onClick={() => navigate('/logout')} 
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
          >
            Logout
          </button>}
         {!isSignedUp&& <button 
            onClick={() => navigate('/signup')} 
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
          >
            Signup
          </button>}
        </div>

        {/* Mobile Menu Icon */}
        <img 
          onClick={() => setShowMobileMenu(true)} 
          src={assets.menu_icon} 
          className="md:hidden w-7 cursor-pointer" 
          alt="Menu Icon" 
        />
      </div>
    </div>

    {/* Mobile Menu */}
    <div 
      className={`md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transition-all ${
        showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex justify-end p-6">
        <img 
          onClick={() => setShowMobileMenu(false)} 
          src={assets.cross_icon} 
          className="w-6 cursor-pointer" 
          alt="Close Icon" 
        />
      </div>
      <ul className="flex flex-col items-center gap-4 text-lg font-medium">
        <NavLink to="/" className="hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setShowMobileMenu(false)}>Home</NavLink>
        <NavLink to="/About" className="hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setShowMobileMenu(false)}>About</NavLink>
        <NavLink to="/Projects" className="hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setShowMobileMenu(false)}>Projects</NavLink>
        <NavLink to="/Testimonials" className="hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setShowMobileMenu(false)}>Testimonials</NavLink>

        {/* Mobile Auth Buttons */}
        <button 
          onClick={() => { navigate('/login'); setShowMobileMenu(false); }} 
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
        >
          Login
        </button>
        <button 
          onClick={() => { navigate('/signup'); setShowMobileMenu(false); }} 
          className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
        >
          Signup
        </button>
      </ul>
    </div>

    <Outlet />
  </>
  )
}

export default Navbar