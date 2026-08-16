import React from 'react';

function Hero() {
  return (
    // Black background, white text, padding for thickness
    <div className="w-full bg-black text-white py-10 md:py-14 flex items-center justify-center text-center px-4 border-b-4 border-gray-900">
      
      {/* Ultra-bold responsive text */}
      <h1 className="text-2xl md:text-[2.5rem] font-black uppercase tracking-tighter leading-tight">
        MANAGE YOUR PROJECTS 💻 <span className="text-gray-300">TRACK YOUR SKILLS</span>
      </h1>
      
    </div>
  );
}

export default Hero;