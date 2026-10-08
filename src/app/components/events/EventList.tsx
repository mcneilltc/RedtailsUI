"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import {
  EventCategory,
  EventFlier,
  RedtailsEvent,
  getUpcomingEvents,
} from "../../data/events";
import { social } from "../../data/social";

const DEFAULT_FLIER_RATIO = 1024 / 1536; // 2:3 portrait
const FLIER_GAP_PX = 16; // space between side-by-side fliers

const flierRatio = (flier: EventFlier) =>
  flier.width && flier.height ? flier.width / flier.height : DEFAULT_FLIER_RATIO;

type EventCardProps = {
  event: RedtailsEvent;
  /** Compact cards show only the first flier, sized for a 3-across row. */
  compact?: boolean;
};

export const EventCard = ({ event, compact = false }: EventCardProps) => {
  const fliers = compact ? event.fliers.slice(0, 1) : event.fliers;

  // Cards grow in proportion to their fliers' combined width-to-height ratio,
  // so every flier in a row ends up the same height and fills its own box.
  const ratioSum = fliers.reduce((sum, flier) => sum + flierRatio(flier), 0);
  const gaps = FLIER_GAP_PX * (fliers.length - 1);
  const baseHeight = compact ? 300 : 480; // flier height before wrapping
  const maxHeight = compact ? 460 : 640; // flier height cap on wide screens

  return (
    <Box
      sx={{
        // Grow values are scaled by 100: flex-grow below 1 only claims part of the free space.
        flex: `${ratioSum * 100} 1 ${ratioSum * baseHeight + gaps}px`,
        maxWidth: `${ratioSum * maxHeight + gaps}px`,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Multiple fliers (e.g. English + Spanish) sit side by side, stacked on phones */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: `${FLIER_GAP_PX}px`,
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
            width={flier.width}
            height={flier.height}
            loading="lazy"
            sx={{
              flex: { xs: "none", sm: `${flierRatio(flier) * 100} 1 0` },
              minWidth: 0,
              display: "block",
              width: "100%",
              height: "auto", // Maintain aspect ratio
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
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
        sx={{ mt: "auto" }} // Keep buttons aligned when titles wrap differently
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
          <Link href={social.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>{" "}
          or{" "}
          <Link
            href={social.facebookUrl}
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
