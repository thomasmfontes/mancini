import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.famigliamancini.com.br"),
  title: "Famiglia Mancini Trattoria | Desde 1980 na Rua Avanhandava",
  description: "Desde 1980, cozinha italiana generosa, mesa de antepastos e encontros na emblemática Rua Avanhandava, em São Paulo.",
  keywords: ["Famiglia Mancini", "restaurante italiano", "Rua Avanhandava", "trattoria", "São Paulo"],
  openGraph: {
    title: "Famiglia Mancini — Desde 1980 na Rua Avanhandava",
    description: "Tradição italiana, mesa farta e coração paulistano.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "https://famiglia-mancini-avanhandava.familiafontes.chatgpt.site/og-v3.png", width: 1536, height: 1024, alt: "Famiglia Mancini — Rua Avanhandava, São Paulo, desde 1980" }],
  },
  twitter: { card: "summary_large_image", images: ["https://famiglia-mancini-avanhandava.familiafontes.chatgpt.site/og-v3.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
