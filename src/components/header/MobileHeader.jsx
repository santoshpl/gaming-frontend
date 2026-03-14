import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Bell } from 'lucide-react';

export default function MobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0F1E2E]/95 backdrop-blur-xl z-50 border-b border-white/5 shadow-xl">
      <div className="w-full h-full flex items-center justify-between px-8">
        {/* Logo Section */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5 group active:scale-90 transition-all duration-300"
        >
          <div className="w-9 h-9 rounded-xl bg-[#00FF87] flex items-center justify-center text-xl shadow-[0_0_20px_rgba(0,255,135,0.4)] group-hover:rotate-6 transition-all">
            🏏
          </div>
          <span className="text-white font-black text-xl tracking-tighter italic uppercase">CRICLIVE</span>
        </div>
        
        {/* Dynamic Right Section */}
        <div className="flex items-center gap-4">
          {!isDashboard ? (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="h-10 px-5 rounded-lg border border-[#00FF87] text-[#00FF87] font-black text-[10px] active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center min-w-[80px]"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="h-10 px-5 rounded-lg bg-[#00FF87] text-[#0F1E2E] font-black text-[10px] shadow-lg shadow-[#00FF87]/10 active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center min-w-[80px]"
              >
                Join
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-400 active:scale-90 transition-transform">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#00FF87] rounded-full border-2 border-[#0F1E2E]"></span>
              </button>
              
              <div className="flex flex-col items-end mr-1">
                <span className="text-[#00FF87] text-base font-black leading-none">$2,450</span>
              </div>
              
              <div 
                onClick={() => navigate('/profile')}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden active:scale-90 transition-all"
              >
                <User size={20} className="text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
