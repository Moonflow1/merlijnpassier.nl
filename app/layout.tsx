import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merlijn Passier - Film Director & Producer",
  description: "Portfolio of Merlijn Passier, Dutch film director, producer, and owner of Cutjongens production company. Award-winning documentary filmmaker and television presenter.",
  keywords: ["Merlijn Passier", "film director", "documentary", "Cutjongens", "Netherlands", "Golden Calf"],
  authors: [{ name: "Merlijn Passier" }],
  openGraph: {
    title: "Merlijn Passier - Film Director & Producer",
    description: "Award-winning Dutch film director and producer",
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
