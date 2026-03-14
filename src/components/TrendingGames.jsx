import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sweetBonanza from '../assets/images/sweet-bonanza.png';
import horseRacing from '../assets/images/horse-racing.png';
import gatesOfOlympus from '../assets/images/gates-of-olympus.png';
import sugarRush from '../assets/images/sugar-rush.png';

const games = [
  // ... existing games
  {
    name: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    image: sweetBonanza,
  },
  {
    name: 'Horse Racing',
    provider: 'Gaming Pro',
    image: horseRacing,
  },
  {
    name: 'Gates of Olympus',
    provider: 'Pragmatic Play',
    image: gatesOfOlympus,
  },
  {
    name: 'Sugar Rush',
    provider: 'Pragmatic Play',
    image: sugarRush,
  },
  {
    name: 'Wolf Gold',
    provider: 'Pragmatic Play',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function TrendingGames({ items }) {
  const displayGames = items || games;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-1 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00FF87]/10 flex items-center justify-center text-lg sm:text-xl border border-[#00FF87]/20">
             🔥
          </div>
          <h3 className="text-white font-black text-lg sm:text-2xl italic tracking-tighter uppercase whitespace-nowrap">
            Trending Games
          </h3>
        </div>
        <button className="text-[#00FF87] text-[10px] sm:text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-1 group whitespace-nowrap">
          View All
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="block sm:hidden -mx-4">
        <Swiper
          spaceBetween={12}
          slidesPerView={2.3}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          className="pb-4"
        >
          {displayGames.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}

function GameCard({ game }) {
  return (
    <div className="group cursor-pointer w-full">
      <div className="relative aspect-[4/5] sm:aspect-video rounded-[24px] sm:rounded-[32px] overflow-hidden mb-3 sm:mb-4 transition-all duration-500 hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 group-hover:border-[#00FF87]/30 bg-[#1A2C38]">
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-5">
          <button className="bg-[#00FF87] text-[#0F1E2E] text-[10px] sm:text-xs font-black py-2.5 sm:py-3 rounded-lg sm:rounded-xl w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-lg uppercase">
             Join
          </button>
        </div>
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,255,135,0)] group-hover:shadow-[inset_0_0_60px_rgba(0,255,135,0.1)] transition-all duration-500"></div>
      </div>
      <div className="px-1 sm:px-2">
        <h4 className="text-white text-xs sm:text-base font-black uppercase tracking-tight truncate mb-0.5 sm:mb-1 group-hover:text-[#00FF87] transition-colors">
          {game.name}
        </h4>
        <p className="text-gray-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] leading-none">
          {game.provider}
        </p>
      </div>
    </div>
  );
}
