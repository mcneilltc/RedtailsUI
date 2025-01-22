"use client";
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const SpecialEvents = () => {
  return (
    <Container>
         <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          padding: '1rem 0',
        }}
      >
        <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          Hiking
        </Typography>
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
          kayaks, paddleboards, and life jackets, along with expert guidance to
          help Scouts achieve their goals in a safe and supportive environment.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Private Group Rentals: Customize a day on the water with private kayak
          or paddleboard rentals, perfect for team-building or family outings.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Whether you’re a Scout troop, a nature enthusiast, or a group of
          friends, our special events offer something for everyone.
        </Typography>
        <Link href="/events" passHref>
          <Button variant="contained" color="primary">
            See Events
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default SpecialEvents;