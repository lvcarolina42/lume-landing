# Research: Lume Landing Page — Redesign Profissional

## Audit do Estado Atual

### O que existe e funciona bem
- Estrutura de seções cobrindo todo o funil: hero → problema → features → como funciona → prova social → preços → footer
- Metadados SEO completos (OG, Twitter Card, Schema.org MobileApplication)
- Links reais de App Store e Play Store
- Tipografia consistente com Inter
- Gradiente teal como identidade visual
- Screenshot reais do app disponíveis em `/public/images/site/` (11 imagens)
- Seção de problema com hover interativo (vermelho → teal)
- Pricing com destaque "Grátis no beta"

### Lacunas críticas identificadas (por impacto na conversão)

| # | Problema | Impacto | Seção |
|---|----------|---------|-------|
| 1 | Hero sem visual do app — apenas texto | **Altíssimo** — estudos de landing page mostram que o visual do produto aumenta conversão em 30–80% | Hero |
| 2 | Sem menu mobile (links ocultos em `hidden md:flex`) | **Alto** — visitantes no celular não conseguem navegar | Navbar |
| 3 | Screenshots muito pequenas (`w-48` = 192px) | **Alto** — não impressionam; parecem thumbnails | Features |
| 4 | Sem seção "Para Quem É" | **Médio** — visitantes se identificam mais quando veem seu perfil explicitamente | Ausente |
| 5 | Sem seção de segurança/confiança | **Médio** — profissionais hesitam sobre dados de clientes | Ausente |
| 6 | Sem CTA intermediário (entre features e pricing) | **Médio** — visitantes que "terminaram" de ler features não têm próximo passo | Ausente |
| 7 | Botões de store são texto puro | **Baixo** — App Store/Play Store têm badges oficiais reconhecíveis | Hero, Pricing, Footer |
| 8 | Social proof usa iniciais aleatórias com `Array(5)` | **Baixo** — transparência: avatar de iniciais parece placeholder | Hero |
| 9 | `<img>` ao invés de `next/image` | **Baixo** — layout shifts; `next/image` lida melhor com responsive mesmo sem otimização | Features |
| 10 | Sem animações de entrada (scroll reveal) | **Baixo** — percepção de qualidade premium | Todos |

---

## Decisões de Design e Implementação

### Decision 1: Visual do app na Hero

**Decisão**: Exibir um screenshot do app dentro de um frame de smartphone estilizado em CSS puro, posicionado à direita do texto em desktop e abaixo em mobile.

**Rationale**: Todas as landing pages de alto desempenho para apps mobile (Linear, Raycast, Notion, Clerk) mostram o produto acima da dobra. O `screen_home.jpeg` já existe e é a tela mais representativa (lista de clientes). Frame CSS evita dependência externa.

**Alternativas consideradas**:
- Mockup 3D via Figma exportado como PNG: mais bonito, mas exige ativo externo estático difícil de manter
- Carrossel de múltiplos screenshots na hero: excessivo para acima da dobra; melhor na seção de features

---

### Decision 2: Menu mobile no Navbar

**Decisão**: Adicionar um botão hamburger visível em `md:hidden`, com estado `isOpen` controlado por `useState` (componente já é `use client`), revelando os links em dropdown absoluto.

**Rationale**: Navbar já usa `use client` por causa do scroll listener. Adicionar o estado do menu não adiciona complexidade nova. CSS transitions puras para animação.

**Alternativas consideradas**:
- Menu deslizante tipo drawer: mais complexo sem ganho perceptível para uma landing page de 5 links

---

### Decision 3: Tamanho e estilo dos screenshots nas Features

**Decisão**: Aumentar de `w-48` para `w-64 md:w-72` (256–288px), adicionar frame de smartphone com `rounded-[2rem] ring-4 ring-gray-900/10 shadow-2xl` e fundo de card leve para dar profundidade.

**Rationale**: O tamanho atual é pequeno para demonstrar o app. Um frame CSS leve (sem imagens de mockup) dá aparência de dispositivo sem dependências.

---

### Decision 4: Seção "Para Quem É"

**Decisão**: Nova seção entre Problem e Features com cards de personas profissionais (ícone + título + descrição curta). Mínimo 5 personas da spec: Esteticista, Médico, Personal Trainer, Fisioterapeuta, Outros.

**Rationale**: Visitantes que se reconhecem explicitamente têm maior taxa de conversão. É uma seção comum em landing pages de SaaS/apps profissionais.

---

### Decision 5: Seção de Segurança e Privacidade

**Decisão**: Nova seção antes do Footer CTA strip com 3 ícones + texto: "Seus dados são só seus", "Nuvem com acesso exclusivo" e "Exclusão total quando quiser".

**Rationale**: Profissionais de saúde têm obrigação legal sobre prontuários. Endereçar privacidade diretamente remove uma das maiores objeções ao download.

---

### Decision 6: CTA intermediário (Mid-scroll strip)

**Decisão**: Adicionar strip teal compacto entre Features e HowItWorks com headline de urgência e dois botões de store.

**Rationale**: Visitantes que chegam até o fim das features já estão convencidos; dar um CTA imediato antes de continuar scrollando captura conversões que de outra forma chegariam ao footer diluídas.

---

### Decision 7: Animações de entrada

**Decisão**: CSS puro com `@keyframes fadeInUp` + `animation-delay` escalonado por item. Sem Framer Motion para manter zero dependências adicionais.

**Rationale**: Framer Motion (24kB gzipped) é overkill para efeitos simples de entrada. CSS animations nativas são suficientes e não afetam o bundle do Next.js static export.

---

### Decision 8: Badges de Store

**Decisão**: Substituir texto puro por badges visuais (`bg-black text-white rounded-xl px-5 py-3`) com ícone SVG inline de Apple e Android + texto estruturado ("Baixar na\nApp Store"). Badges oficiais de imagem requerem licença e peso; SVG inline é a alternativa padrão.

**Rationale**: Usuários reconhecem o padrão visual de "badge de store" muito mais do que texto genérico. Melhora o click-through sem adicionar dependências.

---

### Decision 9: Detecção de OS para CTA inteligente

**Decisão**: Componente `SmartCTA` com `use client` que detecta `navigator.userAgent` para destacar (ou redirecionar automaticamente) para a store correta. Em SSR/SSG exibe ambos os botões.

**Rationale**: Em desktop aparece tudo; em iOS destaca App Store; em Android destaca Play Store. Padrão usado por Airbnb, Duolingo e outros apps de alto volume.

---

## Resumo das Mudanças por Arquivo

| Arquivo | Tipo de mudança |
|---------|----------------|
| `Navbar.tsx` | Adicionar menu mobile hamburger |
| `Hero.tsx` | Adicionar device frame com screenshot + refactoring para `SmartCTA` |
| `Features.tsx` | Aumentar screenshots, melhorar frame visual |
| `Sections.tsx` | Melhorar HowItWorks (ícones SVG), SocialProof (fotos placeholder), Footer |
| `globals.css` | Adicionar `@keyframes fadeInUp`, utility classes de animação |
| **NOVO** `ForWho.tsx` | Seção "Para Quem É" com cards de personas |
| **NOVO** `Security.tsx` | Seção de segurança e privacidade |
| **NOVO** `MidCTA.tsx` | Strip intermediário de CTA |
| **NOVO** `StoreBadge.tsx` | Componente de badge de store reutilizável |
| **NOVO** `SmartCTA.tsx` | Componente de CTA com detecção de OS |
| `page.tsx` | Adicionar novos componentes na ordem correta |
