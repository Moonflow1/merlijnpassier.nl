import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merlijn Passier - Director, Creative, Writer & Producer",
  description: "Portfolio of Merlijn Passier, Dutch director, creative, writer and producer, and owner of Cutjongens production company. Award-winning documentary filmmaker and television presenter.",
  keywords: ["Merlijn Passier", "director", "creative", "writer", "producer", "documentary", "Cutjongens", "Netherlands", "Golden Calf"],
  authors: [{ name: "Merlijn Passier" }],
  openGraph: {
    title: "Merlijn Passier - Director, Creative, Writer & Producer",
    description: "Award-winning Dutch director, creative, writer and producer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* Visitor counts for the dashboard at vercel.com, nothing on the page
            itself. It only records once the site is deployed on Vercel; in
            local development the script is a no-op. */}
        <Analytics />
      </body>
    </html>
  );
}
