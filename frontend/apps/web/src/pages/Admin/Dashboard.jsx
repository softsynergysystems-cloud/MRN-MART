// src/pages/Admin/Dashboard.jsx
import React from "react";
// import { Typography } from "@mui/material";

// function Dashboard() {
//   return (
//     <Typography variant="h4" sx={{ p: 3 }}>
//       Welcome, Admin 🚀
//     </Typography>
//   );
// }

// export default Dashboard;
import { Box, Grid, Typography, Paper, Avatar, List } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import OrdersTable from "../../components/OrdersTable";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

/* Use existing asset in your repo */
// import bg from "../../assets/karnataka-outline.png";
import bg from "../../assets/bg.jpg";

const updates = [
  { id: 1, name: "Riley Thomas", action: "has ordered Apple iPhone XR.", time: "1 min ago", avatar: "RT" },
  { id: 2, name: "Leonard Nimoy", action: "has received the Nike Air Shoes.", time: "30 mins ago", avatar: "LN" },
  { id: 3, name: "Mikasa Ackerman", action: "has ordered the Park Avenue Soap", time: "1 hour ago", avatar: "MA" },
];

const orders = [
  { id: 1, product: "Rebook Air", tracking: "18908424", date: "2 March 2022", status: "Approved" },
  { id: 2, product: "Nike Blue", tracking: "18908424", date: "2 March 2022", status: "Pending" },
  { id: 3, product: "Park Avenue", tracking: "18908424", date: "2 March 2022", status: "Approved" },
  { id: 4, product: "Wild Storm Soap", tracking: "18908421", date: "2 March 2022", status: "Delivered" },
];

const chartData = [
  { time: "01:00", value: 120 },
  { time: "02:00", value: 90 },
  { time: "03:00", value: 140 },
  { time: "04:00", value: 110 },
  { time: "05:00", value: 170 },
  { time: "06:00", value: 150 },
];

export default function Dashboard() {
  return (
    <Box sx={{
      display: "flex",
      minHeight: "100vh",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      p: 2,
    }}>
      {/* Sidebar: this is a simple permanent drawer that doesn't touch routing/outlet */}
      <Sidebar />

      {/* The main area: this will be mounted inside your existing app routes (so no outlet changes required) */}
      <Box component="main" sx={{ flexGrow: 1, ml: "236px", mr: 2, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>Dashboard</Typography>
          </Grid>

          {/* Stats and table */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard title="Sales" amount="$25,970" percent={70} gradient={["#a66bff","#f6a6ff"]} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard title="Revenue" amount="$14,270" percent={80} gradient={["#ff9aa2","#ff6b81"]} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard title="Expenses" amount="$4,270" percent={60} gradient={["#ffd271","#ffb66b"]} />
              </Grid>

              <Grid item xs={12}>
                <OrdersTable orders={orders} />
              </Grid>
            </Grid>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={6} sx={{ p: 2, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 800 }}>Updates</Typography>
                  <List>
                    {updates.map(u => (
                      <Box key={u.id} sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
                        <Avatar sx={{ width: 44, height: 44 }}>{u.avatar}</Avatar>
                        <Box>
                          <Typography variant="body2"><strong>{u.name}</strong> {u.action}</Typography>
                          <Typography variant="caption" color="text.secondary">{u.time}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={6} sx={{ p: 2, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 800 }}>Customer Review</Typography>
                  <Box sx={{ width: "100%", height: 200 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff9aa2" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ff9aa2" stopOpacity={0.05}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#ff9aa2" fill="url(#grad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
