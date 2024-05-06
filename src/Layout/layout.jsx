import { Route, Routes } from "react-router-dom";
import Login from "../pages/login.jsx";
import MentionLegales from "../pages/mention-legales.jsx";
import Signup from "../pages/signup.jsx";
import Dashboard from "../pages/dashboard.jsx";
import Admin from "../pages/admin.jsx";
import Profile from "../pages/profile.jsx";
import Event from "../pages/event.jsx";

function Layout() {
  return (
    <div>
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

export default Layout;
