// src/App.jsx
import React from "react";  // 👈 This line is missing now — add it!
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/Login/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<AdminLogin />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// }

// export default App;

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7e6ea",
    },
    primary: {
      main: "#6c4bd0",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}


