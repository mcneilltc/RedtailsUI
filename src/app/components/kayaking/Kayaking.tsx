"use client";
import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image"; // Optimize images
import Link from "next/link";
import Banner from "../banner/Banner";
import CircleIcon from "@mui/icons-material/Circle";

const Kayaking = () => {
  return (
    <>
      {/* <Container> */}
      <Box sx={{ position: "relative" }}>
        <Banner
          title="Kayaking Adventures"
          imageUrl="/images/kayaks/kayaking.png"
        />
        <Box
          sx={{
            position: "absolute",
            top: "1rem", // Adjust as needed
            left: "1rem", // Adjust as needed
            zIndex: 30, // Ensure the button is above the banner
          }}
        >
          <Link href="/" passHref>
            <Button variant="contained" sx={{ mb: 2 }}>
              ← Back to Home
            </Button>
          </Link>
        </Box>
      </Box>
      {/* </Container> */}

      <Container maxWidth="lg">
        <main>
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
              paddingLeft: "1rem",
            }}
          >
            <Container maxWidth="lg">
              {/* <Banner title="Kayaking Adventures" imageUrl="/images/scenes/shoreshot.png" />     */}
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
                >
                  Paddle at Your Own Pace!
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Discover the beauty of nature on your terms with our
                  self-guided kayak rentals. Whether you're seeking solitude or
                  a shared experience, our flexible rental options let you
                  explore at your own rhythm.
                </Typography>

                <Box
                  sx={{
                    alignItems: "center",
                    mb: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          fontSize="inherit"
                          sx={{ color: "text.secondary" }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        Explore various scenic locations with the freedom to
                        paddle your own route.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          fontSize="inherit"
                          sx={{ color: "text.secondary" }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        All Gear Included: Kayak, paddle, life jacket, and map
                        provided for your adventure.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon
                          fontSize="inherit"
                          sx={{ color: "text.secondary" }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        Support When Needed: We're just a call away if you need
                        assistance.
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Featured Location: Neck Road Boat Ramp – Mountain Island Lake
                  Launch from this easy-access ramp and enjoy calm waters, lush
                  views, and the chance to see local wildlife. It’s a peaceful
                  start to your adventure, especially during weekday mornings or
                  quieter hours.
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Looking for Something Special?{" "}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Join one of our special kayaking events — including night
                  paddles, early morning paddles, and group outings — designed
                  for those who want a unique guided experience on the water.
                </Typography>
              </Box>

              <Grid container spacing={4} justifyContent="center">
                {/* Guided Adventures Card 1 */}
                {/* <Grid size={{ xs: 12, sm:6, md: 3 }}>
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
                      src="/images/kayaks/autumn-kuney.jpg"
                      alt="Kayak Adventures"
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
                      Guided Adventures
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Join us for a guided kayak tour through beautiful
                      landscapes.
                    </Typography>
                    <Button
                      size="small"
                      color="primary"
                      aria-label="Learn more about guided kayak tours"
                      href="/coming-soon"
                      variant="outlined"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid> */}

                {/* Kayak Rentals Card 2 */}
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      borderRadius: "16px",
                    }}
                  >
                    <CardMedia sx={{ height: 140 }}>
                      <Image
                        src="/images/kayaks/kelsey-dody.jpg"
                        alt="Kayak Rentals"
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
                        Kayak Rentals
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        Rent a kayak and explore at your own pace.
                      </Typography>
                      <Link href="/locations" passHref>
                        <Button
                          size="small"
                          color="primary"
                          aria-label="Learn more about kayak rentals"
                          variant="outlined"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Kayaking Events Card 5*/}
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      borderRadius: "16px",
                    }}
                  >
                    <CardMedia sx={{ height: 140 }}>
                      <Image
                        src="/images/kayaks/IMG_4950.jpeg"
                        alt="Kayaking Events"
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
                        Kayaking Events
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        Where every paddle has a story!
                      </Typography>
                      <Link href="/kayaking-events" passHref>
                        <Button
                          size="small"
                          color="primary"
                          aria-label="Learn more about kayak rentals"
                          variant="outlined"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Sunset Kayaking Card 3 */}
                {/* <Grid size={{ xs: 12, sm:6, md: 3 }}>
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
                      src="/images/scenes/sunshot.png"
                      alt="Sunset Kayaking"
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
                      Sunset Kayaking
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Experience the beauty of sunset while kayaking on the
                      water.
                    </Typography>
                    <Button
                      size="small"
                      color="primary"
                      aria-label="Learn more about sunset kayaking"
                      href="/coming-soon"
                      variant="outlined"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid> */}

                {/* Evening Kayaking Card 4 */}
                {/* <Grid size={{ xs: 12, sm:6, md: 3 }}>
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
                        src="/images/scenes/vincentiu-solomon.jpg"
                        alt="Evening Kayaking"
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
                        Evening Paddles
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        Enjoy a thrilling experience of kayaking at night.
                      </Typography>
                      <Button
                        size="small"
                        color="primary"
                        aria-label="Learn more about evening paddles"
                        href="/night-paddle"
                        variant="outlined"
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

export default Kayaking;
