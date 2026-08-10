"use client";

/* eslint-disable @next/next/no-img-element */

import { FormEvent, KeyboardEvent as ReactKeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

const MAP_URL = "https://www.google.com/maps/place/?q=place_id:ChIJfadx80xYzpQRyHnuTnmQmDA";
const MENU_URL = "https://cdn.me-qr.com/pdf/12607344.pdf?time=1712690862";
const PIZZA_MENU_URL = "https://cdn.me-qr.com/pdf/12607404.pdf?time=1712578858";
const IL_MENU_URL = "https://cdn.me-qr.com/pdf/12607216.pdf?time=1712578944";
const DELIVERY_URL = "https://url-eu.mykeeta.com/Sn65C7Fz";
const RESERVATION_EMAIL = "reservas@famigliamancini.com.br";
const RESERVATION_PHONE = "(11) 3255-6599";

const photo = (asset: string, width = 1500, height = 1050) =>
  `https://static.wixstatic.com/media/${asset}/v1/fill/w_${width},h_${height},al_c,q_88,enc_avif,quality_auto/${asset}`;

const fit = (asset: string, width: number, height: number, filename = asset) =>
  `https://static.wixstatic.com/media/${asset}/v1/fit/w_${width},h_${height},q_90,enc_avif,quality_auto/${filename}`;

const brand = {
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

type ArchiveImage = { src: string; alt: string; caption: string };

const famigliaArchive: ArchiveImage[] = [
  { src: photo("490ec2_55b2eda68b004ec78a15c3e69a44f6ad~mv2.jpg"), alt: "Acervo da Famiglia Mancini", caption: "A casa na Avanhandava" },
  { src: photo("490ec2_5c20852c35e64ad2b77878d6409dbcfd~mv2.jpg"), alt: "Penne com frutos do mar", caption: "Penne com frutos do mar" },
  { src: photo("490ec2_4d2e9902e62f4404b8865985a3647a3e~mv2.jpg"), alt: "Prato do acervo da Famiglia Mancini", caption: "Receitas da casa" },
  { src: photo("490ec2_1e65fdbcd7e84ea995a77e5f33757bd5~mv2.jpg"), alt: "Canelone Fiorentina", caption: "Canelone Fiorentina" },
  { src: photo("490ec2_90f48896e9b24b9da9a1fe340043977e~mv2.jpg"), alt: "Prato do acervo da Famiglia Mancini", caption: "Cozinha italiana" },
  { src: photo("490ec2_f3633cc361524fd28ee35962c9ae43f1~mv2.jpg"), alt: "Fetuccini com polpetone", caption: "Fetuccini com polpetone" },
];

const ilArchive: ArchiveImage[] = [
  { src: photo("490ec2_8e4701ec40f04b51825f52c746b3ee03~mv2.jpg"), alt: "Acervo gastronômico do Il Ristorante", caption: "Acervo Il Ristorante" },
  { src: photo("490ec2_00ea69ed610041f8bd49e5a3bff52f9f~mv2.jpg"), alt: "Bacalhau à Augusta", caption: "Bacalhau à Augusta" },
  { src: photo("490ec2_eb2a21f9f5fb4e22aa7a5c2436a2862d~mv2.jpg"), alt: "Prato do Il Ristorante", caption: "Cucina e musica" },
  { src: photo("490ec2_3a214d4f5edd4bbabd5e398890188b85~mv2.jpg"), alt: "Ravioli de camarão", caption: "Ravioli de camarão" },
  { src: photo("490ec2_d3527aeaaf5d4816994f2ad8533b988c~mv2.jpg"), alt: "Prato do acervo do Il Ristorante", caption: "Sabores do Il Ristorante" },
  { src: photo("490ec2_0df30f1d2b154016a4577c6316a941eb~mv2.jpg"), alt: "Fetuccini aos quatro queijos com camarão à milanesa", caption: "Fetuccini e camarão" },
];

const pizzaArchive: ArchiveImage[] = [
  { src: photo("490ec2_ecc9a658c243493c9c5915c7c8e22416~mv2.jpg"), alt: "Pizza muçarela de búfala", caption: "Pizza muçarela de búfala" },
  { src: photo("490ec2_258808ef601a4af7be83b2550e281995~mv2.jpg"), alt: "Acervo da Pizza, Pasta e Música", caption: "Pizza, pasta e música" },
  { src: photo("490ec2_dc5a4f758ec744778dbef5f19ad8ec94~mv2.jpg"), alt: "Ambiente da Pizza, Pasta e Música", caption: "Uma cantina lúdica" },
  { src: photo("490ec2_382402f9fd1d414688315113d711df1d~mv2.jpg"), alt: "Prato da Pizza, Pasta e Música", caption: "Sabores da pizzaria" },
  { src: photo("490ec2_eff221923de84ce7ab8616d6e127e25c~mv2.jpg"), alt: "Risoto de frutos do mar", caption: "Risoto de frutos do mar" },
  { src: photo("490ec2_d8d764c006f3405396cb6ec144cb0b79~mv2.jpg"), alt: "Acervo gastronômico da pizzaria", caption: "Receitas para compartilhar" },
];

const streetArchive: ArchiveImage[] = [
  { src: photo("490ec2_73e71e28458a49288b6b61fbe3a46da2~mv2.jpg", 1800, 1200), alt: "Salão da Famiglia Mancini preparado para receber", caption: "Ambientes para celebrar" },
  { src: photo("490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg", 1800, 1200), alt: "Espaço de eventos do Grupo Mancini", caption: "Mesas e encontros" },
  { src: photo("490ec2_c2ae308a55b7442e9418ea86c1ba1971~mv2.jpg", 1800, 1200), alt: "Ambiente de uma das casas do Grupo Mancini", caption: "Casas com personalidade" },
  { src: photo("490ec2_da5f9b3b41944466af1d05d9eea7d7b7~mv2.jpg", 1800, 1200), alt: "Salão para celebrações na Avanhandava", caption: "A noite é o cenário" },
  { src: photo("490ec2_6e0f778815ae485e83b41690ea3d3772~mv2.jpg", 1800, 1200), alt: "Evento em uma casa do Grupo Mancini", caption: "Celebrações especiais" },
  { src: photo("490ec2_d66aeebdfb2f4e9cb348db92f863921c~mv2.jpg", 1800, 1200), alt: "Acervo de eventos da Famiglia Mancini", caption: "Encontros memoráveis" },
];

const artArchive: ArchiveImage[] = [
  { src: photo("8b411d_3bdd226a193a4efba4b189fd931c1f3c~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 1", caption: "20250130 · 092948" },
  { src: photo("8b411d_c15c6344c2854d558bbfad807782d913~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 2", caption: "20250130 · 092621" },
  { src: photo("8b411d_ec18aa799f5247be808afd576f716cc3~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 3", caption: "20250130 · 092800" },
  { src: photo("8b411d_ebb3e329fcb34e50ba497d8c4c19cffb~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 4", caption: "20250130 · 092729" },
  { src: photo("8b411d_bee550bd22424c02ade954009c14cc13~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 5", caption: "20250130 · 092550" },
  { src: photo("8b411d_34bd085a8c1a4a5f94075addc454c9e3~mv2.jpg", 900, 1200), alt: "Acervo Calligraphia — obra 6", caption: "20250130 · 092926" },
];

const houses = [
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

function GalleryRail({ images, label, tone = "light" }: { images: ArchiveImage[]; label: string; tone?: "light" | "dark" }) {
  return (
    <div className={`archive-rail ${tone}`} role="region" aria-label={label} tabIndex={0}>
      {images.map((image, index) => (
        <figure className="archive-card" key={image.src}>
          <img src={image.src} alt={image.alt} width="1500" height="1050" loading="lazy" />
          <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function saoPauloParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [party, setParty] = useState(2);
  const [clock, setClock] = useState(() => new Date());
  const [reserveOpen, setReserveOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reservationLink, setReservationLink] = useState(`mailto:${RESERVATION_EMAIL}`);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => setClock(new Date()), 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };
    const focusFrame = window.requestAnimationFrame(() => {
      if (!menuRef.current) return;
      menuRef.current.scrollTop = 0;
      menuRef.current.querySelector<HTMLAnchorElement>('a[href^="#"]')?.focus({ preventScroll: true });
    });
    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!reserveOpen) return;
    const focusableSelector = "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])";
    const frame = window.requestAnimationFrame(() => firstFieldRef.current?.focus());
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setReserveOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.classList.add("modal-is-open");
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.classList.remove("modal-is-open");
      window.removeEventListener("keydown", handleKeys);
      previousFocusRef.current?.focus();
    };
  }, [reserveOpen]);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const service = useMemo(() => {
    const parts = saoPauloParts(clock);
    const weekdayIndex: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const day = weekdayIndex[parts.weekday] ?? 0;
    const hour = Number(parts.hour) + Number(parts.minute) / 60;
    const closingHour = day >= 4 && day <= 6 ? 24 : 23;
    const isOpen = hour >= 11.5 && hour < closingHour;
    const years = Number(parts.year) - 1980 - (Number(parts.month) < 5 ? 1 : 0);
    return {
      isOpen,
      years,
      closingLabel: closingHour === 24 ? "00h" : "23h",
      time: `${parts.hour}:${parts.minute}`,
      today: `${parts.year}-${parts.month}-${parts.day}`,
    };
  }, [clock]);

  function openReservation() {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setSent(false);
    setReserveOpen(true);
  }

  function closeReservation() {
    setReserveOpen(false);
    setSent(false);
  }

  function handleReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = "Solicitação de reserva — Famiglia Mancini";
    const body = [
      "Olá, equipe Famiglia Mancini!",
      "",
      "Gostaria de solicitar uma reserva com as seguintes preferências:",
      `Nome: ${form.get("name")}`,
      `Data: ${form.get("date")}`,
      `Horário: ${form.get("time")}`,
      `Pessoas: ${form.get("guests")}`,
      `Telefone: ${form.get("phone")}`,
      `E-mail: ${form.get("email")}`,
      "",
      "Aguardo a confirmação de disponibilidade. Obrigado!",
    ].join("\n");
    setReservationLink(`mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  }

  function closeMenuFromKeyboard(event: ReactKeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "Enter" || event.key === " ") setMenuOpen(false);
  }

  return (
    <main>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="site-header">
        <a className="brand-logo" href="#inicio" aria-label="Famiglia Mancini — início" onClick={() => setMenuOpen(false)}>
          <img src={brand.logo} width="202" height="73" alt="Famiglia Mancini" />
        </a>
        <button
          className={menuOpen ? "menu-scrim open" : "menu-scrim"}
          type="button"
          aria-label="Fechar menu"
          aria-hidden={!menuOpen}
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal" id="site-navigation" ref={menuRef}>
          <div className="mobile-menu-meta"><span>Navegação</span><small>Rua Avanhandava, 81</small></div>
          {[
            ["História", "#historia"],
            ["Trattoria", "#trattoria"],
            ["Nossas casas", "#casas"],
            ["Avanhandava", "#avanhandava"],
            ["Experiências", "#experiencias"],
            ["Calligraphia", "#calligraphia"],
            ["Visite", "#visite"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)} onKeyDown={closeMenuFromKeyboard}>{label}</a>
          ))}
          <button className="mobile-reserve" type="button" onClick={() => { setMenuOpen(false); openReservation(); }}>Solicitar reserva</button>
        </nav>
        <button className="header-cta" type="button" onClick={openReservation}>Reservar mesa</button>
        <button
          ref={menuButtonRef}
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <img className="hero-photo" src={streetArchive[0].src} width="1800" height="1200" alt="Salão da Famiglia Mancini preparado para receber" fetchPriority="high" />
          <div className="hero-overlay" />
          <img className="hero-character" src={brand.pulcinella} width="272" height="439" alt="Pulcinella, personagem histórico da Famiglia Mancini" />
          <div className="hero-copy">
            <p className="eyebrow light">BENVENUTTI! · DESDE 1980</p>
            <h1>A noite começa<br />na <em>Avanhandava.</em></h1>
            <p>Cozinha italiana generosa, música e histórias compartilhadas em um dos endereços mais encantadores de São Paulo.</p>
            <div className="hero-actions">
              <button className="button button-gold" type="button" onClick={openReservation}>Solicitar reserva</button>
              <a className="button button-outline" href="#atendimento">Consultar atendimento</a>
              <a className="text-link light" href={MENU_URL} target="_blank" rel="noreferrer">Ver cardápio</a>
            </div>
          </div>
          <div className="hero-facts" aria-label="Informações rápidas">
            <div><small>Status em São Paulo</small><strong><i className={service.isOpen ? "status-dot" : "status-dot closed"} />{service.isOpen ? `Aberto até ${service.closingLabel}` : "Fechado agora"}</strong></div>
            <div><small>Endereço</small><strong>R. Avanhandava, 81</strong></div>
            <div><small>Reservas</small><a href="tel:+551132556599">{RESERVATION_PHONE}</a></div>
          </div>
        </section>

        <section className="heritage section" id="historia">
          <div className="heritage-poster">
            <img src={brand.poster} width="1800" height="824" alt="Cartaz ilustrado da Rua Avanhandava e das casas Mancini" loading="lazy" />
          </div>
          <div className="heritage-copy">
            <p className="eyebrow">Nossa história</p>
            <h2>Uma casa que faz parte de São Paulo.</h2>
            <p className="lead">A Famiglia Mancini Trattoria, fundada em maio de 1980, é a casa tradicional do Grupo Mancini.</p>
            <p>Ao longo das décadas, mais de 15 milhões de pessoas foram recebidas em seus ambientes, que são ricamente decorados e contam com uma fonte em seu interior.</p>
            <div className="heritage-numbers">
              <div><strong>1980</strong><span>o começo de tudo</span></div>
              <div><strong>{service.years} anos</strong><span>de histórias à mesa</span></div>
              <div><strong>15 mi+</strong><span>de pessoas recebidas</span></div>
            </div>
          </div>
        </section>

        <section className="trattoria section" id="trattoria">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Famiglia Mancini Trattoria</p>
              <h2>A fartura é parte<br />do <em>ritual.</em></h2>
            </div>
            <div className="section-intro">
              <img src={brand.medallion} width="206" height="203" alt="Logo medalhão Famiglia Mancini" loading="lazy" />
              <p>Os pratos, reconhecidos por suas porções generosas, são servidos para atender a duas ou mais pessoas. Além disso, a Trattoria dispõe de uma sala de antepastos com mais de 70 opções, proporcionando aos clientes uma experiência gastronômica rica em sabores.</p>
            </div>
          </div>
          <div className="antipasti-callout">
            <span>Mesa de antepastos</span>
            <strong>Mais de 70 opções</strong>
            <small>O ritual que antecede massas clássicas e pratos para compartilhar.</small>
            <a href={MENU_URL} target="_blank" rel="noreferrer">Cardápio completo</a>
          </div>
          <div className="archive-heading"><span>Acervo gastronômico</span><small>Deslize para explorar</small></div>
          <GalleryRail images={famigliaArchive} label="Galeria gastronômica da Famiglia Mancini" />
          <div className="contact-line">
            <span><small>Endereço</small>R. Avanhandava, 81</span>
            <a href="tel:+551132564320"><small>Telefone da casa</small>(11) 3256-4320</a>
            <a href={MENU_URL} target="_blank" rel="noreferrer"><small>Cardápio</small>Abrir PDF</a>
          </div>
        </section>

        <section className="houses section" id="casas">
          <div className="section-heading houses-heading">
            <p className="eyebrow light">Conheça nossas casas na Avanhandava</p>
            <h2>Três experiências.<br /><em>Uma Famiglia.</em></h2>
          </div>
          {houses.map((house, index) => (
            <article className="house-profile" id={house.id} key={house.id}>
              <div className="house-summary">
                <span className="house-index">0{index + 2}</span>
                <img src={house.logo} width="500" height="252" alt={house.name} loading="lazy" />
                <p className="house-since">{house.since}</p>
                <h3>{house.name}</h3>
                <p>{house.description}</p>
                <div className="house-links">
                  <a href={house.phoneHref}>{house.phone}</a>
                  <a href={house.menu} target="_blank" rel="noreferrer">Ver cardápio</a>
                </div>
                <address>{house.address}</address>
              </div>
              <GalleryRail images={house.archive} label={`Galeria de ${house.name}`} tone="dark" />
            </article>
          ))}
        </section>

        <section className="street section" id="avanhandava">
          <div className="street-copy">
            <p className="eyebrow light">Rua Avanhandava · Bela Vista</p>
            <h2>A rua que<br />virou <em>destino.</em></h2>
            <p>Em 2007, a Avanhandava ganhou nova vida. Pedras portuguesas, fachadas restauradas, iluminação acolhedora e fontes criaram um pequeno refúgio urbano — uma revitalização conduzida em parceria com a cidade e a associação local presidida por Walter Mancini.</p>
            <p>Hoje, gastronomia, arte e música fazem da rua um passeio que começa antes de sentar à mesa.</p>
          </div>
          <GalleryRail images={streetArchive} label="Galeria de ambientes e eventos na Rua Avanhandava" tone="dark" />
        </section>

        <section className="service section" id="atendimento">
          <div className="section-heading service-heading">
            <p className="eyebrow">Fila e reservas</p>
            <h2>Seu lugar<br /><em>à mesa.</em></h2>
            <p>Consulte o atendimento da casa antes de sair ou envie sua preferência de reserva para a equipe Mancini.</p>
          </div>
          <div className="service-grid">
            <article className="status-card" aria-live="polite">
              <div className="card-top"><span><i className={service.isOpen ? "status-dot" : "status-dot closed"} />AGORA EM SÃO PAULO</span><small>Atualizado às {service.time}</small></div>
              <div className="status-card-body">
                <div className="status-overview">
                  <span>Atendimento de hoje</span>
                  <strong>{service.isOpen ? "Aberto" : "Fechado"}</strong>
                  <p>{service.isOpen ? `Atendimento até ${service.closingLabel}. A espera varia ao longo da noite; confirme com a equipe antes de vir.` : "A casa abre às 11h30. Você já pode preparar sua solicitação de reserva."}</p>
                </div>
                <div className="queue-panel">
                  <label htmlFor="party-size">Tamanho do grupo</label>
                  <div className="party-selector" id="party-size">
                    <button type="button" onClick={() => setParty(Math.max(1, party - 1))} aria-label="Diminuir número de pessoas">−</button>
                    <strong>{party}<small>{party === 1 ? " pessoa" : " pessoas"}</small></strong>
                    <button type="button" onClick={() => setParty(Math.min(12, party + 1))} aria-label="Aumentar número de pessoas">+</button>
                  </div>
                  <a className="button button-gold" href="tel:+551132556599">Ligar e consultar</a>
                  <p className="honesty-note">A estimativa de espera depende da operação da casa e é confirmada por telefone.</p>
                </div>
              </div>
            </article>
            <article className="reservation-card">
              <span>Reserva de mesas</span>
              <h3>Prepare sua solicitação.</h3>
              <p>Informe data, horário e número de pessoas. A reserva será confirmada somente após o retorno da equipe.</p>
              <button className="button button-gold" type="button" onClick={openReservation}>Solicitar reserva</button>
              <div className="reservation-direct">
                <a href={`mailto:${RESERVATION_EMAIL}`}>{RESERVATION_EMAIL}</a>
                <a href="tel:+551132556599">{RESERVATION_PHONE}</a>
              </div>
            </article>
          </div>
        </section>

        <section className="experiences section" id="experiencias">
          <div className="section-heading split-heading compact">
            <div><p className="eyebrow">Além da mesa</p><h2>Mais motivos para<br /><em>celebrar.</em></h2></div>
            <p>Eventos, presentes e a pizza da Avanhandava também fazem parte do acervo da Famiglia.</p>
          </div>
          <div className="experience-grid">
            <article className="experience-card event-experience">
              <img src={streetArchive[4].src} width="1800" height="1200" alt="Celebração na Rua Avanhandava" loading="lazy" />
              <div><span>Eventos</span><h3>Faça seu evento na Avanhandava</h3><p>Celebre momentos especiais em um dos endereços mais charmosos de São Paulo. Seja casamento, aniversário, confraternização ou eventos corporativos, o Grupo Mancini conta com o ambiente ideal para a sua ocasião.</p><a href={`mailto:${RESERVATION_EMAIL}?subject=Evento na Avanhandava`}>Planejar evento</a></div>
            </article>
            <article className="experience-card gift-experience">
              <img src={brand.gift} width="620" height="500" alt="Gift Card Famiglia Mancini" loading="lazy" />
              <div><span>Gift Card</span><h3>Presenteie com uma experiência</h3><p>Com o Gift Card Famiglia Mancini, você oferece momentos especiais em nossos restaurantes. Escolha o valor e surpreenda alguém com uma experiência inesquecível na Rua Avanhandava.</p><a href={`mailto:${RESERVATION_EMAIL}?subject=Gift Card Famiglia Mancini`}>Quero presentear</a></div>
            </article>
            <article className="experience-card delivery-experience">
              <div className="delivery-logos">
                <img src={brand.delivery} width="331" height="140" alt="Delivery Famiglia Mancini" loading="lazy" />
                <img src={brand.keeta} width="150" height="144" alt="Keeta" loading="lazy" />
              </div>
              <div><span>Delivery</span><h3>Deguste nossas pizzas em casa</h3><p>Diariamente, das 18h às 23h.</p><a href={DELIVERY_URL} target="_blank" rel="noreferrer">Pedir pela Keeta</a></div>
            </article>
          </div>
        </section>

        <section className="calligraphia section" id="calligraphia">
          <div className="calligraphia-copy">
            <p className="eyebrow">Arte na Avanhandava</p>
            <h2>Calligraphia</h2>
            <p className="calligraphia-lead">Loja de arte e galeria.</p>
            <p>Arte, presentes, antiguidades e papelaria em um espaço único na Rua Avanhandava.</p>
            <div className="contact-line vertical">
              <span><small>Endereço</small>R. Avanhandava, 40</span>
              <a href="tel:+551131516477"><small>Telefone</small>(11) 3151-6477</a>
            </div>
          </div>
          <div className="art-mosaic" aria-label="Galeria virtual Calligraphia">
            {artArchive.map((image, index) => (
              <figure key={image.src}>
                <img src={image.src} width="900" height="1200" alt={image.alt} loading="lazy" />
                <figcaption>0{index + 1}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="visit" id="visite">
          <div className="visit-info">
            <p className="eyebrow">Informações práticas</p>
            <h2>Famiglia Mancini<br /><em>Trattoria.</em></h2>
            <address>Rua Avanhandava, 81<br />Bela Vista · São Paulo · SP</address>
            <div className="hours">
              <div><span>Segunda a quarta</span><strong>11h30 — 23h</strong></div>
              <div><span>Quinta a sábado</span><strong>11h30 — 00h</strong></div>
              <div><span>Domingo</span><strong>11h30 — 23h</strong></div>
              <small>Horários sujeitos a alteração em feriados.</small>
            </div>
            <div className="visit-actions">
              <a className="button button-wine" href={MAP_URL} target="_blank" rel="noreferrer">Traçar rota</a>
              <a href="tel:+551132556599">Reservas: {RESERVATION_PHONE}</a>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              title="Mapa da Famiglia Mancini Trattoria"
              src="https://maps.google.com/maps?q=Famiglia%20Mancini%20Trattoria%2C%20Rua%20Avanhandava%2081%2C%20S%C3%A3o%20Paulo&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAP_URL} target="_blank" rel="noreferrer">Abrir no Google Maps</a>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-brand">
          <img src={brand.logo} width="202" height="73" alt="Famiglia Mancini" loading="lazy" />
          <p>Tradição italiana, coração paulistano.</p>
        </div>
        <div className="footer-contacts">
          <div><small>Reservas e informações</small><a href={`mailto:${RESERVATION_EMAIL}`}>{RESERVATION_EMAIL}</a><a href="tel:+551132556599">{RESERVATION_PHONE}</a></div>
          <div><small>Siga a Famiglia</small><a href="https://www.instagram.com/famigliamancini_oficial" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@famigliamancini" target="_blank" rel="noreferrer">TikTok</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Famiglia Mancini</span><a href="https://www.famigliamancini.com.br/transpar%C3%AAncia" target="_blank" rel="noreferrer">Transparência e Igualdade</a></div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Ações rápidas">
        <button type="button" onClick={openReservation}>Reservar</button>
        <a href="tel:+551132556599">Ligar</a>
      </nav>

      {reserveOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeReservation()}>
          <section className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title" ref={dialogRef}>
            <button className="modal-close" type="button" onClick={closeReservation} aria-label="Fechar reserva">×</button>
            {!sent ? (
              <>
                <p className="eyebrow">Reservas</p>
                <h2 id="reservation-title">Solicitar uma mesa</h2>
                <p>Preencha suas preferências. Nós preparamos o e-mail; a reserva só estará confirmada após o retorno da equipe Mancini.</p>
                <form onSubmit={handleReservation}>
                  <label>Nome<input ref={firstFieldRef} name="name" required autoComplete="name" placeholder="Como podemos chamar você?" /></label>
                  <div className="form-row">
                    <label>Data<input name="date" required type="date" min={service.today} /></label>
                    <label>Horário<select name="time" defaultValue="20:00"><option>12:00</option><option>13:30</option><option>19:00</option><option>20:00</option><option>21:30</option></select></label>
                  </div>
                  <div className="form-row">
                    <label>Pessoas<select name="guests" defaultValue={party}>{Array.from({ length: 12 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}</select></label>
                    <label>Telefone<input name="phone" required type="tel" autoComplete="tel" placeholder="(11) 99999-9999" /></label>
                  </div>
                  <label>E-mail<input name="email" required type="email" autoComplete="email" placeholder="voce@email.com" /></label>
                  <button className="button button-wine" type="submit">Preparar e-mail de reserva</button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <span aria-hidden="true">✓</span>
                <p className="eyebrow">Solicitação pronta</p>
                <h2 ref={successRef} tabIndex={-1}>Último passo</h2>
                <p>Abra seu aplicativo de e-mail e envie a mensagem preparada. A reserva será confirmada após o retorno da equipe.</p>
                <a className="button button-wine" href={reservationLink}>Abrir e-mail preenchido</a>
                <a href="tel:+551132556599">ou ligue {RESERVATION_PHONE}</a>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
