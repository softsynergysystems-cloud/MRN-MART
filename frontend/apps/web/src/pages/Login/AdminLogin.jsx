import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import LoginCard from "../../components/LoginCard";
import kaOutline from "../../assets/karnataka-outline.png"; // ✅ make sure file exists

// 🌍 Animations
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); transform: scale(1); }
  70% { box-shadow: 0 0 0 16px rgba(34,197,94,0); transform: scale(1.08); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-22px); }
  100% { transform: translateY(0px); }
`;

const slideBounceIn = keyframes`
  0%   { opacity: 0; transform: translateX(40px) scale(0.96); }
  60%  { opacity: 1; transform: translateX(-6px) scale(1.03); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
`;

const travelLine = keyframes`
  0%   { width: 0; opacity: 0; }
  15%  { opacity: 1; }
  100% { width: 160px; opacity: 1; }
`;

const travelDot = keyframes`
  0%   { transform: translateX(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateX(160px); opacity: 1; }
`;

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleLogin = ({ id, password }) => {
    if (id === "admin" && password === "admin123") {
      window.location.href = "/dashboard";
    } else {
      setError("Invalid Admin ID or Password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          maxWidth: 1200,
          width: "90%",
        }}
      >
        {/* 🗺️ Karnataka Map */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 260, sm: 320, md: 360 },
            animation: `${float} 5s ease-in-out infinite`,
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Box
            component="img"
            src={kaOutline}
            alt="Karnataka Map"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
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

          {/* Animated travel line */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              bottom: "27%",
              left: "63%",
              width: "160px",
              borderTop: "2px dashed rgba(140,140,140,0.7)",
              animation: `${travelLine} 1.8s ease-out forwards`,
            }}
          />
          {/* Moving dot */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              bottom: "27%",
              left: "63%",
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#f97316",
              animation: `${travelDot} 1.8s ease-out forwards`,
            }}
            onAnimationEnd={() => setShowCard(true)}
          />
        </Box>

        {/* 💳 Login Card (appears after dot reaches card) */}
        <Box
          sx={{
            opacity: showCard ? 1 : 0,
            animation: showCard ? `${slideBounceIn} 650ms ease-out` : "none",
            transition: "opacity 0.4s ease",
          }}
        >
          <LoginCard
            brand="MRN MART"
            title="Admin Login"
            subtitle='Manage inventory, orders and delivery for "Bengaluru".'
            idLabel="Admin ID"
            error={error}
            onSubmit={handleLogin}
          />
        </Box>
      </Box>
    </Box>
  );
}
