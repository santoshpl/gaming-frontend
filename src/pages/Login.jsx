import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#0F1E2E] flex items-center justify-center p-4">
      <div className="bg-[#1A2C38] w-full max-w-md rounded-3xl p-8 border border-gray-800 shadow-2xl">
        <h2 className="text-white text-3xl font-black italic tracking-tighter mb-2">LOGIN</h2>
        <p className="text-gray-400 mb-8 font-medium">Welcome back to CricLive</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Username</label>
            <input 
              type="text" 
              className="w-full bg-[#0F1E2E] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FF87] transition-colors"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-[#0F1E2E] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FF87] transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-[#00FF87] text-[#0F1E2E] font-black py-4 rounded-xl mt-4 hover:bg-[#00e67a] active:scale-95 transition-all">
            LOGIN
          </button>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account? <span className="text-[#00FF87] font-bold cursor-pointer">Join Now</span>
        </p>
      </div>
    </div>
  );
}
