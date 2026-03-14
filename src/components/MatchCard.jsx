import { useState, memo, useCallback } from "react";
import ScoreBoard from "./ScoreBoard";
import BatsmanInfo from "./BatsmanInfo";
import BowlerInfo from "./BowlerInfo";
import MatchStats from "./MatchStats";

const MatchCard = memo(function MatchCard({ match }) {
  const [expanded, setExpanded] = useState(false);

  const isLive = match.matchStarted && !match.matchEnded;
  const isUpcoming = !match.matchStarted && !match.matchEnded;
  const isCompleted = match.matchEnded;

  const toggleExpand = useCallback(() => setExpanded((p) => !p), []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`match-card ${isLive ? "is-live animate-border-glow" : ""} animate-slide-up`}>
      {/* Card Header */}
      <div className="px-6 pt-5 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isLive && (
            <span className="live-badge !px-3 !py-1 flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <span className="live-dot" />
              <span className="text-[10px] font-black tracking-widest">LIVE</span>
            </span>
          )}
          {isUpcoming && (
            <span className="micro-pill bg-[rgba(245,158,11,0.12)] text-[#f59e0b] border border-[rgba(245,158,11,0.2)] px-3 py-1 font-black text-[10px]">
              UPCOMING
            </span>
          )}
          <span className="text-[10px] text-[#5a6a80] font-black uppercase tracking-widest opacity-80">
            {match.matchType?.toUpperCase()} • IPL 2026
          </span>
        </div>
        {isUpcoming && (
          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest tabular-nums">
            {formatDate(match.dateTimeGMT)}
          </span>
        )}
      </div>

      {/* Card Body — clickable */}
      <div className="px-6 pb-6 cursor-pointer" onClick={toggleExpand}>
        {/* 1. Teams vs line */}
        <div className="flex items-center gap-4 mt-3 mb-5">
          {match.teams?.map((team, idx) => {
            const info = match.teamInfo?.find((t) => t.name === team);
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="relative">
                  {info?.img ? (
                    <img src={info.img} alt={info.shortname} className="w-10 h-10 rounded-full border border-white/10 shadow-lg" />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-[#1A2C38] border border-white/5 flex items-center justify-center text-xs font-black text-[#94a3b8]">
                      {info?.shortname?.charAt(0) || team.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-xl font-black text-white italic tracking-tight uppercase">
                  {info?.shortname || team.split(" ").pop()}
                </span>
                {idx === 0 && match.teams.length > 1 && (
                  <span className="text-[10px] text-[#5a6a80] font-black uppercase tracking-widest mx-1 opacity-50">VS</span>
                )}
              </div>
            );
          })}
        </div>

        {/* 2. Score display — Visually Dominant */}
        {(isLive || isCompleted) && (
          <div className="bg-[#1A2C38]/60 rounded-2xl p-6 mb-6 border border-white/10 shadow-inner">
            <ScoreBoard score={match.score} teamInfo={match.teamInfo} />
          </div>
        )}

        {/* 3. Betting Odds — High Priority */}
        {(isLive || isUpcoming) && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            <OddsButton label="1" value={(1 + Math.random() * 2).toFixed(2)} />
            <OddsButton label="X" value={(2 + Math.random() * 3).toFixed(2)} />
            <OddsButton label="2" value={(1.5 + Math.random() * 2.5).toFixed(2)} />
          </div>
        )}

        {/* 4. Metadata (Status & Venue) — Subtle at bottom */}
        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest mt-4 pt-4 border-t border-white/5">
          <p className={`${isLive ? "text-[#00FF87]" : isCompleted ? "text-gray-500" : "text-[#f59e0b]"}`}>
            {match.status}
          </p>
          <p className="text-[#5a6a80] flex items-center gap-1.5 opacity-60">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {match.venue || "TBA"}
          </p>
        </div>

        {/* Expand indicator */}
        {(isLive || isCompleted) && (
          <div className="flex items-center justify-center mt-3 pt-2 border-t border-[#263143]/50">
            <button className="flex items-center gap-1.5 text-[11px] text-[#5a6a80] hover:text-[#22c55e] transition-colors">
              <span>{expanded ? "Hide details" : "Match details"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Expanded Panel */}
      {expanded && isLive && (
        <div className="px-5 pb-5 border-t border-[#263143] pt-4 bg-[rgba(11,18,32,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BatsmanInfo match={match} />
            <BowlerInfo match={match} />
          </div>
          <MatchStats match={match} />
        </div>
      )}

      {expanded && isCompleted && (
        <div className="px-5 pb-5 border-t border-[#263143] pt-4 bg-[rgba(11,18,32,0.4)]">
          <MatchStats match={match} />
        </div>
      )}
    </div>
  );
});

function OddsButton({ label, value }) {
  return (
    <button
      className="odds-btn"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="odds-label">{label}</span>
      <span className="odds-value">{value}</span>
    </button>
  );
}

export default MatchCard;
