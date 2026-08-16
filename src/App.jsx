import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardGrid from './components/DashboardGrid';

function App() {
  return (
    // Background color ko dark se hata kar off-white kar diya hai (Wallpapers Clan style)
    <div className="min-h-screen bg-[#f4f4f0] font-sans">
      
      {/* 1. Sabse upar Navbar */}
      <Navbar />
      
      {/* 2. Uske theek niche Black Hero Banner */}
      <Hero />
      
      {/* 3. Aur sabse niche hamara 3-Card wala Grid */}
      <DashboardGrid />

    </div>
  );
}

export default App;