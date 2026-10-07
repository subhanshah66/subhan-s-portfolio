import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Subhan Sikandar | Frontend Developer",
  description:
    "Frontend Developer with 2+ years of experience building modern web applications using React.js, Next.js, TypeScript and scalable frontend architecture.",
  keywords: [
    "Subhan Sikandar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "React Query",
    "Pakistan Frontend Developer"
  ],
  authors: [{ name: "Subhan Sikandar" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Subhan Sikandar | Frontend Developer",
    description:
      "Selected frontend work across education, marketplace, healthcare and SaaS products.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
