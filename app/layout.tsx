// app/layout.tsx

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MD. Hafizur Rahman | Linux System Administrator",
  description:
    "Portfolio of MD. Hafizur Rahman - Linux System Administrator, Cloud Engineer & DevOps Enthusiast.",
  keywords: [
    "Linux",
    "AWS",
    "Kubernetes",
    "DevOps",
    "Cloud Engineer",
    "System Administrator",
    "RHCSA",
  ],
  authors: [{ name: "MD. Hafizur Rahman" }],
  creator: "MD. Hafizur Rahman",
  openGraph: {
    title: "MD. Hafizur Rahman",
    description:
      "Linux System Administrator | Cloud Engineer | DevOps Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} bg-[#0D1117] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
