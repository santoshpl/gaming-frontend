import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

export default function MobileSportsCategories({ items }) {
  const navigate = useNavigate();
  const displaySports = items || sports;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00FF87]/10 flex items-center justify-center text-lg border border-[#00FF87]/20">🏆</div>
          <h3 className="text-white font-black text-lg italic tracking-tighter uppercase">Sports</h3>
        </div>
        <button className="text-[#00FF87] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          View All
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="-mx-4 relative">
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0F1E2E] to-transparent z-10 pointer-events-none"></div>
        <Swiper spaceBetween={12} slidesPerView={2.2} slidesOffsetBefore={16} slidesOffsetAfter={16} className="pb-4">
          {displaySports.map((sport, index) => (
            <SwiperSlide key={index}>
              <div onClick={() => navigate(sport.path)} className="group active:scale-95 transition-transform">
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/5 bg-[#1A2C38]">
                  <img src={sport.image} alt={sport.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/20 to-transparent flex flex-col justify-end p-3">
                    <span className="text-white font-black text-[10px] italic uppercase tracking-tighter leading-none drop-shadow-md group-hover:text-[#00FF87] transition-colors">{sport.name}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
