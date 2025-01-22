import React from 'react';
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

const KayakingLocations = () => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: '150px' }}>
        <Box sx={{ mb: 4, textAlign: "center" }}>
        <Link href="/kayaking" passHref>
          <Button variant="outlined" color="primary">
            ← Back to Kayaking
          </Button>
        </Link>
      </Box>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
          Choose your Destination
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Location 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/kayaking/location1.jpg" // Replace with actual image path
                alt="Location 1"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Location 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of kayaking location 1.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about location 1" href="/location1-details">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Location 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/kayaking/location2.jpg" // Replace with actual image path
                alt="Location 2"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Location 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of kayaking location 2.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about location 2" href="/location2-details">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Location 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia sx={{ height: 140 }}>
              <Image
                src="/images/kayaking/location3.jpg" // Replace with actual image path
                alt="Location 3"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                Location 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of kayaking location 3.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about location 3" href="/location3-details">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KayakingLocations; 