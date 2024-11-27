'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inriaSansBold = localFont({
  src: "./fonts/InriaSans-Bold.ttf",
  variable: "--font-inria-sans"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
      <body
        className={`${inriaSansBold.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
