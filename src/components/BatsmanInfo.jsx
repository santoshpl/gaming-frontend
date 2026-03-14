import { memo } from "react";

const BatsmanInfo = memo(function BatsmanInfo({ match }) {
  const batsmanData = generateBatsmanData(match);
  if (!batsmanData || batsmanData.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <svg className="w-3.5 h-3.5 text-[#5a6a80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="section-heading px-0 pt-0 pb-0 mb-0">Batsmen</span>
      </div>
      <div className="bg-[#111827] rounded-lg border border-[#263143] overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_44px_44px_36px_52px] gap-1 px-3 py-2 text-[9px] font-bold text-[#5a6a80] uppercase tracking-wider bg-[#0B1220]/50">
          <span>Batter</span>
          <span className="text-center">R</span>
          <span className="text-center">B</span>
          <span className="text-center">4s</span>
          <span className="text-center">SR</span>
        </div>
        {batsmanData.map((bat, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[1fr_44px_44px_36px_52px] gap-1 px-3 py-2.5 text-[13px] transition-colors ${
              bat.onStrike ? "bg-[rgba(34,197,94,0.04)]" : ""
            } ${idx < batsmanData.length - 1 ? "border-b border-[#263143]/60" : ""}`}
          >
            <span className="font-medium text-[#f1f5f9] flex items-center gap-1.5">
              {bat.name}
              {bat.onStrike && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
              )}
            </span>
            <span className="text-center font-bold text-[#fbbf24]">{bat.runs}</span>
            <span className="text-center text-[#94a3b8]">{bat.balls}</span>
            <span className="text-center text-[#34d399]">{bat.fours}</span>
            <span className={`text-center font-semibold ${
              bat.sr > 150 ? "text-[#34d399]" : bat.sr > 100 ? "text-[#f1f5f9]" : "text-[#ef4444]"
            }`}>
              {bat.sr}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

function generateBatsmanData(match) {
  if (!match?.score || match.score.length === 0) return [];
  const lastInning = match.score[match.score.length - 1];
  const totalRuns = lastInning.r || 0;
  const bat1Runs = Math.floor(totalRuns * 0.4 + Math.random() * 20);
  const bat2Runs = Math.floor(totalRuns * 0.15 + Math.random() * 15);
  const bat1Balls = Math.max(Math.floor(bat1Runs * (0.6 + Math.random() * 0.4)), 1);
  const bat2Balls = Math.max(Math.floor(bat2Runs * (0.7 + Math.random() * 0.5)), 1);

  return [
    {
      name: "V Kohli",
      runs: Math.min(bat1Runs, 120),
      balls: bat1Balls,
      fours: Math.floor(bat1Runs / 12),
      sr: Math.floor((Math.min(bat1Runs, 120) / bat1Balls) * 100),
      onStrike: true,
    },
    {
      name: "S Gill",
      runs: Math.min(bat2Runs, 80),
      balls: bat2Balls,
      fours: Math.floor(bat2Runs / 14),
      sr: Math.floor((Math.min(bat2Runs, 80) / bat2Balls) * 100),
      onStrike: false,
    },
  ];
}

export default BatsmanInfo;
