"use client";
import React, { useRef, useState } from 'react';
import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import EmailjsScript from '../EmailjsScript';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface AlertState {
  type: 'success' | 'error';
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [alert, setAlert] = useState<AlertState | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const resetForm = () => {  // Separate reset function
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    formRef.current?.reset(); // Optional chaining: safe to call reset()
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && formRef.current) {
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current
        ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setAlert({ type: 'success', message: 'Message sent successfully!' });
          resetForm(); // Call the reset function
        }).catch((err) => {
          console.error('FAILED...', err);
          setAlert({ type: 'error', message: 'Failed to send message. Please try again later.' });
        });
      } else {
        console.error("EmailJS config or form ref is missing!");
        setAlert({ type: 'error', message: 'An error occurred. Please try again later.' });
      }
    };

  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundColor: 'background.paper',
        px: 2,
      }}
    >
      <EmailjsScript />
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 4,
          }}
        >
          Contact Us
        </Typography>
        {alert && (
          <Alert severity={alert.type} sx={{ mb: 4 }}>
            {alert.message}
          </Alert>
        )}
        <form id="contact-form" ref={formRef} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder="Enter your name"
            margin="normal"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Enter your email"
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            placeholder="Enter your phone number"
            margin="normal"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            placeholder="Enter the subject"
            margin="normal"
            variant="outlined"
            value={formData.subject}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            placeholder="Enter your message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactUsForm;