'use client'

import localFont from "next/font/local";
import "./globals.css";
import { PageContextProvider } from "./context/pageContext";

import { useContext } from "react";

import PageContext from "./context/pageContext";

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
    <PageContextProvider>
      <html lang="en">
          <body
            className={`${inriaSansBold.className} antialiased`}
          >
            {children}
          </body>
      </html>
    </PageContextProvider>
  );
}
