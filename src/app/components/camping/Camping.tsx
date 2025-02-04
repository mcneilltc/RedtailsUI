"use client";
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const Camping = () => {
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
          <Button variant="contained" sx={{ mb: 2 }} aria-label="Back to Home">
            ← Back to Home
          </Button>
        </Link>
      </Box>
      <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
         {/* <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link> */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          Camping
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Discover the joy of camping with Red Tails Outdoors! Our future group
          camping opportunities will connect you with some of the most beautiful
          locations in the state. Whether you’re a seasoned camper or new to
          sleeping under the stars, we aim to create experiences that foster
          community and a deeper connection to nature. Stay tuned for details
          about our upcoming camping trips!
        </Typography>
        <Link href="/coming-soon" passHref>
          <Button variant="contained" color="primary" aria-label="See our upcoming camping events">
            See Events
          </Button>
        </Link>
      </Box>
      </main>
    </Container>
  );
};

export default Camping;