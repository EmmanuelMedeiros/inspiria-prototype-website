'use client'

import localFont from "next/font/local";
import "./globals.css";

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
