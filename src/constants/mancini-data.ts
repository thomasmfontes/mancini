import type {
  ArchiveImage,
  BrandAssets,
  House,
  NavigationItem,
  ScheduleItem,
} from "../types/mancini.ts";

export const MAP_URL = "https://www.google.com/maps/place/?q=place_id:ChIJfadx80xYzpQRyHnuTnmQmDA";
export const MENU_URL = "https://cdn.me-qr.com/pdf/12607344.pdf?time=1712690862";
export const PIZZA_MENU_URL = "https://cdn.me-qr.com/pdf/12607404.pdf?time=1712578858";
export const IL_MENU_URL = "https://cdn.me-qr.com/pdf/12607216.pdf?time=1712578944";
export const DELIVERY_URL = "https://url-eu.mykeeta.com/Sn65C7Fz";
export const RESERVATION_EMAIL = "reservas@famigliamancini.com.br";
export const RESERVATION_PHONE = "(11) 3255-6599";
export const TRATTORIA_PHONE = "(11) 3256-4320";
export const CALLIGRAPHIA_PHONE = "(11) 3151-6477";

export const photo = (asset: string, width = 1500, height = 1050): string =>
  `https://static.wixstatic.com/media/${asset}/v1/fill/w_${width},h_${height},al_c,q_88,enc_avif,quality_auto/${asset}`;

export const fit = (asset: string, width: number, height: number, filename = asset): string =>
  `https://static.wixstatic.com/media/${asset}/v1/fit/w_${width},h_${height},q_90,enc_avif,quality_auto/${filename}`;

export const brand: BrandAssets = {
  logo: fit("490ec2_8d839cea65a4482982e8e3f3fe905031~mv2.png", 460, 164, "famigliamancini_logo_simples.png"),
  medallion: fit("490ec2_2e52071ad0f64dc6aec448a5beb9c67f~mv2.png", 430, 424, "logo%20mancini_medalhao.png"),
  pulcinella: fit("490ec2_0ee62979b3b04732a4a47a66af30f396~mv2.png", 544, 878),
  poster: photo("490ec2_81f87db962ff430082c249a4da7a63b8~mv2.jpg", 1800, 824),
  ilLogo: fit("490ec2_dd5a8193dea44fdc9fd8217170a4f65d~mv2.png", 500, 252, "il_ristorante_logo2.png"),
  pizzaLogo: fit("490ec2_9ef96e888e7b44c9b38c63667c6fdbbc~mv2.png", 560, 245),
  gift: fit("490ec2_806b661af2e94609986edb03f1a39942~mv2.png", 620, 500, "gift.png"),
  delivery: fit("490ec2_6b95efe9106f452780d3e74fe0b0ca38~mv2.png", 620, 300),
  keeta: fit("8b411d_1715075e64b74b68adad0a681e1a81d3~mv2.png", 300, 288, "LOGO%20KEETA.png"),
};

export const famigliaArchive: ArchiveImage[] = [
  { src: photo("490ec2_55b2eda68b004ec78a15c3e69a44f6ad~mv2.jpg"), alt: "Acervo da Famiglia Mancini", caption: "A casa na Avanhandava" },
  { src: photo("490ec2_5c20852c35e64ad2b77878d6409dbcfd~mv2.jpg"), alt: "Penne com frutos do mar", caption: "Penne com frutos do mar" },
  { src: photo("490ec2_4d2e9902e62f4404b8865985a3647a3e~mv2.jpg"), alt: "Prato do acervo da Famiglia Mancini", caption: "Receitas da casa" },
  { src: photo("490ec2_1e65fdbcd7e84ea995a77e5f33757bd5~mv2.jpg"), alt: "Canelone Fiorentina", caption: "Canelone Fiorentina" },
  { src: photo("490ec2_90f48896e9b24b9da9a1fe340043977e~mv2.jpg"), alt: "Prato do acervo da Famiglia Mancini", caption: "Cozinha italiana" },
  { src: photo("490ec2_f3633cc361524fd28ee35962c9ae43f1~mv2.jpg"), alt: "Fetuccini com polpetone", caption: "Fetuccini com polpetone" },
];

export const ilArchive: ArchiveImage[] = [
  { src: photo("490ec2_8e4701ec40f04b51825f52c746b3ee03~mv2.jpg"), alt: "Acervo gastronômico do Il Ristorante", caption: "Acervo Il Ristorante" },
  { src: photo("490ec2_00ea69ed610041f8bd49e5a3bff52f9f~mv2.jpg"), alt: "Bacalhau à Augusta", caption: "Bacalhau à Augusta" },
  { src: photo("490ec2_eb2a21f9f5fb4e22aa7a5c2436a2862d~mv2.jpg"), alt: "Prato do Il Ristorante", caption: "Cucina e musica" },
  { src: photo("490ec2_3a214d4f5edd4bbabd5e398890188b85~mv2.jpg"), alt: "Ravioli de camarão", caption: "Ravioli de camarão" },
  { src: photo("490ec2_d3527aeaaf5d4816994f2ad8533b988c~mv2.jpg"), alt: "Prato do acervo do Il Ristorante", caption: "Sabores do Il Ristorante" },
  { src: photo("490ec2_0df30f1d2b154016a4577c6316a941eb~mv2.jpg"), alt: "Fetuccini aos quatro queijos com camarão à milanesa", caption: "Fetuccini e camarão" },
];

export const pizzaArchive: ArchiveImage[] = [
  { src: photo("490ec2_ecc9a658c243493c9c5915c7c8e22416~mv2.jpg"), alt: "Pizza muçarela de búfala", caption: "Pizza muçarela de búfala" },
  { src: photo("490ec2_258808ef601a4af7be83b2550e281995~mv2.jpg"), alt: "Acervo da Pizza, Pasta e Música", caption: "Pizza, pasta e música" },
  { src: photo("490ec2_dc5a4f758ec744778dbef5f19ad8ec94~mv2.jpg"), alt: "Ambiente da Pizza, Pasta e Música", caption: "Uma cantina lúdica" },
  { src: photo("490ec2_382402f9fd1d414688315113d711df1d~mv2.jpg"), alt: "Prato da Pizza, Pasta e Música", caption: "Sabores da pizzaria" },
  { src: photo("490ec2_eff221923de84ce7ab8616d6e127e25c~mv2.jpg"), alt: "Risoto de frutos do mar", caption: "Risoto de frutos do mar" },
  { src: photo("490ec2_d8d764c006f3405396cb6ec144cb0b79~mv2.jpg"), alt: "Acervo gastronômico da pizzaria", caption: "Receitas para compartilhar" },
];

export const streetArchive: ArchiveImage[] = [
  { src: photo("490ec2_73e71e28458a49288b6b61fbe3a46da2~mv2.jpg", 1800, 1200), alt: "Salão da Famiglia Mancini preparado para receber", caption: "Ambientes para celebrar" },
  { src: photo("490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg", 1800, 1200), alt: "Espaço de eventos do Grupo Mancini", caption: "Mesas e encontros" },
  { src: photo("490ec2_c2ae308a55b7442e9418ea86c1ba1971~mv2.jpg", 1800, 1200), alt: "Ambiente de uma das casas do Grupo Mancini", caption: "Casas com personalidade" },
  { src: photo("490ec2_da5f9b3b41944466af1d05d9eea7d7b7~mv2.jpg", 1800, 1200), alt: "Salão para celebrações na Avanhandava", caption: "A noite é o cenário" },
  { src: photo("490ec2_6e0f778815ae485e83b41690ea3d3772~mv2.jpg", 1800, 1200), alt: "Evento em uma casa do Grupo Mancini", caption: "Celebrações especiais" },
  { src: photo("490ec2_d66aeebdfb2f4e9cb348db92f863921c~mv2.jpg", 1800, 1200), alt: "Acervo de eventos da Famiglia Mancini", caption: "Encontros memoráveis" },
];

export const artArchive: ArchiveImage[] = [
  { src: photo("8b411d_3bdd226a193a4efba4b189fd931c1f3c~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 1", caption: "20250130 · 092948" },
  { src: photo("8b411d_c15c6344c2854d558bbfad807782d913~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 2", caption: "20250130 · 092621" },
  { src: photo("8b411d_ec18aa799f5247be808afd576f716cc3~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 3", caption: "20250130 · 092800" },
  { src: photo("8b411d_ebb3e329fcb34e50ba497d8c4c19cffb~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 4", caption: "20250130 · 092729" },
  { src: photo("8b411d_bee550bd22424c02ade954009c14cc13~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 5", caption: "20250130 · 092550" },
  { src: photo("8b411d_34bd085a8c1a4a5f94075addc454c9e3~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 6", caption: "20250130 · 092926" },
];

export const houses: House[] = [
  {
    id: "il-ristorante",
    logo: brand.ilLogo,
    name: "Il Ristorante",
    since: "Desde 2001",
    address: "R. Avanhandava, 126",
    phone: "(11) 3258-8510",
    phoneHref: "tel:+551132588510",
    menu: IL_MENU_URL,
    description: "Com uma atmosfera acolhedora e um toque de sofisticação, o Il Ristorante, inaugurado em 2001, oferece uma experiência gastronômica única, com vista para a encantadora Rua Avanhandava. Seu cardápio inclui carnes, peixes, massas e uma mesa de antepastos com mais de 40 itens. Todos os pratos são servidos de forma individual. À noite, durante o jantar, temos música ao vivo sem interrupções.",
    archive: ilArchive,
  },
  {
    id: "pizzaria",
    logo: brand.pizzaLogo,
    name: "Pizza, Pasta & Música",
    since: "Desde 2004",
    address: "R. Avanhandava, 37",
    phone: "(11) 3231-0033",
    phoneHref: "tel:+551132310033",
    menu: PIZZA_MENU_URL,
    description: "Fundada em 2004, a Pizzaria cativa seus visitantes com uma decoração lúdica e encantadora. Com três ambientes, proporciona uma experiência diversificada: um charmoso salão de entrada, evocando a atmosfera de uma autêntica cantina italiana; no primeiro piso, encontram-se a sala de antepastos e a área do forno, enquanto o segundo piso oferece um espaçoso salão com uma excelente visão do palco e um pequeno terraço, com vista para a Rua Avanhandava. Seu cardápio oferece pizzas, antepastos e diversos pratos da culinária italiana, garantindo uma experiência gastronômica completa para todos os paladares.",
    archive: pizzaArchive,
  },
];

export const navigationItems: NavigationItem[] = [
  { label: "História", href: "#historia" },
  { label: "Trattoria", href: "#trattoria" },
  { label: "Nossas casas", href: "#casas" },
  { label: "Avanhandava", href: "#avanhandava" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Calligraphia", href: "#calligraphia" },
  { label: "Visite", href: "#visite" },
];

export const scheduleItems: ScheduleItem[] = [
  { days: "Segunda a quarta", hours: "11h30 — 23h" },
  { days: "Quinta a sábado", hours: "11h30 — 00h" },
  { days: "Domingo", hours: "11h30 — 23h" },
];
