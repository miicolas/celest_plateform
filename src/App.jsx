import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import MentionLegales from "./pages/mention-legales.jsx";
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Admin from "./pages/admin.jsx";
import Profile from "./pages/profile.jsx";
import Event from "./pages/event.jsx";

function App() {
  useEffect(() => {
    const oneHourInMs = 60 * 60 * 1000;

    // Define a function to remove data after one hour
    const removeLocalStorageAfterOneHour = () => {
      localStorage.removeItem("token");
    };

    // Set a timer to call the removal function after one hour
    const timer = setTimeout(removeLocalStorageAfterOneHour, oneHourInMs);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Layout">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentions-legales" element={<MentionLegales />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event/:id_name" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
