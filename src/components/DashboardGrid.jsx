import React from 'react';

function DashboardGrid() {
  return (
    // Pitch black background, proper spacing
    <div className="w-full bg-black py-20 px-6 md:px-16">
      
      {/* Grid container */}
      <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        
        {/* Card 1: Projects */}
        <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px]">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Active Right Now</p>
            <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Projects</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-6xl font-light text-[#333333] group-hover:text-white transition duration-700">03</p>
            {/* Elegant arrow animation on hover */}
            <span className="text-[#A3A3A3] text-2xl font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">→</span>
          </div>
        </div>

        {/* Card 2: Tasks */}
        <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px]">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Needs Attention</p>
            <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Tasks</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-6xl font-light text-[#333333] group-hover:text-white transition duration-700">12</p>
            <span className="text-[#A3A3A3] text-2xl font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">→</span>
          </div>
        </div>

        {/* Card 3: Commits */}
        <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px]">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Pushed This Week</p>
            <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Commits</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-6xl font-light text-[#333333] group-hover:text-white transition duration-700">47</p>
            <span className="text-[#A3A3A3] text-2xl font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">→</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardGrid;