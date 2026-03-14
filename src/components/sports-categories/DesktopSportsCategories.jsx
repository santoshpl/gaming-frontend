import React from 'react';
import { useNavigate } from 'react-router-dom';
import footballImg from '../../assets/images/american-football.png';
import basketballImg from '../../assets/images/basketball.png';
import horseRacingImg from '../../assets/images/horse-racing.png';
import cricketImg from '../../assets/images/cricket.png';

const sports = [
  { name: 'Football', path: '/sports/football', image: footballImg },
  { name: 'Basketball', path: '/sports/basketball', image: basketballImg },
  { name: 'Horse Racing', path: '/sports/horse-racing', image: horseRacingImg },
  { name: 'Cricket', path: '/sports/cricket', image: cricketImg }
];

export default function DesktopSportsCategories({ items }) {
  const navigate = useNavigate();
  const displaySports = items || sports;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00FF87]/10 flex items-center justify-center text-2xl border border-[#00FF87]/20">🏆</div>
          <h3 className="text-white font-black text-3xl italic tracking-tighter uppercase">Sports Categories</h3>
        </div>
        <button className="text-[#00FF87] text-sm font-black uppercase tracking-widest hover:underline flex items-center gap-2 group">
          View All
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displaySports.map((sport, index) => (
          <div key={index} onClick={() => navigate(sport.path)} className="relative aspect-video rounded-[32px] overflow-hidden cursor-pointer group border border-white/5 hover:border-[#00FF87]/40 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,255,135,0.15)] bg-[#1A2C38]">
            <img src={sport.image} alt={sport.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-white font-black text-2xl italic uppercase tracking-tighter leading-none group-hover:text-[#00FF87] transition-colors duration-300 drop-shadow-md">{sport.name}</span>
            </div>
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#00FF87]/10 backdrop-blur-md border border-[#00FF87]/30 flex items-center justify-center translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
              <svg className="w-6 h-6 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
