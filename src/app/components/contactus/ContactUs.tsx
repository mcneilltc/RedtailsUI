"use client"
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
  return (
    <Box
    sx={{
      py: 8,
      textAlign: 'center',
      backgroundColor: 'background.paper',
      px: 2,
    }}
  >
    <Container>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 4,
          fontSize: { xs: '1.75rem', md: '2.5rem' },
        }}
      >
        Get in Touch
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Have questions about our services? We&apos;d love to hear from you.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          color="primary"
          component="a"

          href="https://www.facebook.com/people/Red-Tails-Outdoors/61570894457374/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"

          href="https://www.instagram.com/redtailsoutdoors/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Container>
  </Box>
  );
};

export default ContactUs;