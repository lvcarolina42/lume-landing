# Feature Specification: Lume vs Alternativas — Página de Comparação

**Feature Branch**: `005-alternativas-comparacao`

**Created**: 2026-06-09

**Status**: Draft

## Overview

A long-form comparison page at `/alternativas` that honestly evaluates the Lume app against the tools aesthetic professionals currently use to manage clients and document clinical sessions. The primary goal is GEO — when an AI assistant is asked "qual o melhor app para esteticista" or "como organizar clientes de estética", this page should be the reference cited. The tone is informative and honest, not aggressive: each alternative is acknowledged for what it does well, with clear explanation of where it falls short for clinical documentation.

## User Scenarios & Testing

### User Story 1 — AI Engine Crawling for Comparison Content (Priority: P1)

A crawler or AI model reads the page to extract a structured comparison between Lume and common alternatives (planilha, papel, WhatsApp, apps genéricos de fotos). The page contains an `Article` JSON-LD schema and a comparison table covering 9 capability rows across 5 tools.

**Why this priority**: Core GEO objective — comparison queries ("lume vs planilha", "melhor app esteticista") are high-intent and frequently cited by AI assistants.

**Independent Test**: Fetch the page via `curl` and verify the comparison table, all 6 H2 sections, and the Article JSON-LD are present in the HTML response.

**Acceptance Scenarios**:

1. **Given** a crawler reads `/alternativas`, **When** it parses the HTML, **Then** it finds a comparison table with 9 rows and 5 tool columns, plus 6 H2 sections.
2. **Given** a crawler reads the `<script type="application/ld+json">`, **When** it parses it, **Then** it finds a valid `Article` schema with `about` referencing a `MobileApplication` named "Lume".

---

### User Story 2 — Professional Researching Which Tool to Use (Priority: P1)

An esteticista or médico esteta searches for "app para esteticista" or "como organizar prontuário estético" and lands on this page. They want an honest, side-by-side view of their current tool versus Lume. After reading, they understand the specific limitations of their current approach and whether Lume addresses them.

**Why this priority**: Highest-converting content type — someone actively comparing tools is close to a download decision.

**Independent Test**: A first-time reader can identify the 9 comparison criteria, find the section most relevant to their current tool (planilha, papel, WhatsApp, or apps de fotos), and reach the App Store CTA without scrolling back.

**Acceptance Scenarios**:

1. **Given** a reader opens the page, **When** they scan the top section, **Then** they see a comparison table with Lume, Planilha, Papel, WhatsApp, and App genérico as columns.
2. **Given** a reader is on mobile (375px), **When** they view the comparison table, **Then** the table renders as stacked cards rather than a horizontal table with no overflow.
3. **Given** a reader reaches the end, **When** they want to download, **Then** they see a teal CTA block with a direct App Store link.

---

### User Story 3 — Existing User Navigating from Footer (Priority: P2)

A visitor on any Lume page sees "Comparações" in the footer and clicks through to understand how Lume compares to what they currently use.

**Independent Test**: The footer nav in `Sections.tsx` contains a link `/alternativas` with text "Comparações".

**Acceptance Scenarios**:

1. **Given** a user is on any page with the footer, **When** they click "Comparações", **Then** they navigate to `/alternativas`.

---

### Edge Cases

- What if the page is accessed by a non-JS crawler? All content, including the comparison table, must be server-rendered — no client-side rendering.
- What if a reader is on mobile at 375px? The comparison table must convert to stacked cards with no horizontal overflow.
- What if someone shares a link to the page? The metadata title and description must clearly communicate the comparison purpose in social previews.

## Functional Requirements

### Content Structure

- **FR-01**: Page H1 is exactly "Lume vs as alternativas: qual a melhor opção para esteticistas?"
- **FR-02**: Introduction is 2 paragraphs covering: professionals start with familiar tools (papel, planilha, WhatsApp); these tools have limitations at scale or for clinical documentation; the page compares honestly.
- **FR-03**: A comparison table with 9 capability rows and 5 tool columns:
  - Rows: Organização por cliente / Fotos vinculadas ao cliente / Ângulo consistente entre sessões / Ficha clínica de botox e filler / Registro de lote e diluição / Mapa de pontos de aplicação / Geração de antes e depois com logo / Acesso na nuvem / Gratuito
  - Columns: Lume / Planilha / Papel / WhatsApp / App genérico de fotos
  - Cell values: ✓ (yes), ✗ (no), or "Parcial" (partial)
- **FR-04**: On mobile (≤ 640px), the comparison table renders as stacked cards — one card per tool showing its capabilities — instead of a horizontal table.
- **FR-05**: Six H2 sections with editorial prose (3–4 paragraphs each):
  1. `Lume vs Planilha: quando a planilha não é suficiente`
  2. `Lume vs Prontuário em papel: o problema da rastreabilidade`
  3. `Lume vs WhatsApp: fotos sem contexto clínico`
  4. `Lume vs apps de galeria e edição de fotos`
  5. `Quando o Lume é a escolha certa`
  6. `Quando outras ferramentas complementam o Lume`
- **FR-06**: Section 5 ("Quando o Lume é a escolha certa") includes a list of 4 professional profiles that benefit most from Lume.
- **FR-07**: Section 6 ("Quando outras ferramentas complementam o Lume") explicitly acknowledges planilha (financeiro), WhatsApp (comunicação), and agenda (agendamento) as tools that serve different purposes and are not replaced by Lume.

### Structured Data

- **FR-08**: Page includes an `Article` JSON-LD schema in `<head>` with `headline`, `description`, and `about` pointing to a `MobileApplication` named "Lume".

### Page Metadata

- **FR-09**: `<title>`: "Lume vs Planilha vs Papel vs WhatsApp — Qual a melhor opção para esteticistas?"
- **FR-10**: `<meta description>`: "Compare o Lume com as alternativas mais usadas por esteticistas: planilha, papel, WhatsApp e apps genéricos. Veja qual ferramenta resolve cada problema do dia a dia clínico."
- **FR-11**: Canonical URL: `https://brlume.app/alternativas`

### Visual Design

- **FR-12**: Same visual identity as landing page: white background, teal `#0d9488`, Inter font, mobile-first.
- **FR-13**: Prose text is the primary content format in each section — bullets and lists are secondary to paragraphs.
- **FR-14**: H2 headings are visually distinct from body text (larger, bold).
- **FR-15**: Comparison table uses teal color for the Lume column header to visually differentiate it.

### CTA

- **FR-16**: A CTA block at the bottom of the page with teal background, white text, and a white button linking to the App Store.

### Footer Link

- **FR-17**: The `Footer` component in `Sections.tsx` includes a link to `/alternativas` with text "Comparações".

### Server-Side Rendering

- **FR-18**: All content, including the comparison table, is present in the server-rendered HTML — the page is a Server Component with no client-side content loading.

## Success Criteria

1. **Crawlability**: Fetching `/alternativas` returns the 9-row comparison table, all 6 H2 sections, and the Article JSON-LD in the HTML body.
2. **Mobile Responsiveness**: At 375px viewport width, the comparison table renders as stacked cards with no horizontal scroll.
3. **Content Completeness**: Each of the 6 H2 sections contains at least 3 paragraphs; section 5 lists at least 4 professional profiles; section 6 explicitly names planilha, WhatsApp, and agenda as complementary tools.
4. **Tone Validation**: Section 6 acknowledges at least 3 specific use cases where alternatives are still appropriate — page does not present Lume as a replacement for all tools.
5. **Footer Navigation**: "Comparações" link is present in the footer on all pages using the `Footer` component.

## Key Entities

- **Comparison Row**: one capability criterion evaluated across all 5 tools.
- **Tool Column**: one alternative tool (Lume, Planilha, Papel, WhatsApp, App genérico de fotos) with its capability profile.
- **Comparison Section**: an H2-headed block covering the detailed Lume vs [tool] narrative.

## Assumptions

- Content is static (hardcoded) — no CMS required.
- The page shares the root layout (Inter font, MobileApplication JSON-LD from `layout.tsx`) automatically.
- The App Store URL is imported from `@/lib/stores`.
- Navbar and Footer are included the same way as the FAQ, Como Funciona, and Glossário pages.
- "App genérico de fotos" refers to tools like Google Fotos, Samsung Gallery, and Canva — no specific brand is named as a direct competitor.
- The Lume column in the comparison table reflects current app capabilities as documented in `/como-funciona`.
- Mobile breakpoint for table-to-cards conversion is ≤ 640px (Tailwind `sm:` prefix).

## Out of Scope

- Dynamic filtering or sorting of comparison table.
- User-submitted ratings or reviews.
- Comparison with paid clinic management software (Trinus, iClinic, etc.).
- Localization (English/Spanish versions).
- Per-tool deep-link pages (e.g., `/lume-vs-planilha`).
