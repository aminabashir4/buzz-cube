import type { Metadata } from "next";
import { Montserrat, Questrial } from "next/font/google";
import "./globals.css";

// Montserrat → for headings
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Questrial → for body text
const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuzzCube | AI Marketing Automation",
  description:
    "Boost conversions and automate lead generation with BuzzCube’s AI-powered marketing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${questrial.variable}`}>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
