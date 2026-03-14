import { memo } from "react";

// IPL team color mapping
const TEAM_COLORS = {
  CSK: { primary: "#fbbf24", badge: "bg-[#fbbf24]", text: "text-[#fbbf24]" },
  MI: { primary: "#60a5fa", badge: "bg-[#60a5fa]", text: "text-[#60a5fa]" },
  RCB: { primary: "#f87171", badge: "bg-[#f87171]", text: "text-[#f87171]" },
  KKR: { primary: "#a78bfa", badge: "bg-[#a78bfa]", text: "text-[#a78bfa]" },
  DC: { primary: "#93c5fd", badge: "bg-[#93c5fd]", text: "text-[#93c5fd]" },
  RR: { primary: "#f472b6", badge: "bg-[#f472b6]", text: "text-[#f472b6]" },
  SRH: { primary: "#fb923c", badge: "bg-[#fb923c]", text: "text-[#fb923c]" },
  PBKS: { primary: "#fca5a5", badge: "bg-[#fca5a5]", text: "text-[#fca5a5]" },
  GT: { primary: "#22d3ee", badge: "bg-[#22d3ee]", text: "text-[#22d3ee]" },
  LSG: { primary: "#38bdf8", badge: "bg-[#38bdf8]", text: "text-[#38bdf8]" },
};

const getTeam = (shortname) =>
  TEAM_COLORS[shortname] || { primary: "#94a3b8", badge: "bg-[#94a3b8]", text: "text-[#94a3b8]" };

const ScoreBoard = memo(function ScoreBoard({ score, teamInfo }) {
  if (!score || score.length === 0) {
    return (
      <div className="py-3 text-center">
        <span className="text-sm text-[#5a6a80] italic">Yet to start</span>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {score.map((inning, idx) => {
        const shortname = teamInfo?.find((t) => inning.inning?.includes(t.name))?.shortname || "—";
        const teamColor = getTeam(shortname);
        const isCurrentInning = idx === score.length - 1;
        const runRate = inning.o > 0 ? (inning.r / inning.o).toFixed(2) : "0.00";
        const isBatting = isCurrentInning;

        return (
          <div
            key={idx}
            className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all ${
              isCurrentInning
                ? "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]"
                : "opacity-60"
            }`}
          >
            {/* Team */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-[#0B1220] shrink-0 ${teamColor.badge}`}
              >
                {shortname}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-[#f1f5f9] truncate">
                    {inning.inning?.replace(" Inning 1", "").replace(" Inning 2", "")}
                  </span>
                  {isBatting && (
                    <span className="micro-pill bg-[rgba(34,197,94,0.12)] text-[#22c55e] text-[9px]">
                      BATTING
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Score — VISUAL ANCHOR (largest element) */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span
                  className="score-value text-[22px]"
                  style={{ color: teamColor.primary }}
                >
                  {inning.r}/{inning.w}
                </span>
                <span className="text-xs text-[#5a6a80] ml-2">
                  ({inning.o} ov)
                </span>
              </div>

              {/* Run rate micro-indicator */}
              <div className="hidden sm:flex flex-col items-center bg-[#111827] rounded-lg px-2.5 py-1.5 min-w-[50px] border border-[#263143]">
                <span className="text-[8px] font-bold text-[#5a6a80] uppercase tracking-wider">RR</span>
                <span className="text-[13px] font-bold text-[#f1f5f9] tabular-nums flex items-center gap-1">
                  {runRate}
                  {isCurrentInning && parseFloat(runRate) > 8 && (
                    <span className="text-[#22c55e] text-[10px]">↑</span>
                  )}
                  {isCurrentInning && parseFloat(runRate) <= 6 && (
                    <span className="text-[#ef4444] text-[10px]">↓</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default ScoreBoard;
