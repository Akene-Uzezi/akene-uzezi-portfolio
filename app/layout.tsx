import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import { navigationData } from "@/types/types";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Akene Uzezi | Full-Stack Software Engineer",
  description:
    "Full-stack engineer dedicated to building fast, cloud-ready architectures and immersive web experiences. Focused on precision, performance, and clean execution.",
  keywords: [
    "Akene Uzezi",
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "Go",
    "Developer Portfolio",
    "Nigeria",
  ],
  authors: [{ name: "Akene Uzezi" }],
  openGraph: {
    title: "Akene Uzezi | Full-Stack Software Engineer",
    description:
      "Full-stack engineer dedicated to building fast, cloud-ready architectures and immersive web experiences.",
    url: "https://akene-uzezi.vercel.app",
    siteName: "Akene Uzezi Portfolio",
    type: "website",
  },
  verification: {
    google: "_Ezq8_6yTUBQVQdF60KXs9BwT3a-iwVCkqARC42pmXU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header navigationData={navigationData} />
        {children}
      </body>
    </html>
  );
}
