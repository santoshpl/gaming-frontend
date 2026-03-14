import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LiveMatches from "./pages/LiveMatches";
import MatchDetails from "./pages/MatchDetails";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/live" element={<LiveMatches />} />
          <Route path="/sports" element={<LiveMatches />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/poker" element={<Home />} />
          <Route path="/casino" element={<Home />} />
          {/* Catch-all route to prevent blank pages on typos */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
