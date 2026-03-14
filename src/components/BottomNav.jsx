import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Dice6, Spade, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Trophy, label: 'Sports', path: '/sports' },
  { icon: Spade, label: 'Casino', path: '/casino' },
  { icon: Dice6, label: 'Poker', path: '/poker' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  return (
    <div className="lg:hidden fixed bottom-5 left-4 right-4 h-14 bg-[#1A2C38]/90 backdrop-blur-xl border border-white/10 flex items-center justify-around px-2 z-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {navItems.map((item, index) => (
        <NavLink 
          key={index}
          to={item.path}
          className={({ isActive }) => 
            `flex flex-col items-center justify-center gap-1 w-14 h-full transition-all duration-300 ${
              isActive ? 'text-[#00FF87]' : 'text-gray-500 hover:text-gray-300'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`relative flex items-center justify-center transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                <item.icon size={isActive ? 20 : 16} strokeWidth={isActive ? 3 : 2} className="transition-all" />
                {isActive && (
                  <div className="absolute inset-0 bg-[#00FF87]/20 blur-lg rounded-full -z-10 scale-150"></div>
                )}
              </div>
              <span className={`text-[8px] font-black uppercase tracking-tighter transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                {item.label}
              </span>
              <div className={`w-1 h-1 rounded-full bg-[#00FF87] transition-all duration-500 shadow-[0_0_10px_rgba(0,255,135,1)] ${isActive ? 'opacity-100 scale-100 mt-0.5' : 'opacity-0 scale-0 h-0'}`}></div>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
