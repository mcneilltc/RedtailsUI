'use client';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import './styles.css'; // Import your CSS file

export default function Home() {
  return (
    <div className="background">
      <Container>
        <Typography variant="h1" className="title">Welcome to Red Tails Outdoors</Typography>
        <br/>
        <Grid container spacing={4} justifyContent="center">
          {/* Kayaking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardMedia
                component="img"
                height="140"
                image="/images/kayaks/dapo-olusola.jpg" // Replace with your image path
                alt="Kayaking"
              />
              <CardContent>
                <Typography variant="h5">Kayaking</Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience the thrill of kayaking in beautiful waters.
                </Typography>
                <Button size="small" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Hiking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardMedia
                component="img"
                height="140"
                image="/images/hiking/nichiking.jpg" // Replace with your image path
                alt="Hiking"
              />
              <CardContent>
                <Typography variant="h5">Hiking</Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover breathtaking trails and scenic views.
                </Typography>
                <Button size="small" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Camping Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardMedia
                component="img"
                height="140"
                image="/images/camping/denys-nevozhai-camping.jpg" // Replace with your image path
                alt="Camping"
              />
              <CardContent>
                <Typography variant="h5">Camping</Typography>
                <Typography variant="body2" color="text.secondary">
                  Enjoy the great outdoors with our camping experiences.
                </Typography>
                <Button size="small" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Events Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardMedia
                component="img"
                height="140"
                image="/images/people/ian-schneider-event.jpg" // Replace with your image path
                alt="Events"
              />
              <CardContent>
                <Typography variant="h5">Events</Typography>
                <Typography variant="body2" color="text.secondary">
                  Join us for exciting events and activities.
                </Typography>
                <Button size="small" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

