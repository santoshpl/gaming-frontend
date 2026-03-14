import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Dice5, Club, User } from 'lucide-react';

const menuItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Sports", icon: Trophy, path: "/sports" },
  { name: "Casino", icon: Dice5, path: "/casino" },
  { name: "Poker", icon: Club, path: "/poker" },
  { name: "Profile", icon: User, path: "/profile" }
];

export default function Sidebar({ isCollapsed }) {
  return (
    <aside className={`hidden lg:flex flex-col bg-[#0F1E2E] border-r border-white/5 sticky top-20 h-[calc(100vh-80px)] transition-all duration-500 ease-in-out overflow-hidden shrink-0 z-40 ${isCollapsed ? 'w-[88px]' : 'w-[240px]'}`}>
      <div className="flex-1 px-4 py-8 overflow-x-hidden overflow-y-auto scrollbar-hide">
        {!isCollapsed && (
          <div className="px-4 mb-8">
            <div className="h-px bg-white/5 w-full"></div>
          </div>
        )}
        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              title={isCollapsed ? item.name : ""}
              className={({ isActive }) =>
                `flex items-center transition-all duration-300 group relative rounded-xl ${
                  isCollapsed ? 'justify-center py-4 px-0' : 'px-4 py-3.5 gap-4'
                } ${isActive
                  ? 'bg-[#00FF87]/10 text-[#00FF87] border border-[#00FF87]/20 shadow-[0_0_20px_rgba(0,255,135,0.05)]'
                  : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                <div className="w-6 flex items-center justify-center shrink-0">
                  <item.icon size={20} className={`transition-all duration-500 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(0,255,135,0.4)]' : 'group-hover:scale-110'}`} />
                </div>

                {!isCollapsed && (
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 group-hover:translate-x-1 flex-1">
                    {item.name}
                  </span>
                )}
                  
                  {isActive && (
                    <div className="absolute left-0 w-1 h-6 bg-[#00FF87] rounded-r-full shadow-[0_0_15px_rgba(0,255,135,0.8)]"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={`p-6 mt-auto transition-all duration-300 ${isCollapsed ? 'px-4' : ''}`}>
        <div className={`bg-[#1A2C38]/40 rounded-[24px] border border-white/5 relative overflow-hidden group transition-all duration-300 ${isCollapsed ? 'p-3' : 'p-6'}`}>
          <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#00FF87] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>

          {!isCollapsed ? (
            <div className="text-center">
              <p className="text-[9px] text-gray-600 font-extrabold uppercase tracking-[0.4em] mb-2 relative z-10">VIP Support</p>
              <button className="text-white text-xs font-black hover:text-[#00FF87] transition-colors relative z-10 w-full uppercase tracking-tighter">Live Assistance</button>
            </div>
          ) : (
            <div className="flex justify-center" title="Support">
              <span className="text-[#00FF87] text-[10px] font-black tracking-widest">VIP</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
