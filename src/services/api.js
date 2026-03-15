const API_BASE = "https://gaming-backend-h0fo.onrender.com/api";

export const fetchLiveMatches = async () => {
  const res = await fetch(`${API_BASE}/matches/live`);
  if (!res.ok) throw new Error("Failed to fetch live matches");
  return res.json();
};

export const fetchUpcomingMatches = async () => {
  const res = await fetch(`${API_BASE}/matches/upcoming`);
  if (!res.ok) throw new Error("Failed to fetch upcoming matches");
  return res.json();
};

export const fetchCompletedMatches = async () => {
  const res = await fetch(`${API_BASE}/matches/completed`);
  if (!res.ok) throw new Error("Failed to fetch completed matches");
  return res.json();
};

export const fetchAllMatches = async () => {
  const res = await fetch(`${API_BASE}/matches/all`);
  if (!res.ok) throw new Error("Failed to fetch matches");
  return res.json();
};

export const fetchScoresOnly = async () => {
  const res = await fetch(`${API_BASE}/matches/scores`);
  if (!res.ok) throw new Error("Failed to fetch scores");
  return res.json();
};

export const fetchMatchById = async (id) => {
  const res = await fetch(`${API_BASE}/matches/${id}`);
  if (!res.ok) throw new Error("Failed to fetch match");
  return res.json();
};
 
