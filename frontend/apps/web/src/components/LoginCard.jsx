import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Alert, Link } from "@mui/material";

/**
 * Reusable Login Card (self-contained)
 * Props:
 * - brand?: string
 * - title?: string
 * - subtitle?: string
 * - idLabel?: string
 * - onSubmit?: ({ id, password }) => void | Promise<void>
 * - error?: string  (optional external error to show)
 */
export default function LoginCard({
  brand = "MRN MART",
  title = "Login",
  subtitle = "Access your account securely",
  idLabel = "Admin ID",
  onSubmit,
  error: externalError,
}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!id.trim() || !password.trim()) {
      setLocalError("All fields are required");
      return;
    }

    try {
      await onSubmit?.({ id, password });
    } catch (err) {
      setLocalError(err?.message || "Login failed");
    }
  };

  const error = externalError || localError;

  return (
    <Paper
      elevation={12}
      sx={{
        width: { xs: "100%", sm: 420, md: 430 },
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        background: "linear-gradient(145deg,#020617,#08111d)",
        color: "#e5e7eb",
        boxShadow: "0 14px 32px rgba(0,0,0,0.25)",
      }}
    >
      <Typography variant="overline" sx={{ letterSpacing: 3, color: "#9ca3af" }}>
        {brand}
      </Typography>

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: "#9ca3af" }}>
        {subtitle}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label={idLabel}
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          sx={{
            mb: 2,
            "& .MuiInputBase-root": { backgroundColor: "#0f172a", color: "#ffffff" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#475569" },
            "& .MuiInputLabel-root": { color: "#9ca3af" },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{
            mb: 3,
            "& .MuiInputBase-root": { backgroundColor: "#0f172a", color: "#ffffff" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#475569" },
            "& .MuiInputLabel-root": { color: "#9ca3af" },
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
  );
}
