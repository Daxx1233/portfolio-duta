import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Duta Fithra Qolby — Electronics & Embedded Systems Engineer",
  description:
    "Portfolio profesional Duta Fithra Qolby, S.Tr.T. — Fresh Graduate Sarjana Terapan Teknik Komputer PENS. Spesialis Embedded Systems, PCB Design, IoT, dan ESP32.",
  keywords: [
    "Duta Fithra Qolby",
    "embedded systems engineer",
    "PCB design",
    "ESP32",
    "IoT",
    "PENS",
    "portfolio",
    "electrical engineering",
    "S.Tr.T",
  ],
  authors: [{ name: "Duta Fithra Qolby" }],
  openGraph: {
    title: "Duta Fithra Qolby — Electronics & Embedded Systems Engineer",
    description:
      "Portfolio profesional Duta Fithra Qolby, S.Tr.T. — Embedded Systems, PCB Design & IoT Specialist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
