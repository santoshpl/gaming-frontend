export default function Header({ lastUpdated, onRefresh }) {
  return (
    <header className="sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-[#0B1220] border-b border-[#263143]">
        <div className="max-w-[1600px] mx-auto px-6 h-[56px] flex items-center justify-between gap-6">
          {/* Left — Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-[rgba(34,197,94,0.2)]">
              <span className="text-lg leading-none">🏏</span>
            </div>
            <div className="leading-none">
              <h1 className="text-[17px] font-extrabold tracking-tight bg-gradient-to-r from-[#22c55e] via-[#34d399] to-[#06b6d4] bg-clip-text text-transparent">
                CricLive
              </h1>
              <span className="text-[9px] font-bold text-[#5a6a80] tracking-[2px] uppercase">
                Live Scores
              </span>
            </div>
          </div>

          {/* Center — Search */}
          <div className="flex-1 max-w-[520px] mx-auto hidden md:block">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search matches, teams, series..."
                className="w-full bg-[#1A2332] border border-[#263143] rounded-full pl-11 pr-5 py-2.5 text-sm text-[#f1f5f9] placeholder-[#5a6a80] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[rgba(34,197,94,0.3)] transition-all"
              />
            </div>
          </div>

          {/* Right — Meta */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Last updated */}
            {lastUpdated && (
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#5a6a80]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse-live shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                <span className="font-medium tabular-nums">
                  {lastUpdated.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
              </div>
            )}

            {/* Refresh */}
            <button
              onClick={onRefresh}
              className="p-2 rounded-lg text-[#5a6a80] hover:text-[#22c55e] hover:bg-[rgba(34,197,94,0.08)] transition-all active:scale-90"
              title="Refresh scores"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            {/* Profile */}
            <div className="w-8 h-8 rounded-full bg-[#1A2332] border border-[#263143] flex items-center justify-center text-[#5a6a80] hover:border-[#22c55e] hover:text-[#22c55e] transition-all cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sports Navigation Bar */}
      <nav className="bg-[#111827] border-b border-[#263143]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center gap-1 py-1 overflow-x-auto">
            {[
              { id: "cricket", label: "Cricket", icon: "🏏", active: true },
              { id: "football", label: "Football", icon: "⚽" },
              { id: "tennis", label: "Tennis", icon: "🎾" },
              { id: "basketball", label: "Basketball", icon: "🏀" },
              { id: "kabaddi", label: "Kabaddi", icon: "🤼" },
            ].map((sport) => (
              <button
                key={sport.id}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  sport.active
                    ? "text-[#22c55e] bg-[rgba(34,197,94,0.08)] border-b-2 border-[#22c55e]"
                    : "text-[#5a6a80] hover:text-[#94a3b8] hover:bg-[rgba(255,255,255,0.03)]"
                }`}
              >
                <span className="text-base">{sport.icon}</span>
                <span>{sport.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
