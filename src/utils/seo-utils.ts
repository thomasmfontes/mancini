import {
  CALLIGRAPHIA_PHONE,
  DELIVERY_URL,
  MAP_URL,
  MENU_URL,
  RESERVATION_EMAIL,
  RESERVATION_PHONE,
  TRATTORIA_PHONE,
} from "../constants/mancini-data.ts";

/**
 * Generates Schema.org JSON-LD structured data for Famiglia Mancini and its houses.
 */
export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://www.famigliamancini.com.br/#restaurant",
        name: "Famiglia Mancini Trattoria",
        image: "https://famiglia-mancini-avanhandava.familiafontes.chatgpt.site/og-v3.png",
        telephone: TRATTORIA_PHONE,
        email: RESERVATION_EMAIL,
        url: "https://www.famigliamancini.com.br",
        menu: MENU_URL,
        hasMap: MAP_URL,
        servesCuisine: ["Italian", "Trattoria", "Pasta", "Pizza"],
        priceRange: "$$$",
        acceptsReservations: "True",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Avanhandava, 81",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "01306-001",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -23.551724,
          longitude: -46.647249,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Sunday"],
            opens: "11:30",
            closes: "23:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday", "Friday", "Saturday"],
            opens: "11:30",
            closes: "00:00",
          },
        ],
        founder: {
          "@type": "Person",
          name: "Walter Mancini",
        },
        foundingDate: "1980-05",
        potentialAction: [
          {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.famigliamancini.com.br/#atendimento",
              inLanguage: "pt-BR",
              actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
            },
            result: {
              "@type": "FoodEstablishmentReservation",
              name: `Reserva de mesa (${RESERVATION_PHONE})`,
            },
          },
          {
            "@type": "OrderAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: DELIVERY_URL,
              actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
            },
            deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeDirectDownload",
          },
        ],
      },
      {
        "@type": "Restaurant",
        "@id": "https://www.famigliamancini.com.br/#il-ristorante",
        name: "Il Ristorante — Famiglia Mancini",
        telephone: "(11) 3258-8510",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Avanhandava, 126",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        servesCuisine: "Italian",
        priceRange: "$$$",
      },
      {
        "@type": "Restaurant",
        "@id": "https://www.famigliamancini.com.br/#pizzaria",
        name: "Pizza, Pasta & Música — Famiglia Mancini",
        telephone: "(11) 3231-0033",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Avanhandava, 37",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        servesCuisine: ["Pizza", "Italian"],
        priceRange: "$$",
      },
      {
        "@type": "ArtGallery",
        "@id": "https://www.famigliamancini.com.br/#calligraphia",
        name: "Galeria Calligraphia",
        telephone: CALLIGRAPHIA_PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Avanhandava, 40",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
    ],
  };
}
