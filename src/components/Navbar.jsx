import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // Pitch black background, subtle dark grey border, premium text color
    <header className="w-full bg-black text-[#A3A3A3] font-sans border-b border-[#222222]">
      
      <div className="max-w-[100rem] mx-auto px-6 md:px-16 py-6 flex justify-between items-center">
        
        {/* Minimalist Logo - No more chunky blocks */}
        <Link to="/" className="text-white font-medium tracking-tight text-xl md:text-2xl">
          DevTrack<span className="text-[#555555]">.</span>
        </Link>

        {/* Ultra-clean navigation text (Small, Uppercase, Widely Spaced) */}
        <nav className="hidden md:flex space-x-12 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          <Link to="/" className="hover:text-white transition duration-500">Home</Link>
          <Link to="/login" className="hover:text-white transition duration-500">Login</Link>
          <Link to="/" className="hover:text-white transition duration-500">Projects</Link>
        </nav>

        {/* Cynthia Ugwu Style 'MENU +' button instead of icons */}
        <div className="flex items-center">
          <button className="text-[10px] md:text-xs tracking-[0.2em] uppercase hover:text-white transition duration-500">
            Menu +
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;