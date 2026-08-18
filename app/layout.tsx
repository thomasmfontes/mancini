import type { Metadata, Viewport } from "next";
import { JsonLd } from "../src/components/public/JsonLd";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#260709",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.famigliamancini.com.br"),
  title: "Famiglia Mancini Trattoria | Desde 1980 na Rua Avanhandava",
  description:
    "Desde 1980, cozinha italiana generosa, mesa de antepastos e encontros na emblemática Rua Avanhandava, em São Paulo.",
  keywords: [
    "Famiglia Mancini",
    "restaurante italiano",
    "Rua Avanhandava",
    "trattoria",
    "São Paulo",
    "Bela Vista",
    "massas",
    "pizzaria",
  ],
  authors: [{ name: "Famiglia Mancini" }],
  creator: "Famiglia Mancini",
  publisher: "Famiglia Mancini",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.famigliamancini.com.br",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Famiglia Mancini — Desde 1980 na Rua Avanhandava",
    description: "Tradição italiana, mesa farta e coração paulistano.",
    url: "https://www.famigliamancini.com.br",
    siteName: "Famiglia Mancini",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://famiglia-mancini-avanhandava.familiafontes.chatgpt.site/og-v3.png",
        width: 1536,
        height: 1024,
        alt: "Famiglia Mancini — Rua Avanhandava, São Paulo, desde 1980",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Famiglia Mancini — Desde 1980 na Rua Avanhandava",
    description: "Tradição italiana, mesa farta e coração paulistano.",
    images: ["https://famiglia-mancini-avanhandava.familiafontes.chatgpt.site/og-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://static.wixstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://static.wixstatic.com" />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
