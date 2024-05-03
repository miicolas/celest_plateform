import { Route, Routes } from "react-router-dom";
import Login from "../pages/login.jsx";
import MentionLegales from "../pages/mention-legales.jsx";
import Signup from "../pages/signup.jsx";
import Dashboard from "../pages/dashboard.jsx";

function Layout() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentions-legales" element={<MentionLegales />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Layout;
