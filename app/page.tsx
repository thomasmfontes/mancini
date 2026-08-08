"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const MAP_URL = "https://www.google.com/maps/place/?q=place_id:ChIJfadx80xYzpQRyHnuTnmQmDA";
const MENU_URL = "https://cdn.me-qr.com/pdf/12607344.pdf?time=1712690862";

const images = {
  hero: "https://static.wixstatic.com/media/490ec2_81f87db962ff430082c249a4da7a63b8~mv2.jpg/v1/fill/w_2200,h_1320,al_c,q_92,enc_avif,quality_auto/490ec2_81f87db962ff430082c249a4da7a63b8~mv2.jpg",
  antepasti: "https://static.wixstatic.com/media/490ec2_55b2eda68b004ec78a15c3e69a44f6ad~mv2.jpg/v1/fill/w_1400,h_1000,al_c,q_90,enc_avif,quality_auto/490ec2_55b2eda68b004ec78a15c3e69a44f6ad~mv2.jpg",
  penne: "https://static.wixstatic.com/media/490ec2_5c20852c35e64ad2b77878d6409dbcfd~mv2.jpg/v1/fill/w_1400,h_1000,al_c,q_90,enc_avif,quality_auto/490ec2_5c20852c35e64ad2b77878d6409dbcfd~mv2.jpg",
  canelone: "https://static.wixstatic.com/media/490ec2_1e65fdbcd7e84ea995a77e5f33757bd5~mv2.jpg/v1/fill/w_1400,h_1000,al_c,q_90,enc_avif,quality_auto/490ec2_1e65fdbcd7e84ea995a77e5f33757bd5~mv2.jpg",
  polpetone: "https://static.wixstatic.com/media/490ec2_f3633cc361524fd28ee35962c9ae43f1~mv2.jpg/v1/fill/w_1400,h_1000,al_c,q_90,enc_avif,quality_auto/490ec2_f3633cc361524fd28ee35962c9ae43f1~mv2.jpg",
};

const streetGallery = [
  { src: "https://static.wixstatic.com/media/490ec2_73e71e28458a49288b6b61fbe3a46da2~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_92,enc_avif,quality_auto/490ec2_73e71e28458a49288b6b61fbe3a46da2~mv2.jpg", label: "Luzes da Avanhandava", note: "Uma rua que muda de ritmo ao anoitecer." },
  { src: "https://static.wixstatic.com/media/490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_92,enc_avif,quality_auto/490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg", label: "Mesas e encontros", note: "O charme de uma pequena vila italiana em São Paulo." },
  { src: "https://static.wixstatic.com/media/490ec2_c2ae308a55b7442e9418ea86c1ba1971~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_92,enc_avif,quality_auto/490ec2_c2ae308a55b7442e9418ea86c1ba1971~mv2.jpg", label: "Fachadas restauradas", note: "Pedras portuguesas, fontes e memória urbana." },
  { src: "https://static.wixstatic.com/media/490ec2_da5f9b3b41944466af1d05d9eea7d7b7~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_92,enc_avif,quality_auto/490ec2_da5f9b3b41944466af1d05d9eea7d7b7~mv2.jpg", label: "A rua é o cenário", note: "Gastronomia, arte e música no centro histórico." },
];

const artGallery = [
  "https://static.wixstatic.com/media/8b411d_3bdd226a193a4efba4b189fd931c1f3c~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/8b411d_3bdd226a193a4efba4b189fd931c1f3c~mv2.jpg",
  "https://static.wixstatic.com/media/8b411d_c15c6344c2854d558bbfad807782d913~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/8b411d_c15c6344c2854d558bbfad807782d913~mv2.jpg",
  "https://static.wixstatic.com/media/8b411d_ec18aa799f5247be808afd576f716cc3~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/8b411d_ec18aa799f5247be808afd576f716cc3~mv2.jpg",
];

const foodCards = [
  { image: images.antepasti, eyebrow: "O ritual da casa", title: "Mesa de antepastos", text: "Mais de 70 opções entre receitas italianas, queijos, embutidos, conservas e sabores preparados para você compor o início da experiência." },
  { image: images.penne, eyebrow: "Dal mare", title: "Penne com frutos do mar", text: "Massas generosas para compartilhar, molhos feitos com tempo e ingredientes que celebram a tradição italiana." },
  { image: images.canelone, eyebrow: "Della famiglia", title: "Canelone Fiorentina", text: "Receitas afetivas servidas em porções abundantes — como manda a mesa de uma verdadeira famiglia." },
];

const houses = [
  {
    name: "Famiglia Mancini",
    subtitle: "La casa tradizionale · dal 1980",
    address: "R. Avanhandava, 81",
    phone: "(11) 3256-4320",
    phoneHref: "tel:+551132564320",
    menu: "https://cdn.me-qr.com/pdf/12607344.pdf?time=1712690862",
    image: images.polpetone,
    logo: "https://static.wixstatic.com/media/490ec2_2e52071ad0f64dc6aec448a5beb9c67f~mv2.png/v1/fill/w_500,h_492,al_c,q_90,enc_avif,quality_auto/logo%20mancini_medalhao.png",
    description: "A Famiglia Mancini Trattoria, fundada em maio de 1980, é a casa tradicional do Grupo Mancini. Ao longo das décadas, mais de 15 milhões de pessoas foram recebidas em seus ambientes, que são ricamente decorados e contam com uma fonte em seu interior. Os pratos, reconhecidos por suas porções generosas, são servidos para atender a duas ou mais pessoas. Além disso, a Trattoria dispõe de uma sala de antepastos com mais de 70 opções.",
  },
  {
    name: "Il Ristorante",
    subtitle: "Sofisticação com vista · dal 2001",
    address: "R. Avanhandava, 126",
    phone: "(11) 3258-8510",
    phoneHref: "tel:+551132588510",
    menu: "https://cdn.me-qr.com/pdf/12607216.pdf?time=1712578944",
    image: "https://static.wixstatic.com/media/490ec2_00ea69ed610041f8bd49e5a3bff52f9f~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_90,enc_avif,quality_auto/490ec2_00ea69ed610041f8bd49e5a3bff52f9f~mv2.jpg",
    logo: "https://static.wixstatic.com/media/490ec2_dd5a8193dea44fdc9fd8217170a4f65d~mv2.png/v1/fill/w_500,h_252,al_c,q_90,enc_avif,quality_auto/il_ristorante_logo2.png",
    description: "Com uma atmosfera acolhedora e um toque de sofisticação, o Il Ristorante, inaugurado em 2001, oferece uma experiência gastronômica única, com vista para a encantadora Rua Avanhandava. Seu cardápio inclui carnes, peixes, massas e uma mesa de antepastos com mais de 40 itens. Todos os pratos são servidos de forma individual. À noite, durante o jantar, temos música ao vivo sem interrupções.",
  },
  {
    name: "Pizza, Pasta & Música",
    subtitle: "Uma cantina lúdica · dal 2004",
    address: "R. Avanhandava, 37",
    phone: "(11) 3231-0033",
    phoneHref: "tel:+551132310033",
    menu: "https://cdn.me-qr.com/pdf/12607404.pdf?time=1712578858",
    image: "https://static.wixstatic.com/media/490ec2_ecc9a658c243493c9c5915c7c8e22416~mv2.jpg/v1/fill/w_1500,h_1100,al_c,q_90,enc_avif,quality_auto/490ec2_ecc9a658c243493c9c5915c7c8e22416~mv2.jpg",
    logo: "https://static.wixstatic.com/media/490ec2_9ef96e888e7b44c9b38c63667c6fdbbc~mv2.png/v1/fill/w_560,h_245,al_c,q_90,enc_avif,quality_auto/490ec2_9ef96e888e7b44c9b38c63667c6fdbbc~mv2.png",
    description: "Fundada em 2004, a Pizzaria cativa seus visitantes com uma decoração lúdica e encantadora. Seus três ambientes evocam uma autêntica cantina italiana: salão de entrada, sala de antepastos e forno, além de um salão com visão para o palco e pequeno terraço voltado à Rua Avanhandava. O cardápio oferece pizzas, antepastos e diversos pratos da culinária italiana.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [houseIndex, setHouseIndex] = useState(0);
  const [party, setParty] = useState(2);
  const [clock, setClock] = useState(new Date());
  const [reserveOpen, setReserveOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setClock(new Date()), 30000);
    return () => window.clearInterval(id);
  }, []);

  const wait = useMemo(() => {
    const hour = clock.getHours() + clock.getMinutes() / 60;
    const day = clock.getDay();
    let base = 8;
    if (hour >= 12 && hour < 15) base = day === 0 || day === 6 ? 34 : 22;
    if (hour >= 18 && hour < 19.5) base = 28;
    if (hour >= 19.5 && hour < 22) base = day >= 4 || day === 0 ? 52 : 38;
    if (hour >= 22 || hour < 11.5) base = 0;
    return base ? base + Math.max(0, party - 2) * 4 : 0;
  }, [clock, party]);

  const open = wait > 0;

  function handleReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Famiglia Mancini — início">
          <span>Famiglia Mancini</span><small>Trattoria · dal 1980</small>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <a href="#storia" onClick={() => setMenuOpen(false)}>La storia</a>
          <a href="#sapori" onClick={() => setMenuOpen(false)}>Sapori</a>
          <a href="#casas" onClick={() => setMenuOpen(false)}>Le case</a>
          <a href="#avanhandava" onClick={() => setMenuOpen(false)}>Avanhandava</a>
          <a href="#calligraphia" onClick={() => setMenuOpen(false)}>Calligraphia</a>
          <a href="#visite" onClick={() => setMenuOpen(false)}>Visite</a>
        </nav>
        <button className="header-cta" onClick={() => setReserveOpen(true)}>Fila & reservas</button>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <img className="hero-image" src={images.hero} alt="Rua Avanhandava, endereço da Famiglia Mancini" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="kicker light">São Paulo · Bela Vista · desde 1980</p>
          <h1>Uma noite<br />na <em>Avanhandava.</em></h1>
          <p className="hero-intro">Cozinha italiana generosa, música e histórias compartilhadas no endereço mais encantador do centro de São Paulo.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => setReserveOpen(true)}>Consultar fila <ArrowIcon /></button>
            <a className="button ghost" href={MENU_URL} target="_blank" rel="noreferrer">Ver cardápio</a>
          </div>
        </div>
        <div className="hero-status" aria-label="Informações rápidas">
          <span className={open ? "status-dot" : "status-dot closed"} />
          <div><small>Hoje</small><strong>{open ? "Aberto até 00h" : "Abre às 11h30"}</strong></div>
          <div className="status-divider" />
          <div><small>Endereço</small><strong>R. Avanhandava, 81</strong></div>
        </div>
        <a className="scroll-cue" href="#storia" aria-label="Conheça nossa história"><span /> descubra</a>
      </section>

      <section className="story section" id="storia">
        <div className="section-number">01</div>
        <div className="story-heading">
          <p className="kicker">La nostra storia</p>
          <h2>Quarenta e seis anos<br />à mesa de São Paulo.</h2>
        </div>
        <div className="story-copy">
          <p className="dropcap">A Famiglia Mancini Trattoria nasceu em 10 de maio de 1980 e se tornou a casa tradicional do Grupo Mancini — um lugar onde a fartura italiana encontrou o jeito paulistano de celebrar.</p>
          <p>Ao longo das décadas, mais de 15 milhões de pessoas atravessaram suas portas. Ambientes ricamente decorados, a fonte no salão e pratos pensados para duas ou mais pessoas transformam cada visita em memória.</p>
          <div className="story-facts">
            <div><strong>1980</strong><span>o começo de tudo</span></div>
            <div><strong>15 mi+</strong><span>de pessoas recebidas</span></div>
            <div><strong>70+</strong><span>antepastos à escolha</span></div>
          </div>
        </div>
      </section>

      <section className="flavour section" id="sapori">
        <div className="flavour-top">
          <div><p className="kicker">I sapori della casa</p><h2>Fartura que se<br />serve <em>à mesa.</em></h2></div>
          <p>Receitas de origem, ingredientes escolhidos e o prazer de compartilhar. Aqui, o almoço se estende e o jantar ganha trilha sonora.</p>
        </div>
        <div className="food-grid">
          {foodCards.map((card, index) => (
            <article className={`food-card food-${index + 1}`} key={card.title}>
              <div className="food-image-wrap"><img src={card.image} alt={card.title} loading="lazy" /><span>0{index + 1}</span></div>
              <p className="kicker">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="menu-band">
          <span>Antipasti</span><i>◆</i><span>Paste</span><i>◆</i><span>Pesci</span><i>◆</i><span>Dolci</span>
          <a href={MENU_URL} target="_blank" rel="noreferrer">Cardápio completo <ArrowIcon /></a>
        </div>
      </section>

      <section className="houses section relative overflow-hidden" id="casas">
        <div className="houses-heading">
          <div>
            <p className="kicker light">Conheça nossas casas na Avanhandava</p>
            <h2>Três maneiras de<br />viver a <em>Famiglia.</em></h2>
          </div>
          <p>Da mesa farta da Trattoria à sofisticação do Il Ristorante e à atmosfera lúdica da Pizzaria. Uma rua, três experiências com a mesma hospitalidade.</p>
        </div>
        <div className="house-tabs grid" role="tablist" aria-label="Casas do Grupo Mancini">
          {houses.map((house, index) => (
            <button key={house.name} role="tab" aria-selected={houseIndex === index} className={houseIndex === index ? "active" : ""} onClick={() => setHouseIndex(index)}>
              <span>0{index + 1}</span>{house.name}
            </button>
          ))}
        </div>
        <article className="house-showcase">
          <div className="house-image">
            <img src={houses[houseIndex].image} alt={`Gastronomia do ${houses[houseIndex].name}`} loading="lazy" />
            <span>{houses[houseIndex].subtitle}</span>
          </div>
          <div className="house-content">
            <img className="house-logo" src={houses[houseIndex].logo} alt={houses[houseIndex].name} loading="lazy" />
            <h3>{houses[houseIndex].name}</h3>
            <p>{houses[houseIndex].description}</p>
            <div className="house-contact">
              <span><small>Endereço</small>{houses[houseIndex].address}</span>
              <a href={houses[houseIndex].phoneHref}><small>Telefone</small>{houses[houseIndex].phone}</a>
            </div>
            <a className="button house-menu" href={houses[houseIndex].menu} target="_blank" rel="noreferrer">Ver cardápio <ArrowIcon /></a>
          </div>
        </article>
      </section>

      <section className="street section" id="avanhandava">
        <div className="street-copy">
          <div className="section-number">02</div>
          <p className="kicker light">La via più italiana di São Paulo</p>
          <h2>A rua que<br />virou <em>destino.</em></h2>
          <p>Em 2007, a Avanhandava ganhou nova vida. Pedras portuguesas, fachadas restauradas, iluminação acolhedora e fontes criaram um pequeno refúgio urbano — uma revitalização conduzida em parceria com a cidade e a associação local presidida por Walter Mancini.</p>
          <p>Hoje, gastronomia, arte e música fazem da rua um passeio que começa antes de sentar à mesa.</p>
          <div className="gallery-controls">
            <button aria-label="Foto anterior" onClick={() => setGalleryIndex((galleryIndex + streetGallery.length - 1) % streetGallery.length)}>←</button>
            <span>{String(galleryIndex + 1).padStart(2, "0")} / {String(streetGallery.length).padStart(2, "0")}</span>
            <button aria-label="Próxima foto" onClick={() => setGalleryIndex((galleryIndex + 1) % streetGallery.length)}>→</button>
          </div>
        </div>
        <div className="street-visual">
          <img src={streetGallery[galleryIndex].src} alt={streetGallery[galleryIndex].label} />
          <div className="image-caption"><strong>{streetGallery[galleryIndex].label}</strong><span>{streetGallery[galleryIndex].note}</span></div>
        </div>
      </section>

      <section className="live section" id="fila">
        <div className="live-intro">
          <p className="kicker">Il tuo tavolo</p>
          <h2>Planeje sua<br /><em>experiência.</em></h2>
          <p>Consulte uma estimativa dinâmica antes de sair de casa ou envie uma solicitação de reserva para nossa equipe.</p>
          <small>Estimativa atualizada às {clock.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}. O tempo real pode variar conforme a operação.</small>
        </div>
        <div className="queue-card">
          <div className="queue-head"><span className="live-pill"><i /> AO VIVO</span><span>Famiglia Mancini · Avanhandava, 81</span></div>
          <div className="queue-main">
            <div><small>Espera estimada agora</small><strong>{wait ? `${wait}–${wait + 15}` : "—"}</strong><span>{wait ? "minutos" : "fora do horário"}</span></div>
            <div className="queue-gauge"><i style={{ width: `${Math.min(100, Math.max(8, wait * 1.45))}%` }} /></div>
          </div>
          <label htmlFor="party">Quantas pessoas?</label>
          <div className="party-selector">
            <button onClick={() => setParty(Math.max(1, party - 1))} aria-label="Diminuir pessoas">−</button>
            <strong>{party}<small>{party === 1 ? " pessoa" : " pessoas"}</small></strong>
            <button onClick={() => setParty(Math.min(12, party + 1))} aria-label="Aumentar pessoas">+</button>
          </div>
          <div className="queue-actions">
            <button className="button primary" onClick={() => setReserveOpen(true)}>Solicitar reserva <ArrowIcon /></button>
            <a href="tel:+551132556599">Ligar agora</a>
          </div>
        </div>
      </section>

      <section className="occasions section bg-[#f7f2e9]" id="experiencias">
        <div className="occasions-heading">
          <p className="kicker">Mais motivos para celebrar</p>
          <h2>A Avanhandava<br /><em>além da mesa.</em></h2>
        </div>
        <div className="occasion-grid grid">
          <article className="occasion-card event-card">
            <img src="https://static.wixstatic.com/media/490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg/v1/fill/w_1500,h_1000,al_c,q_90,enc_avif,quality_auto/490ec2_34ef86821ca24edca53d954bf8514280~mv2.jpg" alt="Evento na Rua Avanhandava" loading="lazy" />
            <div><span>01 · Celebre</span><h3>Faça seu evento<br />na Avanhandava</h3><p>Casamento, aniversário, confraternização ou evento corporativo: o Grupo Mancini conta com o ambiente ideal para a sua ocasião.</p><a href="mailto:reservas@famigliamancini.com.br?subject=Evento na Avanhandava">Planejar evento <ArrowIcon /></a></div>
          </article>
          <article className="occasion-card gift-card">
            <div className="gift-visual"><img src="https://static.wixstatic.com/media/490ec2_806b661af2e94609986edb03f1a39942~mv2.png/v1/fill/w_560,h_455,al_c,q_90,enc_avif,quality_auto/gift.png" alt="Gift Card Famiglia Mancini" loading="lazy" /></div>
            <div><span>02 · Presenteie</span><h3>Gift Card<br />Famiglia Mancini</h3><p>Ofereça momentos especiais em nossos restaurantes. Escolha o valor e surpreenda alguém com uma experiência inesquecível.</p><a href="mailto:reservas@famigliamancini.com.br?subject=Gift Card Famiglia Mancini">Quero presentear <ArrowIcon /></a></div>
          </article>
          <article className="occasion-card delivery-card">
            <div className="delivery-mark">PIZZA<br /><i>a casa</i></div>
            <div><span>03 · Delivery</span><h3>Deguste nossas<br />pizzas em casa</h3><p>Delivery diariamente, das 18h às 23h, pela Keeta.</p><a href="https://url-eu.mykeeta.com/Sn65C7Fz" target="_blank" rel="noreferrer">Pedir agora <ArrowIcon /></a></div>
          </article>
        </div>
      </section>

      <section className="calligraphia section" id="calligraphia">
        <div className="art-grid" aria-label="Galeria Calligraphia">
          {artGallery.map((src, index) => <img key={src} src={src} alt={`Acervo da Calligraphia — obra ${index + 1}`} loading="lazy" />)}
        </div>
        <div className="art-copy">
          <p className="kicker">Arte na Avanhandava</p>
          <h2>Calligraphia</h2>
          <p className="art-lead">Loja de arte e galeria.</p>
          <p>Na Rua Avanhandava, 40, a Calligraphia prolonga o passeio com um acervo singular. Um espaço onde objetos, formas e obras dialogam com a atmosfera criativa da rua.</p>
          <div className="art-meta"><span><small>Endereço</small>R. Avanhandava, 40</span><span><small>Telefone</small>(11) 3151-6477</span></div>
        </div>
      </section>

      <section className="visit section" id="visite">
        <div className="visit-info">
          <p className="kicker">Vieni a trovarci</p>
          <h2>Seu lugar<br />à mesa.</h2>
          <div className="visit-block"><small>Famiglia Mancini Trattoria</small><p>Rua Avanhandava, 81<br />Bela Vista · São Paulo · SP</p><a href={MAP_URL} target="_blank" rel="noreferrer">Traçar rota <ArrowIcon /></a></div>
          <div className="hours">
            <div><span>Segunda a quarta</span><strong>11h30 — 23h</strong></div>
            <div><span>Quinta a sábado</span><strong>11h30 — 00h</strong></div>
            <div><span>Domingo</span><strong>11h30 — 23h</strong></div>
          </div>
          <p className="hours-note">Horários sujeitos a alteração em feriados.</p>
        </div>
        <div className="map-wrap">
          <iframe title="Mapa da Famiglia Mancini Trattoria" loading="lazy" src="https://www.google.com/maps?q=Famiglia+Mancini+Trattoria,+Rua+Avanhandava,+81,+São+Paulo&output=embed" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-card" href={MAP_URL} target="_blank" rel="noreferrer"><span>−23.550347, −46.645050</span><strong>Abrir no Google Maps <ArrowIcon /></strong></a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div><p className="footer-script">Ci vediamo presto!</p><p>Reservas e informações</p><a href="mailto:reservas@famigliamancini.com.br">reservas@famigliamancini.com.br</a><a href="tel:+551132556599">(11) 3255-6599</a></div>
          <div className="footer-links"><a href="#storia">História</a><a href="#sapori">Gastronomia</a><a href="#casas">Nossas casas</a><a href="#avanhandava">Avanhandava</a><a href="#calligraphia">Calligraphia</a><a href={MENU_URL} target="_blank" rel="noreferrer">Cardápio</a></div>
          <div className="footer-social"><span>Siga a Famiglia</span><a href="https://www.instagram.com/famigliamancini_oficial" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@famigliamancini" target="_blank" rel="noreferrer">TikTok ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Famiglia Mancini</span><span>Tradição italiana, coração paulistano.</span><a href="https://www.famigliamancini.com.br/transpar%C3%AAncia" target="_blank" rel="noreferrer">Transparência e Igualdade</a></div>
      </footer>

      {reserveOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setReserveOpen(false)}>
          <section className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title">
            <button className="modal-close" onClick={() => { setReserveOpen(false); setSent(false); }} aria-label="Fechar">×</button>
            {!sent ? <>
              <p className="kicker">Prenota il tuo momento</p>
              <h2 id="reservation-title">Solicitar uma mesa</h2>
              <p>Envie sua preferência. A equipe Mancini confirmará a disponibilidade pelo contato informado.</p>
              <form onSubmit={handleReservation}>
                <label>Nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
                <div className="form-row"><label>Data<input name="date" required type="date" /></label><label>Horário<select name="time" defaultValue="20:00"><option>12:00</option><option>13:30</option><option>19:00</option><option>20:00</option><option>21:30</option></select></label></div>
                <div className="form-row"><label>Pessoas<select name="guests" defaultValue={party}>{Array.from({length: 12}, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label><label>Telefone<input name="phone" required type="tel" placeholder="(11) 99999-9999" /></label></div>
                <label>E-mail<input name="email" required type="email" placeholder="voce@email.com" /></label>
                <button className="button primary" type="submit">Enviar solicitação <ArrowIcon /></button>
              </form>
            </> : <div className="success-state"><span>✓</span><p className="kicker">Richiesta ricevuta</p><h2>Grazie!</h2><p>Sua preferência foi registrada nesta experiência. Para confirmação imediata, fale com a equipe Mancini.</p><a className="button primary" href="mailto:reservas@famigliamancini.com.br?subject=Solicitação de reserva — Famiglia Mancini">Continuar por e-mail <ArrowIcon /></a><a href="tel:+551132556599">ou ligue (11) 3255-6599</a></div>}
          </section>
        </div>
      )}
    </main>
  );
}
