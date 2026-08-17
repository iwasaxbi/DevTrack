import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardGrid = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Projects", status: "Active Right Now", path: "/projects" },
    { title: "Tasks", status: "Needs Attention", path: "/tasks" },
    { title: "Commits", status: "Pushed This Week", path: "/commits" },
  ];

  return (
    <div className="w-full bg-black py-20 px-6 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            onClick={() => navigate(card.path)}
            className="group relative border border-[#222222] bg-[#0a0a0a] p-8 cursor-none transition-all duration-500 hover:border-[#444444] hover:bg-[#111111]"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#555555] mb-4 group-hover:text-white transition-colors">
              {card.status}
            </p>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
              {card.title}
            </h2>
            
            {/* Small arrow icon for premium feel */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardGrid;