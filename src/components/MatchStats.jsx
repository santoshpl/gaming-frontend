import { memo } from "react";

const MatchStats = memo(function MatchStats({ match }) {
  if (!match?.score || match.score.length === 0) return null;

  const lastInning = match.score[match.score.length - 1];
  const currentRR = lastInning.o > 0 ? (lastInning.r / lastInning.o).toFixed(2) : "0.00";

  let requiredRR = null;
  let runsNeeded = null;
  let ballsLeft = null;
  if (match.score.length >= 2) {
    const target = match.score[0].r + 1;
    runsNeeded = target - lastInning.r;
    ballsLeft = Math.round((20 - lastInning.o) * 6);
    const oversLeft = 20 - lastInning.o;
    if (oversLeft > 0 && runsNeeded > 0) {
      requiredRR = (runsNeeded / oversLeft).toFixed(2);
    }
  }

  const lastOverBalls = generateLastOver();
  const lastOverRuns = lastOverBalls.reduce((sum, b) => {
    if (b === "W") return sum;
    if (b === "WD" || b === "NB") return sum + 1;
    const n = parseInt(b);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  const winProb = calculateWinProb(match);

  return (
    <div className="space-y-4 mt-4">
      {/* Stat pills row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <StatPill label="Current RR" value={currentRR} indicator={parseFloat(currentRR) > 8 ? "↑" : parseFloat(currentRR) < 6 ? "↓" : null} indicatorColor={parseFloat(currentRR) > 8 ? "text-[#22c55e]" : "text-[#ef4444]"} valueColor="text-[#22c55e]" />
        {requiredRR && (
          <StatPill label="Required RR" value={requiredRR} indicator={parseFloat(requiredRR) > parseFloat(currentRR) ? "↑" : "↓"} indicatorColor={parseFloat(requiredRR) > parseFloat(currentRR) ? "text-[#ef4444]" : "text-[#22c55e]"} valueColor={parseFloat(requiredRR) > parseFloat(currentRR) ? "text-[#ef4444]" : "text-[#22c55e]"} />
        )}
        <StatPill label="Overs" value={`${lastInning.o}/20`} valueColor="text-[#f1f5f9]" />
        <StatPill label="Wickets" value={`${lastInning.w}/10`} valueColor="text-[#f87171]" indicator={lastInning.w >= 5 ? "⚡" : null} indicatorColor="text-[#f87171]" />
      </div>

      {/* Runs needed banner */}
      {runsNeeded > 0 && ballsLeft > 0 && (
        <div className="bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.15)] rounded-lg px-4 py-2.5 text-center">
          <span className="text-sm font-semibold text-[#22c55e]">
            Need <span className="text-base font-bold">{runsNeeded}</span> runs from <span className="text-base font-bold">{ballsLeft}</span> balls
          </span>
        </div>
      )}

      {/* Last Over */}
      <div>
        <div className="section-heading px-0 pt-0">Last Over</div>
        <div className="flex items-center gap-2 flex-wrap mt-1">
          {lastOverBalls.map((ball, idx) => (
            <span
              key={idx}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border transition-transform hover:scale-110 ${getBallStyle(ball)}`}
            >
              {ball}
            </span>
          ))}
          <div className="ml-2 bg-[#111827] border border-[#263143] rounded-lg px-3 py-1.5">
            <span className="text-[10px] text-[#5a6a80] block leading-none">Total</span>
            <span className="text-sm font-bold text-[#f1f5f9] tabular-nums">{lastOverRuns}</span>
          </div>
        </div>
      </div>

      {/* Win Probability */}
      {winProb && (
        <div>
          <div className="section-heading px-0 pt-0">Win Probability</div>
          <div className="bg-[#111827] border border-[#263143] rounded-lg p-3 mt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#f1f5f9]">{match.teams?.[0]?.split(" ").pop() || "Team A"}</span>
              <span className="text-xs font-bold text-[#f1f5f9]">{match.teams?.[1]?.split(" ").pop() || "Team B"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#22c55e] tabular-nums w-10">{winProb.team1}%</span>
              <div className="flex-1 h-2.5 bg-[#0B1220] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#22c55e] to-[#06b6d4] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${winProb.team1}%` }}
                />
              </div>
              <span className="text-sm font-bold text-[#f59e0b] tabular-nums w-10 text-right">{winProb.team2}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

function StatPill({ label, value, valueColor, indicator, indicatorColor }) {
  return (
    <div className="bg-[#111827] border border-[#263143] rounded-lg px-3 py-2.5 text-center">
      <span className="text-[9px] font-bold text-[#5a6a80] uppercase tracking-wider block mb-0.5">{label}</span>
      <span className={`text-base font-bold tabular-nums ${valueColor}`}>
        {value}
        {indicator && <span className={`ml-1 ${indicatorColor}`}>{indicator}</span>}
      </span>
    </div>
  );
}

function getBallStyle(ball) {
  if (ball === "W") return "bg-[rgba(239,68,68,0.15)] border-[rgba(239,68,68,0.3)] text-[#f87171]";
  if (ball === "4") return "bg-[rgba(52,211,153,0.15)] border-[rgba(52,211,153,0.3)] text-[#34d399]";
  if (ball === "6") return "bg-[rgba(167,139,250,0.15)] border-[rgba(167,139,250,0.3)] text-[#a78bfa]";
  if (ball === "0") return "bg-[#111827] border-[#263143] text-[#5a6a80]";
  if (ball === "WD" || ball === "NB") return "bg-[rgba(245,158,11,0.15)] border-[rgba(245,158,11,0.3)] text-[#f59e0b]";
  return "bg-[#1A2332] border-[#263143] text-[#f1f5f9]";
}

function generateLastOver() {
  const possibleBalls = ["0", "1", "1", "2", "1", "4", "0", "1", "6", "W", "2", "1", "0", "WD", "3"];
  const over = [];
  for (let i = 0; i < 6; i++) {
    over.push(possibleBalls[Math.floor(Math.random() * possibleBalls.length)]);
  }
  return over;
}

function calculateWinProb(match) {
  if (!match.score || match.score.length < 2) return null;
  const target = match.score[0].r;
  const current = match.score[1].r;
  const overs = match.score[1].o;
  const wickets = match.score[1].w;
  const progressFactor = current / Math.max(target, 1);
  const oversFactor = overs / 20;
  const wicketPenalty = wickets * 5;
  let chaseProb = Math.floor(progressFactor * 50 + oversFactor * 20 - wicketPenalty + Math.random() * 10);
  chaseProb = Math.max(5, Math.min(95, chaseProb));
  return { team1: 100 - chaseProb, team2: chaseProb };
}

export default MatchStats;
