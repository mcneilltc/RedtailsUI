"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";

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
            At Red Tails Outdoors, we create tailored experiences that blend
            outdoor adventure with education and skill-building. Our special
            events include:
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Outdoor Education Workshops: Develop essential skills like
            fire-building, navigation, and Leave No Trace practices.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Scouting Adventures: Designed specifically for Scouts working to
            complete rank requirements or earn merit badges, particularly those
            related to paddle sports. We provide the necessary gear, including
            kayaks, paddleboards, and life jackets, along with expert guidance
            to help Scouts achieve their goals in a safe and supportive
            environment.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Private Group Rentals: Customize a day on the water with private
            kayak or paddleboard rentals, perfect for team-building or family
            outings.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Whether you’re a Scout troop, a nature enthusiast, or a group of
            friends, our special events offer something for everyone.
          </Typography>
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
