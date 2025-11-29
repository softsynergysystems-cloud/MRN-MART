// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";  // 👈 IMPORT ROUTER

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👈 WRAP APP HERE */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
