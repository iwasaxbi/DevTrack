import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import DashboardGrid from './components/DashboardGrid';
import Footer from './components/Footer';
import Login from './components/Login';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Commits from './components/Commits';
import CustomCursor from './components/CustomCursor';
import FloatingDock from './components/FloatingDock';

function App() {
  const [isSiteReady, setIsSiteReady] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#A3A3A3] font-sans selection:bg-white selection:text-black cursor-none relative overflow-x-hidden">
      
      <CustomCursor />
      <Preloader onLoaded={() => setIsSiteReady(true)} />

      {/* 🚀 THE FIX 1: Navbar ab animated div ke BAHAR hai taaki 'fixed' position perfectly kaam kare */}
      <Navbar />

      <div 
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col min-h-screen ${
          isSiteReady ? 'translate-y-0 opacity-100' : 'translate-y-[10vh] opacity-0'
        }`}
      >
        <div className="flex-grow">
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
                <div className="flex items-center justify-center min-h-screen pt-32 pb-20 px-4">
                  <Login />
                </div>
              } 
            />
            
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/commits" element={<Commits />} />
          </Routes>
        </div>
      </div>

      <FloatingDock />
      
    </div>
  );
}

export default App;