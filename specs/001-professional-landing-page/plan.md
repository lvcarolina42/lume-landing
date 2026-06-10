# Implementation Plan: Lume Landing Page — Redesign Profissional

**Branch**: `001-professional-landing-page` | **Date**: 2026-06-08 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-professional-landing-page/spec.md`

---

## Summary

Refatorar a landing page do Lume de uma página funcional para uma página de alto desempenho de conversão, seguindo os padrões de apps como Linear, Raycast e Clerk. As mudanças são puramente front-end — Next.js 15 static export, Tailwind CSS, TypeScript, zero dependências novas. O foco é: mostrar o produto visualmente acima da dobra, melhorar a navegação mobile, ampliar os screenshots, e adicionar 3 seções críticas (Para Quem É, CTA intermediário, Segurança).

---

## Technical Context

**Language/Version**: TypeScript 5 + React 19

**Primary Dependencies**: Next.js 15.1 (static export), Tailwind CSS 3.4, Inter (Google Fonts — já carregada)

**Storage**: N/A — página estática, sem banco de dados

**Testing**: Visual — `npm run build` para validar build; revisão manual no browser em 375px, 768px, 1440px

**Target Platform**: Web (iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari)

**Project Type**: Marketing landing page (Next.js static export → deploy em Vercel/Cloudflare)

**Performance Goals**: LCP < 2.5s em conexão 4G; CLS = 0 (sem layout shifts); FID < 100ms

**Constraints**: Zero dependências novas; manter compatibilidade com `output: 'export'`; screenshots existentes em `/public/images/site/` são o único ativo visual disponível

**Scale/Scope**: 1 página, ~12 seções, ~15 componentes TSX

---

## Constitution Check

*O projeto não tem constitution definida (template vazio). Aplicando princípios de qualidade padrão:*

- [x] **Sem novas dependências**: Todas as mudanças usam Next.js, Tailwind CSS e React já instalados
- [x] **Compatibilidade com static export**: Componentes client-side isolados (`SmartCTA`) são hidratados no browser; o SSR renderiza o fallback seguro (ambos os botões)
- [x] **Mobile-first**: Todos os breakpoints começam por mobile e expandem com `md:` e `lg:`
- [x] **Zero breaking changes**: Modificações nas seções existentes são aditivas; estrutura da página é mantida

---

## Project Structure

### Documentation (this feature)

```text
specs/001-professional-landing-page/
├── plan.md              # Este arquivo
├── spec.md              # Especificação
├── research.md          # Auditoria e decisões de design
├── data-model.md        # Estruturas de conteúdo por seção
├── contracts/
│   └── component-contracts.md   # Contratos de interface dos componentes
└── tasks.md             # Gerado por /speckit-tasks
```

### Source Code — Arquivos a criar/modificar

```text
src/
├── lib/
│   └── stores.ts                     ← NOVO: URLs centralizadas das stores
│
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx                ← MODIFICAR: adicionar menu mobile hamburger
│   │   ├── StoreBadge.tsx            ← NOVO: badge visual App Store / Google Play
│   │   └── SmartCTA.tsx              ← NOVO: CTA com detecção de OS (use client)
│   │
│   └── sections/
│       ├── Hero.tsx                  ← MODIFICAR: device frame + SmartCTA
│       ├── Features.tsx              ← MODIFICAR: screenshots maiores + frame CSS
│       ├── ForWho.tsx                ← NOVO: seção "Para Quem É" com personas
│       ├── MidCTA.tsx                ← NOVO: strip de CTA intermediário
│       ├── Security.tsx              ← NOVO: seção de segurança e privacidade
│       └── Sections.tsx              ← MODIFICAR: Footer usa StoreBadge
│
├── app/
│   ├── globals.css                   ← MODIFICAR: adicionar @keyframes fadeInUp
│   └── page.tsx                      ← MODIFICAR: adicionar novos componentes
```

---

## Complexity Tracking

Sem violações. Todas as decisões seguem a abordagem mais simples possível.

---

## Implementation Phases

---

### Fase 1 — Fundação: URLs centralizadas e componentes de CTA

**Objetivo**: Eliminar duplicação das URLs de stores e criar os building blocks reutilizáveis.

#### Tarefa 1.1 — Criar `src/lib/stores.ts`

Arquivo com as duas constantes de URL:
```typescript
export const APP_STORE_URL = 'https://apps.apple.com/...'
export const PLAY_STORE_URL = 'https://play.google.com/...'
```

**Critério de aceitação**: `tsc --noEmit` passa sem erros.

---

#### Tarefa 1.2 — Criar `StoreBadge` component

Arquivo: `src/components/ui/StoreBadge.tsx`

Props: `store: 'apple' | 'android'`, `url: string`, `variant?: 'dark' | 'light' | 'outline'`, `className?: string`

Layout do badge:
```
[ícone SVG] | Disponível na    (ou "Disponível no")
             App Store         (ou "Google Play")
```
- `variant=dark`: `bg-gray-950 text-white rounded-xl px-5 py-3 inline-flex items-center gap-3`
- `variant=light`: `bg-white text-gray-900` (mesma estrutura)
- `variant=outline`: `border border-white/60 text-white` (para uso em fundo escuro/gradient)

Ícone Apple: SVG inline do logo Apple (path simples, ~200 bytes)
Ícone Android: SVG inline do robot Android (ou ícone de smartphone genérico)

**Critério de aceitação**: Componente renderiza sem hydration mismatch; `tsc --noEmit` passa.

---

#### Tarefa 1.3 — Criar `SmartCTA` component

Arquivo: `src/components/ui/SmartCTA.tsx` (`'use client'`)

```typescript
'use client'
import { useEffect, useState } from 'react'
import StoreBadge from './StoreBadge'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/stores'

type Platform = 'ios' | 'android' | 'other'

interface SmartCTAProps {
  variant?: 'hero' | 'strip' | 'footer'
}
```

Lógica:
1. Estado inicial: `platform = 'other'` (seguro para SSR)
2. `useEffect(() => { detectPlatform() }, [])` — corre apenas no cliente
3. Detecção: `/iPhone|iPad|iPod/i.test(navigator.userAgent)` → `'ios'`; `/Android/i.test(navigator.userAgent)` → `'android'`
4. `variant='hero'`: botões grandes, layout em coluna no mobile / linha no md+
5. `variant='strip'`: botões médios, sempre em linha
6. `variant='footer'`: botões menores, outline white

**Critério de aceitação**: Em desktop mostra dois badges; ao simular iPhone no DevTools mostra App Store em destaque; sem erros de hydration no console.

---

### Fase 2 — Navbar mobile

**Objetivo**: Menu de navegação funcional em dispositivos móveis.

#### Tarefa 2.1 — Adicionar hamburger menu ao `Navbar.tsx`

Mudanças:
1. Adicionar estado: `const [menuOpen, setMenuOpen] = useState(false)`
2. Botão hamburger (visível só em `md:hidden`): três linhas SVG → X animado via `transition + rotate`
3. Dropdown: `absolute top-16 inset-x-0 bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4` — aparece/desaparece com `menuOpen`
4. Fechar ao clicar em link: `onClick={() => setMenuOpen(false)}`
5. Fechar ao resize ≥ 768px: `useEffect` com listener `window.addEventListener('resize', ...)`

**Critério de aceitação**: Em viewport de 375px, clicar no hamburger abre o menu com todos os links; clicar em um link fecha o menu e faz scroll suave até a seção; o botão CTA ("Baixar grátis") aparece no menu mobile também.

---

### Fase 3 — Hero com visual do app

**Objetivo**: Mostrar o app visualmente acima da dobra, tornando a hero section altamente impactante.

#### Tarefa 3.1 — Refatorar `Hero.tsx` para layout 2 colunas

Mudanças no layout:
- Wrapper principal: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center text-left`
- Coluna esquerda: todo o conteúdo textual atual (badge, H1, subtítulo, bullets)
- Coluna direita: device frame com screenshot do app
- Em mobile: stack (imagem fica abaixo do texto)

Device frame (CSS puro):
```tsx
<div className="relative flex justify-center md:justify-end">
  <div className="w-52 md:w-64 relative">
    {/* Glow effect */}
    <div className="absolute inset-0 bg-teal-400/30 rounded-[3rem] blur-2xl scale-110" />
    {/* Phone frame */}
    <div className="relative bg-gray-950 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10">
      <div className="rounded-[2rem] overflow-hidden aspect-[9/19.5]">
        <Image src="/images/site/screen_home.jpeg" ... />
      </div>
      {/* Notch */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-950 rounded-full" />
    </div>
  </div>
</div>
```

Substituir os dois `<a>` de CTA pelo componente `<SmartCTA variant="hero" />`.

**Critério de aceitação**: Em 375px o texto aparece acima e o device abaixo, sem overflow. Em 768px+ fica lado a lado. O device frame não tem layout shift (dimensões fixas via CSS).

---

### Fase 4 — Features com screenshots maiores

**Objetivo**: Screenshots das features devem impressionar e mostrar claramente o app.

#### Tarefa 4.1 — Melhorar `FeatureBlock` em `Features.tsx`

Mudanças:
1. Substituir `<img>` por `<Image>` de `next/image` com `width={288} height={620} unoptimized`
2. `w-48` → `w-64 md:w-72` na imagem
3. Wrapper da imagem: `bg-gray-100 rounded-[2.5rem] p-2 shadow-xl` para efeito de profundidade
4. Imagem: `rounded-[2rem]` para combinar com o frame

**Critério de aceitação**: Screenshots aparecem em tamanho significativo sem distorção; build Next.js passa sem warnings de `<img>`.

---

### Fase 5 — Seções novas

**Objetivo**: Adicionar as 3 seções que faltam para completar o funil de conversão.

#### Tarefa 5.1 — Criar `ForWho.tsx`

Seção entre Problem e Features.

5 personas com SVG inline e descrição curta:
1. **Esteticistas e médicos** — "Botox, filler, procedimentos faciais e corporais"
2. **Personal trainers** — "Transformação corporal sessão a sessão"
3. **Nutricionistas** — "Evolução visual do cliente ao longo do tratamento"
4. **Fisioterapeutas** — "Reabilitação documentada com fotos comparativas"
5. **Qualquer profissional** — "Que acompanha evolução visual ao longo do tempo"

Layout: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` em cards com `bg-white rounded-2xl border p-6 text-center hover:border-teal-600 transition`

Heading H2: "Para quem é o Lume"

**Critério de aceitação**: 5 cards legíveis no mobile (2 colunas → 3 → 5); hover visual funciona; seção tem ID âncora para eventual link da navbar.

---

#### Tarefa 5.2 — Criar `MidCTA.tsx`

Strip entre Features e HowItWorks.

Conteúdo:
- Headline: "Pronto para ter o histórico de cada cliente na palma da mão?"
- Subtítulo: "Grátis durante o beta · iOS e Android · Sem cartão"
- `<SmartCTA variant="strip" />`

Estilo: `gradient-hero py-16 px-6 text-center`

**Critério de aceitação**: Strip aparece entre features e howItWorks na página; SmartCTA funciona corretamente.

---

#### Tarefa 5.3 — Criar `Security.tsx`

Seção entre Pricing e Footer.

3 itens de segurança:
1. Ícone escudo → "Seus dados são só seus" — "Nenhum outro usuário acessa sua lista de clientes. Cada profissional vê apenas o que cadastrou."
2. Ícone nuvem → "Armazenamento em nuvem seguro" — "Fotos e fichas ficam na nuvem com autenticação obrigatória. Troque de celular sem perder nada."
3. Ícone lixeira → "Exclusão total quando quiser" — "Sai do app? Todos os seus dados — incluindo fotos — são removidos permanentemente."

Layout: `grid-cols-1 md:grid-cols-3` em fundo `bg-gray-950 py-20 px-6 text-center`

Heading H2 (menor): "Segurança e privacidade" em `text-white`

**Critério de aceitação**: 3 cards legíveis no mobile; fundo escuro contrasta corretamente com Pricing acima (branco) e Footer abaixo (cinza-950 já existente — pode fundir visualmente).

---

### Fase 6 — Animações de entrada

**Objetivo**: Adicionar sensação de qualidade premium com animações sutis.

#### Tarefa 6.1 — Adicionar `@keyframes` em `globals.css`

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@layer utilities {
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out both;
  }
  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-300 { animation-delay: 300ms; }
  .animation-delay-400 { animation-delay: 400ms; }
}
```

#### Tarefa 6.2 — Aplicar animações

Aplicar `animate-fade-in-up` com delays escalonados em:
- Hero: H1, subtítulo, bullets, CTAs (delay 0, 100, 200, 300ms)
- ForWho cards: `animation-delay-{n*100}` (delay escalonado)
- StatsStrip stats: delay escalonado
- HowItWorks steps: delay escalonado

**Critério de aceitação**: Animações aparecem na carga da página; `prefers-reduced-motion` é respeitado via `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }` em globals.css.

---

### Fase 7 — Atualizar `page.tsx`

#### Tarefa 7.1 — Integrar todos os novos componentes

Nova ordem das seções:
```tsx
<Navbar />
<main>
  <Hero />
  <StatsStrip />
  <Problem />
  <ForWho />        ← novo
  <Features />
  <MidCTA />        ← novo
  <HowItWorks />
  <SocialProof />
  <Pricing />
  <Security />      ← novo
</main>
<Footer />
```

#### Tarefa 7.2 — Atualizar imports em `Sections.tsx`

Substituir hardcoded `APP_STORE` e `PLAY_STORE` em Footer por imports de `@/lib/stores`.

---

### Fase 8 — Validação final

#### Tarefa 8.1 — Build e revisão visual

1. `npm run build` — deve passar sem erros ou warnings
2. Servir localmente (`npm run start` ou inspecionar `/out/`) e verificar:
   - Mobile 375px: sem overflow horizontal, menu hamburger funciona
   - Tablet 768px: layout 2 colunas na hero, grid de features correto
   - Desktop 1440px: proporções corretas, device frame centralizado
3. Verificar ausência de erros de hydration no console
4. Verificar que todos os links de CTA estão funcionais

**Critério de aceitação**: Build limpo, zero warnings de TypeScript, zero hydration mismatches, layout correto nas 3 breakpoints principais.
