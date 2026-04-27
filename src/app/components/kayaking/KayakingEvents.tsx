"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../banner/Banner";
// import Grid from "@mui/material/Grid2";

const KayakingEvents = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Banner title="Kayaking Events" imageUrl="/images/kayaks/IMG_4947.jpeg" />
        <Box
          sx={{
            position: "absolute",
            top: "1rem", // Adjust as needed
            left: "1rem", // Adjust as needed
            zIndex: 30, // Ensure the button is above the banner
          }}
        >
          <Link href="/kayaking" passHref>
            <Button
              variant="contained"
              sx={{ mb: 2 }}
              aria-label="Back to Kayaking"
            >
              ← Back to Kayaking
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
             Step Into the Flow of Something Extraordinary!
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Our one-time
              kayaking events are crafted for those who want more than just time
              on the water—they’re for people seeking connection, challenge, and
              awe. From peaceful sunrise launches to moonlit paddles, each event
              offers a unique way to experience nature. Some events are purely
              about the vibe—relax, explore, and enjoy the moment. Others are
              skill-focused, designed to help you grow as a paddler with
              guidance in technique, safety, or group navigation. Whether you’re
              just starting out or ready to level up, there’s something for you.
              With gear included and safety always a priority, we provide the
              setting—you bring the curiosity. These experiences are limited,
              intentional, and unforgettable.{" "}
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
              {/* Flyer 1: Freedom Paddle  */}
              {/* <Box
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
                  src="/images/kayaks/June14thevent.jpeg"
                  alt="Reflection on Freedom Paddle"
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
                  href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/mzE4D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your paddle"
                >
                  Register Now
                </Button>
              </Box> */}

{/* Flyer 2: Kayak and Camping  */}
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
                  src="/images/kayaks/fliers/Kayak-abbots-creek.png
                  "
                  alt="Kayak Adventure at Abbots Creek"
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
                  href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/waxKe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your paddle"
                >
                  Register Now
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
                  src="/images/kayaks/fliers/Belews-Lake.png"
                  alt="Belews Lake"
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
                  href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/D0Ow9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book your kayaking trip at Belews Lake"
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

export default KayakingEvents;
