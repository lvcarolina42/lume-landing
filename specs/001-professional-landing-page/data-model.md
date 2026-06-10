# Data Model: Lume Landing Page — Redesign Profissional

Esta landing page é estática (Next.js static export). Não há banco de dados.
O "modelo de dados" aqui define as estruturas de conteúdo usadas em cada seção da página.

---

## Estruturas de Conteúdo por Seção

### NavLink
```
label: string       — texto do link
href: string        — âncora (ex: "#funcionalidades")
```

### HeroSection
```
badge: string                 — texto do badge topo ("Grátis · iOS e Android")
headline: string              — H1 principal
headlineHighlight: string     — parte do H1 em cor de destaque
subheadline: string           — parágrafo descritivo
bullets: string[]             — lista de benefícios (3 itens max)
heroImage: string             — path do screenshot hero
heroImageAlt: string          — alt text da imagem
socialProofCount: string      — "+500 profissionais"
appStoreUrl: string
playStoreUrl: string
```

### Stat (StatsStrip)
```
value: string     — "< 60s"
label: string     — "Para registrar\numa sessão completa"
```

### Problem
```
title: string     — "Prontuário bagunçado"
problem: string   — descrição do problema
solution: string  — solução oferecida pelo Lume
```

### Persona (ForWho — novo)
```
icon: string      — SVG inline ou emoji representativo
title: string     — "Esteticista e Médico Esteticista"
description: string — frase curta de identificação
```

### Feature
```
title: string          — H3 da feature
description: string    — parágrafo
highlights: string[]   — pills de destaque (3 max)
imageSide: 'left' | 'right'
image: string          — path do screenshot
imageAlt: string
```

### Step (HowItWorks)
```
n: number         — número do passo
title: string     — título curto
description: string
```

### Testimonial (SocialProof)
```
quote: string
name: string
role: string      — "Médica Esteticista · São Paulo"
initials: string  — "AM" (para avatar de iniciais)
```

### PricingPlan
```
name: string          — "Gratuito" | "Lume Pro"
price: string         — "Grátis" | "Grátis no beta"
priceNote: string     — "para sempre, sem cartão" | "R$ 29/mês após o lançamento"
features: string[]
ctaLabel: string
ctaUrl: string
highlighted: boolean  — true para o card Pro
badgeLabel?: string   — "⭐ Mais Popular"
```

### SecurityItem (Security — novo)
```
icon: string      — SVG inline
title: string     — "Seus dados são só seus"
description: string
```

### StoreBadge (componente reutilizável — novo)
```
store: 'apple' | 'android'
url: string
variant: 'dark' | 'light' | 'outline'
size: 'sm' | 'md' | 'lg'
```

### SmartCTA (componente reutilizável — novo)
```
appStoreUrl: string
playStoreUrl: string
variant: 'hero' | 'strip' | 'inline'
— No SSR: renderiza ambos os botões
— No cliente iOS: destaca App Store
— No cliente Android: destaca Play Store
— No desktop: renderiza ambos
```

---

## Ordem das Seções na Página (page.tsx)

```
1.  Navbar
2.  Hero
3.  StatsStrip
4.  Problem
5.  ForWho         ← NOVO
6.  Features
7.  MidCTA         ← NOVO
8.  HowItWorks
9.  SocialProof
10. Pricing
11. Security       ← NOVO
12. Footer (inclui CTA strip + footer bar)
```
