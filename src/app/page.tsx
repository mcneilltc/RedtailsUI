"use client";

import {
  Container,
//   Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CardHeader,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image"; // Optimize images
import "./styles.css";
import Link from "next/link";
// https://mui.com/material-ui/react-grid2/
import Grid from '@mui/material/Grid2';

export default function Home() {
  const theme = useTheme();

  // Number of columns for the grid
  // xs will take up 16 columns on extra small screens, 4 columns on small screens, and 4 columns on medium screens
  const numColumns = 16;

  // Card image height
  const cardImageHeight = 245;

  return (
    <main>
    <Box
    // This gives this box the background image
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
            textShadow: '2px 2px 4px rgba(7, 7, 7, 0.7)',
            padding: '0.5rem 1rem'
          }}
        >
          Welcome to Red Tails Outdoors
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
          variant="h2"
          sx={{
            color: theme.palette.text.secondary,
            mt: 1,
            textShadow: '2px 2px 4px rgba(7, 7, 7, 0.7)',
            padding: '0.5rem 1rem',
            // styles from h4 variant applied to h2 tag for accessibility
            fontWeight: 400,
            lineHeight: 1.235,
            fontSize: '2.125rem',
          }}
        >
          Explore nature with us—kayaking, hiking, camping, and more!
        </Typography>
      </Box>
    </Box>

    <Box
    // className="background"
    sx={{
      backgroundColor: '#ffffff',
    //   backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      padding: "2rem 2rem",
      width: '100%',
    }}
    >
        <Typography variant="h2" sx={{fontSize: "2rem", margin: "1rem 0" }}>Upcoming Activities &amp; Events</Typography>

        <Grid container spacing={{ xs: 1, md: 3 }} columns={numColumns}>
            <Grid key={0} size={{ xs: numColumns, sm: 4, md: 4 }}>
                <Card sx={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
                    <CardMedia
                        sx={{ height: cardImageHeight}}
                        image="/images/kayaks/dapo-olusola.jpg"
                        title="Kayaking"
                        style={{ objectFit: "cover" }}
                    />
                    <CardHeader title="Kayaking" sx={{ paddingBottom: '0' }}>
                        <Typography variant="h5" component="div">
                            Kayaking
                            </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ minHeight: '3.125rem'}}>
                        Experience the thrill of kayaking in beautiful waters.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" aria-label="Learn more about kayaking" href="/kayaking">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid key={1} size={{ xs: numColumns, sm: 4, md: 4 }}>
                <Card sx={{ backgroundColor: '#ffffff', borderRadius: '12px', height: '100%' }}>
                    <CardMedia
                        sx={{
                            height: cardImageHeight,
                        }}
                        image="/images/hiking/nichiking.jpg"
                        title="Hiking"
                        style={{ objectFit: "cover" }}
                        />
                        <CardHeader title="Hiking" sx={{ paddingBottom: '0' }}>
                        <Typography variant="h5" component="div">
                        Hiking
                        </Typography>
                    </CardHeader>
                    <CardContent >
                        <Typography variant="body2" color="text.secondary" sx={{ minHeight: '3.125rem'}}>
                        Discover breathtaking trails and scenic views.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" variant="contained" color="primary" aria-label="Learn more about hiking" href="/hiking-events">
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid key={2} size={{ xs: numColumns, sm: 4, md: 4 }}>
                <Card sx={{ backgroundColor: '#ffffff', borderRadius: '12px', height: '100%' }}>
                    <CardMedia
                    sx={{
                        height: cardImageHeight,
                    }}
                    image="/images/camping/camp1.png"
                    title="Camping"
                    style={{ objectFit: "cover" }}
                    />
                    <CardHeader title="Camping" sx={{ paddingBottom: '0' }}>
                        <Typography variant="h5" component="div">
                            Camping
                        </Typography>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ minHeight: '3.125rem'}}>
                            Enjoy the great outdoors with our camping experiences.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" aria-label="Learn more about camping" href="/camping-events">
                            Learn More
                        </Button>
                    </CardActions>

                </Card>
            </Grid>

            <Grid key={3} size={{ xs: numColumns, sm: 4, md: 4 }}>
                <Card sx={{ backgroundColor: '#ffffff', borderRadius: '12px', height: '100%' }}>
                <CardMedia
                    sx={{
                    height: cardImageHeight,
                    }}
                    image="/images/people/ian-schneider-event.jpg"
                    title="Events"
                    style={{ objectFit: "cover" }}
                    />
                    <CardHeader title="Special Events" sx={{ paddingBottom: '0' }}>
                    <Typography variant="h5" component="div">
                    Special Events
                    </Typography>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: '3.125rem'}}>
                    Join us for exciting events and activities.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" aria-label="Learn more about our upcoming special events" href="/special-events">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
    </Box>
    </main>
  );
}
