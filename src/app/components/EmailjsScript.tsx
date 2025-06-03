'use client';
import React, { useEffect } from 'react';

const EmailjsScript = () => {
  useEffect(() => {
    // Dynamically import emailjs only on the client and when needed
    import('@emailjs/browser').then((emailjs) => {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        blockList: {
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          watchVariable: 'userEmail',
        },
        limitRate: {
          id: 'app',
          throttle: 10000,
        },
      });
    });
  }, []);

  return null;
};

export default EmailjsScript;