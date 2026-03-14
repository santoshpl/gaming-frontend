import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop',
    title: 'IPL Welcome Bonus',
    subtitle: '200% up to $1000',
    buttonText: 'Join Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop',
    title: 'Cricket Live Odds',
    subtitle: 'Best rates in the market',
    buttonText: 'Bet Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1540747913346-19e3adca174f?q=80&w=2008&auto=format&fit=crop',
    title: 'Weekly Cashback',
    subtitle: 'Get 10% back on all losses',
    buttonText: 'Learn More',
  }
];

export default function DesktopBannerSlider({ items, buttonText }) {
  const displayBanners = items || banners;

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-[40px] overflow-hidden h-[480px] shadow-2xl group border border-white/5"
      >
        {displayBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-24">
                <div className="max-w-2xl">
                  <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none drop-shadow-2xl">
                    {banner.title}
                  </h2>
                  <p className="text-[#00FF87] font-black text-3xl mb-12 drop-shadow-lg uppercase tracking-tight">
                    {banner.subtitle}
                  </p>
                  <button className="bg-[#00FF87] text-[#0F1E2E] font-black px-12 py-5 rounded-2xl w-fit hover:bg-[#00e67a] transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,135,0.6)] active:scale-95 text-xl uppercase tracking-wider">
                    {buttonText || banner.buttonText || 'JOIN'}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00FF87 !important;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
