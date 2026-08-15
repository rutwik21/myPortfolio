
import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google"
import "./globals.css";


import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Rutwik Kashid | Software Engineer · 3+ YOE · Full-Stack & Cloud",
  description: "Software Engineer with 3+ years of product company experience. Node.js, React, Next.js, TypeScript, AWS, Docker, System Design. Building scalable full-stack applications and cloud infrastructure.",
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
