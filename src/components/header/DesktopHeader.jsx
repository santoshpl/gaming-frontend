import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, User, Search } from 'lucide-react';

export default function DesktopHeader({ onToggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#0F1E2E]/80 backdrop-blur-3xl z-50 border-b border-white/5 shadow-2xl">
      <div className="w-full h-full flex items-center justify-between px-10 mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          <button 
            onClick={onToggleSidebar}
            className="text-gray-400 hover:text-[#00FF87] transition-all hover:scale-110 active:scale-90 p-2"
          >
            <Menu size={28} />
          </button>
          
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00FF87] flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(0,255,135,0.4)] group-hover:rotate-12 transition-all duration-500">
              🏏
            </div>
            <span className="text-white font-black text-3xl tracking-tighter italic uppercase group-hover:text-[#00FF87] transition-colors">CRICLIVE</span>
          </div>
        </div>

        {/* Search Bar - Desktop Only */}
        <div className="flex-1 max-w-3xl mx-12">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00FF87] transition-all duration-300" size={20} />
            <input 
              type="text" 
              placeholder="Search matches, leagues, or sports..."
              className="w-full bg-[#1A2C38]/40 border border-white/10 rounded-full pl-16 pr-6 py-3.5 text-sm focus:outline-none focus:border-[#00FF87]/40 focus:ring-8 focus:ring-[#00FF87]/5 focus:bg-[#1A2C38] transition-all placeholder:text-gray-600 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
            />
            <div className="absolute inset-0 rounded-full border border-[#00FF87]/0 group-focus-within:border-[#00FF87]/20 transition-all pointer-events-none shadow-[0_0_20px_rgba(0,255,135,0)] group-focus-within:shadow-[0_0_20px_rgba(0,255,135,0.15)]"></div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-6">
          {!isDashboard ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="h-11 px-8 rounded-lg border-2 border-[#00FF87] text-[#00FF87] font-black text-sm hover:bg-[#00FF87]/5 transition-all uppercase tracking-widest active:scale-95 flex items-center justify-center"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="h-11 px-10 rounded-lg bg-[#00FF87] text-[#0F1E2E] font-black text-sm hover:bg-[#00e67a] transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 uppercase tracking-wider shadow-lg shadow-[#00FF87]/20 flex items-center justify-center"
              >
                Join Now
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 p-1 pl-4 bg-[#1A2C38]/40 rounded-2xl border border-white/5">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] leading-none mb-1">Total Stake</span>
                  <span className="text-[#00FF87] text-xl font-black leading-tight tabular-nums">$2,450.00</span>
                </div>
                <button className="bg-[#00FF87] text-[#0F1E2E] font-black text-xs px-6 py-3 rounded-xl hover:bg-[#00e67a] transition-all active:scale-95 uppercase tracking-tighter ml-2">
                  Deposit
                </button>
              </div>
              
              <div 
                onClick={() => navigate('/profile')}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-[#00FF87]/50 transition-all group shrink-0 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/10 group-hover:border-[#00FF87]/30 transition-all overflow-hidden">
                  <User size={24} className="text-gray-500 group-hover:text-[#00FF87] transition-colors" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
