import React from 'react';

function Navbar() {
  return (
    <header className="w-full bg-white text-black font-sans border-b-2 border-gray-100">
      
      {/* Top Black Utility Bar (Strictly Monotone) */}
      <div className="bg-black text-white text-[10px] md:text-xs py-2.5 px-4 md:px-8 flex justify-between items-center font-extrabold tracking-[0.2em] uppercase">
        <div className="flex items-center space-x-6">
          <span>Follow Us</span>
          
          {/* Authentic Social SVG Icons instead of Emojis */}
          <div className="flex items-center space-x-4">
            {/* Pinterest */}
            <svg className="w-3.5 h-3.5 fill-current cursor-pointer hover:text-gray-400 transition" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.65-.14-1.63.03-2.34.15-.65.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.5-2.03.7 0 1.04.53 1.04 1.16 0 .7-.45 1.76-.68 2.74-.2.82.4 1.49 1.2 1.49 1.45 0 2.57-1.53 2.57-3.75 0-1.96-1.4-3.33-3.46-3.33-2.38 0-3.78 1.78-3.78 3.63 0 .71.27 1.48.61 1.9.06.07.07.14.05.22l-.2 .8c-.02.09-.08.11-.16.08-1.17-.54-1.9-2.25-1.9-3.62 0-2.95 2.14-5.66 6.18-5.66 3.25 0 5.77 2.31 5.77 5.4 0 3.23-2.03 5.82-4.86 5.82-.95 0-1.84-.49-2.15-1.07l-.59 2.23c-.2.8-1 2.02-1.34 2.6A12 12 0 1 0 12 0z"/></svg>
            {/* Twitter / X */}
            <svg className="w-3.5 h-3.5 fill-current cursor-pointer hover:text-gray-400 transition" viewBox="0 0 24 24"><path d="M24 4.56a9.83 9.83 0 0 1-2.83.77 4.93 4.93 0 0 0 2.17-2.72 9.86 9.86 0 0 1-3.13 1.2 4.93 4.93 0 0 0-8.38 4.48A14 14 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1A10 10 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14v-.64A10 10 0 0 0 24 4.56z"/></svg>
            {/* Instagram */}
            <svg className="w-3.5 h-3.5 fill-current cursor-pointer hover:text-gray-400 transition" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.83A3.93 3.93 0 0 0 3.83 7.75v8.5A3.93 3.93 0 0 0 7.75 20.17h8.5a3.93 3.93 0 0 0 3.92-3.92v-8.5a3.93 3.93 0 0 0-3.92-3.92h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.83a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34zm5.5-2.66a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34z"/></svg>
            {/* Facebook */}
            <svg className="w-3.5 h-3.5 fill-current cursor-pointer hover:text-gray-400 transition" viewBox="0 0 24 24"><path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.5v-9.28H9.7v-3.63h3.14V7.05c0-3.1 1.9-4.8 4.67-4.8 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.71-1.8 1.76v2.31h3.6l-.47 3.63h-3.13V24h6.08c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"/></svg>
          </div>
        </div>
        
        {/* Right Action Items */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-400 flex items-center gap-1.5 transition">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Donate
          </button>
          <button className="hover:text-gray-400 flex items-center gap-1.5 transition">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Extension
          </button>
        </div>
      </div>

      {/* Main White Nav Bar */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
        
        {/* Logo Re-designed to match "14 clan" aesthetic */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-black text-white font-black text-2xl px-2.5 py-1 tracking-tighter leading-none">
            DEV
          </div>
          <span className="font-extrabold text-2xl tracking-tighter leading-none">TRACK</span>
        </div>

        {/* Navigation Links - Matching exact wording and thick font style */}
        <nav className="hidden md:flex space-x-8 font-extrabold text-[15px] tracking-tight uppercase">
          <a href="#home" className="text-black border-b-[3px] border-black pb-0.5">HOME</a>
          <a href="#phone" className="text-gray-900 hover:text-gray-500 transition">PHONE</a>
          <a href="#desktop" className="text-gray-900 hover:text-gray-500 transition">DESKTOP</a>
          <a href="#web" className="text-gray-900 hover:text-gray-500 transition">WEB</a>
          <a href="#setup" className="text-gray-900 hover:text-gray-500 transition">SETUP GUIDE</a>
          <a href="#community" className="text-gray-900 hover:text-gray-500 transition">COMMUNITY</a>
        </nav>

        {/* Right Icons (Thick Stroke Vectors instead of Text) */}
        <div className="flex items-center space-x-5">
          <button className="text-black hover:text-gray-500 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <button className="text-black hover:text-gray-500 transition">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;