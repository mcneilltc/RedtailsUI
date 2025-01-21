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

const Kayaking = () => {
  return (
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
    }}>
    <Container maxWidth="lg" style={{ paddingTop: '150px' }}>
           <Link href="/" passHref>
          <Button variant="outlined" sx={{ mb: 2 }}>
            ← Back to Home
          </Button>
        </Link>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
          Kayaking Adventures
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia>
              <Image
                src="/images/kayaks/autumn-kuney.jpg"
                alt="Kayak Adventures"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Guided Adventures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us for a guided kayak tour through beautiful landscapes.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about kayak tour" href="/kayak-tour">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia>
              <Image
                src="/images/kayaks/kelsey-dody.jpg"
                alt="Kayak Rentals"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Kayak Rentals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rent a kayak for a day and explore at your own pace.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about kayak rentals" href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/2XyOP">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia>
              <Image
                src="/images/scenes/sunshot.png"
                alt="Sunset Kayaking"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sunset Kayaking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience the beauty of sunset while kayaking on the water.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about sunset kayaking" href="/sunset-kayaking">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia>
              <Image
                src="/images/scenes/vincentiu-solomon.jpg"
                alt="Night Kayaking"
                width={400}
                height={140}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Night Paddles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy a thrilling experience of kayaking at night.
              </Typography>
              <Button size="small" color="primary" aria-label="Learn more about family kayaking" href="/family-kayaking">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Kayaking;
