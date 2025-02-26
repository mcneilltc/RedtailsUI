"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Container>
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "auto",
            marginBottom: "2rem",
            marginTop: "8rem",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, mt: 3 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Find answers to common questions about our services and adventures.
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Accordion sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "primary.default" }}
              >
                <Typography>What services do you offer?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  We offer a variety of outdoor adventures including kayaking,
                  hiking, camping, and more. Our services are designed to
                  provide a fun and safe experience for all skill levels.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "primary.default" }}
              >
                <Typography>How can I book an adventure?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  You can book an adventure through our website by visiting the
                  home page and selecting your activity. If you have any
                  questions or need assistance, feel free to contact us.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                sx={{
                  backgroundColor: "primary.default",
                  color: "text.primary",
                }}
              >
                <Typography>What should I bring on a kayaking trip?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  We recommend bringing water, sunscreen, a hat, swim suit, and
                  comfortable clothing. We provide all necessary equipment
                  including kayaks, paddles, and life jackets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                sx={{
                  backgroundColor: "primary.default",
                  color: "text.primary",
                }}
              >
                <Typography>
                  Are your adventures suitable for beginners?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  Yes, our adventures are suitable for all skill levels. Our
                  experienced guides will ensure that you have a safe and
                  enjoyable experience.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
                sx={{
                  backgroundColor: "primary.default",
                  color: "text.primary",
                }}
              >
                <Typography>
                  How can I contact you for more information?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  You can contact us via email at redtailsoutdoors@gmail.com or
                  through our social media channels. We are always happy to
                  answer any questions you may have.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "primary.default" }}
              >
                <Typography>
                  What are the weight restrictions for your kayaks?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  Our single kayaks can hold 275lbs plus equipment. The tandem
                  kayaks have a max capacity of 400lbs, there is seating for 2
                  adults and a young child if the weight combination allows. Our
                  11' paddleboards can hold up to 275lbs. Our child kayaks hold
                  up to 130lbs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "primary.default" }}
              >
                <Typography>What is your inclement weather policy?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  Red Tails Outdoors prioritizes the safety of customers and
                  staff during adverse weather conditions. The following
                  policies apply:
                </Typography>

                <List>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      1. Inclement Weather Closures: Rentals and events will
                      be canceled in the event of severe weather, including
                      thunderstorms, heavy rain, high winds, or other conditions
                      deemed unsafe. Customers will be notified as soon as
                      possible if cancellations are necessary.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      2. Refunds for Weather-Related Cancellations: Full
                      Refund: If Red Tails Outdoors cancels a reservation due to
                      unsafe weather conditions. Rescheduling Option:
                      Customers may reschedule their reservation at no
                      additional cost.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      3. Customer-Initiated Weather Concerns: If a customer
                      cancels due to weather concerns and conditions are safe
                      for activity, the standard cancellation policy applies.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      4. On-Water Weather Emergencies: In the event of sudden
                      weather changes while on the water, customers are required
                      to return to shore immediately. Life jackets must remain
                      on, and staff will provide assistance as needed.
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{ boxShadow: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ backgroundColor: "primary.default" }}
              >
                <Typography>What is your cancellation policy?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "background.default" }}>
                <Typography>
                  Red Tails Outdoors has a tiered cancellation policy to balance
                  customer satisfaction and business stability:{" "}
                </Typography>
                <List>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      1. 100% Refund: If canceled within 24 hours of making the
                      reservation.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      2. 50% Refund: If canceled within 24 hours before the
                      reservation start time.{" "}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      3. Fair Policy for Same-Day Cancellations: Refunds for
                      cancellations within 24 hours of usage will be assessed on
                      a case-by-case basis. In most cases, a 25% refund will
                      apply if the equipment has been prepared.
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </main>
    </Container>
  );
};

export default FAQ;
