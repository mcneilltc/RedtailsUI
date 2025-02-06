"use client";
import React from "react";
import { Box, Button, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";
import CircleIcon from '@mui/icons-material/Circle';

const SpecialEvents = () => {
  return (
    <>
    <Box sx={{ position: "relative" }}>
    <Banner
          title="Special Events"
          imageUrl="/images/hiking/kristjan-kotar.jpg"
        />
        <Box
        sx={{
          position: "absolute",
          top: "1rem", // Adjust as needed
          left: "1rem", // Adjust as needed
          zIndex: 30, // Ensure the button is above the banner
        }}
      >
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{ mb: 2 }}
            aria-label="Back to Home"
          >
            ← Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
    <Container>
      
      <main>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem 0",
            paddingLeft: "1rem",
          }}
        >
          {/* <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            Special Events
          </Typography> */}
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Elevate your private gathering with an unforgettable outdoor experience. Our special events service provides kayak and stand-up paddle board rentals, perfect for family reunions, corporate outings, or special celebrations. 
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          We supply all necessary equipment and basic instruction to ensure a seamless and enjoyable adventure on the water. Whether your guests are seeking relaxation or exploration, our team is dedicated to creating a safe and memorable experience.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Scouting Adventures: Designed specifically for Scouts working to
            complete rank requirements or earn merit badges, particularly those
            related to paddle sports. We provide the necessary gear, including
            kayaks, paddleboards, and life jackets, along with expert guidance
            to help Scouts achieve their goals in a safe and supportive
            environment.
          </Typography>
          <Box>
          <Typography variant="h5" sx={{ mb: 2, }}>
          Fees:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon fontSize="inherit" sx={{ color: "text.secondary" }}/>
            </ListItemIcon>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Base Package: $250 for a 3-hour session, including up to 6 single kayaks or stand-up paddle boards (mix and match).
            </Typography>
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <CircleIcon fontSize="inherit" sx={{ color: "text.secondary" }}/>
            </ListItemIcon>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Additional Kayaks or Paddle boards: $30 per kayak or paddle board.
            </Typography>
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <CircleIcon fontSize="inherit" sx={{ color: "text.secondary" }}/>
            </ListItemIcon>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Extended Time: $75 per additional hour.
            </Typography>
          </ListItem>
          <ListItem>
          <ListItemIcon>
              <CircleIcon fontSize="inherit" sx={{ color: "text.secondary" }}/>
            </ListItemIcon>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              A deposit is required at the time of booking to secure your event. For more details or to customize your experience, please contact us directly.
            </Typography>
          </ListItem>
        </List>
        </Box>
          {/* <Link href="/events" passHref>
            <Button variant="contained" color="primary">
              See Events
            </Button>
          </Link> */}
        </Box>
      </main>
    </Container>
    </>
  );
};

export default SpecialEvents;
