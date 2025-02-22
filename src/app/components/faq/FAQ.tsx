"use client";
import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container>
      <main>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'auto',
            marginBottom: '2rem',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, mt: 3 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Find answers to common questions about our services and adventures.
          </Typography>

          <Box sx={{ width: '100%' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: 'primary.default' }}
              >
                <Typography>What services do you offer?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default' }}>
                <Typography>
                  We offer a variety of outdoor adventures including kayaking, hiking, camping, and more. Our services are designed to provide a fun and safe experience for all skill levels.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: 'primary.default' }}
              >
                <Typography>How can I book an adventure?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default' }}>
                <Typography>
                  You can book an adventure through our website by visiting the home page and selecting your activity. If you have any questions or need assistance, feel free to contact us.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{ backgroundColor: 'primary.default', color: 'text.primary' }}
              >
                <Typography>What should I bring on a kayaking trip?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default' }}>
                <Typography>
                  We recommend bringing water, sunscreen, a hat, and comfortable clothing. We provide all necessary equipment including kayaks, paddles, and life jackets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                sx={{ backgroundColor: 'primary.default', color: 'text.primary' }}
              >
                <Typography>Are your adventures suitable for beginners?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default' }}>
                <Typography>
                  Yes, our adventures are suitable for all skill levels. Our experienced guides will ensure that you have a safe and enjoyable experience.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
                sx={{ backgroundColor: 'primary.default', color: 'text.primary' }}
              >
                <Typography>How can I contact you for more information?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: 'background.default' }}>
                <Typography>
                  You can contact us via email at redtailsoutdoors@gmail.com or through our social media channels. We are always happy to answer any questions you may have.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </main>
    </Container>
  );
};

export default FAQ;