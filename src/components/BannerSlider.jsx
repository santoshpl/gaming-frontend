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

export default function BannerSlider({ items, buttonText }) {
  const displayBanners = items || banners;

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        className="rounded-[24px] sm:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] shadow-2xl group border border-white/5"
      >
        {displayBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay with better contrast for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r flex flex-col justify-end sm:justify-center px-6 sm:px-16 pb-12 sm:pb-0">
                <div className="max-w-xl">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-4 uppercase tracking-tighter italic leading-none drop-shadow-2xl">
                    {banner.title}
                  </h2>
                  <p className="text-[#00FF87] font-black text-lg sm:text-2xl lg:text-3xl mb-6 sm:mb-8 drop-shadow-lg uppercase tracking-tight">
                    {banner.subtitle}
                  </p>
                  <button className="bg-[#00FF87] text-[#0F1E2E] font-black px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl w-fit hover:bg-[#00e67a] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,135,0.5)] active:scale-95 text-xs sm:text-lg uppercase tracking-wider">
                    {buttonText || banner.buttonText || 'JOIN'}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #00FF87 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
