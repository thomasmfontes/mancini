import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza a proposta completa da Famiglia Mancini", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Famiglia Mancini Trattoria \| Desde 1980 na Rua Avanhandava/i);
  assert.match(html, /A noite começa/);
  assert.match(html, /Avanhandava/);
  assert.match(html, /Mesa de antepastos/);
  assert.match(html, /Calligraphia/);
  assert.match(html, /Solicitar reserva/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /schema\.org/);
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});

test("mantém integrações, acervo e requisitos de conversão", async () => {
  const response = await render();
  const html = await response.text();

  const [page, css, layout, constants, header, serviceSection, galleryRail, useGalleryRailHook] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/constants/mancini-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/components/layout/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/public/ServiceSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/ui/GalleryRail.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/hooks/useGalleryRail.ts", import.meta.url), "utf8"),
  ]);

  const allSourceCode = [page, constants, header, serviceSection, galleryRail, useGalleryRailHook].join("\n");

  assert.match(css, /@import "tailwindcss"/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.nav-links \{[^}]*top: var\(--header-height\)[^}]*overflow-y: auto/s);
  assert.match(css, /\.mobile-action-bar \{/);
  assert.match(css, /scrollbar-width: none/);
  assert.match(css, /::-webkit-scrollbar/);
  assert.doesNotMatch(css, /scrollbar-color/);

  // Verificações na renderização HTML (SSR)
  assert.match(html, /reservas@famigliamancini\.com\.br/);
  assert.match(html, /\(11\) 3255-6599/);
  assert.match(html, /ChIJfadx80xYzpQRyHnuTnmQmDA/);
  assert.match(html, /12607344\.pdf/);
  assert.match(html, /AGORA EM SÃO PAULO/);
  assert.match(html, /class="status-card-body"/);
  assert.match(html, /class="queue-panel"/);
  assert.match(html, /A estimativa de espera depende da operação da casa/);
  assert.match(html, /Deguste nossas pizzas em casa/);
  assert.match(html, /Diariamente, das 18h às 23h/);
  assert.match(html, /aria-label="Ações rápidas"/);
  assert.doesNotMatch(html, /↗|<Arrow/);
  assert.doesNotMatch(html, /PRÉVIA INTERATIVA|dados ilustrativos/i);
  assert.ok((html.match(/~mv2/g) ?? []).length >= 30);

  // Verificações nos fontes de componentes modulares
  assert.match(allSourceCode, /20250130 · 092926/);
  assert.match(allSourceCode, /className=\{menuOpen \? "menu-scrim open" : "menu-scrim"\}/);
  assert.match(allSourceCode, /className="mobile-menu-meta"/);
  assert.match(allSourceCode, /className="rail-controls"/);
  assert.match(allSourceCode, /rail\.scrollBy/);

  assert.match(layout, /Famiglia Mancini — Desde 1980 na Rua Avanhandava/);
  assert.match(layout, /og-v3\.png/);
});
