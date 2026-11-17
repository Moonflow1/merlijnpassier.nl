import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
