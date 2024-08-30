
import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google"
import "./globals.css";


import { cn } from "@/lib/utils"
import { useRef } from "react";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Rutwik Kashid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}>
          {children}
      </body>
    </html>
  );
}
