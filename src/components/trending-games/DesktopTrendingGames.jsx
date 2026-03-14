import React from 'react';
import sweetBonanza from '../../assets/images/sweet-bonanza.png';
import horseRacing from '../../assets/images/horse-racing.png';
import gatesOfOlympus from '../../assets/images/gates-of-olympus.png';
import sugarRush from '../../assets/images/sugar-rush.png';

const games = [
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', image: sweetBonanza },
  { name: 'Horse Racing', provider: 'Gaming Pro', image: horseRacing },
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', image: gatesOfOlympus },
  { name: 'Sugar Rush', provider: 'Pragmatic Play', image: sugarRush },
  { name: 'Wolf Gold', provider: 'Pragmatic Play', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop' },
];

export default function DesktopTrendingGames({ items }) {
  const displayGames = items || games;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#00FF87]/10 flex items-center justify-center text-2xl border border-[#00FF87]/20">🔥</div>
          <h3 className="text-white font-black text-3xl italic tracking-tighter uppercase">Trending Games</h3>
        </div>
        <button className="text-[#00FF87] text-sm font-black uppercase tracking-widest hover:underline flex items-center gap-2 group">
          View All
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {displayGames.map((game, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-video rounded-[32px] overflow-hidden mb-5 transition-all duration-500 hover:scale-[1.05] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 bg-[#1A2C38]">
              <img src={game.image} alt={game.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-transparent to-transparent opacity-80 group-hover:opacity-100 flex flex-col justify-end p-6">
                <button className="bg-[#00FF87] text-[#0F1E2E] font-black py-4 rounded-2xl w-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500 uppercase text-sm tracking-wider">Join</button>
              </div>
            </div>
            <h4 className="text-white text-lg font-black uppercase tracking-tight truncate group-hover:text-[#00FF87] transition-colors">{game.name}</h4>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">{game.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
