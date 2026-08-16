import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import DashboardGrid from './components/DashboardGrid';
import Footer from './components/Footer'; // Naya Footer Import Kiya
import Login from './components/Login';
import CustomCursor from './components/CustomCursor';
import FloatingDock from './components/FloatingDock';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#A3A3A3] font-sans selection:bg-white selection:text-black cursor-none relative">
      
      <CustomCursor />
      <Navbar />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Marquee />
              <DashboardGrid />
              <Footer /> {/* Footer yahan cards ke theek neeche laga diya */}
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

      <FloatingDock />
      
    </div>
  );
}

export default App;