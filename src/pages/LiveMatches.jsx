import SportsSidebar from "../components/SportsSidebar";
import MatchList from "../components/MatchList";
import BetSlip from "../components/BetSlip";
import { useLiveScores } from "../hooks/useLiveScores";

export default function LiveMatches() {
  const { matches, loading, error, lastUpdated, refresh } = useLiveScores();

  const matchCounts = {
    live: matches.live?.length || 0,
    today: (matches.live?.length || 0) + (matches.upcoming?.length || 0),
    upcoming: matches.upcoming?.length || 0,
  };

  return (
    <div className="w-full">
      {/* Error Banner */}
      {error && (
        <div className="mb-6">
          <div className="bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#ef4444] rounded-lg px-4 py-3 text-sm flex items-center gap-2 animate-slide-up">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div className="flex-1">
              <span className="font-bold uppercase tracking-tight">System Status:</span>
              <span className="ml-2 opacity-80">{error}</span>
            </div>
            <button onClick={refresh} className="bg-[#ef4444] text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-tight hover:bg-black transition-colors">Retry Connection</button>
          </div>
        </div>
      )}

      {/* 3-Column Layout */}
      <div className="flex gap-6 w-full items-start">
        {/* Left column: Tournaments / Filters */}
        <div className="w-[260px] shrink-0 hidden xl:block">
          <SportsSidebar matchCounts={matchCounts} />
        </div>

        {/* Middle column: Match list */}
        <div className="flex-1 min-w-0">
          <MatchList matches={matches} loading={loading} />
        </div>

        {/* Right column: Bet slip */}
        <div className="w-[320px] shrink-0 hidden lg:block">
          <BetSlip />
        </div>
      </div>

      <footer className="hidden lg:block bg-[#0B1220] border-t border-[#263143] mt-24">
        <div className="w-full py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <FooterColumn title="Sports" items={["Cricket", "Football", "Tennis", "Basketball", "Kabaddi"]} />
            <FooterColumn title="Tournaments" items={["IPL 2026", "PSL", "BBL", "T20 World Cup", "The Ashes"]} />
            <FooterColumn title="Resources" items={["Live Scores", "Statistics", "Predictions", "News", "Fantasy"]} />
            <FooterColumn title="About" items={["About Us", "Contact", "Terms of Service", "Privacy Policy", "Responsible Gaming"]} />
          </div>

          <div className="border-t border-[#263143] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#06b6d4] flex items-center justify-center text-sm">
                🏏
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-[#22c55e] to-[#06b6d4] bg-clip-text text-transparent">
                CricLive
              </span>
            </div>
            <p className="text-xs text-[#5a6a80]">
              © 2026 CricLive. Real-time cricket scores & analytics. Built with MERN Stack.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse-live" />
              <span className="text-xs text-[#5a6a80]">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-[10px] font-bold text-[#5a6a80] uppercase tracking-widest mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-[#94a3b8] hover:text-[#22c55e] transition-colors">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
