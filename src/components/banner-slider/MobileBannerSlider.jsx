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

export default function MobileBannerSlider({ items, buttonText }) {
  const displayBanners = items || banners;

  return (
    <div className="w-full px-4 py-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        className="h-[280px] shadow-2xl rounded-[32px] overflow-hidden border border-white/5"
      >
        {displayBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E] via-[#0F1E2E]/40 to-transparent flex flex-col justify-end px-6 pb-10">
                <div className="space-y-3">
                  <h2 className="text-3xl font-black text-white leading-[0.9] uppercase tracking-tighter italic drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    {banner.title}
                  </h2>
                  <p className="text-[#00FF87] font-black text-lg uppercase tracking-tight drop-shadow-md">
                    {banner.subtitle}
                  </p>
                  <button className="bg-[#00FF87] text-[#0F1E2E] font-black px-8 py-3 rounded-xl w-fit active:scale-95 transition-all text-[10px] uppercase tracking-wider shadow-lg shadow-[#00FF87]/20">
                    {buttonText || banner.buttonText || 'JOIN NOW'}
                  </button>
</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-pagination {
          bottom: 24px !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
          width: 8px;
          height: 8px;
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
