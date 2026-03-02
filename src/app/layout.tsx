import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "CV ASRI 1188 - Manufacturing Tekstil, Konveksi & Clothing | Tangerang",
  description:
    "Pusat Industri Tekstil, Konveksi & Clothing terpercaya sejak 2012 di Cipadu, Tangerang. Melayani area Tangerang, Jakarta & sekitarnya. Solusi manufaktur terintegrasi dari hulu ke hilir.",
  keywords: [
    "CV ASRI 1188",
    "konveksi Tangerang",
    "konveksi Jakarta",
    "tekstil Cipadu",
    "pabrik konveksi",
    "jasa konveksi",
    "clothing brand",
    "sablon DTF",
    "bahan kain",
    "cotton combed",
    "hoodie custom",
    "kaos custom Tangerang",
  ],
  authors: [{ name: "CV ASRI 1188" }],
  icons: {
    icon: "/image/logo/logo01.png",
    apple: "/image/logo/logo01.png",
  },
  openGraph: {
    title: "CV ASRI 1188 - Manufacturing Tekstil, Konveksi & Clothing",
    description:
      "Pusat Industri Tekstil, Konveksi & Clothing terpercaya sejak 2012 di Cipadu, Tangerang. Melayani area Tangerang, Jakarta & sekitarnya.",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/image/logo/logo01.png", alt: "CV ASRI 1188 Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
