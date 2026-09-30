"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import {
  EventCategory,
  RedtailsEvent,
  getUpcomingEvents,
} from "../../data/events";

const flierSx = {
  flex: 1,
  minWidth: 0,
  width: "100%",
  height: "auto", // Maintain aspect ratio
  border: "1px solid #ccc",
  borderRadius: "8px",
  objectFit: "contain", // Ensure the image fits within the box
} as const;

type EventCardProps = {
  event: RedtailsEvent;
  /** Compact cards show only the first flier, sized for a 3-across row. */
  compact?: boolean;
};

export const EventCard = ({ event, compact = false }: EventCardProps) => {
  const fliers = compact ? event.fliers.slice(0, 1) : event.fliers;
  const multiFlier = fliers.length > 1;

  return (
    <Box
      sx={{
        width: compact
          ? { xs: "100%", sm: "45%", md: "30%" }
          : { xs: "100%", sm: "65%", md: multiFlier ? "82%" : "40%" }, // Responsive width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Multiple fliers (e.g. English + Spanish) sit side by side, stacked on mobile */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          width: "100%",
          mb: 2,
        }}
      >
        {fliers.map((flier) => (
          <Box
            key={flier.src}
            component="img"
            src={flier.src}
            alt={flier.alt}
            loading="lazy"
            sx={flierSx}
          />
        ))}
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
        {event.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", display: "flex", alignItems: "center", gap: 0.5 }}
      >
        <CalendarMonthIcon fontSize="small" aria-hidden /> {event.displayDate}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", display: "flex", alignItems: "center", gap: 0.5, mb: 2 }}
      >
        <PlaceIcon fontSize="small" aria-hidden /> {event.location}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={event.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${event.title}`}
      >
        Book Now
      </Button>
    </Box>
  );
};

type EventListProps = {
  category?: EventCategory;
  limit?: number;
  compact?: boolean;
};

const EventList = ({ category, limit, compact = false }: EventListProps) => {
  // Filter after mount so "upcoming" uses the visitor's current date rather
  // than the date the static page was built.
  const [upcoming, setUpcoming] = useState<RedtailsEvent[] | null>(null);

  useEffect(() => {
    setUpcoming(getUpcomingEvents(category).slice(0, limit));
  }, [category, limit]);

  if (upcoming === null) return null;

  if (upcoming.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 4, px: 2 }}>
        <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
          New events are on the way!
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Follow us on{" "}
          <Link href="https://www.instagram.com/redtailsoutdoors/" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.facebook.com/people/Red-Tails-Outdoors/61570894457374/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>{" "}
          to hear about them first.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Allow wrapping to the next row
        justifyContent: "center", // Center flyers horizontally
        gap: 4, // Add spacing between flyers
        mt: 4, // Add margin at the top
      }}
    >
      {upcoming.map((event) => (
        <EventCard key={event.id} event={event} compact={compact} />
      ))}
    </Box>
  );
};

export default EventList;
