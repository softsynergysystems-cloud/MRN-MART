import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

export default function OrdersTable({ orders = [] }) {
  return (
    <Paper elevation={6} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 800 }}>
        Recent Orders
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Tracking ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Additional Details</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((o) => (
            <TableRow key={o.id}>
              <TableCell>{o.product}</TableCell>
              <TableCell>{o.tracking}</TableCell>
              <TableCell>{o.date}</TableCell>
              <TableCell>
                <Chip
                  label={o.status}
                  size="small"
                  sx={{
                    bgcolor:
                      o.status === "Approved"
                        ? "rgba(16,185,129,0.12)"
                        : o.status === "Pending"
                        ? "rgba(245,158,11,0.12)"
                        : "rgba(14,165,233,0.12)",
                    color:
                      o.status === "Approved"
                        ? "#10b981"
                        : o.status === "Pending"
                        ? "#f59e0b"
                        : "#0ea5e9",
                    fontWeight: 700,
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "primary.main", textDecoration: "underline", cursor: "pointer" }}>
                  Details
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
