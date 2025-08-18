import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import ContactUs from "./components/contactus/ContactUs";
import { Container } from "@mui/material";

const alkatra = localFont({
  src: "./fonts/Alkatra-Regular.ttf",
  variable: "--font-alkatra-regular",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Redtails",
  description: "Book your outdoor adventure",
  openGraph: {
    images: [
      {
        url: "/images/logos/logo2.png",
        width: 1200,
        height: 630,
        alt: "Red Tails Outdoors Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logos/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logos/logo2.png" type="image/png" />
        {/* Or use favicon.ico */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Red Tails Outdoors</title>
      </head>
      <body>
        <ThemeProvider>
          <div className="navigation-wrapper">
            <Navigation />
          </div>
          <main className="content-wrapper">
            {children}
            <ContactUs />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
