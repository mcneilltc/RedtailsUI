"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";

const Hiking = () => {
  return (
    <>
      {/* <Container> */}
      <Box sx={{ position: "relative" }}>
        <Banner
          title="Hiking Adventures"
          imageUrl="/images/hiking/hiking.png"
        />

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
      <Container maxWidth="lg">
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
          Hiking
        </Typography> */}
            {/* <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Explore the wonders of the outdoors with our guided hiking
          experiences. Our knowledgeable guides are familiar with the area's
          trails and dedicated to ensuring your safety and enjoyment. Whether
          you’re seeking a peaceful nature walk or an adventurous trek, our
          hiking events are designed to connect you with the beauty of the
          natural world.{" "}
        </Typography> */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
            >
              Explore on Your Terms—Guided or Independent!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              Whether you prefer the freedom of a self-guided hike or the
              expertise of a guide, we have options to suit your adventure
              style. Explore the beauty of nature at your own pace or with
              expert guidance.{" "}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              - Guided or Independent: Choose the experience that best fits
              you—guided tours for in-depth exploration, or self-guided hikes
              for more flexibility.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              - Trail Maps Provided: Easy-to-follow routes for a smooth hike.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              - Support When Needed: Guides and assistance available, if needed.
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
            >
              Stay tuned for details about our upcoming hiking events!
              </Typography>
            {/* <Link href="/coming-soon" passHref>
              <Button
                variant="contained"
                color="primary"
                aria-label="See our Upcoming Hiking Events"
              >
                See Events
              </Button>
            </Link> */}
          </Box>
        </main>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default Hiking;
