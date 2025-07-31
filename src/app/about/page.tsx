"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider"; // Import your custom theme provider
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2"; // Import Grid from Unstable_Grid2
import Banner from "../components/banner/Banner";

const AboutUsPage = () => {
  const { darkMode, toggleTheme } = useTheme(); // Access theme toggle and state

  return (
    <Box>
      {/* Hero Section */}
      <Banner
        title="About Red Tails Outdoors"
        imageUrl="/images/scenes/river.png"
      />
      {/* Mission Statement */}
      <main>
        <Box sx={{ py: 8, backgroundColor: "background.default", px: 2 }}>
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                mb: 4,
                fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
              }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              At Red Tails Outdoors, we’re passionate about helping people
              connect with nature, explore new adventures, and create
              unforgettable memories. Nestled in the beautiful landscapes of
              western North Carolina, we offer kayak and paddleboard rentals,
              self-guided tours, and special events designed for families,
              tourists, and outdoor enthusiasts of all kinds.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              We’re all about making the outdoors accessible, safe, and
              welcoming for everyone. Inclusivity is at the heart of what we do,
              and we’re committed to protecting the environment through
              sustainable practices and following "Leave No Trace" principles.
              We take pride in creating experiences that let you enjoy the
              natural beauty around us while respecting it for future
              generations.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              At Red Tails Outdoors, we’re not just a rental service: we’re your
              partners in adventure. Whether you’re gliding across calm waters,
              joining a fun group event, or discovering the serenity of nature
              on your own, we’re here to make sure your time outdoors is safe,
              enjoyable, and memorable. Come paddle with us and see why we love
              calling North Carolina home!
            </Typography>
            {/* Additional mission content */}
          </Container>
        </Box>

        {/* Team Section */}
        <Box sx={{ py: 8, backgroundColor: "background.default", px: 2 }}>
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                mb: 6,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {/* Team Member 1 */}
              <Grid size={{ xs: 12, sm: 6, md: 4 }} textAlign="center">
                <Avatar
                  alt="Aaron McNeill"
                  src="/images/headshots/aaron1.png"
                  sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
                />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Aaron McNeill
                </Typography>
                <Typography color="text.secondary">Owner</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Owner and founder of Red Tails Outdoors, Aaron is passionate
                  about connecting people with nature. An Eagle Scout with over
                  10 years of experience, he’s a true adventurer at heart!
                </Typography>
              </Grid>

              {/* Team Member 2 */}
              {/* <Grid size={{ xs: 12, sm:6, md: 4 }} textAlign="center">
                <Avatar
                  alt="Devin McNeill"
                  src="/images/logos/logo2.png"
                  sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
                />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Devin McNeill
                </Typography>
                <Typography color="text.secondary">Guide</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  A skilled guide, Devin is a sports enthusiast who’s always ready
                  to dive into action. Whether poolside or courtside, he brings
                  energy and a splash of fun to the team.
                </Typography>
              </Grid> */}

              {/* Team Member 3 */}
              {/* <Grid size={{ xs: 12, sm: 6, md: 4 }} textAlign="center">
                <Avatar
                  alt="Al "
                  src="/images/headshots/Al.png"
                  sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
                />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Alvian "Al" Alvira
                </Typography>
                <Typography color="text.secondary">Guide</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  "Al" finds peace paddling through quiet waters and believes
                  kayaking is one of the best ways to connect with nature. When
                  he’s not on the water, you can find him behind the grill,
                  bringing people together with good food and great stories.
                </Typography>
              </Grid> */}
            </Grid>
          </Container>
        </Box>
      </main>
      {/* Contact Section */}
    </Box>
  );
};

export default AboutUsPage;
