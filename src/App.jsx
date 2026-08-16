import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardGrid from './components/DashboardGrid';
import Login from './components/Login';
import CustomCursor from './components/CustomCursor'; // Naya Cursor Import kiya

function App() {
  return (
    // 'cursor-none' class lagayi taaki purana mouse pointer gayab ho jaye
    <div className="min-h-screen bg-black text-[#A3A3A3] font-sans selection:bg-white selection:text-black cursor-none">
      
      {/* Naya Magic Cursor */}
      <CustomCursor />
      
      <Navbar />
      
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
    </div>
  );
}

export default App;