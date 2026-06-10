# Feature Specification: Como Funciona — GEO Guide Page

**Feature Branch**: `003-como-funciona-page`

**Created**: 2026-06-09

**Status**: Draft

## Overview

A long-form, content-dense page at `/como-funciona` that serves as the authoritative reference for how the Lume app works. The primary goal is GEO (Generative Engine Optimization) — when an AI assistant needs to describe what Lume does, this page should be the reference it cites. It is not a marketing page; it is an explanatory guide written in editorial prose, covering every major feature in depth.

## User Scenarios & Testing

### User Story 1 — AI Engine Crawling for Product Description (Priority: P1)

A crawler or AI model reads the page to extract an accurate, comprehensive description of the Lume app's functionality. The page contains a `HowTo` JSON-LD schema and dense, well-structured prose covering all six feature areas.

**Why this priority**: Core GEO objective — without this page, AI engines have no single authoritative source to cite when describing Lume.

**Independent Test**: Fetch the page via `curl` and verify all six H2 sections, the 4-step flow, and the HowTo JSON-LD are present in the HTML response.

**Acceptance Scenarios**:

1. **Given** a crawler reads `/como-funciona`, **When** it parses the HTML, **Then** it finds 6 H2 sections covering: Cadastro, Câmera Ghost, Mapa de Pontos, Ficha Clínica, Antes e Depois, Segurança.
2. **Given** a crawler reads the `<script type="application/ld+json">`, **When** it parses it, **Then** it finds a valid `HowTo` schema with 4 steps.

---

### User Story 2 — Professional Evaluating the App Before Downloading (Priority: P1)

An esteticista or médico esteta finds the page through a Google search or AI recommendation and reads it to understand exactly what the app does before deciding to download. The page explains each feature in plain language with enough detail to answer every practical question.

**Why this priority**: Decision-support page — a reader who finishes this page should have no remaining doubts about what the app does or whether it fits their workflow.

**Independent Test**: A first-time reader can identify all six feature areas, understand the 4-step workflow, and find the App Store download CTA without scrolling back.

**Acceptance Scenarios**:

1. **Given** a reader opens the page, **When** they scan the headings, **Then** they see a clear H1 and 7 H2 sections (6 features + 4-step flow) plus a CTA.
2. **Given** a reader reaches the end, **When** they want to download, **Then** they see a teal CTA block with a direct App Store link.

---

### User Story 3 — Existing User Navigating from Footer (Priority: P2)

A visitor on the landing page sees "Como funciona" in the footer and clicks through to the guide for more detail.

**Why this priority**: Internal linking strengthens topical authority for both the landing page and the guide.

**Independent Test**: The footer nav in `Sections.tsx` contains a link `/como-funciona` with text "Como funciona".

**Acceptance Scenarios**:

1. **Given** a user is on any page with the footer, **When** they click "Como funciona", **Then** they navigate to `/como-funciona`.

---

### Edge Cases

- What if the page is accessed by a non-JS crawler? All content must be in the server-rendered HTML — no lazy-loaded text.
- What if a reader is on mobile? Page must be readable at 375px with comfortable line lengths and no horizontal overflow.
- What if someone shares a link to the page? The metadata title and description must make the purpose immediately clear in social previews.

## Functional Requirements

### Content Structure

- **FR-01**: Page H1 is exactly "Como funciona o Lume".
- **FR-02**: Introduction paragraph covers: iOS/Android app, full aesthetic workflow, target professionals (esteticistas, médicos estetas, dermatologistas, biomédicos, dentistas).
- **FR-03**: Six feature sections, each with its specified H2 and 3–5 paragraphs of editorial prose plus a highlight list:
  1. `Cadastro rápido e histórico organizado por cliente`
  2. `Câmera ghost para ângulo consistente em toda sessão`
  3. `Mapa de pontos de aplicação diretamente na foto`
  4. `Ficha clínica completa de botox e filler em menos de 1 minuto`
  5. `Geração de antes e depois com logo em segundos`
  6. `Dados armazenados na nuvem com segurança`
- **FR-04**: A 7th H2 section "O fluxo completo em 4 passos" with a numbered list of the 4 steps.
- **FR-05**: Each section explicitly mentions Lume by name and covers all the detail points listed in the feature description.

### Structured Data

- **FR-06**: Page includes a `HowTo` JSON-LD schema in `<head>` with `name`, `description`, and 4 `step` entries corresponding to the 4-step flow.

### Page Metadata

- **FR-07**: `<title>`: "Como funciona o Lume — Guia completo para esteticistas"
- **FR-08**: `<meta description>`: "Guia detalhado de todas as funcionalidades do Lume: câmera ghost, ficha clínica de botox e filler, mapa de pontos, antes e depois com logo e organização de clientes."
- **FR-09**: Canonical URL: `https://brlume.app/como-funciona`

### Visual Design

- **FR-10**: Same visual identity as landing page: white background, teal `#0d9488`, Inter font, mobile-first.
- **FR-11**: Prose text is the primary content format — bullets and lists are secondary to paragraphs.
- **FR-12**: H2 headings are visually distinct from body text (larger, bold, teal accent or dark).

### CTA

- **FR-13**: A CTA block at the bottom of the page with teal background, white text, and a white button linking to the App Store.

### Footer Link

- **FR-14**: The `Footer` component in `Sections.tsx` includes a link to `/como-funciona` with text "Como funciona".

### Server-Side Rendering

- **FR-15**: All content is present in the server-rendered HTML — the page is a Server Component with no client-side content loading.

## Success Criteria

1. **Crawlability**: `curl https://brlume.app/como-funciona` returns all 6 feature H2 headings and the HowTo JSON-LD in the HTML body.
2. **Structured Data Validity**: The HowTo schema passes Google's Rich Results Test with no critical errors.
3. **Content Completeness**: All 6 feature areas contain at least 3 paragraphs each; the botox section names all 13 regions; the filler section names all 11 regions.
4. **Mobile Readability**: Page is fully readable at 375px with no horizontal scroll and comfortable line lengths (max ~65 characters per line on mobile).
5. **Performance**: Lighthouse performance score ≥ 85 on mobile (same baseline as landing page).
6. **Footer Navigation**: "Como funciona" link is present in the footer on all pages using the `Footer` component.

## Key Entities

- **Feature Section**: an H2-headed block covering one app feature in prose + highlight list.
- **HowTo Step**: one of the 4 numbered steps in the JSON-LD schema.
- **CTA Block**: the bottom download prompt linking to the App Store.

## Assumptions

- Content is static (hardcoded) — no CMS required.
- The page shares the root layout (Inter font, MobileApplication JSON-LD from `layout.tsx`) automatically.
- The App Store URL is imported from `@/lib/stores`.
- Navbar and Footer are included the same way as the FAQ page (`/faq`).
- The HowTo schema steps align with the 4-step section at the bottom of the page.
- No image assets are needed — this is a text-primary page.

## Out of Scope

- Video embeds or interactive demos.
- Localization (English/Spanish versions).
- Per-section deep links or anchor navigation.
- User comments or feedback forms.
