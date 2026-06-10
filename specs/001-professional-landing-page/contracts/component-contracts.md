# UI Component Contracts: Lume Landing Page

Contratos de interface dos componentes novos e modificados.

---

## Componentes Novos

### `StoreBadge` — `src/components/ui/StoreBadge.tsx`

Componente server-side puro (sem `use client`).

```typescript
interface StoreBadgeProps {
  store: 'apple' | 'android'
  url: string
  variant?: 'dark' | 'light' | 'outline'  // default: 'dark'
  className?: string
}
```

**Renderização esperada**:
- `dark`: fundo preto, texto/ícone branco — padrão para fundos claros
- `light`: fundo branco, texto/ícone preto — para fundos escuros
- `outline`: borda branca, texto branco — para secção hero/gradient

**Comportamento**:
- Sempre abre em nova aba (`target="_blank" rel="noopener noreferrer"`)
- Inclui ícone SVG da plataforma (Apple  ou Android robot) + texto em duas linhas
- Texto: "Disponível na / App Store" ou "Disponível no / Google Play"

---

### `SmartCTA` — `src/components/ui/SmartCTA.tsx`

Componente client-side (`use client`).

```typescript
interface SmartCTAProps {
  appStoreUrl: string
  playStoreUrl: string
  variant?: 'hero' | 'strip' | 'footer'  // default: 'hero'
}
```

**Comportamento**:
- SSR/SSG: renderiza ambos os botões lado a lado (hydration-safe — sem conteúdo condicional pré-hydration)
- Após hydration no cliente:
  - iOS (`/iPhone|iPad|iPod/.test(navigator.userAgent)`): anima destaque no botão App Store
  - Android (`/Android/.test(navigator.userAgent)`): anima destaque no botão Play Store
  - Outros: mantém ambos com mesmo peso visual

**Não redireciona automaticamente** (seria intrusivo para quem está navegando, não necessariamente pronto para baixar).

---

### `ForWho` — `src/components/sections/ForWho.tsx`

Server component puro.

```typescript
// Sem props externos — conteúdo hardcoded como as demais seções
// Renderiza grid de PersonaCard com 5 personas
interface PersonaCard {
  icon: ReactNode   // SVG inline
  title: string
  description: string
}
```

**Layout**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` com 5 cards. Fundo `bg-gray-50`.

---

### `Security` — `src/components/sections/Security.tsx`

Server component puro.

```typescript
// Sem props externos — conteúdo hardcoded
// Renderiza 3 SecurityItem em linha horizontal
interface SecurityItem {
  icon: ReactNode   // SVG inline 
  title: string
  description: string
}
```

**Layout**: `grid-cols-1 md:grid-cols-3`. Fundo `bg-teal-900` (tema escuro para contrastar com Pricing acima).

---

### `MidCTA` — `src/components/sections/MidCTA.tsx`

Server component (usa SmartCTA internamente que é client, mas o wrapper pode ser server).

```typescript
// Sem props — conteúdo hardcoded, reutiliza SmartCTA
```

**Layout**: Strip com gradiente teal, headline em branco, subtítulo, SmartCTA com `variant="strip"`.

---

## Componentes Modificados

### `Navbar` (existente) — adições

Manter todo o comportamento atual. Adicionar:

```typescript
// Estado adicional para menu mobile
const [menuOpen, setMenuOpen] = useState(false)

// Comportamento: fechar menu ao clicar em link (smooth scroll + fecha)
// Comportamento: fechar menu ao redimensionar para ≥768px
// Comportamento: bloquear scroll do body quando menu aberto (overflow-hidden no html)
```

**Novos elementos DOM**:
- Botão hamburger visível em `md:hidden` (três linhas animando para X)
- Dropdown mobile: `absolute top-16 left-0 right-0 bg-white shadow-lg` com os mesmos links + CTA

---

### `Hero` (existente) — adições

Manter todo o conteúdo textual atual. Modificações:
- Layout muda de `text-center` puro para `md:grid md:grid-cols-2 md:text-left` em telas maiores
- Coluna direita: device frame com `screen_patient_details.jpeg` ou `screen_home.jpeg`
- CTAs substituídos por `<SmartCTA variant="hero" />`
- Device frame: `div` com `rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl` envolvendo a imagem

---

### `Features` (existente) — adições

- Imagem: `w-48` → `w-64 md:w-72`
- Adicionar frame CSS: `rounded-[2rem] shadow-xl ring-4 ring-black/5` na imagem
- Usar `<Image>` de `next/image` com `width={288} height={624}` (proporção 9:19.5 de smartphone)
- Fundo do wrapper de imagem: `bg-gray-100 rounded-[2.5rem] p-2` para dar profundidade

---

## Contrato de Roteamento de CTAs

Todos os links de download na página devem seguir este contrato:

| Contexto | Store detectada | Link enviado |
|----------|----------------|--------------|
| Desktop | N/A | Ambos os botões visíveis |
| iOS (qualquer) | App Store | Prioritariamente App Store |
| Android (qualquer) | Play Store | Prioritariamente Play Store |
| SSR/SSG (server) | N/A | Ambos (sem renderização condicional) |

**URLs centralizadas** em `src/lib/stores.ts` (arquivo novo):
```typescript
export const APP_STORE_URL = 'https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.lumeapp.lume&hl=pt'
```
Elimina duplicação das URLs em Hero, Pricing, Footer (atualmente repetidas 4+ vezes).
