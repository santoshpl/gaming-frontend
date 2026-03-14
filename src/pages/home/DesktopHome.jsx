import React from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopBannerSlider from '../../components/banner-slider/DesktopBannerSlider';
import DesktopTrendingGames from '../../components/trending-games/DesktopTrendingGames';
import DesktopSportsCategories from '../../components/sports-categories/DesktopSportsCategories';

export default function DesktopHome() {
  const navigate = useNavigate();
  return (
    <div className="space-y-12">
      <DesktopBannerSlider />
      
      <DesktopTrendingGames />
      
      <DesktopSportsCategories />
      
      <section className="px-10 py-20 bg-gradient-to-br from-[#1A2C38] via-[#14232d] to-[#0F1E2E] rounded-[48px] border border-gray-800/60 text-center relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FF87] opacity-[0.05] blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-700"></div>
        
        <div className="relative z-10">
          <h4 className="text-[#00FF87] font-black text-5xl italic tracking-tighter mb-6 uppercase">
            Start Your Journey
          </h4>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Join the most secure and advanced sports gaming platform. Instant payouts, 24/7 support, and the best odds in the market.
          </p>
          
          <button 
            onClick={() => navigate('/dashboard')}
            className="group relative bg-[#00FF87] text-[#0F1E2E] font-black text-xl px-16 py-5 rounded-2xl hover:bg-[#00e67a] hover:shadow-[0_0_40px_rgba(0,255,135,0.4)] transition-all duration-300 active:scale-95 mb-16"
          >
            JOIN NOW
          </button>

          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-gray-800/80">
            <div className="space-y-2">
              <div className="text-white font-black text-4xl tabular-nums tracking-tighter">1.2M+</div>
              <div className="text-gray-500 text-xs uppercase font-bold tracking-[0.3em]">Verified Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-white font-black text-4xl tabular-nums tracking-tighter">24/7</div>
              <div className="text-gray-500 text-xs uppercase font-bold tracking-[0.3em]">Direct Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#00FF87] font-black text-4xl tracking-tighter italic">INSTANT</div>
              <div className="text-gray-500 text-xs uppercase font-bold tracking-[0.3em]">Global Payouts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
