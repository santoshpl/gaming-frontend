import { useState, useEffect, useCallback, useRef } from "react";
import { fetchLiveMatches, fetchUpcomingMatches, fetchCompletedMatches, fetchScoresOnly } from "../services/api";
import { io } from "socket.io-client";

const POLL_INTERVAL = 30000;

export function useLiveScores() {
  const [matches, setMatches] = useState({
    live: [],
    upcoming: [],
    completed: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const socketRef = useRef(null);
  const pollRef = useRef(null);

  // Initial full fetch
  const fetchAllData = useCallback(async () => {
    try {
      setError(null);
      const [liveRes, upcomingRes, completedRes] = await Promise.all([
        fetchLiveMatches(),
        fetchUpcomingMatches(),
        fetchCompletedMatches(),
      ]);

      setMatches({
        live: liveRes.data || [],
        upcoming: upcomingRes.data || [],
        completed: completedRes.data || [],
      });
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Score-only update (efficient - only updates live scores)
  const updateScoresOnly = useCallback(async () => {
    try {
      const res = await fetchScoresOnly();
      if (res.data && res.data.length > 0) {
        setMatches((prev) => {
          const updatedLive = prev.live.map((match) => {
            const updated = res.data.find((s) => s.id === match.id);
            if (updated) {
              return { ...match, score: updated.score, status: updated.status };
            }
            return match;
          });
          return { ...prev, live: updatedLive };
        });
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error("Score update error:", err);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchAllData();

    // Set up polling for score updates
    pollRef.current = setInterval(updateScoresOnly, POLL_INTERVAL);

    // Set up WebSocket connection
    // Determine the backend URL: in dev, Vite proxies /socket.io to localhost:5000
    // but connecting to window.location.origin can cause issues with HMR reloads.
    // Use a relative path so the Vite proxy handles it correctly.
    try {
      // Clean up any existing socket before creating a new one (React StrictMode safety)
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }

      socketRef.current = io({
        transports: ["websocket", "polling"],
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 2000,
        reconnectionDelayMax: 10000,
        timeout: 10000,
      });

      socketRef.current.on("scoreUpdate", (payload) => {
        if (payload.data && payload.data.length > 0) {
          setMatches((prev) => {
            const updatedLive = prev.live.map((match) => {
              const updated = payload.data.find((s) => s.id === match.id);
              if (updated) {
                return { ...match, score: updated.score, status: updated.status };
              }
              return match;
            });
            return { ...prev, live: updatedLive };
          });
          setLastUpdated(new Date());
        }
      });

      socketRef.current.on("connect", () => {
        console.log("🔌 WebSocket connected:", socketRef.current.id);
      });

      socketRef.current.on("disconnect", (reason) => {
        console.log("❌ WebSocket disconnected:", reason);
      });

      socketRef.current.on("connect_error", () => {
        console.warn("⚠️ WebSocket connection error");
      });
    } catch (_err) {
      console.warn("WebSocket not available, using polling only");
    }

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [fetchAllData, updateScoresOnly]);

  const refresh = useCallback(() => {
    setLoading(true);
    fetchAllData();
  }, [fetchAllData]);

  return { matches, loading, error, lastUpdated, refresh };
}
