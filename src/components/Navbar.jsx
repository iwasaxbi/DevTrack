import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // useLocation se hume pata chalega ki user abhi kis page par hai
  const location = useLocation();

  return (
    // Fixed at top, z-index high, mix-blend for premium visibility
    <nav className="absolute top-0 left-0 w-full z-[8000] px-6 py-8 flex justify-between items-center select-none">
      
      {/* 1. BRAND LOGO (Clicking this goes to Home) */}
      <Link 
        to="/" 
        className="text-white text-xl md:text-2xl font-bold tracking-tight cursor-none transition-transform duration-500 hover:scale-105"
      >
        DevTrack<span className="text-[#555555]">.</span>
      </Link>

      {/* 2. CENTER LINKS (Home, Login, Projects) */}
      <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] font-mono uppercase">
        
        {/* Home Link */}
        <Link 
          to="/" 
          className={`cursor-none transition-colors duration-300 ${
            location.pathname === '/' ? 'text-white font-bold' : 'text-[#777777] hover:text-white'
          }`}
        >
          Home
        </Link>

        {/* Login Link */}
        <Link 
          to="/login" 
          className={`cursor-none transition-colors duration-300 ${
            location.pathname === '/login' ? 'text-white font-bold' : 'text-[#777777] hover:text-white'
          }`}
        >
          Login
        </Link>

        {/* Projects Link (Ab ye active hai aur /projects par jayega) */}
        <Link 
          to="/projects" 
          className={`cursor-none transition-colors duration-300 ${
            location.pathname === '/projects' ? 'text-white font-bold' : 'text-[#777777] hover:text-white'
          }`}
        >
          Projects
        </Link>

      </div>

      {/* 3. RIGHT MENU BUTTON */}
      <div className="text-[#777777] text-xs tracking-[0.2em] font-mono uppercase hover:text-white transition-colors cursor-none">
        Menu +
      </div>
      
    </nav>
  );
};

export default Navbar;