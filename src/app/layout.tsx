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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
