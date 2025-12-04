import React from "react";
import { Paper, Box, Typography } from "@mui/material";

export default function StatCard({ title, amount, percent, gradient = ["#a66bff","#f6a6ff"] }) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 2.5,
        borderRadius: 2,
        minHeight: 120,
        position: "relative",
        overflow: "visible",
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
        color: "#fff",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {amount}
          </Typography>
          <Typography variant="caption">Last 24 Hours</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "6px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
            }}
          >
            {percent}%
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
