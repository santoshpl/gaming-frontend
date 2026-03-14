import { useState } from "react";

const MATCH_TYPES = [
  { id: "t20", label: "T20", active: true },
  { id: "odi", label: "ODI" },
  { id: "test", label: "TEST" },
];

const TOURNAMENTS = [
  { id: "ipl", name: "Indian Premier League", flag: "🇮🇳", count: 4 },
  { id: "bbl", name: "Big Bash League", flag: "🇦🇺", count: 2 },
  { id: "psl", name: "Pakistan Super League", flag: "🇵🇰", count: 1 },
  { id: "cpl", name: "Caribbean Premier League", flag: "🇯🇲", count: 0 },
  { id: "sa20", name: "SA20", flag: "🇿🇦", count: 0 },
];

const COUNTRIES = [
  { id: "india", name: "India", flag: "🇮🇳" },
  { id: "australia", name: "Australia", flag: "🇦🇺" },
  { id: "england", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: "pakistan", name: "Pakistan", flag: "🇵🇰" },
  { id: "south_africa", name: "South Africa", flag: "🇿🇦" },
];

export default function Sidebar({ matchCounts }) {
  const [selectedTournament, setSelectedTournament] = useState("ipl");

  const liveCt = matchCounts?.live ?? 3;
  const todayCt = matchCounts?.today ?? 5;
  const upcomingCt = matchCounts?.upcoming ?? 2;

  return (
    <aside className="hidden xl:flex flex-col w-[280px] bg-[#0F1E2E] border-r border-white/5 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto shrink-0 z-10 scrollbar-hide py-6">

      {/* ── Section 1: Match Type ── */}
      <div className="px-6 pb-8 border-b border-white/5">
        <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Match Type</h4>
        <div className="flex gap-2">
          {MATCH_TYPES.map((t) => (
            <button
              key={t.id}
              className={`flex-1 py-3 rounded-xl text-xs font-black tracking-widest transition-all uppercase ${
                t.active
                  ? "bg-[#00FF87] text-[#0F1E2E] shadow-lg shadow-[#00FF87]/20"
                  : "bg-white/5 text-gray-500 border border-white/5 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Section 2: Tournaments ── */}
      <div className="px-2 pt-8 pb-8 border-b border-white/5">
        <h4 className="px-4 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Tournaments</h4>
        <div className="space-y-1">
          {TOURNAMENTS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTournament(t.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${
                selectedTournament === t.id 
                  ? "bg-[#00FF87]/10 text-[#00FF87]" 
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-lg group-hover:scale-110 transition-transform">{t.flag}</span>
                <span className="truncate text-xs font-black uppercase tracking-tight">{t.name}</span>
              </div>
              {t.count > 0 && (
                <span className={`min-w-[20px] h-[20px] rounded-lg flex items-center justify-center text-[10px] font-black ${
                  selectedTournament === t.id
                    ? "bg-[#00FF87] text-[#0F1E2E]"
                    : "bg-white/5 text-gray-600"
                }`}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Section 3: Countries ── */}
      <div className="px-2 pt-8 pb-8 border-b border-white/5">
        <h4 className="px-4 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Countries</h4>
        <div className="space-y-1">
          {COUNTRIES.map((c) => (
            <button 
              key={c.id} 
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{c.flag}</span>
              <span className="text-xs font-black uppercase tracking-tight">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Section 4: Live Stats ── */}
      <div className="p-6 mt-auto">
        <div className="bg-[#1A2C38]/40 border border-white/5 rounded-[24px] p-6 shadow-xl">
          <h4 className="text-[9px] font-black text-[#00FF87] uppercase tracking-[0.4em] mb-5">System Stats</h4>
          <div className="space-y-4">
            <StatRow label="Live" value={liveCt} color="text-[#ef4444]" dotColor="bg-[#ef4444]" pulse />
            <StatRow label="Today" value={todayCt} color="text-white" />
            <StatRow label="Upcoming" value={upcomingCt} color="text-[#f59e0b]" />
          </div>
        </div>
      </div>
    </aside>
  );
}

function StatRow({ label, value, color, dotColor, pulse }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-xs text-[#94a3b8]">
        {dotColor && (
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor} ${pulse ? "animate-pulse-live" : ""}`} />
        )}
        {label}
      </span>
      <span className={`text-sm font-bold tabular-nums ${color}`}>{value}</span>
    </div>
  );
}
