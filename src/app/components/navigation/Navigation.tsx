"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./styles.css";
import logo from "../../../../public/images/logos/logo2.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../ThemeProvider";
import PeekScript from "../PeekScript";

export default function Navigation() {
  const { toggleTheme, darkMode } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer for mobile navigation
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Link href="/" passHref>
            <div className="logo" style={{ cursor: "pointer" }}>
              <img
                src={logo.src}
                alt="Red Tails Outdoors Logo"
                style={{ maxHeight: "60px" }}
              />
            </div>
          </Link>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              ml: 2,
              fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
            }}
          >
            Red Tails Outdoors
          </Typography>

          {/* Buttons for larger screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/about">
              About Us
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/2XyOP"
            >
              Make a Reservation
            </Button>
          </Box>

          {/* Theme toggle button */}
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            sx={{ ml: 2 }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Hamburger menu for mobile screens */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: "background.paper",
            height: "100%",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem component="a" href="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component="a" href="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              component="a"
              href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/2XyOP"
            >
              <ListItemText primary="Make a Reservation" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Inject PeekScript */}
      <PeekScript />
    </>
  );
}
