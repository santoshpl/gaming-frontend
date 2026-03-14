import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center py-6 sm:py-10">
        <div className="w-20 h-20 rounded-full bg-[#1A2C38] border-2 border-[#00FF87] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,135,0.3)] transition-transform hover:scale-110 duration-500 group relative">
          <div className="absolute inset-0 rounded-full bg-[#00FF87] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <User size={32} className="text-[#00FF87] relative z-10" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-white tracking-tight">
          USER PROFILE
        </h1>

        <p className="mt-2 text-gray-400 text-sm tracking-wide">
          Manage your account and settings
        </p>
      </div>
      
      <div className="w-full bg-[#1A2C38] rounded-3xl p-8 border border-white/5 shadow-2xl space-y-6">
        <div className="flex items-center justify-between p-4 bg-black/20 rounded-2xl">
          <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Username</span>
          <span className="text-white font-black">Player_One</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-black/20 rounded-2xl">
          <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Balance</span>
          <span className="text-[#00FF87] font-black text-xl">$20.00</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-black/20 rounded-2xl">
          <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Account Tier</span>
          <span className="bg-[#00FF87] text-[#0F1E2E] px-3 py-1 rounded-lg font-black text-[10px] tracking-widest uppercase">VIP GOLD</span>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/')}
        className="mt-12 text-gray-500 font-bold hover:text-white transition-colors uppercase tracking-[0.3em] text-xs"
      >
        Logout Account
      </button>
    </div>
  );
}
