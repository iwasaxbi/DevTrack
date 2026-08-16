import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader'; // 1. Preloader Import Kiya
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import DashboardGrid from './components/DashboardGrid';
import Footer from './components/Footer';
import Login from './components/Login';
import CustomCursor from './components/CustomCursor';
import FloatingDock from './components/FloatingDock';

function App() {
  // Website ready hone ka state
  const [isSiteReady, setIsSiteReady] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#A3A3A3] font-sans selection:bg-white selection:text-black cursor-none relative overflow-x-hidden">
      
      {/* Magic Custom Cursor (Hamesha on rahega) */}
      <CustomCursor />

      {/* 2. Cinematic Preloader */}
      <Preloader onLoaded={() => setIsSiteReady(true)} />

      {/* 3. Main Website Container (Neeche se upar aane wala animation) */}
      <div 
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSiteReady ? 'translate-y-0 opacity-100' : 'translate-y-[10vh] opacity-0'
        }`}
      >
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Marquee />
                <DashboardGrid />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/login" 
            element={
              <div className="flex items-center justify-center min-h-[80vh] px-4">
                <Login />
              </div>
            } 
          />
        </Routes>
      </div>

      {/* Floating Glass Dock (Iska apna animation pehle se hai) */}
      <FloatingDock />
      
    </div>
  );
}

export default App;