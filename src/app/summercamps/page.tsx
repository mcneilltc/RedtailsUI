"use client";
import { Container, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

const campWeeks = [
  {
    title: "Summer Camp Week 1",
    date: "June 10 - June 14, 2025",
    description: "A week of outdoor adventure, kayaking, hiking, and fun activities for ages 8-14.",
    image: "/images/scenes/robert-collins.jpg",
    registerUrl: "https://your-registration-link.com/week1",
  },
  {
    title: "Summer Camp Week 2",
    date: "June 17 - June 21, 2025",
    description: "Join us for another week of nature exploration, games, and campfire nights!",
    image: "/images/scenes/anna-samoylova.jpg",
    registerUrl: "https://your-registration-link.com/week2",
  },
];

export default function SummerCamps() {
  return (
    <Box
    sx={{
        backgroundImage: "url('/images/scenes/artem-kniaz.jpg')", // <-- your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        py: 8,
      }}>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: "bold" }}>
        Summer Camps 2025
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
        {campWeeks.map((camp, idx) => (
          <Card key={idx} sx={{ width: 340, display: "flex", flexDirection: "column", borderRadius: 3 }}>
            <CardMedia>
              <Image
                src={camp.image}
                alt={camp.title}
                width={340}
                height={180}
                style={{ objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" gutterBottom>{camp.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>{camp.date}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{camp.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                href={camp.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                aria-label={`Register for ${camp.title}`}
              >
                Register
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
    </Box>
  );
}