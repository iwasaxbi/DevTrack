import React from 'react';

function DashboardGrid() {
  return (
    // Main Container with off-white background
    <div className="w-full bg-[#f4f4f0] py-16 px-4 md:px-8">
      
      {/* Section Title */}
      <div className="max-w-[90rem] mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          YOUR <span className="text-purple-600">WORKSPACE</span>
        </h2>
      </div>

      {/* Grid Layout for Dev Features */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Active Projects */}
        <div className="bg-white border-4 border-black p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-extrabold uppercase">Projects</h3>
            <span className="text-4xl">📁</span>
          </div>
          <p className="text-5xl font-black mb-2">03</p>
          <p className="text-gray-500 font-bold uppercase text-sm tracking-widest">Active Right Now</p>
        </div>

        {/* Card 2: Pending Tasks */}
        <div className="bg-purple-400 border-4 border-black p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-extrabold text-black uppercase">Tasks</h3>
            <span className="text-4xl">⚡</span>
          </div>
          <p className="text-5xl font-black text-black mb-2">12</p>
          <p className="text-black font-bold uppercase text-sm tracking-widest">Needs Attention</p>
        </div>

        {/* Card 3: GitHub Sync */}
        <div className="bg-black text-white border-4 border-black p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(147,51,234,1)] transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-extrabold uppercase">Commits</h3>
            <span className="text-4xl">🐙</span>
          </div>
          <p className="text-5xl font-black mb-2">47</p>
          <p className="text-gray-400 font-bold uppercase text-sm tracking-widest">Pushed This Week</p>
        </div>

      </div>
    </div>
  );
}

export default DashboardGrid;