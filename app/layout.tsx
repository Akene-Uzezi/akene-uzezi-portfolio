import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Akene Uzezi | Full-Stack Software Engineer",
  description:
    "Portfolio of Akene Uzezi, a full-stack engineer building robust backend systems with Go and Node.js, containerized infrastructure, and fluid interactive frontends.",
  openGraph: {
    title: "Akene Uzezi | Full-Stack Software Engineer",
    description:
      "Portfolio of Akene Uzezi, a full-stack engineer building robust backend systems with Go and Node.js, containerized infrastructure, and fluid interactive frontends.",
    siteName: "Akene Uzezi Portfolio",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header navigationData={navigationData} />
        {children}
      </body>
    </html>
  );
}
