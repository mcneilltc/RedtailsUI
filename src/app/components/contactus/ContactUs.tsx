"use client";
import React from "react";
import { Container, Typography, Box, IconButton, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import { social } from "../../data/social";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Kayaking", href: "/kayaking" },
  { label: "Kayaking Events", href: "/kayaking-events" },
  { label: "Hiking", href: "/hiking-events" },
  { label: "Camping", href: "/camping-events" },
  { label: "Special Events", href: "/special-events" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contactus-page" },
];

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
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Follow us for event announcements, photos, and trip updates.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            component="a"
            href={`mailto:${social.email}`}
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
            href={social.facebookUrl}
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
            href={social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram page"
            aria-label="Visit our Instagram page"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box
          component="nav"
          aria-label="Footer"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: 3,
            rowGap: 1,
            mt: 4,
          }}
        >
          {footerLinks.map((link) => (
            <MuiLink
              key={link.href}
              component={Link}
              href={link.href}
              color="text.secondary"
              underline="hover"
            >
              {link.label}
            </MuiLink>
          ))}
        </Box>
        {/* Year may differ between build time and the visitor's clock */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }} suppressHydrationWarning>
          ©{new Date().getFullYear()} by Red Tails Outdoors, LLC.
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
