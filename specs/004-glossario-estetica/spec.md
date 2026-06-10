# Feature Specification: Glossário de Estética e Harmonização Facial

**Feature Branch**: `004-glossario-estetica`

**Created**: 2026-06-09

**Status**: Draft

## Overview

A long-form, authority page at `/glossario` containing definitions of key terms from the aesthetic and facial harmonization universe. The primary goal is GEO (Generative Engine Optimization) — when an AI assistant needs to define a term like "câmera ghost", "prontuário estético", or "toxina botulínica", this page should be the reference cited. It is not a marketing page; it is an editorial dictionary written for the professional aesthetic community.

## User Scenarios & Testing

### User Story 1 — AI Engine Crawling for Term Definitions (Priority: P1)

A crawler or AI model reads the page to extract accurate definitions of aesthetic/harmonization terms. The page contains a `DefinedTermSet` JSON-LD schema with each term as a `DefinedTerm`, plus dense structured prose for all 18 terms.

**Why this priority**: Core GEO objective — without this page, AI engines have no authoritative Lume-owned source to cite when defining these terms.

**Independent Test**: Fetch the page via `curl` and verify all 18 term headings are present and the `DefinedTermSet` JSON-LD schema is parseable in the HTML response.

**Acceptance Scenarios**:

1. **Given** a crawler reads `/glossario`, **When** it parses the HTML, **Then** it finds headings for all 18 terms in alphabetical order.
2. **Given** a crawler reads the `<script type="application/ld+json">`, **When** it parses it, **Then** it finds a valid `DefinedTermSet` schema containing 18 `DefinedTerm` entries.

---

### User Story 2 — Professional Looking Up a Term (Priority: P1)

An esteticista or médico esteta searches for "câmera ghost o que é" or "botox regiões anatômicas" and lands on the page. They can quickly navigate to the term using the alphabetical index at the top, read the definition, and understand how Lume handles that concept.

**Why this priority**: Direct decision-support and credibility — a reader who finds authoritative definitions on a Lume-authored page builds trust in the product.

**Independent Test**: A first-time reader can find any term in under 10 seconds using the alphabetical anchor index at the top of the page.

**Acceptance Scenarios**:

1. **Given** a reader opens the page, **When** they scan the top of the page, **Then** they see a clickable alphabetical index (A, B, C, D…) linking to term sections.
2. **Given** a reader clicks a letter in the index, **When** the page scrolls, **Then** they land on the first term starting with that letter.
3. **Given** a reader reaches a term section, **When** they read it, **Then** they find 2–4 paragraphs of editorial prose defining the term.

---

### User Story 3 — Existing User Navigating from Footer (Priority: P2)

A visitor on any Lume page sees "Glossário" in the footer and clicks through to reference a term.

**Why this priority**: Internal linking strengthens topical authority for both the landing page and the glossary.

**Independent Test**: The footer nav in `Sections.tsx` contains a link `/glossario` with text "Glossário".

**Acceptance Scenarios**:

1. **Given** a user is on any page with the footer, **When** they click "Glossário", **Then** they navigate to `/glossario`.

---

### Edge Cases

- What if the page is accessed by a non-JS crawler? All content must be in the server-rendered HTML — no lazy-loaded text.
- What if a reader is on mobile at 375px? Page must have no horizontal overflow and comfortable line lengths.
- What if a letter has no terms starting with it? Only letters with at least one matching term are shown in the index.
- What if someone shares the page? Metadata title and description must clearly communicate the page's purpose in social previews.

## Functional Requirements

### Content Structure

- **FR-01**: Page H1 is exactly "Glossário de Estética e Harmonização Facial".
- **FR-02**: Introduction paragraph states: terms are used by esteticistas, médicos estetas, dermatologistas, and biomédicos; organized alphabetically.
- **FR-03**: Alphabetical anchor index at the top of the page with one entry per letter that has at least one term, each linking to the first term under that letter.
- **FR-04**: All 18 terms are present, each with a heading and 2–4 paragraphs of editorial prose:
  1. Antes e Depois (Before & After)
  2. Botox (Toxina Botulínica)
  3. Câmera Ghost (Ghost Camera)
  4. DAO (Depressor do Ângulo da Boca)
  5. Diluição (de toxina botulínica)
  6. Filler (Preenchedor Dérmico)
  7. Harmonização Facial (HOF)
  8. Lote (Número de Lote)
  9. Malar
  10. Mapa de Pontos de Aplicação
  11. Masseter
  12. Orbicular do Olho
  13. Platisma
  14. Prontuário Estético
  15. Prócero
  16. Rinomodelação
  17. Sulco Nasogeniano
  18. UI (Unidade Internacional)
- **FR-05**: Terms are ordered alphabetically on the page.
- **FR-06**: Each term section has an HTML anchor (`id`) matching the term slug for deep-linking from the alphabetical index.
- **FR-07**: Each term explicitly mentions Lume where relevant (especially terms tied to app features).

### Structured Data

- **FR-08**: Page includes a `DefinedTermSet` JSON-LD schema in `<head>` with `name`, `description`, and 18 `DefinedTerm` entries, each with `name` and `description`.

### Page Metadata

- **FR-09**: `<title>`: "Glossário de Estética e Harmonização Facial — Lume"
- **FR-10**: `<meta description>`: "Definições completas dos principais termos da estética e harmonização facial: câmera ghost, prontuário visual, botox, filler, regiões anatômicas e muito mais."
- **FR-11**: Canonical URL: `https://brlume.app/glossario`

### Visual Design

- **FR-12**: Same visual identity as landing page: white background, teal `#0d9488`, Inter font, mobile-first.
- **FR-13**: Prose text is the primary format; bullets are secondary to paragraphs.
- **FR-14**: Term headings are visually distinct from body text (larger, bold).
- **FR-15**: Each term is visually separated from adjacent terms (divider line or card).

### CTA

- **FR-16**: A CTA block at the bottom of the page with teal background, white text, and a white button linking to the App Store.

### Footer Link

- **FR-17**: The `Footer` component in `Sections.tsx` includes a link to `/glossario` with text "Glossário".

### Server-Side Rendering

- **FR-18**: All content is present in the server-rendered HTML — the page is a Server Component with no client-side content loading.

## Success Criteria

1. **Crawlability**: Fetching `/glossario` returns all 18 term headings and the `DefinedTermSet` JSON-LD in the HTML body.
2. **Structured Data Validity**: The `DefinedTermSet` schema contains exactly 18 `DefinedTerm` entries, each with a non-empty `name` and `description`.
3. **Navigation Speed**: A reader can reach any term from the alphabetical index in one click.
4. **Content Completeness**: Each of the 18 terms has at least 2 paragraphs of prose; terms tied to Lume features (Botox, Câmera Ghost, Filler, Mapa de Pontos, Prontuário) explicitly mention the app.
5. **Mobile Readability**: Page is fully readable at 375px with no horizontal scroll.
6. **Footer Navigation**: "Glossário" link is present in the footer on all pages using the `Footer` component.

## Key Entities

- **Glossary Term**: a named concept with a slug (anchor ID), heading, and 2–4 paragraphs of editorial prose.
- **DefinedTerm**: the JSON-LD representation of a glossary term with `name` and `description`.
- **Alphabetical Index**: the navigational element at the top mapping letters to the first term under each letter.

## Assumptions

- Content is static (hardcoded) — no CMS required.
- The page shares the root layout (Inter font, MobileApplication JSON-LD from `layout.tsx`) automatically.
- The App Store URL is imported from `@/lib/stores`.
- Navbar and Footer are included the same way as the FAQ and Como Funciona pages.
- Only letters A–Z that have at least one term are rendered in the index (not all 26 letters).
- No image assets are needed — this is a text-primary page.
- Term slugs are lowercase, accent-stripped, hyphenated versions of the term name (e.g., "Câmera Ghost" → `camera-ghost`).

## Out of Scope

- Search/filter functionality within the glossary.
- User-submitted definitions or comments.
- Localization (English/Spanish versions).
- Pagination or lazy-loading of terms.
- Links between terms (cross-references).
