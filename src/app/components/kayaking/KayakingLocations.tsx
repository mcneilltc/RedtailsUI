"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image"; // Optimize images
import Link from "next/link";
import Banner from "../banner/Banner";


const KayakingLocations = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Banner
          title="Choose your Destination"
          imageUrl="/images/kayaks/autumn-kuney.jpg"
        />
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
              color="primary"
              sx={{ mb: 2 }}
              aria-label="Back to Kayaking"
            >
              ← Back to Kayaking
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
            <Container maxWidth="lg">
              {/* <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
              Choose your Destination
            </Typography>
          </Box> */}

              <Grid container spacing={4} justifyContent="center">
                {/* Location 1 */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      borderRadius: "16px"
                    }}
                  >
                    <CardMedia sx={{ height: 140 }}>
                      <Image
                        src="/images/scenes/lake-norman.png" // Replace with actual image path
                        alt="Lake Norman"
                        width={400}
                        height={140}
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        Mountain Island Lake at Neck Road
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        The Neck Road Boat Ramp, located at 5898 Neck Road, Huntersville, NC 28078, is a convenient spot to launch your kayak and enjoy the tranquil waters of Mountain Island Lake.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                       - No Restrooms: There are no bathroom facilities available at this location. Plan accordingly.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                       - Parking: Limited parking is available, so consider arriving early to secure a spot.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                       - Launch Area: Use the designated kayak launch area. Our team will be on-site to assist as needed.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        Have a great time on the water, and remember to follow all Leave No Trace principles!
                      </Typography>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        aria-label="Make a Reservation for Mountain Island Lake at Neck Road"
                        href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/O3ge6"
                      >
                        Make a Reservation
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Location 2 */}
                {/* <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <CardMedia sx={{ height: 140 }}>
                  <Image
                    src="/images/scenes/mountain-island.png" // Replace with actual image path
                    alt="Mountain Island Lake"
                    width={400}
                    height={140}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Mountain Island Lake at Riverbend
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of Riverbend.
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    aria-label="Learn more about Riverbend"
                    href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/ey4vb"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid> */}

                {/* Location 3 */}
                {/* <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <CardMedia sx={{ height: 140 }}>
                  <Image
                    src="/images/scenes/lake-wylie.png" // Replace with actual image path
                    alt="Lake Wylie"
                    width={400}
                    height={140}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Lake Wylie
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of Lake Wylie.
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    aria-label="Learn more about Lake Wylie"
                    href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/6aZkj"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid> */}
              </Grid>
            </Container>
          </Box>
        </main>
      </Container>
    </>
  );
};

export default KayakingLocations;
