'use client';
import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailjsScript = () => {
  useEffect(() => {
    // Initialize EmailJS with additional configuration options
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Use environment variable
      blockHeadless: true, // Do not allow headless browsers
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'], // Block the suspended emails
        watchVariable: 'userEmail', // The variable contains the email address
      },
      limitRate: {
        id: 'app', // Set the limit rate for the application
        throttle: 10000, // Allow 1 request per 10s
      },
    });
  }, []);

  return null;
};

export default EmailjsScript;