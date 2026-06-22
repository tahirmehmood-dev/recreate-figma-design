import type { Metadata, Viewport } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Instacon",
  description:
    "Instacon delivers project management, construction, interior fit-outs, and operational solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        <link rel="preload" as="video" href="/videos/Instacon.mp4" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
