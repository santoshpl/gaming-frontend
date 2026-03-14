import { useState, useMemo } from "react";
import MatchCard from "./MatchCard";

const TABS = [
  { id: "live", label: "Live", dotClass: "bg-[#ef4444] animate-pulse-live shadow-[0_0_4px_rgba(239,68,68,0.5)]" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
];

export default function MatchList({ matches, loading }) {
  const [activeTab, setActiveTab] = useState("live");
  const [filter, setFilter] = useState("");

  const currentMatches = useMemo(() => {
    let list = matches[activeTab] || [];
    if (filter.trim()) {
      const q = filter.toLowerCase();
      list = list.filter(
        (m) =>
          m.name?.toLowerCase().includes(q) ||
          m.teams?.some((t) => t.toLowerCase().includes(q)) ||
          m.venue?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, matches, filter]);

  const counts = {
    live: matches.live?.length || 0,
    upcoming: matches.upcoming?.length || 0,
    completed: matches.completed?.length || 0,
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Tab Bar */}
      <div className="sticky top-16 z-30 bg-[#0F1E2E]/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab ${
                  activeTab === tab.id
                    ? tab.id === "live"
                      ? "active-live"
                      : "active-default"
                    : "inactive"
                }`}
              >
                {tab.dotClass && (
                  <span className={`w-2 h-2 rounded-full ${tab.dotClass}`} />
                )}
                <span>{tab.label}</span>
                <span className={`min-w-[20px] h-5 rounded-full flex items-center justify-center text-[10px] font-bold px-1.5 ${
                  activeTab === tab.id
                    ? tab.id === "live"
                      ? "bg-[rgba(239,68,68,0.15)] text-[#ef4444]"
                      : "bg-[rgba(34,197,94,0.15)] text-[#22c55e]"
                    : "bg-[#1A2332] text-[#5a6a80]"
                }`}>
                  {counts[tab.id]}
                </span>
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Filter..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="hidden md:block bg-[#1A2332] border border-[#263143] rounded-lg px-3 py-1.5 text-xs text-[#f1f5f9] placeholder-[#5a6a80] focus:outline-none focus:border-[rgba(34,197,94,0.4)] w-40 transition-all"
          />
        </div>
      </div>

      {/* Match Cards */}
      <div className="p-5 flex flex-col gap-4 stagger">
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
        ) : currentMatches.length > 0 ? (
          currentMatches.map((match) => <MatchCard key={match.id} match={match} />)
        ) : (
          <EmptyState tab={activeTab} />
        )}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="match-card p-5 animate-shimmer">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-14 h-5 bg-[#1A2332] rounded-full" />
        <div className="w-28 h-3 bg-[#1A2332] rounded" />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-7 h-7 bg-[#1A2332] rounded-lg" />
        <div className="w-16 h-4 bg-[#1A2332] rounded" />
        <div className="w-6 h-3 bg-[#1A2332] rounded" />
        <div className="w-7 h-7 bg-[#1A2332] rounded-lg" />
        <div className="w-16 h-4 bg-[#1A2332] rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-14 bg-[rgba(26,35,50,0.5)] rounded-lg" />
        <div className="h-14 bg-[rgba(26,35,50,0.5)] rounded-lg" />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="h-12 bg-[#1A2332] rounded-lg" />
        <div className="h-12 bg-[#1A2332] rounded-lg" />
        <div className="h-12 bg-[#1A2332] rounded-lg" />
      </div>
    </div>
  );
}

function EmptyState({ tab }) {
  const messages = {
    live: { icon: "🏏", title: "No live matches", desc: "No matches are currently in progress" },
    upcoming: { icon: "📅", title: "No upcoming matches", desc: "No upcoming matches scheduled" },
    completed: { icon: "✓", title: "No results", desc: "No completed matches found" },
  };
  const m = messages[tab] || messages.live;

  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#1A2332] border border-[#263143] flex items-center justify-center">
        <span className="text-3xl opacity-40">{m.icon}</span>
      </div>
      <h3 className="text-base font-semibold text-[#94a3b8] mb-1">{m.title}</h3>
      <p className="text-sm text-[#5a6a80]">{m.desc}</p>
    </div>
  );
}
