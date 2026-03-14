export default function BetSlip() {
  return (
    <aside className="hidden lg:flex flex-col gap-6 w-[320px] h-[calc(100vh-80px)] sticky top-20 overflow-y-auto shrink-0 z-10 scrollbar-hide pr-2">

      {/* ── Card 1: Bet Slip ── */}
      <div className="panel-card">
        <div className="panel-card-header">
          <svg className="w-4 h-4 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Bet Slip
        </div>
        <div className="panel-card-body text-center py-8">
          <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#111827] border border-[#263143] flex items-center justify-center">
            <svg className="w-6 h-6 text-[#3e4e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#94a3b8]">No selections</p>
          <p className="text-xs text-[#5a6a80] mt-1">Click on odds to add bets</p>
        </div>
      </div>

      {/* ── Card 2: Popular Bets ── */}
      <div className="panel-card">
        <div className="panel-card-header">
          <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Popular Bets
        </div>
        <div className="panel-card-body space-y-1">
          <PopularBetItem title="Top Batsman" match="CSK vs MI" selection="V Kohli" odds="3.50" />
          <PopularBetItem title="Match Winner" match="DC vs RR" selection="Delhi Capitals" odds="1.85" />
          <PopularBetItem title="Total Runs Over" match="RR vs CSK" selection="Over 160.5" odds="1.90" />
          <PopularBetItem title="Top Bowler" match="CSK vs MI" selection="J Bumrah" odds="4.20" />
        </div>
      </div>

      {/* ── Card 3: Promotion ── */}
      <div className="rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#3b82f6] p-[1px]">
        <div className="rounded-[11px] bg-gradient-to-br from-[rgba(124,58,237,0.3)] to-[rgba(59,130,246,0.15)] p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎁</span>
            <span className="text-[10px] font-bold text-[#c4b5fd] uppercase tracking-widest">IPL Special</span>
          </div>
          <h4 className="text-[17px] font-bold text-white mb-1.5">
            Bet ₹500, Get ₹250
          </h4>
          <p className="text-xs text-[rgba(255,255,255,0.6)] mb-4 leading-relaxed">
            Place your first IPL bet and receive a free bet bonus instantly.
          </p>
          <button className="w-full py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[rgba(124,58,237,0.25)] active:scale-[0.98]">
            Claim Offer →
          </button>
        </div>
      </div>

      {/* ── Trending ── */}
      <div className="panel-card">
        <div className="panel-card-header">
          <svg className="w-4 h-4 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
          Trending
        </div>
        <div className="panel-card-body space-y-2">
          <TrendRow label="Most Backed" value="CSK to Win" change="+12%" up />
          <TrendRow label="Biggest Odds" value="RCB 180+" change="5.20" />
          <TrendRow label="Hot Market" value="Kohli 50+" change="2.10" up />
        </div>
      </div>
    </aside>
  );
}

function PopularBetItem({ title, match, selection, odds }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#222d3d] transition-colors cursor-pointer group">
      <div className="min-w-0">
        <span className="text-[10px] text-[#5a6a80] uppercase font-bold block">{title}</span>
        <span className="text-[13px] font-medium text-[#f1f5f9] block truncate">{selection}</span>
        <span className="text-[10px] text-[#5a6a80] mt-0.5 block">{match}</span>
      </div>
      <span className="odds-btn py-1.5 px-3 ml-3 shrink-0">
        <span className="odds-value text-[13px]">{odds}</span>
      </span>
    </div>
  );
}

function TrendRow({ label, value, change, up }) {
  return (
    <div className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-[rgba(17,24,39,0.5)]">
      <div>
        <span className="text-[10px] text-[#5a6a80] block">{label}</span>
        <span className="text-xs font-semibold text-[#f1f5f9]">{value}</span>
      </div>
      <span className={`text-xs font-bold ${up ? "text-[#22c55e]" : "text-[#f59e0b]"}`}>
        {change}
      </span>
    </div>
  );
}
