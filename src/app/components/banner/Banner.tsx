import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

interface BannerProps {
  title: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, imageUrl }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '300px', md: '400px' }, // Adjust for mobile and desktop
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10,
        }}
      />
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
        style={{ objectFit: 'cover' }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 20,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          px: 2, // Padding for smaller screens
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            fontSize: { xs: '1.5rem', md: '2.5rem' }, // Responsive font size
          }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;