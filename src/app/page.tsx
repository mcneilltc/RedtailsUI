"use client";

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Grid from '@mui/material/Grid2'; 
import { useTheme } from "@mui/material/styles";
import Image from "next/image"; // Optimize images
import "./styles.css";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      className="background"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <main>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "bold",
              textShadow: '2px 2px 4px rgba(7, 7, 7, 0.7)',
              padding: '0.5rem 1rem'
            }}
          >
            Welcome to Red Tails Outdoors
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.secondary,
              mt: 1,
              textShadow: '2px 2px 4px rgba(7, 7, 7, 0.7)',
              padding: '0.5rem 1rem'
            }}
          >
            Explore nature with us—kayaking, hiking, camping, and more!
          </Typography>
        </Box>

        {/* Cards Section */}
        <Container maxWidth="lg" style={{ paddingTop: '150px' }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Kayaking Card */}
            <Grid size={{ xs: 12, sm:6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px", // Rounded corners
                }}
              >
                <CardMedia>
                  <Image
                    src="/images/kayaks/dapo-olusola.jpg"
                    alt="Kayaking"
                    width={400}
                    height={140}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Kayaking
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Experience the thrill of kayaking in beautiful waters.
                  </Typography>
                  <Button size="small" variant="outlined" color="primary" aria-label="Learn more about kayaking" href="kayaking">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Hiking Card */}
            <Grid size={{ xs: 12, sm:6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px", // Rounded corners
                }}
              >
                <CardMedia>
                  <Image
                    src="/images/hiking/nichiking.jpg"
                    alt="Hiking"
                    width={400}
                    height={140}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hiking
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Discover breathtaking trails and scenic views.
                  </Typography>
                  <Button size="small" variant="outlined" color="primary" aria-label="Learn more about hiking" href="/hiking-events">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Camping Card */}
            <Grid size={{ xs: 12, sm:6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px", // Rounded corners
                }}
              >
                <CardMedia>
                  <Image
                    src="/images/camping/camp1.png"
                    alt="Camping"
                    width={400}
                    height={140}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Camping
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Enjoy the great outdoors with our camping experiences.
                  </Typography>
                  <Button size="small" variant="outlined" color="primary" aria-label="Learn more about camping" href="/camping-events">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Special Events Card */}
            <Grid size={{ xs: 12, sm:6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px", // Rounded corners
                }}
              >
                <CardMedia>
                  <Image
                    src="/images/people/ian-schneider-event.jpg"
                    alt="Events"
                    width={400}
                    height={140}
                    style={{ objectFit: "cover" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Special Events
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Join us for exciting events and activities.
                  </Typography>
                  <Button size="small" variant="outlined" color="primary" aria-label="Learn more about our upcoming special events" href="/special-events">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Box>
  );
}