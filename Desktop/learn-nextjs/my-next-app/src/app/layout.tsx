import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../global.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doffy's Home Page",
  description: "This is web Doffy's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{marginBottom:20}}>
        <Navbar></Navbar>
        {children}
     
      </body>
    </html>
  );
}
