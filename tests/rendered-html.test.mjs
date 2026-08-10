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
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});

test("mantém integrações, acervo e requisitos de conversão", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /@import "tailwindcss"/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.nav-links \{[^}]*top: var\(--header-height\)[^}]*overflow-y: auto/s);
  assert.match(css, /\.mobile-action-bar \{/);
  assert.match(page, /reservas@famigliamancini\.com\.br/);
  assert.match(page, /\(11\) 3255-6599/);
  assert.match(page, /ChIJfadx80xYzpQRyHnuTnmQmDA/);
  assert.match(page, /12607344\.pdf/);
  assert.match(page, /AGORA EM SÃO PAULO/);
  assert.match(page, /A estimativa de espera depende da operação da casa/);
  assert.match(page, /Deguste nossas pizzas em casa/);
  assert.match(page, /Diariamente, das 18h às 23h/);
  assert.match(page, /20250130 · 092926/);
  assert.match(page, /aria-label="Ações rápidas"/);
  assert.doesNotMatch(page, /↗|<Arrow/);
  assert.doesNotMatch(page, /PRÉVIA INTERATIVA|dados ilustrativos/i);
  assert.ok((page.match(/~mv2/g) ?? []).length >= 30);
  assert.match(layout, /Famiglia Mancini — Desde 1980 na Rua Avanhandava/);
  assert.match(layout, /og-v3\.png/);
});
