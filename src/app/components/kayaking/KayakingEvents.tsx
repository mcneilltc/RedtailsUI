"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";
import EventList from "../events/EventList";
// import Grid from "@mui/material/Grid2";

const KayakingEvents = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Banner title="Kayaking Events" imageUrl="/images/kayaks/IMG_4947.jpeg" />
        <Box
          sx={{
            position: "absolute",
            top: "1rem", // Adjust as needed
            left: "1rem", // Adjust as needed
            zIndex: 30, // Ensure the button is above the banner
          }}
        >
          <Link href="/kayaking" passHref>
            <Button
              variant="contained"
              sx={{ mb: 2 }}
              aria-label="Back to Kayaking"
            >
              ← Back to Kayaking
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
          Camping
        </Typography> */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
            >
             Step Into the Flow of Something Extraordinary!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Our one-time
              kayaking events are crafted for those who want more than just time
              on the water—they’re for people seeking connection, challenge, and
              awe. From peaceful sunrise launches to moonlit paddles, each event
              offers a unique way to experience nature. Some events are purely
              about the vibe—relax, explore, and enjoy the moment. Others are
              skill-focused, designed to help you grow as a paddler with
              guidance in technique, safety, or group navigation. Whether you’re
              just starting out or ready to level up, there’s something for you.
              With gear included and safety always a priority, we provide the
              setting—you bring the curiosity. These experiences are limited,
              intentional, and unforgettable.{" "}
            </Typography>
            <EventList category="kayaking" />
          </Box>
        </main>
      </Container>
    </>
  );
};

export default KayakingEvents;
