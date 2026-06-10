# Tasks: Lume Landing Page — Redesign Profissional

**Input**: Design documents from `specs/001-professional-landing-page/`

**Prerequisites**: plan.md ✓ | spec.md ✓ | research.md ✓ | data-model.md ✓ | contracts/ ✓

**Organization**: Tarefas agrupadas por user story para implementação e teste independentes.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Pode rodar em paralelo (arquivos diferentes, sem dependências entre si)
- **[Story]**: User story da spec.md (US1, US2, US3, US4)
- Todos os caminhos são relativos à raiz do repositório

---

## Phase 1: Setup (Infraestrutura Compartilhada)

**Purpose**: Criar os building blocks reutilizáveis que todas as seções dependem.

- [x] T001 Criar `src/lib/stores.ts` com `APP_STORE_URL` e `PLAY_STORE_URL` exportadas como constantes

---

## Phase 2: Foundational (Pré-requisitos Bloqueantes)

**Purpose**: CSS de animações e componente de badge — usados por múltiplas user stories.

**⚠️ CRÍTICO**: Completar antes de iniciar qualquer user story.

- [x] T002 [P] Adicionar `@keyframes fadeInUp`, utilities `.animate-fade-in-up` e `.animation-delay-{100,200,300,400}` em `src/app/globals.css`, incluindo regra `@media (prefers-reduced-motion: reduce)`
- [x] T003 [P] Criar `src/components/ui/StoreBadge.tsx` (server component) — props: `store: 'apple' | 'android'`, `url: string`, `variant?: 'dark' | 'light' | 'outline'`, com ícone SVG inline por plataforma e duas linhas de texto

**Checkpoint**: Foundation pronta — user stories podem ser iniciadas.

---

## Phase 3: User Story 1 — Hero com visual do app (Priority: P1) 🎯 MVP

**Goal**: Visitante vê o app visualmente na hero section, entende o valor em <15s e tem CTA claro para baixar.

**Independent Test**: Abrir a página em viewport 375px — o device frame com screenshot e os botões de store devem estar visíveis sem scroll. Em desktop, layout de 2 colunas deve aparecer com texto à esquerda e mockup à direita.

### Implementação — User Story 1

- [x] T004 [US1] Criar `src/components/ui/SmartCTA.tsx` (`'use client'`) — detecta iOS/Android via `navigator.userAgent` no `useEffect`, renderiza `<StoreBadge>` para ambas as stores, destaca a store correta na plataforma detectada; SSR renderiza ambos (sem conteúdo condicional pré-hydration); aceita prop `variant?: 'hero' | 'strip' | 'footer'`
- [x] T005 [US1] Refatorar `src/components/sections/Hero.tsx` — trocar layout de `text-center` puro para `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`; coluna esquerda: conteúdo textual atual com `md:text-left`; coluna direita: device frame CSS com `screen_home.jpeg` usando `next/image`; device frame: `bg-gray-950 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10` com glow `bg-teal-400/30 blur-2xl` atrás; substituir os dois `<a>` de CTA por `<SmartCTA variant="hero" />`; importar URLs de `@/lib/stores`
- [x] T006 [P] [US1] Criar `src/components/sections/ForWho.tsx` (server component) — seção `id="para-quem"` com H2 "Para quem é o Lume", grid `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`, 5 cards de persona (Esteticista/Médico, Personal Trainer, Nutricionista, Fisioterapeuta, Qualquer profissional), cada card com SVG inline + título + descrição curta, estilo `bg-white rounded-2xl border p-6 text-center hover:border-teal-600 transition`, fundo da seção `bg-gray-50`
- [x] T007 [US1] Atualizar `src/app/page.tsx` — importar `ForWho` e inserir após `<Problem />` na ordem das seções

**Checkpoint**: Hero mostra o app visualmente; `ForWho` identifica os perfis; `SmartCTA` roteia para a store correta.

---

## Phase 4: User Story 2 — Features com diferencial visual (Priority: P1)

**Goal**: Screenshots das funcionalidades são grandes o suficiente para impressionar e mostrar claramente o app; visitante entende câmera ghost, comparação antes/depois e formulário clínico só de olhar.

**Independent Test**: Abrir seção `#funcionalidades` — cada screenshot deve ocupar no mínimo 256px de largura, ter aparência de tela de smartphone (bordas arredondadas, sombra), e ser legível sem zoom.

### Implementação — User Story 2

- [x] T008 [US2] Atualizar `src/components/sections/Features.tsx` — substituir `<img>` por `<Image>` de `next/image` com `width={288} height={620} unoptimized`; trocar `w-48` por `w-64 md:w-72`; envolver a imagem em `<div className="bg-gray-100 rounded-[2.5rem] p-2 shadow-xl">` para profundidade; adicionar `rounded-[2rem]` na imagem; aplicar `animate-fade-in-up` com `animation-delay-{100,200}` nos elementos de texto de cada `FeatureBlock`

**Checkpoint**: Screenshots das features têm aparência premium e tamanho adequado.

---

## Phase 5: User Story 3 — Confiança e Decisão: Planos e Segurança (Priority: P2)

**Goal**: Visitante convencido pelo produto remove objeções finais sobre custo e privacidade, e tem um CTA imediato após as features para não precisar chegar ao footer.

**Independent Test**: Isolar as seções MidCTA + Pricing + Security — um visitante deve entender: (1) que há um CTA para baixar após as features; (2) que o plano gratuito tem limites e o Pro está grátis no beta; (3) que seus dados de clientes são privados e podem ser deletados.

### Implementação — User Story 3

- [x] T009 [P] [US3] Criar `src/components/sections/MidCTA.tsx` (server component com `<SmartCTA>` client interno) — strip com `gradient-hero py-16 px-6 text-center`; H2 "Pronto para ter o histórico de cada cliente na palma da mão?"; subtítulo "Grátis durante o beta · iOS e Android · Sem cartão"; `<SmartCTA variant="strip" />`
- [x] T010 [P] [US3] Criar `src/components/sections/Security.tsx` (server component) — seção com fundo `bg-gray-950 py-20 px-6`; H2 "Segurança e privacidade" em `text-white`; grid `grid-cols-1 md:grid-cols-3`; 3 itens: (1) ícone escudo + "Seus dados são só seus" + descrição, (2) ícone nuvem + "Armazenamento em nuvem seguro" + descrição, (3) ícone lixeira + "Exclusão total quando quiser" + descrição; cada ícone como SVG inline em `text-teal-400`
- [x] T011 [US3] Atualizar `src/app/page.tsx` — importar `MidCTA` e inserir entre `<Features />` e `<HowItWorks />`; importar `Security` e inserir entre `<Pricing />` e `<Footer />`
- [x] T012 [P] [US3] Atualizar `src/components/sections/Sections.tsx` — substituir constantes `APP_STORE` e `PLAY_STORE` hardcoded no Footer por imports de `@/lib/stores`; substituir os `<a>` de store no CTA Strip e Footer por `<StoreBadge>` com `variant="light"` no strip e `variant="outline"` no footer

**Checkpoint**: MidCTA, Pricing e Security formam um bloco de conversão completo.

---

## Phase 6: User Story 4 — Visitante Mobile (Priority: P2)

**Goal**: Navegação e experiência 100% funcionais no celular; detecção de OS no SmartCTA funciona em iOS e Android reais.

**Independent Test**: Abrir a página em viewport 375px (ou DevTools com iPhone SE) — menu hamburger abre/fecha corretamente, todos os textos e CTAs são legíveis e tocáveis (min 44px), nenhum elemento tem overflow horizontal.

### Implementação — User Story 4

- [x] T013 [US4] Atualizar `src/components/ui/Navbar.tsx` — adicionar estado `const [menuOpen, setMenuOpen] = useState(false)`; botão hamburger `md:hidden` com SVG animado (3 linhas → X via `rotate` quando `menuOpen`); dropdown mobile `absolute top-16 inset-x-0 bg-white border-b shadow-lg py-4 px-6 flex flex-col gap-4` condicionado a `menuOpen`; fechar ao clicar em qualquer link (`onClick={() => setMenuOpen(false)}`); fechar ao resize `≥768px` via `useEffect` com `window.addEventListener('resize', ...)`; incluir link âncora `#para-quem` "Para quem é" na lista de links do Navbar
- [x] T014 [US4] Aplicar `animate-fade-in-up` com delays escalonados em: stats do `StatsStrip` (`animation-delay-{0,100,200,300}`), cards do `ForWho` (`animation-delay-{0,100,200,300,400}`), steps do `HowItWorks` (`animation-delay-{0,100,200,300}`), itens de segurança do `Security` (`animation-delay-{0,100,200}`)

**Checkpoint**: Página funciona perfeitamente em mobile; animações enriquecem a experiência sem causar regressão.

---

## Phase 7: Polish & Validação Final

**Purpose**: Garantir qualidade de build, ausência de erros e consistência visual.

- [x] T015 [P] Revisar `src/app/page.tsx` final — confirmar ordem das seções: Navbar, Hero, StatsStrip, Problem, ForWho, Features, MidCTA, HowItWorks, SocialProof, Pricing, Security, Footer; garantir que todos os imports estão presentes e corretos
- [x] T016 Executar `npm run build` — corrigir qualquer erro de TypeScript, warning de `next/image` ou referência quebrada; o build deve terminar sem erros
- [x] T017 [P] Revisar página em viewport 375px — sem overflow horizontal; hero mostra texto + device; menu hamburger funciona; CTAs têm pelo menos 44px de altura; textos são legíveis
- [x] T018 [P] Revisar página em viewport 768px — hero em 2 colunas; features com screenshots maiores; ForWho em 3 colunas; Security em 3 colunas
- [x] T019 [P] Revisar página em viewport 1440px — proporções corretas; device frame na hero centralizado; features alternando esquerda/direita corretamente; nenhum elemento esticado

---

## Dependencies & Execution Order

### Dependências entre Fases

- **Phase 1 (Setup)**: Sem dependências — começa imediatamente
- **Phase 2 (Foundational)**: Depende de Phase 1 — bloqueia todas as user stories
- **US1 (Phase 3)**: Depende de Phase 2; T004 (SmartCTA) deve preceder T005 (Hero usa SmartCTA)
- **US2 (Phase 4)**: Depende de Phase 2; independente de US1
- **US3 (Phase 5)**: Depende de T004 (SmartCTA — usado no MidCTA); T009 e T010 são paralelas entre si
- **US4 (Phase 6)**: Depende de Phase 2; T013 e T014 são paralelas entre si; T014 depende de T002 (animations)
- **Polish (Phase 7)**: Depende de todas as user stories completadas

### Dependências Dentro das User Stories

```
T001 → T002, T003
T003 → T004 → T005
T001 → T005 (imports APP_STORE_URL)
T006 → T007
T008 depende de T002 (animations)
T004 → T009
T003 → T012 (StoreBadge usado no Footer)
T001 → T012
T002 → T014
```

### Oportunidades de Paralelismo

Após completar Phase 2 (T001, T002, T003):
- **Paralelo A**: T004 → T005 → T006 → T007 (US1)
- **Paralelo B**: T008 (US2 — independente de US1)
- **Paralelo C**: T009 + T010 simultâneos (US3, após T004)
- **Paralelo D**: T013 + T014 simultâneos (US4, após T002)

---

## Parallel Example: User Story 1

```
# Após T003 (StoreBadge):
Tarefa: T004 — SmartCTA em src/components/ui/SmartCTA.tsx
  ↓
Tarefa: T005 — Hero refatorado em src/components/sections/Hero.tsx
Tarefa: T006 — ForWho em src/components/sections/ForWho.tsx  [paralelo com T005]
  ↓
Tarefa: T007 — page.tsx integra ForWho
```

## Parallel Example: User Story 3

```
# Após T004 (SmartCTA):
Tarefa: T009 — MidCTA em src/components/sections/MidCTA.tsx
Tarefa: T010 — Security em src/components/sections/Security.tsx  [paralelo com T009]
Tarefa: T012 — Footer atualizado em src/components/sections/Sections.tsx  [paralelo]
  ↓
Tarefa: T011 — page.tsx integra MidCTA e Security
```

---

## Implementation Strategy

### MVP (User Story 1 + 2 apenas)

1. Completar Phase 1 + Phase 2 (T001–T003)
2. Completar US1 (T004–T007): hero com visual do app
3. Completar US2 (T008): features com screenshots maiores
4. **PARAR e VALIDAR**: Build passa, hero impressiona, features mostram o app
5. Deploy se aprovado — já é uma melhoria significativa

### Entrega Incremental Completa

1. Phase 1 + 2 → building blocks prontos
2. US1 (P1) → hero com app visual + seção para quem é
3. US2 (P1) → features com screenshots premium
4. US3 (P2) → mid-CTA + segurança (remove objeções finais)
5. US4 (P2) → mobile navigation + animações
6. Polish → build limpo + revisão visual

---

## Notes

- `[P]` = arquivos diferentes, sem dependências entre si naquele momento
- `[USn]` = rastreabilidade até a user story da spec.md
- Cada user story pode ser demonstrada independentemente após seu checkpoint
- `npm run build` deve passar sem erros após cada fase
- As URLs das stores estão em `src/lib/stores.ts` — nunca hardcode em componentes
- `SmartCTA` usa detecção de OS apenas no cliente; SSR sempre renderiza ambos os botões
