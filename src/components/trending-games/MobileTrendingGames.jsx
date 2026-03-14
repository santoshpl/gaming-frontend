import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

export default function MobileTrendingGames({ items }) {
  const displayGames = items || games;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00FF87]/10 flex items-center justify-center text-lg border border-[#00FF87]/20">🔥</div>
          <h3 className="text-white font-black text-lg italic tracking-tighter uppercase">Trending</h3>
        </div>
        <button className="text-[#00FF87] text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group">
          View All
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="-mx-4 relative">
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0F1E2E] to-transparent z-10 pointer-events-none"></div>
        <Swiper spaceBetween={12} slidesPerView={2.2} slidesOffsetBefore={16} slidesOffsetAfter={16} className="pb-4">
          {displayGames.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="group active:scale-95 transition-transform">
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden mb-2 border border-white/5 bg-[#1A2C38]">
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
                </div>
                <div className="px-1">
                  <h4 className="text-white text-[10px] font-black uppercase tracking-tight truncate mb-0.5">{game.name}</h4>
                  <p className="text-gray-500 text-[8px] font-bold uppercase tracking-[0.1em]">{game.provider}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
