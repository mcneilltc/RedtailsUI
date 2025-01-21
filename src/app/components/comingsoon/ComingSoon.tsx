import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
        }}
      >
        <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>

        <Typography variant="h4" sx={{ mb: 2 }}>
          Coming Soon!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Stay tuned for updates on our upcoming adventures and events.
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

export default ComingSoon;
