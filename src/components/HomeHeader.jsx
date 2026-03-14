import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, User } from 'lucide-react';

export default function HomeHeader({ onToggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-[#0F1E2E]/90 backdrop-blur-2xl z-50 border-b border-white/5 shadow-2xl">
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-10 max-w-[1600px] mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button 
            onClick={onToggleSidebar}
            className="text-white hover:text-[#00FF87] transition-colors lg:flex items-center"
          >
            <Menu size={24} />
          </button>
          
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00FF87] flex items-center justify-center text-lg sm:text-xl shadow-[0_0_20px_rgba(0,255,135,0.3)] group-hover:rotate-12 transition-all duration-500">
              🏏
            </div>
            <span className="text-white font-black text-lg sm:text-2xl tracking-tighter italic">CRICLIVE</span>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-6">
          {!isDashboard ? (
            <>
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-gray-400 font-bold text-xs sm:text-sm px-2 sm:px-4 py-2 hover:text-white transition-all duration-300"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-[#00FF87] text-[#0F1E2E] font-black text-[10px] sm:text-sm px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:bg-[#00e67a] hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all"
              >
                JOIN
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden xs:flex flex-col items-end mr-1 sm:mr-2">
                <span className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Balance</span>
                <span className="text-[#00FF87] text-xs sm:text-sm font-black leading-tight">$20.00</span>
              </div>

              <button className="flex items-center gap-2 bg-[#00FF87] text-[#0F1E2E] font-black text-[10px] sm:text-sm px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:bg-[#00e67a] hover:shadow-[0_0_30px_rgba(0,255,135,0.4)] transition-all active:scale-95 uppercase tracking-tighter shadow-lg shadow-[#00FF87]/20">
                Deposit
              </button>
              
              <div 
                onClick={() => navigate('/profile')}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-[#00FF87]/50 transition-all group shrink-0"
                title="View Profile"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center border border-white/10 group-hover:border-[#00FF87]/30 transition-all overflow-hidden">
                  <User size={16} className="text-gray-400 group-hover:text-[#00FF87] transition-colors" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
