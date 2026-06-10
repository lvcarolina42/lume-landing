# Feature Specification: FAQ Page — GEO Optimization

**Feature Branch**: `002-faq-geo-page`

**Created**: 2026-06-09

**Status**: Draft

## Overview

A dedicated FAQ page at `/faq` containing 30 questions organized in 7 thematic categories about the Lume app. The primary goal is GEO (Generative Engine Optimization) — ensuring the page surfaces in responses from AI assistants (ChatGPT, Gemini, Perplexity) when aesthetic professionals search for apps to manage botox, filler, and client records. The page also improves traditional SEO through structured data and keyword-rich long-form answers.

## User Scenarios & Testing

### User Story 1 — Aesthetic Professional Searching for Information (Priority: P1)

An esteticista or médica esteta searches on Google, ChatGPT, or Gemini for questions like "como registrar botox no celular" or "melhor app para organizar clientes de estética". The FAQ page surfaces in the result. The professional reads a detailed answer, recognizes the Lume as the solution, and clicks the CTA to download.

**Why this priority**: Direct conversion path — this is the primary GEO/SEO acquisition channel.

**Independent Test**: Visit `/faq` and verify all 30 questions are present with detailed answers, structured data is valid, and the page is indexable.

**Acceptance Scenarios**:

1. **Given** a professional opens `/faq`, **When** they scan the page, **Then** they see 7 category headings and 30 accordion items, each collapsed by default.
2. **Given** a question is collapsed, **When** the professional clicks it, **Then** the answer expands smoothly and all other questions remain in their current state.
3. **Given** the professional reaches the end of the page, **When** they finish reading, **Then** they see a CTA with a direct link to the App Store to download Lume.

---

### User Story 2 — AI Engine Reading Structured Content (Priority: P1)

An AI assistant crawls the `/faq` page to answer a user query about botox registration apps. The page contains structured FAQPage JSON-LD schema and Question/Answer microdata so the AI can extract accurate, attributed answers.

**Why this priority**: Core GEO requirement — without proper structured data, AI engines cannot reliably attribute answers to Lume.

**Independent Test**: Validate the FAQPage JSON-LD using Google's Rich Results Test; confirm all 30 Q&A pairs appear in the structured data.

**Acceptance Scenarios**:

1. **Given** a crawler reads the page HTML, **When** it parses the `<script type="application/ld+json">`, **Then** it finds a valid `FAQPage` schema with 30 `Question` and `acceptedAnswer` entries.
2. **Given** a crawler reads the DOM, **When** it parses microdata attributes, **Then** each accordion item has `itemScope itemType="https://schema.org/Question"` and its answer has `itemScope itemType="https://schema.org/Answer"`.

---

### User Story 3 — Existing Visitor Navigating from Landing Page (Priority: P2)

A visitor on the landing page (`brlume.app`) sees "Perguntas frequentes" in the footer navigation and clicks it, arriving at the FAQ page.

**Why this priority**: Internal linking strengthens SEO and provides a natural path for users who want more detail.

**Independent Test**: Verify the footer nav in `Sections.tsx` contains a link to `/faq` with text "Perguntas frequentes".

**Acceptance Scenarios**:

1. **Given** a user is on any page with the footer, **When** they click "Perguntas frequentes", **Then** they navigate to `/faq`.

---

### Edge Cases

- What happens if JavaScript is disabled? Accordion answers should be accessible (screen-reader friendly, and ideally visible in a no-JS state or gracefully degraded).
- What if a question has a very long answer? Layout must not break on mobile — answers scroll within the accordion without horizontal overflow.
- What if the page is accessed directly by a crawler that doesn't execute JS? All answer text must be present in the server-rendered HTML (Server Component), not injected by client-side JS.

## Functional Requirements

### FAQ Content

- **FR-01**: The page contains exactly 30 questions distributed across 7 categories.
- **FR-02**: Categories and questions are:
  - **Sobre o Lume** (5): O que é o Lume? / Para quem é o Lume? / O Lume é gratuito? / O Lume está disponível para iOS e Android? / Meus dados ficam seguros?
  - **Câmera Ghost** (4): O que é câmera ghost para esteticistas? / Como garantir o mesmo ângulo nas fotos entre sessões? / Posso ajustar a intensidade da sobreposição ghost? / A câmera ghost funciona com câmera frontal e traseira?
  - **Ficha Clínica de Botox e Filler** (5): Como registrar a aplicação de botox no celular? / Quais regiões anatômicas de botox o Lume registra? / Como registrar preenchimento facial no celular? / É possível registrar botox e filler na mesma sessão? / Por que é importante registrar o lote do botox?
  - **Antes e Depois** (4): Como criar antes e depois profissional para Instagram? / Como adicionar minha logo no antes e depois? / Quais formatos o Lume gera? / Posso colocar a data da sessão no antes e depois?
  - **Organização de Clientes** (2): Como organizar fotos de clientes de estética no celular? / O que é o mapa de pontos de aplicação do Lume?
  - **Comparações** (4): Qual a diferença entre o Lume e uma planilha? / Por que não usar o WhatsApp para guardar fotos de clientes? / Existe app específico para registrar botox e harmonização facial? / O Lume substitui um prontuário em papel?
  - **Planos** (2): Qual a diferença entre o plano gratuito e o Lume Pro? / Preciso de cartão de crédito para usar o Lume?
- **FR-03**: Each answer is 3–5 sentences, mentions Lume naturally, and includes relevant keywords organically.

### Accordion Behavior

- **FR-04**: All questions are collapsed by default when the page loads.
- **FR-05**: Clicking a question toggles it open/closed independently (multiple questions can be open simultaneously).
- **FR-06**: Open/close transition is animated (smooth, not jarring).
- **FR-07**: The open/close state is indicated visually (e.g., chevron icon rotates).

### Structured Data

- **FR-08**: The page includes a `FAQPage` JSON-LD schema in the `<head>` with all 30 questions and answers.
- **FR-09**: Each accordion item carries `itemScope itemType="https://schema.org/Question"` microdata; the question text has `itemProp="name"` and the answer container has `itemScope itemType="https://schema.org/Answer"` with `itemProp="text"` on the answer text.

### Page Metadata

- **FR-10**: The page has a unique `<title>` and `<meta description>` targeting FAQ-intent keywords.
- **FR-11**: The canonical URL is `https://brlume.app/faq`.

### Visual Design

- **FR-12**: Visual identity matches the landing page: white background, teal accent (`#0d9488` Tailwind teal-600), Inter font, mobile-first layout.
- **FR-13**: Category headings are displayed in uppercase teal above their group of questions.
- **FR-14**: Page H1 is "Tudo sobre o Lume".

### CTA

- **FR-15**: A CTA section appears below the last FAQ category, linking to the App Store with a clear download prompt.

### Footer Link

- **FR-16**: The footer navigation in the existing `Footer` component (`Sections.tsx`) includes a link to `/faq` with the text "Perguntas frequentes".

### Server-Side Rendering

- **FR-17**: All question and answer text is present in the server-rendered HTML — no answer content is loaded asynchronously. The accordion toggle state (open/closed) is the only client-side behavior.

## Success Criteria

1. **GEO Discoverability**: The `/faq` page passes Google's Rich Results Test for FAQPage structured data with all 30 entries valid.
2. **Crawlability**: A non-JS crawler (e.g., `curl`) retrieves all 30 questions and their full answer text in the HTML response.
3. **Accordion Usability**: A user can expand and read any question answer within 1 tap/click, with no page reload.
4. **Mobile Rendering**: The page is fully readable on a 375px viewport with no horizontal scroll and no text overflow.
5. **Page Performance**: The FAQ page achieves a Lighthouse performance score of 85+ on mobile (same baseline as the landing page).
6. **Footer Navigation**: The "Perguntas frequentes" link appears in the footer on all pages that include the `Footer` component.
7. **Keyword Coverage**: The 7 priority keywords (botox app, filler registro, câmera ghost, esteticista app, antes e depois, organização clientes, prontuário estético) each appear at least twice across the 30 answers.

## Key Entities

- **FAQ Category**: a named group (e.g., "Câmera Ghost") containing 2–5 questions.
- **FAQ Item**: a question + answer pair, with accordion behavior and Schema.org microdata.
- **FAQPage Schema**: the JSON-LD object injected in the page `<head>` listing all items for search engines.

## Assumptions

- The FAQ page is a static page (no user-submitted questions, no CMS); content is hardcoded.
- "Multiple questions can be open simultaneously" is the chosen UX (simpler, better for crawlers than exclusive accordion).
- The App Store CTA links to the same URL already used in the landing page (`stores.ts`).
- The footer link addition does not require a new shared layout — it is a direct edit to the `Footer` component in `Sections.tsx`.
- The page will be included in the existing Firebase Hosting static export with no routing changes needed (Next.js app router handles `/faq` automatically).

## Out of Scope

- Search/filter functionality within the FAQ.
- User ability to submit new questions.
- Localization of FAQ content (English/Spanish versions).
- Analytics tracking per question (click events).
