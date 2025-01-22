import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const Hiking = () => {
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
        <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>
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
          Explore the wonders of the outdoors with our guided hiking
          experiences. Our knowledgeable guides are familiar with the area's
          trails and dedicated to ensuring your safety and enjoyment. Whether
          you’re seeking a peaceful nature walk or an adventurous trek, our
          hiking events are designed to connect you with the beauty of the
          natural world.{" "}
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

export default Hiking;