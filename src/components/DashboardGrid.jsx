import React, { useEffect } from 'react';

function DashboardGrid() {
  
  // Magic Scroll Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jab element screen pe aaye, toh dikhao (slide up + fade in)
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-24');
        }
      });
    }, { threshold: 0.1 }); // Jab 10% card dikhe tab trigger hoga

    // Saare hidden cards ko dhoondh kar observe karo
    const hiddenElements = document.querySelectorAll('.reveal-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    // overflow-hidden taaki slide karte waqt page scroll bar na hile
    <div className="w-full bg-black py-20 px-6 md:px-16 overflow-hidden">
      
      <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        
        {/* Card 1 - Instantly reveals */}
        <div className="reveal-element opacity-0 translate-y-24 transition-all duration-1000 ease-out">
          <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px] h-full">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Active Right Now</p>
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Projects</h3>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-6xl font-light text-[#333333] group-hover:text-white transition duration-700">03</p>
              <span className="text-[#A3A3A3] text-2xl font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">→</span>
            </div>
          </div>
        </div>

        {/* Card 2 - 200ms Delay ke sath aayega (Domino effect) */}
        <div className="reveal-element opacity-0 translate-y-24 transition-all duration-1000 ease-out delay-[200ms]">
          <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px] h-full">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Needs Attention</p>
              <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">Tasks</h3>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-6xl font-light text-[#333333] group-hover:text-white transition duration-700">12</p>
              <span className="text-[#A3A3A3] text-2xl font-light opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">→</span>
            </div>
          </div>
        </div>

        {/* Card 3 - 400ms Delay ke sath aayega */}
        <div className="reveal-element opacity-0 translate-y-24 transition-all duration-1000 ease-out delay-[400ms]">
          <div className="group relative bg-[#0a0a0a] border border-[#222222] p-10 hover:bg-[#111111] transition duration-700 cursor-pointer flex flex-col justify-between min-h-[350px] h-full">
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
    </div>
  );
}

export default DashboardGrid;