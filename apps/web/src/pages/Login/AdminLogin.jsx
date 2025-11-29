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

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminId === "admin" && password === "admin123") {
      navigate("/dashboard");
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

        // 🌟 FULL PAGE LOGO BACKGROUND
        backgroundImage: `url("/images/mrn-logo-bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 380,
          borderRadius: 3,
          background: "rgba(255,255,255,0.25)", // <-- TRANSPARENT CARD
          backdropFilter: "blur(8px)", // glass effect
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // shadow
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Admin Login
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
            sx={{
              mb: 2,
              '& input': { color: "black" },
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
            sx={{
              mb: 2,
              '& input': { color: "black" },
            }}
          />

          <Link
            component="button"
            onClick={() => alert("Password reset link sent!")}
            sx={{
              textAlign: "right",
              display: "block",
              mb: 2,
              color: "#2E7D32",
              "&:hover": { color: "#1B5E20" },
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
              textTransform: "none",
              fontWeight: "bold",
              bgcolor: "#FF9800",  // ORANGE BUTTON
              "&:hover": { bgcolor: "#E68900" },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );


export default AdminLogin;
