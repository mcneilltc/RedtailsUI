"use client";
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const ComingSoon = () => {
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
          <Button variant="contained" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
        }}
      >

        <Typography variant="h4" sx={{ mb: 2 }}>
          Coming Soon!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Stay tuned for updates on our upcoming adventures and events.
        </Typography>

        {/* <Link href="/events" passHref>
          <Button variant="contained" color="primary">
            See Events
          </Button>
        </Link> */}
      </Box>
    </Container>
  );
};

export default ComingSoon;
