"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";

const Camping = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Banner title="Camping" imageUrl="/images/camping/camp2.png" />
        <Box
          sx={{
            position: "absolute",
            top: "1rem", // Adjust as needed
            left: "1rem", // Adjust as needed
            zIndex: 30, // Ensure the button is above the banner
          }}
        >
          <Link href="/" passHref>
            <Button
              variant="contained"
              sx={{ mb: 2 }}
              aria-label="Back to Home"
            >
              ← Back to Home
            </Button>
          </Link>
        </Box>
      </Box>
      <Container>
        <main>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 0",
              paddingLeft: "1rem",
            }}
          >
            {/* <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          Camping
        </Typography> */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
            >
              Discover the joy of camping with Red Tails Outdoors!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Escape the noise and reconnect with the wild. Our camping events
              are designed to provide a true outdoor experience, allowing you to
              immerse yourself in nature at your own pace. With minimal
              structured activities, you’ll have the freedom to explore the
              trails, watch the sunrise over the treetops, or simply unwind by
              the fire under a sky full of stars. Whether you're seeking
              solitude, quality time with loved ones, or a deeper connection
              with the land, our camping opportunities create the perfect
              setting for an authentic outdoor retreat.{" "}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
            >
              Stay tuned for details about our upcoming camping trips!
            </Typography>
            {/* <Link href="/coming-soon" passHref>
          <Button variant="contained" color="primary" aria-label="See our upcoming camping events">
            See Events
          </Button>
        </Link> */}
          </Box>
        </main>
      </Container>
    </>
  );
};

export default Camping;
