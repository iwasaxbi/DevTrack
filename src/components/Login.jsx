import React, { useState } from 'react';

const Login = () => {
  // State Management - To store user input and toggle between Login/Signup
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle traditional Email/Password submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Ye page ko reload hone se rokega
    console.log("Form Submitted:", { type: isLogin ? "Login" : "Signup", email, password });
    alert(`Simulating ${isLogin ? 'Login' : 'Signup'} for ${email}`);
    // Aage chal kar yahan Backend API call hogi
  };

  // Handle Google OAuth Click
  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    alert("Google OAuth connection logic will run here!");
  };

  return (
    <div className="w-full max-w-md bg-[#0a0a0a] border border-[#222222] p-8 md:p-12 relative overflow-hidden select-none group">
      
      {/* Subtle top glow effect on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#555555] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tighter uppercase mb-2">
          {isLogin ? 'Welcome Back' : 'Join DevTrack'}
        </h2>
        <p className="text-[#777777] font-mono text-xs tracking-widest uppercase">
          {isLogin ? 'Authenticate to continue' : 'Start your journey'}
        </p>
      </div>

      {/* 🚀 PREMIUM GOOGLE BUTTON (Monochrome & Minimal) */}
      <button 
        onClick={handleGoogleLogin}
        type="button"
        className="w-full flex items-center justify-center space-x-3 bg-transparent border border-[#333333] hover:border-white text-[#A3A3A3] hover:text-white py-4 px-6 transition-all duration-300 cursor-none mb-6"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <span className="font-mono text-xs tracking-widest uppercase mt-[2px]">Continue with Google</span>
      </button>

      {/* Minimalist Divider */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="h-px bg-[#222222] w-full"></div>
        <span className="text-[#555555] font-mono text-[10px] tracking-[0.2em] uppercase">OR</span>
        <div className="h-px bg-[#222222] w-full"></div>
      </div>

      {/* TRADITIONAL FORM (No Reload) */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#777777]">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border-b border-[#333333] focus:border-white text-white px-0 py-3 outline-none transition-colors cursor-none placeholder-[#333333] text-sm"
            placeholder="hello@awwwards.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#777777]">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-transparent border-b border-[#333333] focus:border-white text-white px-0 py-3 outline-none transition-colors cursor-none placeholder-[#333333] text-sm"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#A3A3A3] transition-colors duration-300 cursor-none mt-4"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      {/* Toggle Sign In / Sign Up */}
      <div className="mt-8 text-center">
        <button 
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#777777] hover:text-white font-mono text-[10px] tracking-[0.2em] uppercase transition-colors cursor-none"
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>

    </div>
  );
};

export default Login;