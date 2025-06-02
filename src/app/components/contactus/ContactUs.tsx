"use client";
import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";

const ContactUs = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        backgroundColor: "background.paper",
        px: 2,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.5rem" },
          }}
        >
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Have questions about our services? We&apos;d love to hear from you.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            component="a"
            href="mailto:redtailsoutdoors@gmail.com"
            aria-label="Email us"
            color="primary"
            title="Email us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://www.facebook.com/people/Red-Tails-Outdoors/61570894457374/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Facebook page"
            aria-label="Visit our Facebook page"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="a"
            href="https://www.instagram.com/redtailsoutdoors/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram page"
            aria-label="Visit our Instagram page"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          ©2025 by Red Tails Outdoors, LLC.
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src="/images/logos/leave-no-trace-logo.png"
            alt="Leave No Trace Logo"
            sx={{
              height: 48,
              width: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
