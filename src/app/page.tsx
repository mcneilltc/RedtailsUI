"use client";

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
import { useTheme } from "@mui/material/styles";
import Image from "next/image"; // Optimize images
import "./styles.css";

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
      {/* Title Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h1"
          // style={{
          //   color: theme.palette.text.primary,
          //   margin: 0,
          // }}
          component="h1"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
          }}
        >
          Welcome to Red Tails Outdoors
        </Typography>

      </Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mt: 1,
          }}
        >
          Explore nature with us—kayaking, hiking, camping, and more!
        </Typography>
      </Box>


      <Container maxWidth="lg" style={{ paddingTop: '150px' }}>
        {/* Cards Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Kayaking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
                <Typography variant="body2" color="text.secondary">
                  Experience the thrill of kayaking in beautiful waters.
                </Typography>
                {/* <Button size="small" color="primary" aria-label="Learn more about kayaking" href="https://book.peek.com/s/c76e9d6c-44fd-4cda-821d-fc3611e33423/2XyOP"> */}
                <Button size="small" color="primary" aria-label="Learn more about kayaking" href="kayaking">
                Learn More
              </Button>
              </CardContent>

            </Card>
          </Grid>

          {/* Hiking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
                <Typography variant="body2" color="text.secondary">
                  Discover breathtaking trails and scenic views.
                </Typography>
                <Button size="small" color="primary" aria-label="Learn more about hiking" href="/hiking-events">
                Learn More
              </Button>
              </CardContent>

            </Card>
          </Grid>

          {/* Camping Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
                <Typography variant="body2" color="text.secondary">
                  Enjoy the great outdoors with our camping experiences.
                </Typography>
                <Button size="small" color="primary" aria-label="Learn more about camping" href="/camping-events">
                Learn More
              </Button>
              </CardContent>

            </Card>
          </Grid>

          {/* Events Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
                  Events
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Join us for exciting events and activities.
                </Typography>
                <Button size="small" color="primary" aria-label="Learn more about events" href="/special-events">
                Learn More
              </Button>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
