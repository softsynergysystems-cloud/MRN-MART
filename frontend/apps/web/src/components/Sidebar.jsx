import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ReplayIcon from "@mui/icons-material/Replay";

const drawerWidth = 220;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRadius: 3,
          ml: 1,
          mt: 1,
          p: 0,
          bgcolor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(6px)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 12, p: 3 }}>
        <Avatar sx={{ bgcolor: "#000", width: 46, height: 46 }}>MR</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Shops
          </Typography>
          <Typography variant="caption">MRN Mart</Typography>
        </Box>
      </Box>

      <Divider />
      <List>
        <ListItem button selected>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="DashBoard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Inventory2Icon /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AnalyticsIcon /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ReplayIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
