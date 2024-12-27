'use client';

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './styles.css'; // Import your custom CSS if needed

export default function Home() {
  const theme = useTheme(); // Access the current theme

  return (
    <div
      className="background"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container>
        <Typography
          variant="h1"
          style={{
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
        >
          Welcome to Red Tails Outdoors
        </Typography>
        <br />
        <Grid container spacing={4} justifyContent="center">
          {/* Kayaking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/kayaks/dapo-olusola.jpg"
                alt="Kayaking"
              />
              <CardContent>
                <Typography variant="h5" color={theme.palette.text.primary}>
                  Kayaking
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  Experience the thrill of kayaking in beautiful waters.
                </Typography>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Hiking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/hiking/nichiking.jpg"
                alt="Hiking"
              />
              <CardContent>
                <Typography variant="h5" color={theme.palette.text.primary}>
                  Hiking
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  Discover breathtaking trails and scenic views.
                </Typography>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Camping Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/camping/camp1.png"
                alt="Camping"
              />
              <CardContent>
                <Typography variant="h5" color={theme.palette.text.primary}>
                  Camping
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  Enjoy the great outdoors with our camping experiences.
                </Typography>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Events Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/people/ian-schneider-event.jpg"
                alt="Events"
              />
              <CardContent>
                <Typography variant="h5" color={theme.palette.text.primary}>
                  Events
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                  Join us for exciting events and activities.
                </Typography>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
