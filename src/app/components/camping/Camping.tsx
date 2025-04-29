"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";
import Grid from '@mui/material/Grid2'; 

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
                       <Box
              sx={{
                display: "flex",
                flexWrap: "wrap", // Allow wrapping to the next row
                justifyContent: "center", // Center flyers horizontally
                gap: 4, // Add spacing between flyers
                mt: 4, // Add margin at the top
              }}
            >
              {/* Flyer 1 */}
              <Box
                sx={{
                  width: { xs: "100%", sm: "65%", md: "40%" }, // Responsive width
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/camping/Hanging Rock Camping.jpeg"
                  alt="Hanging Rock Camping"
                  sx={{
                    width: "100%",
                    height: "auto", // Maintain aspect ratio
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    objectFit: "contain", // Ensure the image fits within the box
                    mb: 2,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/EM9P2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your camping trip at Hanging Rock"
                >
                  Book Now
                </Button>
              </Box>
            
              {/* Flyer 2 */}
              <Box
                sx={{
                  width: { xs: "100%", sm: "65%", md: "40%" }, // Responsive width
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src="/images/camping/June 21-22.jpeg"
                  alt="Stone Mountain State Park"
                  sx={{
                    width: "100%",
                    height: "auto", // Maintain aspect ratio
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    objectFit: "contain", // Ensure the image fits within the box
                    mb: 2,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/Ag1jB"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your camping trip at Stone Mountain State Park"
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          </Box>
        </main>
      </Container>
    </>
  );
};

export default Camping;
