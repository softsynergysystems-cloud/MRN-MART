// src/pages/Login/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  Link,
} from "@mui/material";
import { keyframes } from "@mui/system";

// ✅ import the image from src/assets
import kaOutline from "../../assets/karnataka-outline.png";

// pulse for Bengaluru dot
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); transform: scale(1); }
  70% { box-shadow: 0 0 0 16px rgba(34,197,94,0); transform: scale(1.08); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); transform: scale(1); }
`;

// ⭐ float for MAP BLOCK (now applied to whole group)
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-22px); }
  100% { transform: translateY(0px); }
`;

// ⭐ bounce-in from right for login card
const slideBounceIn = keyframes`
  0%   { opacity: 0; transform: translateX(40px) scale(0.96); }
  60%  { opacity: 1; transform: translateX(-6px) scale(1.03); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
`;

// ⭐ travel path animation (line grows)
const travelLine = keyframes`
  0%   { width: 0; opacity: 0; }
  15%  { opacity: 1; }
  100% { width: 160px; opacity: 1; }
`;

// ⭐ dot moving along the path (ends & stays at the card)
const travelDot = keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateX(160px); opacity: 1; }
`;

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // controls when card appears
  const [showCard, setShowCard] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminId === "admin" && password === "admin123") {
      navigate("/dashboard"); // change if needed
    } else {
      setError("Invalid Admin ID or Password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",          // avoid horizontal scroll
        overflow: "hidden",     // no scrollbars
        bgcolor: "#ffffff",     // pure white background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* CENTERED WRAPPER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },  // gap unchanged
          maxWidth: 1200,
          width: "90%",
        }}
      >
        {/* MAP BLOCK (LEFT) – entire block floats */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 260, sm: 320, md: 360 },
            transition: "transform 220ms ease",
            animation: `${float} 5s ease-in-out infinite`,
            bgcolor: "#ffffff", // ensure same white as page
            "&:hover": {
              transform: "scale(1.03)", // hover zoom effect on map group
            },
          }}
        >
          {/* map image */}
          <Box
            component="img"
            src={kaOutline}
            alt="Karnataka Map"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Bengaluru marker */}
          <Box
            sx={{
              position: "absolute",
              bottom: "27%",
              left: "57%",
              width: 18,
              height: 18,
              borderRadius: "50%",
              bgcolor: "#22c55e",
              border: "3px solid white",
              animation: `${pulse} 1.8s ease-out infinite`,
            }}
          />

          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: "22%",
              left: "57%",
              transform: "translateX(-45%)",
              fontWeight: 700,
              color: "#000",
            }}
          >
            Bengaluru
          </Typography>

          {/* animated travel path to login card */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              bottom: "27%",         // aligned with green dot
              left: "63%",
              width: "160px",        // final width, animated by keyframes
              borderTop: "2px dashed rgba(140,140,140,0.7)",
              animation: `${travelLine} 1.8s ease-out forwards`,
            }}
          />

          {/* moving dot along the path */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              bottom: "27%",         // same as line & marker
              left: "63%",
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#f97316",
              animation: `${travelDot} 1.8s ease-out forwards`, // run once & stop
            }}
            // when dot animation finishes, show the card
            onAnimationEnd={() => setShowCard(true)}
          />
        </Box>

        {/* LOGIN CARD (RIGHT) */}
        <Paper
          elevation={12}
          sx={{
            width: { xs: "100%", sm: 420, md: 430 },
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            background: "linear-gradient(145deg,#020617,#08111d)",
            color: "#e5e7eb",
            // appear only after line+dot animation
            opacity: showCard ? 1 : 0,
            animation: showCard ? `${slideBounceIn} 650ms ease-out` : "none",
            transition: "opacity 0.4s ease",
            boxShadow: "0 14px 32px rgba(0,0,0,0.25)",
            "&:hover": {
              transform: "translateY(-4px) scale(1.03)", // hover zoom on card
              boxShadow: "0 18px 40px rgba(0,0,0,0.30)",
            },
          }}
        >
          {/* CARD CONTENT – unchanged */}
          <Typography
            variant="overline"
            sx={{ letterSpacing: 3, color: "#9ca3af" }}
          >
            MRN MART
          </Typography>

          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            Admin Login
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "#9ca3af" }}>
            Manage inventory, orders and delivery for{" "}
            <strong style={{ color: "#ffffff" }}>Bengaluru</strong>.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Admin ID"
              variant="outlined"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
              autoComplete="username"
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#475569",
                },
                "& .MuiInputLabel-root": {
                  color: "#9ca3af",
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#475569",
                },
                "& .MuiInputLabel-root": {
                  color: "#9ca3af",
                },
              }}
            />

            <Link
              component="button"
              onClick={() => alert("Password reset link sent!")}
              sx={{
                display: "block",
                textAlign: "right",
                mb: 3,
                color: "#22c55e",
                fontSize: "0.85rem",
                "&:hover": { color: "#16a34a" },
              }}
            >
              Forgot Password?
            </Link>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                py: 1.2,
                borderRadius: "999px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                bgcolor: "#f97316",
                "&:hover": { bgcolor: "#ea580c" },
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );


export default AdminLogin;
