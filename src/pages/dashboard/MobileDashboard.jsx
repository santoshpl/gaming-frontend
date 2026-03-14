import React from 'react';
import MobileBannerSlider from '../../components/banner-slider/MobileBannerSlider';
import MobileTrendingGames from '../../components/trending-games/MobileTrendingGames';
import MobileSportsCategories from '../../components/sports-categories/MobileSportsCategories';

import sweetBonanza from '../../assets/images/sweet-bonanza.png';
import gatesOfOlympus from '../../assets/images/gates-of-olympus.png';
import sugarRush from '../../assets/images/sugar-rush.png';

import footballImg from '../../assets/images/american-football.png';
import basketballImg from '../../assets/images/basketball.png';
import horseRacingImg from '../../assets/images/horse-racing.png';

export default function MobileDashboard() {
  const dashboardBanners = [
    {
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop',
      title: 'IPL Welcome Bonus',
      subtitle: '200% upto $1000',
    }
  ];

  const dashboardGames = [
    { name: 'Sweet Bonanza', provider: 'Pragmatic Play', image: sweetBonanza },
    { name: 'Gates of Olympus', provider: 'Pragmatic Play', image: gatesOfOlympus },
    { name: 'Sugar Rush', provider: 'Pragmatic Play', image: sugarRush },
  ];

  const dashboardSports = [
    { name: 'American Football', path: '/sports/football', image: footballImg },
    { name: 'Basketball', path: '/sports/basketball', image: basketballImg },
    { name: 'Horse Racing', path: '/sports/horse-racing', image: horseRacingImg },
  ];

  return (
    <div className="space-y-8">
      <section className="-mx-4">
        <MobileBannerSlider items={dashboardBanners} buttonText="Explore" />
      </section>
      
      <MobileTrendingGames items={dashboardGames} />
      
      <MobileSportsCategories items={dashboardSports} />

      <section className="px-5 py-10 bg-gradient-to-br from-[#1A2C38] to-[#0F1E2E] rounded-[32px] border border-white/5 text-center">
        <h4 className="text-[#00FF87] font-black text-2xl italic tracking-tighter mb-2 uppercase">Win Big Today</h4>
        <p className="text-gray-400 text-xs font-medium px-4">
          The arena is open. Stake your claim and rewrite the odds. Your victory starts here.
        </p>
      </section>
    </div>
  );
}
