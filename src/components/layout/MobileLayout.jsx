import React from 'react';
import MobileHeader from '../header/MobileHeader';
import BottomNav from '../BottomNav';

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white selection:bg-[#00FF87] selection:text-[#0F1E2E] flex flex-col">
      <MobileHeader />

      <main className="flex-1 flex flex-col min-w-0">
        <div className="h-16" aria-hidden="true"></div>
        <div className="flex-1 w-full px-6 py-10">
          {children}
        </div>
        {/* Bottom spacer for floating mobile nav */}
        <div className="h-32" aria-hidden="true"></div>
      </main>

      <BottomNav />
    </div>
  );
}
