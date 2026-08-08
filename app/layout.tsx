import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.famigliamancini.com.br"),
  title: "Famiglia Mancini Trattoria | Rua Avanhandava",
  description: "Desde 1980, cozinha italiana generosa, mesa de antepastos e encontros na emblemática Rua Avanhandava, em São Paulo.",
  keywords: ["Famiglia Mancini", "restaurante italiano", "Rua Avanhandava", "trattoria", "São Paulo"],
  openGraph: {
    title: "Famiglia Mancini — Uma noite na Avanhandava",
    description: "Tradição italiana e coração paulistano desde 1980.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Famiglia Mancini — Uma noite na Avanhandava" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
