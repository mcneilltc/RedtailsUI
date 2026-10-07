"use client";
import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { social } from "../../data/social";

const CURATOR_CONTAINER_ID = "curator-feed-default-feed-layout";

const SocialFeeds = () => {
  // Curator's script renders into the container once when it runs, so load a
  // fresh copy each time this section mounts (e.g. navigating back to Home).
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src = `https://cdn.curator.io/published/${social.curatorFeedId}.js`;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="social-feeds-heading"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "16px",
        p: { xs: 2, md: 4 },
      }}
    >
      <Typography
        id="social-feeds-heading"
        variant="h4"
        component="h2"
        sx={{ textAlign: "center", fontWeight: "bold", color: "text.primary", mb: 1 }}
      >
        Follow Our Adventures
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "text.secondary", mb: 4 }}
      >
        The latest photos, trip recaps, and event announcements.
      </Typography>

      {/* Curator.io feed (Instagram + Facebook). The "Powered by" link is
          required on the free plan. */}
      <div id={CURATOR_CONTAINER_ID}>
        <a href="https://curator.io" target="_blank" rel="noopener noreferrer" className="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<InstagramIcon />}
          href={social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow {social.instagramHandle}
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
          href={social.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Facebook
        </Button>
      </Box>
    </Box>
  );
};

export default SocialFeeds;
