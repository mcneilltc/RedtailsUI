"use client";
import React, { useEffect, useState } from 'react';
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
import Link from 'next/link';

const Kayaking = () => {
  return (
    <Container maxWidth="lg">
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          padding: '2rem 0',
        }}
      >
        <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>
      </Box>
    <Box 
    className="background"
    sx={{
    //   backgroundColor: theme.palette.background.default,
    //   color: theme.palette.text.primary,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 0",
      paddingLeft: '1rem',
    }}>
    <Container maxWidth="lg" style={{ paddingTop: '150px' }}>
           
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
          Kayaking Adventures
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", width: '100%' }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/kayaks/autumn-kuney.jpg"
                alt="Kayak Adventures"
                width={400}
                height={140}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Guided Adventures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us for a guided kayak tour through beautiful landscapes.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about kayak tour" href="/coming-soon">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", width: '100%' }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/kayaks/kelsey-dody.jpg"
                alt="Kayak Rentals"
                width={400}
                height={140}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Kayak Rentals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rent a kayak and explore at your own pace.
              </Typography>
              <Link href="/locations" passHref>
              <Button size="small" color="primary" aria-label="Learn more about kayak rentals">
                Learn More
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", width: '100%' }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/scenes/sunshot.png"
                alt="Sunset Kayaking"
                width={400}
                height={140}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Sunset Kayaking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience the beauty of sunset while kayaking on the water.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about sunset kayaking" href="/coming-soon">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", width: '100%' }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/scenes/vincentiu-solomon.jpg"
                alt="Evening Kayaking"
                width={400}
                height={140}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Evening Paddles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy a thrilling experience of kayaking at night.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about evening paddles" href="/night-paddle">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </Box>
    </Container>
  );
};

export default Kayaking;
