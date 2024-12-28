'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../components/ThemeProvider'; // Import your custom theme provider
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon

const AboutUsPage = () => {
  const { darkMode, toggleTheme } = useTheme(); // Access theme toggle and state

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
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
          src="/images/scenes/shoreshot.png"
          alt="Red Tails Outdoors"
          fill
          className="object-cover"
          priority
        />
        <Container
          sx={{
            position: 'relative',
            zIndex: 20,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            About Red Tails Outdoors
          </Typography>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 4,
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            At Red Tails Outdoors, we’re passionate about helping people connect
            with nature, explore new adventures, and create unforgettable
            memories. Nestled in the beautiful landscapes of western North
            Carolina, we offer kayak and paddleboard rentals, self-guided
            tours, and special events designed for families, tourists, and
            outdoor enthusiasts of all kinds.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            We’re all about making the outdoors accessible, safe, and welcoming
            for everyone. Inclusivity is at the heart of what we do, and we’re
            committed to protecting the environment through sustainable
            practices and following "Leave No Trace" principles. We take pride
            in creating experiences that let you enjoy the natural beauty
            around us while respecting it for future generations.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            At Red Tails Outdoors, we’re not just a rental service: we’re your
            partners in adventure. Whether you’re gliding across calm waters,
            joining a fun group event, or discovering the serenity of nature on
            your own, we’re here to make sure your time outdoors is safe,
            enjoyable, and memorable. Come paddle with us and see why we love
            calling North Carolina home!
          </Typography>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 6,
            }}
          >
            Our Team
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            gap={4}
          >
            {/* Team Member 1 */}
            <Box sx={{ width: '100%', maxWidth: '300px', textAlign: 'center' }}>
              <Avatar
                alt="Aaron McNeill"
                src="/images/headshots/aaron1.png"
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" color="text.primary" fontWeight="bold">
                Aaron McNeill
              </Typography>
              <Typography color="text.secondary">Owner</Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Owner and founder of Red Tails Outdoors, Aaron is passionate
                about connecting people with nature. An Eagle Scout with over
                10 years of experience, he’s a true adventurer at heart!
                Whether it’s hiking, camping, or kayaking, the great outdoors
                is his playground.
              </Typography>
            </Box>
            {/* Team Member 2 */}
            <Box sx={{ width: '100%', maxWidth: '300px', textAlign: 'center' }}>
              <Avatar
                alt="Devin McNeill"
                src="/images/headshots/devin.png"
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" color="text.primary" fontWeight="bold">
                Devin McNeill
              </Typography>
              <Typography color="text.secondary">Guide</Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                A skilled guide, Devin is a sports enthusiast who’s always
                ready to dive into action. Whether poolside or courtside, he
                brings energy and a splash of fun to the team.
              </Typography>
            </Box>
            {/* Team Member 3 */}
            <Box sx={{ width: '100%', maxWidth: '300px', textAlign: 'center' }}>
              <Avatar
                alt="Michelle McCurdy"
                src="/images/headshots/michelle.png"
                sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" color="text.primary" fontWeight="bold">
                Michelle McCurdy
              </Typography>
              <Typography color="text.secondary">Guide</Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                A nature-loving mom who’s always up for an adventure! From
                hiking trails to outdoor games, Michelle has a knack for
                making every activity a family affair. She’s dedicated to
                providing memorable experiences and fostering a love for the
                outdoors.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 4,
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Have questions about our services? We&apos;d love to hear from you.
          </Typography>
          <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              color="primary"
              component="a"
              href="https://www.facebook.com/yourpage" // Replace with actual Facebook link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://www.instagram.com/yourprofile" // Replace with actual Instagram link
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
