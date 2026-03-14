import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileBannerSlider from '../../components/banner-slider/MobileBannerSlider';
import MobileTrendingGames from '../../components/trending-games/MobileTrendingGames';
import MobileSportsCategories from '../../components/sports-categories/MobileSportsCategories';

export default function MobileHome() {
  const navigate = useNavigate();
  return (
    <div className="space-y-10 pb-32">
      {/* Visual Anchor Hero Section */}
      <section>
        <MobileBannerSlider />
      </section>
      
      {/* High-Contrast Section Headers & Horizontal Carousels */}
      <section>
        <MobileTrendingGames />
      </section>
      
      <section>
        <MobileSportsCategories />
      </section>
      
      {/* Compact Informational Section */}
      <section className="px-5 py-12 bg-gradient-to-br from-[#1A2C38] via-[#14232d] to-[#0F1E2E] rounded-[32px] border border-white/5 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FF87] opacity-[0.05] blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h4 className="text-[#00FF87] font-black text-3xl italic tracking-tighter mb-4 uppercase leading-tight">
            Level Up Your Game
          </h4>
          <p className="text-gray-400 text-xs font-medium mb-8 leading-relaxed px-2">
            Experience the next generation of live sports gaming. Instant withdrawals and professional support.
          </p>
          
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#00FF87] text-[#0F1E2E] font-black text-lg py-4 rounded-xl shadow-[0_10px_30px_rgba(0,255,135,0.2)] active:scale-95 transition-all mb-10"
          >
            JOIN NOW
          </button>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div className="space-y-1">
              <div className="text-white font-black text-2xl tabular-nums tracking-tighter">1.2M+</div>
              <div className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.1em]">Users</div>
            </div>
            <div className="space-y-1">
              <div className="text-[#00FF87] font-black text-2xl tracking-tighter italic uppercase">Live</div>
              <div className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.1em]">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
