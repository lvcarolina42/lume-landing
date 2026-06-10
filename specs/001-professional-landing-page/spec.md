# Feature Specification: Lume Landing Page — Redesign Profissional

**Feature Branch**: `001-professional-landing-page`

**Created**: 2026-06-08

**Status**: Draft

**Input**: Redesenhar a landing page do Lume para ser 100% profissional, convencer profissionais de saúde/estética a baixar o app e comunicar o valor do produto com clareza e impacto.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Primeira Visita: Profissional de Estética descobre o Lume (Priority: P1)

Uma esteticista que faz botox e preenchimento acessa a landing page pela primeira vez, vinda de um anúncio ou indicação. Ela precisa entender em segundos o que o Lume faz, se é para ela e se vale a pena baixar.

**Why this priority**: É o caso de uso central. Sem uma proposta de valor clara acima da dobra, nenhuma outra seção importa. Converte visitante em download.

**Independent Test**: Pode ser testado abrindo a página em um celular com uma nova aba. A visitor deve conseguir responder "o que é isso e para mim?" em menos de 10 segundos apenas com hero section + subtítulo + CTA.

**Acceptance Scenarios**:

1. **Given** uma profissional acessa a página no celular, **When** ela vê a hero section sem rolar, **Then** ela entende que o app organiza clientes e fotos de evolução, e vê um botão claro para baixar
2. **Given** ela rola a página, **When** chega na seção "Para quem é", **Then** ela se identifica com ao menos um dos perfis descritos (esteticista, médico, personal trainer, etc.)
3. **Given** ela está convencida, **When** clica no CTA, **Then** é levada à App Store ou Google Play com um clique

---

### User Story 2 — Comparação Antes/Depois: o diferencial visual do app (Priority: P1)

Um visitante que trabalha com transformação visual (personal trainer, fisioterapeuta, skin care) quer entender como o app vai melhorar o seu trabalho. A seção de features precisa mostrar, não apenas dizer.

**Why this priority**: A proposta do Lume é visual. Uma landing page que só usa texto perde a oportunidade de demonstrar o produto. Mostrar a câmera com ghost e a ferramenta de comparação é o maior gatilho de conversão.

**Independent Test**: Um visitante sem conhecimento prévio do app deve conseguir descrever o diferencial da câmera ghost e da ferramenta de antes/depois apenas observando os mockups/screenshots na página.

**Acceptance Scenarios**:

1. **Given** um visitante está na seção de funcionalidades, **When** vê o showcase da câmera com ghost overlay, **Then** compreende que o app ajuda a posicionar o cliente igual à sessão anterior
2. **Given** ele vê a seção de comparação antes/depois, **When** observa o exemplo de imagem gerada, **Then** percebe que pode criar artes prontas para redes sociais diretamente pelo app
3. **Given** ele vê as features, **When** chega nos itens de botox/filler, **Then** entende que há um formulário clínico completo, diferenciando o Lume de apps genéricos

---

### User Story 3 — Confiança e Decisão: Planos e Segurança (Priority: P2)

Um profissional já interessado precisa de um último empurrão antes de baixar. Ele quer saber quanto custa, se seus dados estão seguros e se outros profissionais já usam.

**Why this priority**: Remove objeções finais. Um visitante convencido pelo produto ainda pode abandonar por dúvidas sobre preço ou privacidade.

**Independent Test**: Pode ser testado isolando a seção de pricing + segurança. Um visitante deve entender o plano gratuito, o Pro, e o período beta sem precisar de ajuda.

**Acceptance Scenarios**:

1. **Given** o profissional está na seção de planos, **When** lê os detalhes, **Then** entende que o plano gratuito tem limite de 50 clientes e que durante o beta o Pro é gratuito
2. **Given** ele tem dúvidas sobre privacidade, **When** lê a seção de segurança, **Then** fica claro que apenas ele acessa seus clientes e que pode excluir tudo a qualquer momento
3. **Given** ele decide baixar, **When** encontra o CTA final, **Then** é levado à loja do app correto (iOS ou Android) conforme o dispositivo detectado

---

### User Story 4 — Visitante mobile vs. desktop (Priority: P2)

A maioria dos visitantes acessa por celular. A página precisa ser igualmente impactante e funcional em telas pequenas.

**Why this priority**: Uma página com layout quebrado em mobile tem taxa de rejeição altíssima. O público-alvo (profissionais de saúde/estética) navega majoritariamente pelo celular.

**Independent Test**: Abrir a página em um iPhone SE (320px) e em um Android médio (360px). Todos os textos, imagens e botões devem estar legíveis e clicáveis sem zoom manual.

**Acceptance Scenarios**:

1. **Given** um visitante abre a página no celular, **When** carrega, **Then** o hero, CTA e primeira feature ficam visíveis sem rolar horizontalmente
2. **Given** ele está navegando no mobile, **When** toca em qualquer CTA, **Then** o botão responde com feedback visual e redireciona corretamente
3. **Given** a página carrega no celular, **When** o sistema operacional é detectado, **Then** o CTA principal direciona para App Store (iOS) ou Google Play (Android) automaticamente

---

### Edge Cases

- O que acontece quando o visitante está em um sistema que não é iOS nem Android (desktop)? Os dois botões (App Store e Google Play) devem aparecer lado a lado.
- Como a página se comporta sem JavaScript habilitado? O conteúdo essencial (hero, features, CTA) deve ser legível.
- O que acontece se as imagens do app ainda não estiverem disponíveis? Placeholders devem indicar claramente onde vão os screenshots.
- O visitante chegou por um link compartilhado no WhatsApp (preview via Open Graph)? A página deve ter meta tags de OG configuradas com imagem e descrição atrativas.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A página DEVE exibir uma hero section com headline impactante, subtítulo explicativo e pelo menos um CTA de download visível sem rolar em dispositivos mobile (375px+)
- **FR-002**: A página DEVE comunicar claramente o público-alvo do app (profissionais de saúde e estética) em uma seção dedicada
- **FR-003**: A página DEVE apresentar as principais funcionalidades do app com suporte visual (screenshots ou mockups), especialmente: câmera com ghost, comparação antes/depois e formulário clínico
- **FR-004**: A página DEVE exibir a seção de planos (Gratuito vs. Lume Pro) com as diferenças e o aviso de beta gratuito
- **FR-005**: A página DEVE ter pelo menos 3 pontos de CTA de download distribuídos ao longo do scroll (hero, meio, final)
- **FR-006**: Os CTAs de download DEVEM direcionar para App Store (iOS) e Google Play (Android), com detecção automática do dispositivo para destacar o CTA correto
- **FR-007**: A página DEVE ser totalmente responsiva e funcional em telas de 320px a 1440px de largura
- **FR-008**: A página DEVE carregar em menos de 3 segundos em conexão 4G simulada
- **FR-009**: A página DEVE ter meta tags Open Graph configuradas (título, descrição, imagem) para compartilhamento via WhatsApp/redes sociais
- **FR-010**: A página DEVE comunicar os diferenciais de segurança e privacidade do app (dados exclusivos por profissional, exclusão permanente disponível)
- **FR-011**: A página DEVE estar em Português do Brasil como idioma padrão
- **FR-012**: A navegação principal DEVE ter um menu com links âncora para as seções principais e um CTA de download destacado

### Key Entities

- **Hero Section**: Primeira dobra da página — headline, subtítulo, CTA principal, imagem do app
- **Seção Para Quem É**: Lista de perfis profissionais target com ícones ou cards visuais
- **Seção de Funcionalidades**: Apresentação das features com screenshots e descrições curtas
- **Seção Antes & Depois**: Showcase da ferramenta de comparação com exemplo real
- **Seção de Planos**: Tabela ou cards comparando Gratuito vs. Pro, destaque do beta gratuito
- **Seção de Segurança**: Comunicação de privacidade e segurança dos dados
- **Footer**: Links institucionais, stores, contato

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um visitante não familiarizado com o app consegue explicar o que o Lume faz e para quem serve em menos de 15 segundos de leitura da hero section
- **SC-002**: A página carrega e exibe o conteúdo principal (hero + primeiro CTA) em menos de 3 segundos em uma conexão 4G simulada
- **SC-003**: 100% dos CTAs de download funcionam corretamente em iOS, Android e desktop (fallback com ambas as lojas)
- **SC-004**: A página não apresenta elementos cortados, sobrepostos ou ilegíveis em nenhuma das resoluções: 320px, 375px, 768px, 1024px, 1440px
- **SC-005**: O link compartilhado no WhatsApp exibe preview com imagem, título e descrição atrativas (Open Graph funcional)
- **SC-006**: Um profissional de estética lendo a página consegue identificar pelo menos 3 funcionalidades específicas para seu trabalho (câmera ghost, formulário clínico, comparação antes/depois)
- **SC-007**: A seção de planos deixa claro sem ambiguidade que durante o beta o plano Pro é gratuito para todos

---

## Assumptions

- O app já está publicado ou em processo de publicação na App Store e Google Play; os links das stores serão fornecidos pelo desenvolvedor
- Screenshots ou mockups do app serão fornecidos pelo desenvolvedor para as seções de features; placeholders visuais serão usados onde necessário durante o desenvolvimento
- O idioma principal da landing page é Português do Brasil; versões em outros idiomas estão fora do escopo desta iteração
- A identidade visual (paleta de cores, tipografia, logo) já está definida no projeto existente e deve ser respeitada e expandida consistentemente
- O projeto usa Next.js com TypeScript e Tailwind CSS, conforme estrutura existente no repositório
- Não há sistema de analytics integrado ainda; a integração com GA4 ou similar está fora do escopo desta spec
- O público-alvo acessa majoritariamente via celular; o design deve ser mobile-first
- Depoimentos de usuários reais ainda não estão disponíveis; se a seção de social proof for incluída, usará placeholders representativos até que dados reais estejam disponíveis
