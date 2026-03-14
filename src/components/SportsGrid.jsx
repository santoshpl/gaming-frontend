import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import footballImg from '../assets/images/american-football.png';
import basketballImg from '../assets/images/basketball.png';
import horseRacingImg from '../assets/images/horse-racing.png';
import cricketImg from '../assets/images/cricket.png';

const sports = [
  {
    name: 'Football',
    path: '/sports/football',
    image: footballImg,
  },
  {
    name: 'Basketball',
    path: '/sports/basketball',
    image: basketballImg,
  },
  {
    name: 'Horse Racing',
    path: '/sports/horse-racing',
    image: horseRacingImg,
  },
  {
    name: 'Cricket',
    path: '/sports/cricket',
    image: cricketImg,
  }
];

export default function SportsGrid({ items }) {
  const navigate = useNavigate();
  const displaySports = items || sports;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-1 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00FF87]/10 flex items-center justify-center text-lg sm:text-xl border border-[#00FF87]/20">
             🏆
          </div>
          <h3 className="text-white font-black text-lg sm:text-2xl italic tracking-tighter uppercase whitespace-nowrap">
            Sports Categories
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
          spaceBetween={10}
          slidesPerView={2.3}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          className="pb-4"
        >
          {displaySports.map((sport, index) => (
            <SwiperSlide key={index}>
              <SportCard sport={sport} onClick={() => navigate(sport.path)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displaySports.map((sport, index) => (
          <SportCard key={index} sport={sport} onClick={() => navigate(sport.path)} />
        ))}
      </div>
    </div>
  );
}

function SportCard({ sport, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative aspect-[4/3] sm:aspect-video rounded-[20px] sm:rounded-[32px] overflow-hidden cursor-pointer group border border-white/5 hover:border-[#00FF87]/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,255,135,0.15)] bg-[#1A2C38]"
    >
      <img 
        src={sport.image} 
        alt={sport.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
        <span className="text-white font-black text-sm sm:text-2xl italic uppercase tracking-tighter leading-none group-hover:text-[#00FF87] transition-colors duration-300 drop-shadow-md">
          {sport.name}
        </span>
      </div>
      
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#00FF87]/10 backdrop-blur-md border border-[#00FF87]/30 flex items-center justify-center translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,255,135,0)] group-hover:shadow-[inset_0_0_60px_rgba(0,255,135,0.05)] transition-all duration-500"></div>
    </div>
  );
}
