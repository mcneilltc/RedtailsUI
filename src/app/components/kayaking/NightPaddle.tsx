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

const KayakingLocations = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          padding: "1rem 0",
          paddingLeft: "1rem",
        }}
      >
        {" "}
        <Link href="/kayaking" passHref>
          <Button variant="contained" color="primary" aria-label="Back to Kayaking">
            ← Back to Kayaking
          </Button>
        </Link>
      </Box>
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
        <Container maxWidth="lg" style={{ paddingTop: "150px" }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
              Choose your Destination
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
           
            {/* Location 21*/}
            <Grid item xs={12} sm={6} md={4}>
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
                    Eddie Nichols Drive, Mount Holly, NC 28120
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    aria-label="Make a Reservations at Mountain Island Lake at Riverbend"
                    href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/vPr12"
                  >
                    Make a Reservation
                  </Button>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>
      </main>
    </Container>
  );
};

export default KayakingLocations;
