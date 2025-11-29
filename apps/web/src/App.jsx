// src/App.jsx
import React from "react";  // 👈 This line is missing now — add it!
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/Login/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
