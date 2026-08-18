export type Language = "pt" | "en";

export interface Translations {
  nav: {
    heritage: string;
    trattoria: string;
    houses: string;
    street: string;
    service: string;
    visit: string;
    reserve: string;
    call: string;
    openNow: string;
    closedNow: string;
    language: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    ctaReserve: string;
    ctaStatus: string;
    ctaMenu: string;
    factsHistoryLabel: string;
    factsHistoryValue: string;
    factsAddressLabel: string;
    factsAddressValue: string;
    factsAntipastiLabel: string;
    factsAntipastiValue: string;
  };
  heritage: {
    badge: string;
    title: string;
    lead: string;
    paragraph: string;
    statFoundedLabel: string;
    statFoundedValue: string;
    statYearsLabel: string;
    statYearsSuffix: string;
    statGuestsLabel: string;
    statGuestsValue: string;
    buttonExplore: string;
  };
  trattoria: {
    badge: string;
    title: string;
    lead: string;
    antipastiBannerTitle: string;
    antipastiBannerSubtitle: string;
    buttonMenu: string;
  };
  houses: {
    badge: string;
    title: string;
    lead: string;
    trattoriaDesc: string;
    ristoranteDesc: string;
    pizzeriaDesc: string;
    buttonMenuPdf: string;
    buttonRoute: string;
  };
  street: {
    badge: string;
    title: string;
    lead: string;
    paragraph: string;
  };
  service: {
    badge: string;
    title: string;
    lead: string;
    liveStatusTitle: string;
    liveStatusSubtitle: string;
    queueAdvice: string;
    directReservationTitle: string;
    directReservationSubtitle: string;
    buttonEmailReserve: string;
    buttonPhone: string;
    partySizeLabel: string;
    partySizeTip: string;
  };
  experiences: {
    badge: string;
    title: string;
    lead: string;
  };
  calligraphia: {
    badge: string;
    title: string;
    lead: string;
    paragraph: string;
  };
  visit: {
    badge: string;
    title: string;
    lead: string;
    addressTitle: string;
    addressLine: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursWeekends: string;
    valetTitle: string;
    valetDesc: string;
    mapButton: string;
  };
  modal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    partyLabel: string;
    houseLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    submitting: string;
    disclaimer: string;
  };
  footer: {
    slogan: string;
    reservationsTitle: string;
    followTitle: string;
    copyright: string;
    transparency: string;
  };
  mobileBar: {
    reserve: string;
    call: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      heritage: "História",
      trattoria: "Trattoria",
      houses: "Nossas Casas",
      street: "Rua Avanhandava",
      service: "Atendimento",
      visit: "Visite",
      reserve: "Reservar mesa",
      call: "Ligar",
      openNow: "Aberto agora em SP",
      closedNow: "Fechado agora",
      language: "Idioma",
    },
    hero: {
      tagline: "Tradição italiana desde 1980",
      title: "A noite começa na Avanhandava.",
      subtitle:
        "Massas artesanais, mesa lendária de antepastos, música ao vivo e a atmosfera mais acolhedora de São Paulo.",
      ctaReserve: "Solicitar reserva",
      ctaStatus: "Consultar atendimento",
      ctaMenu: "Ver cardápio",
      factsHistoryLabel: "Atendimento São Paulo",
      factsHistoryValue: "Tradição desde 1980 na Bela Vista",
      factsAddressLabel: "Endereço principal",
      factsAddressValue: "Rua Avanhandava, 36 — Bela Vista, SP",
      factsAntipastiLabel: "Mesa de antepastos",
      factsAntipastiValue: "70+ variedades artesanais diárias",
    },
    heritage: {
      badge: "Patrimônio Gastronômico",
      title: "Mais de quatro décadas de fartura e paixão.",
      lead: "Walter Mancini transformou uma pequena cantina em um dos maiores complexos gastronômicos da América Latina.",
      paragraph:
        "Com paredes decoradas por antiguidades, garrafas históricas e teto repleto de memórias, a Famiglia Mancini não é apenas um restaurante — é um símbolo da identidade paulistana e da imigração italiana.",
      statFoundedLabel: "Fundação",
      statFoundedValue: "1980",
      statYearsLabel: "Anos de história",
      statYearsSuffix: "anos",
      statGuestsLabel: "Pessoas atendidas",
      statGuestsValue: "15 mi+",
      buttonExplore: "Conhecer a trajetória",
    },
    trattoria: {
      badge: "O Clássico",
      title: "Famiglia Mancini Trattoria",
      lead: "A autêntica fartura italiana: porções generosas para compartilhar, receitas clássicas de família e atmosfera inconfundível.",
      antipastiBannerTitle: "Mesa de antepastos",
      antipastiBannerSubtitle: "O ritual que antecede massas clássicas e pratos para compartilhar.",
      buttonMenu: "Cardápio completo",
    },
    houses: {
      badge: "Circuito Avanhandava",
      title: "As Casas da Famiglia",
      lead: "Cada endereço na Rua Avanhandava oferece uma faceta única da hospitalidade e culinária italiana de Walter Mancini.",
      trattoriaDesc: "O clássico imperdível com porções fartas e atmosfera calorosa.",
      ristoranteDesc: "Ambiente sofisticado, piano ao vivo e receitas refinadas da gastronomia clássica.",
      pizzeriaDesc: "Pizzas de fermentação artesanal, forno a lenha e música envolvente todas as noites.",
      buttonMenuPdf: "Ver cardápio (PDF)",
      buttonRoute: "Como chegar",
    },
    street: {
      badge: "Revitalização Urbana",
      title: "A Magia da Rua Avanhandava",
      lead: "Uma das ruas mais charmosas e fotografadas do Brasil, iluminada por milhares de luzes e fontes toscanas.",
      paragraph:
        "Idealizada por Walter Mancini, a transformação da Avanhandava criou um polo seguro, arborizado e musical no coração do centro histórico de São Paulo.",
    },
    service: {
      badge: "Planeje sua Experiência",
      title: "Fila, Horários & Reservas",
      lead: "A Famiglia Mancini atende prioritariamente por ordem de chegada com acolhimento caloroso, além de reservas antecipadas para datas e grupos especiais.",
      liveStatusTitle: "Status do Salão em Tempo Real",
      liveStatusSubtitle: "Horário oficial de Brasília / São Paulo",
      queueAdvice: "A estimativa de espera depende da operação da casa e é confirmada por telefone.",
      directReservationTitle: "Solicitação Direta de Reserva",
      directReservationSubtitle: "Para grupos acima de 4 pessoas, aniversários e comemorações corporativas.",
      buttonEmailReserve: "Abrir formulário de reserva",
      buttonPhone: "Ligar para a central",
      partySizeLabel: "Número de pessoas",
      partySizeTip: "Grupos com 6 ou mais pessoas têm prioridade de pré-agendamento.",
    },
    experiences: {
      badge: "Momentos Especiais",
      title: "Celebrações & Eventos",
      lead: "Aniversários, encontros familiares, recepções de negócios e jantares românticos inesquecíveis.",
    },
    calligraphia: {
      badge: "Arte & Cultura",
      title: "Galeria de Arte Calligraphia",
      lead: "O amor de Walter Mancini pelas artes visuais traduzido em um espaço cultural contíguo aos restaurantes.",
      paragraph:
        "Quadros, esculturas, gravuras e objetos de decoração garimpados ao redor do mundo completam o passeio cultural na Avanhandava.",
    },
    visit: {
      badge: "Localização & Contato",
      title: "Como Chegar à Famiglia",
      lead: "Estamos no centro histórico de São Paulo com serviço completo de manobrista e segurança privada.",
      addressTitle: "Endereço",
      addressLine: "Rua Avanhandava, 36 — Bela Vista, São Paulo - SP",
      hoursTitle: "Horários de Funcionamento",
      hoursWeekdays: "Segunda a Quinta: 11h30 às 00h00 | Sexta: 11h30 às 01h00",
      hoursWeekends: "Sábado: 11h30 às 01h00 | Domingo: 11h30 às 00h00",
      valetTitle: "Serviço de Valet",
      valetDesc: "Manobristas na porta com estacionamento próprio credenciado.",
      mapButton: "Abrir rota no Google Maps",
    },
    modal: {
      title: "Solicitar Reserva",
      subtitle: "Preencha seus dados para receber a confirmação de disponibilidade da nossa equipe.",
      nameLabel: "Nome completo",
      namePlaceholder: "Ex: Maria Silva",
      emailLabel: "E-mail",
      emailPlaceholder: "maria@exemplo.com",
      phoneLabel: "Telefone / WhatsApp",
      phonePlaceholder: "(11) 99999-9999",
      dateLabel: "Data pretendida",
      timeLabel: "Horário",
      partyLabel: "Número de pessoas",
      houseLabel: "Restaurante desejado",
      notesLabel: "Observações especiais (aniversário, área preferida)",
      notesPlaceholder: "Ex: Comemoração de aniversário, gostaríamos de mesa no salão principal.",
      submitButton: "Enviar solicitação de reserva",
      submitting: "Enviando...",
      disclaimer: "Nossa equipe entrará em contato via WhatsApp ou e-mail para confirmação final.",
    },
    footer: {
      slogan: "Tradição italiana, coração paulistano.",
      reservationsTitle: "Reservas e informações",
      followTitle: "Siga a Famiglia",
      copyright: "Todos os direitos reservados.",
      transparency: "Transparência e Igualdade",
    },
    mobileBar: {
      reserve: "Reservar Mesa",
      call: "Ligar",
    },
  },
  en: {
    nav: {
      heritage: "Heritage",
      trattoria: "Trattoria",
      houses: "Our Houses",
      street: "Avanhandava St.",
      service: "Service",
      visit: "Visit",
      reserve: "Book a table",
      call: "Call",
      openNow: "Open now in SP",
      closedNow: "Closed now",
      language: "Language",
    },
    hero: {
      tagline: "Italian tradition since 1980",
      title: "The night begins at Avanhandava.",
      subtitle:
        "Handmade pasta, legendary antipasti table, live music, and São Paulo's most welcoming Italian atmosphere.",
      ctaReserve: "Request a table",
      ctaStatus: "Check live status",
      ctaMenu: "View menu",
      factsHistoryLabel: "São Paulo Service",
      factsHistoryValue: "Tradition since 1980 in Bela Vista",
      factsAddressLabel: "Main address",
      factsAddressValue: "36 Avanhandava Street — Bela Vista, SP",
      factsAntipastiLabel: "Antipasti table",
      factsAntipastiValue: "70+ daily artisanal selections",
    },
    heritage: {
      badge: "Gastronomic Heritage",
      title: "Over four decades of abundance and passion.",
      lead: "Walter Mancini turned a charming cantina into one of Latin America's premier culinary complexes.",
      paragraph:
        "Adorned with antique treasures, historic bottles, and a ceiling filled with cherished memories, Famiglia Mancini is more than a restaurant — it is an icon of São Paulo and Italian heritage.",
      statFoundedLabel: "Founded",
      statFoundedValue: "1980",
      statYearsLabel: "Years of history",
      statYearsSuffix: "years",
      statGuestsLabel: "Guests served",
      statGuestsValue: "15M+",
      buttonExplore: "Discover our journey",
    },
    trattoria: {
      badge: "The Classic",
      title: "Famiglia Mancini Trattoria",
      lead: "Authentic Italian generosity: bountiful dishes made for sharing, time-honored family recipes, and unmatched charm.",
      antipastiBannerTitle: "Antipasti Table with 70+ Selections",
      antipastiBannerSubtitle: "Artisan cheeses, imported cured meats, marinated seafood, and fresh bread baked daily in-house.",
      buttonMenu: "Explore Trattoria menu",
    },
    houses: {
      badge: "Avanhandava Circuit",
      title: "Our Restaurants",
      lead: "Each destination on Avanhandava Street showcases a distinct facet of Walter Mancini's Italian hospitality and cuisine.",
      trattoriaDesc: "The quintessential classic with hearty portions and lively warmth.",
      ristoranteDesc: "Refined ambiance, live grand piano, and exquisite interpretations of classic Italian gastronomy.",
      pizzeriaDesc: "Artisanal slow-fermented pizzas, wood-fired ovens, and captivating live music every evening.",
      buttonMenuPdf: "View menu (PDF)",
      buttonRoute: "Get directions",
    },
    street: {
      badge: "Urban Renaissance",
      title: "The Magic of Avanhandava Street",
      lead: "One of Brazil's most picturesque and photographed streets, illuminated by thousands of lights and Tuscan fountains.",
      paragraph:
        "Envisioned by Walter Mancini, the revitalization of Avanhandava created a safe, tree-lined, and musical haven in the heart of historic São Paulo.",
    },
    service: {
      badge: "Plan Your Visit",
      title: "Seating, Hours & Reservations",
      lead: "Famiglia Mancini welcomes guests primarily on a walk-in basis with warm Italian hospitality, alongside advance reservations for special occasions and groups.",
      liveStatusTitle: "Live Dining Room Status",
      liveStatusSubtitle: "Official Brasília / São Paulo Time",
      queueAdvice: "Pro tip: To minimize weekend wait times, arrive by 11:45 AM for lunch or 6:45 PM for dinner.",
      directReservationTitle: "Direct Reservation Request",
      directReservationSubtitle: "For parties of 4 or more, birthdays, anniversaries, and corporate gatherings.",
      buttonEmailReserve: "Open booking form",
      buttonPhone: "Call central desk",
      partySizeLabel: "Party size",
      partySizeTip: "Parties of 6 or more receive priority advance scheduling.",
    },
    experiences: {
      badge: "Special Moments",
      title: "Celebrations & Events",
      lead: "Birthdays, family gatherings, business dinners, and unforgettable romantic evenings.",
    },
    calligraphia: {
      badge: "Art & Culture",
      title: "Calligraphia Art Gallery",
      lead: "Walter Mancini's passion for the visual arts expressed in a vibrant cultural space adjacent to the restaurants.",
      paragraph:
        "Paintings, sculptures, fine prints, and decorative antiques curated from around the globe enrich the cultural stroll on Avanhandava.",
    },
    visit: {
      badge: "Location & Contact",
      title: "How to Visit the Famiglia",
      lead: "Located in the historic center of São Paulo with valet parking and dedicated private security.",
      addressTitle: "Address",
      addressLine: "36 Avanhandava Street — Bela Vista, São Paulo - SP, Brazil",
      hoursTitle: "Opening Hours",
      hoursWeekdays: "Monday to Thursday: 11:30 AM to Midnight | Friday: 11:30 AM to 1:00 AM",
      hoursWeekends: "Saturday: 11:30 AM to 1:00 AM | Sunday: 11:30 AM to Midnight",
      valetTitle: "Valet Service",
      valetDesc: "Doorstep valet parking with accredited private garage.",
      mapButton: "Open in Google Maps",
    },
    modal: {
      title: "Request a Reservation",
      subtitle: "Complete your details to receive availability confirmation from our guest services team.",
      nameLabel: "Full name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Email address",
      emailPlaceholder: "john@example.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+1 (555) 000-0000",
      dateLabel: "Preferred date",
      timeLabel: "Preferred time",
      partyLabel: "Party size",
      houseLabel: "Selected restaurant",
      notesLabel: "Special requests (anniversary, seating preference)",
      notesPlaceholder: "e.g. Celebrating an anniversary, preferred main dining room table.",
      submitButton: "Send reservation request",
      submitting: "Sending...",
      disclaimer: "Our concierge team will contact you via WhatsApp or email for final confirmation.",
    },
    footer: {
      slogan: "Italian tradition, Paulistano heart.",
      reservationsTitle: "Reservations & info",
      followTitle: "Follow the Famiglia",
      copyright: "All rights reserved.",
      transparency: "Transparency & Equality",
    },
    mobileBar: {
      reserve: "Book a Table",
      call: "Call Us",
    },
  },
};
