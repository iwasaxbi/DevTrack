import React from 'react';

function Login() {
  return (
    // Minimalist dark box with subtle borders
    <div className="w-full max-w-lg p-10 md:p-16 border border-[#222222] bg-[#050505]">
      
      {/* Signature massive typography for heading */}
      <h2 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tighter">
        LOGIN<span className="text-[#555555]">.</span>
      </h2>
      
      {/* Email Field - Clean bottom borders instead of full boxes */}
      <div className="mb-10">
        <label className="block text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Email Address</label>
        <input 
          type="email" 
          className="w-full bg-transparent border-b border-[#333333] text-white pb-3 focus:border-white focus:outline-none transition duration-500 font-light placeholder-[#333333]" 
          placeholder="HELLO@EXAMPLE.COM" 
        />
      </div>

      {/* Password Field */}
      <div className="mb-14">
        <label className="block text-[10px] tracking-[0.2em] text-[#A3A3A3] uppercase mb-4">Password</label>
        <input 
          type="password" 
          className="w-full bg-transparent border-b border-[#333333] text-white pb-3 focus:border-white focus:outline-none transition duration-500 font-light placeholder-[#333333]" 
          placeholder="••••••••" 
        />
      </div>

      {/* High contrast minimalist button */}
      <button className="w-full bg-white text-black text-[10px] md:text-xs tracking-[0.2em] uppercase py-5 font-medium hover:bg-[#d1d1d1] transition duration-500">
        Access Workspace
      </button>
      
    </div>
  );
}

export default Login;