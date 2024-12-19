import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
// import { CartProvider } from "../context/CartContext";
import { ThemeProvider } from "./components/ThemeProvider";

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
      <body className={`${alkatra.variable} antialiased`}>
        <ThemeProvider>
            <Navigation />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
