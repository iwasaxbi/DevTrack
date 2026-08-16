import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardGrid from './components/DashboardGrid';
import Login from './components/Login';
import CustomCursor from './components/CustomCursor';
import FloatingDock from './components/FloatingDock';

function App() {
  return (
    // Global dark theme, text colors, aur custom cursor ke liye 'cursor-none'
    <div className="min-h-screen bg-black text-[#A3A3A3] font-sans selection:bg-white selection:text-black cursor-none relative">
      
      {/* 1. Magic Custom Cursor */}
      <CustomCursor />
      
      {/* 2. Top Minimalist Navbar */}
      <Navbar />
      
      {/* 3. Page Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <DashboardGrid />
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

      {/* 4. Premium Floating Glassmorphism Dock (Bottom Center) */}
      <FloatingDock />
      
    </div>
  );
}

export default App;