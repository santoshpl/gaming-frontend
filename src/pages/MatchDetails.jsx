import React from 'react';
import { useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function MatchDetails() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-[#0F1E2E] pb-24 text-white">
      <div className="h-16 flex items-center px-4 border-b border-gray-800 bg-[#0F1E2E]/80 backdrop-blur-md sticky top-0 z-10">
        <button onClick={() => window.history.back()} className="mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-bold text-lg">Match Details</h1>
      </div>
      
      <div className="p-4">
        <div className="bg-[#1A2C38] rounded-2xl p-6 border border-gray-800 mb-4">
          <div className="text-center text-[#00FF87] font-bold text-xs uppercase tracking-widest mb-4">Live Match ID: {id}</div>
          <div className="flex justify-between items-center px-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F1E2E] rounded-full flex items-center justify-center text-3xl mb-2">🏏</div>
              <div className="font-bold">IND</div>
            </div>
            <div className="text-2xl font-black italic">VS</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F1E2E] rounded-full flex items-center justify-center text-3xl mb-2">🏏</div>
              <div className="font-bold">AUS</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="h-24 bg-[#1A2C38] rounded-2xl border border-gray-800 animate-pulse"></div>
          <div className="h-48 bg-[#1A2C38] rounded-2xl border border-gray-800 animate-pulse"></div>
          <div className="h-32 bg-[#1A2C38] rounded-2xl border border-gray-800 animate-pulse"></div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
