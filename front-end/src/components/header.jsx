import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import feather from "feather-icons";
import { assets } from "../assets/assests";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

function Header() {
  // Re-render feather icons after component mounts
  useEffect(() => {
    feather.replace();
  }, []);

  const {backendUrl, role, getAuthState, setRole, isLoggedin, setIsLoggedin} = useContext(AppContext);
  const navigate = useNavigate()

  useEffect(() => {
    getAuthState()
    setIsLoggedin(role && true)
  },[])

  const handle = async () => {
    try {

      if(role) {
        axios.defaults.withCredentials = true
      
        const {data} = await axios.post(backendUrl + '/auth/logout')
        setIsLoggedin(false);
        setRole(false)
        
        toast.success(data.message)
        navigate('/')

      }else{
        navigate('/signin')
      }
      
    } catch (error) {
      toast.error(error.message)
      console.log(message)
    }
  }


  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
      {/* Logo + Title */}
      <Link
        to="/"
        className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={assets.logo}
          alt="EduPortal Logo"
          className="h-10 w-10 rounded-full border-2 border-purple-300 object-cover shadow-md"
        />
        <h2 className="text-xl font-bold tracking-wide text-white">
          EduPortal
        </h2>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 font-medium items-center">
        <Link
          to="/"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="home" className="w-4 h-4"></i> Home
        </Link>
        <Link
          to="/features"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="zap" className="w-4 h-4"></i> Features
        </Link>
        <Link
          to="/services"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="tool" className="w-4 h-4"></i> Services
        </Link>
        <Link
          to="/about"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        </a>
        <Link
          to="/reports"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1"
        >
          <i data-feather="tool" className="w-4 h-4"></i> Services
        </Link>
        <a
          href="#about"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1"
        >
          <i data-feather="info" className="w-4 h-4"></i> About
        </Link>
        <Link
          to="/contact"
          className="text-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform"
        >
          <i data-feather="mail" className="w-4 h-4"></i> Contact
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* Get Started button (go to login) */}
        <Link
          to="/signin"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
        >
          Get Started
        </Link>
        {/* Notification bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" onClick={() => loggout()}>
          <i data-feather="bell" className="w-5 h-5 text-gray-600"></i>
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Get Started button (go to login) */}

        
        <button
            
            onClick={() => handle()}
            className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-600  text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {!isLoggedin ? 'Get Started' : 'Logout'}
            
        </button>

        {/* Mobile menu icon */}
        <button className="md:hidden p-2 rounded-full hover:bg-purple-800/50 transition-colors duration-200 hover:scale-110 transform">
          <i data-feather="menu" className="w-5 h-5 text-purple-200"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
