import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenLoop | Automate Your Restaurant's Repeat Revenue",
  description: "The Restaurant Repeat Revenue Audit™. Calculate how much repeat revenue you're losing and fix it forever. No demos. Just results.",
  keywords: ["restaurant automation", "repeat revenue", "restaurant marketing", "customer retention", "restaurant technology"],
  authors: [{ name: "GreenLoop" }],
  creator: "GreenLoop",
  publisher: "GreenLoop",
  metadataBase: new URL('https://greenloop.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greenloop.dev',
    siteName: 'GreenLoop',
    title: "GreenLoop | Automate Your Restaurant's Repeat Revenue",
    description: "The Restaurant Repeat Revenue Audit™. Calculate how much repeat revenue you're losing and fix it forever.",
    images: [
      {
        url: 'https://greenloop.dev/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'GreenLoop - Automate Your Restaurant\'s Repeat Revenue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GreenLoop | Automate Your Restaurant's Repeat Revenue",
    description: "The Restaurant Repeat Revenue Audit™. Calculate how much repeat revenue you're losing and fix it forever.",
    images: ['https://greenloop.dev/og-image.svg'],
    creator: '@greenloop',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
