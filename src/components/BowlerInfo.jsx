import { memo } from "react";

const BowlerInfo = memo(function BowlerInfo({ match }) {
  const bowlerData = generateBowlerData(match);
  if (!bowlerData) return null;

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <svg className="w-3.5 h-3.5 text-[#5a6a80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="section-heading px-0 pt-0 pb-0 mb-0">Bowler</span>
      </div>
      <div className="bg-[#111827] rounded-lg border border-[#263143] overflow-hidden">
        <div className="grid grid-cols-[1fr_40px_48px_40px_52px] gap-1 px-3 py-2 text-[9px] font-bold text-[#5a6a80] uppercase tracking-wider bg-[#0B1220]/50">
          <span>Bowler</span>
          <span className="text-center">O</span>
          <span className="text-center">R</span>
          <span className="text-center">W</span>
          <span className="text-center">Econ</span>
        </div>
        <div className="grid grid-cols-[1fr_40px_48px_40px_52px] gap-1 px-3 py-2.5 text-[13px]">
          <span className="font-medium text-[#f1f5f9]">{bowlerData.name}</span>
          <span className="text-center text-[#94a3b8]">{bowlerData.overs}</span>
          <span className="text-center text-[#94a3b8]">{bowlerData.runs}</span>
          <span className="text-center font-bold text-[#f87171]">{bowlerData.wickets}</span>
          <span className={`text-center font-semibold ${
            bowlerData.economy < 7 ? "text-[#34d399]" : bowlerData.economy > 10 ? "text-[#ef4444]" : "text-[#f1f5f9]"
          }`}>
            {bowlerData.economy}
          </span>
        </div>
      </div>
    </div>
  );
});

function generateBowlerData(match) {
  if (!match?.score || match.score.length === 0) return null;
  const lastInning = match.score[match.score.length - 1];
  const overs = lastInning.o || 0;
  const bowlerOvers = Math.min(Math.floor(overs / 3) + 1, 4);
  const bowlerRuns = Math.floor(bowlerOvers * (6 + Math.random() * 4));
  const bowlerWickets = Math.floor(Math.random() * 3);
  return {
    name: "J Bumrah",
    overs: bowlerOvers,
    runs: bowlerRuns,
    wickets: bowlerWickets,
    economy: (bowlerRuns / Math.max(bowlerOvers, 1)).toFixed(1),
  };
}

export default BowlerInfo;
