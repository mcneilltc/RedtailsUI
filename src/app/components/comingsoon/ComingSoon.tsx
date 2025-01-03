import React from 'react';
import { Box, Container, Typography } from '@mui/material';

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
      <Typography variant="h4">Coming Soon!</Typography>
      <Typography variant="body1">
        Stay tuned for updates on our upcoming adventures and events.
      </Typography>
    </Box>
  </Container>
  );
};

export default ComingSoon;
