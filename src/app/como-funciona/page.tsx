import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Como funciona o Lume — Guia completo do app',
  description:
    'Guia detalhado de todas as funcionalidades do Lume: câmera ghost, ficha clínica de botox e filler, mapa de pontos, antes e depois com logo e organização de clientes.',
  alternates: {
    canonical: 'https://brlume.app/como-funciona',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Como funciona', item: 'https://brlume.app/como-funciona' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como usar o Lume para registrar sessões e clientes de estética',
  description:
    'Guia completo do fluxo de atendimento no app Lume: do cadastro do cliente ao compartilhamento do antes e depois com logo.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Cadastre o cliente',
      text: 'Adicione o cliente pelo nome e telefone ou importe direto dos contatos do celular. Em menos de dez segundos o perfil está criado e pronto para o primeiro registro.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Fotografe com câmera ghost',
      text: 'Abra a câmera pelo app. A última foto do cliente aparece em sobreposição semitransparente. Alinhe o rosto e fotografe — o ângulo sai idêntico ao da sessão anterior.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Marque os pontos e preencha a ficha clínica',
      text: 'Toque na foto para mapear os pontos de aplicação. Em seguida, preencha a ficha clínica com produto, lote, regiões e quantidades. O total é calculado automaticamente.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Gere o antes e depois e compartilhe',
      text: 'Selecione duas sessões, posicione sua logo, escolha o formato e compartilhe direto para WhatsApp ou Instagram. A evolução do cliente registrada e pronta para divulgar.',
    },
  ],
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-14">{children}</section>
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5 leading-tight">
      {children}
    </h2>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-gray-600 text-base leading-relaxed">{children}</div>
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
          <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-600 text-[9px] font-bold">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ComoFuncionaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Guia completo
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Como funciona o Lume
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              O Lume é um aplicativo para iOS e Android que centraliza todo o fluxo de atendimento
              em um único lugar — do cadastro do cliente ao compartilhamento do antes e depois com
              logo. Foi pensado para qualquer profissional que acompanha resultados visuais ao longo
              do tempo: esteticistas, médicos estetas, dermatologistas, personal trainers,
              nutricionistas, fisioterapeutas e outros. Para quem aplica botox, filler ou realiza
              harmonização facial, o app vai além: funciona também como prontuário clínico com
              registros de produtos, lotes e regiões anatômicas.
            </p>
          </div>

          <div className="w-full h-px bg-gray-100 mb-14" />

          {/* 1. Cadastro */}
          <Section>
            <H2>Cadastro rápido e histórico organizado por cliente</H2>
            <Prose>
              <p>
                O primeiro passo no Lume é criar o perfil do cliente. O processo leva menos de dez
                segundos: basta digitar o nome e, opcionalmente, o telefone. Quem prefere agilidade
                pode importar o contato diretamente da agenda do celular — sem redigitar nada, o
                perfil já aparece preenchido e pronto para uso.
              </p>
              <p>
                Todos os clientes ficam organizados em uma lista com busca em tempo real. Digitar
                as primeiras letras do nome já filtra os resultados — sem rolagem longa, sem
                perda de tempo procurando. Cada card exibe o nome, o telefone, a data da última
                sessão e a quantidade total de registros, dando uma visão imediata do histórico de
                cada pessoa.
              </p>
              <p>
                Dentro do perfil de cada cliente, todas as sessões aparecem em uma grade visual
                ordenada por data. O profissional pode alternar entre a ordem mais recente e a mais
                antiga conforme a necessidade. Abrir uma sessão exibe a foto, as anotações e todos
                os dados clínicos registrados — tudo acessível com um toque.
              </p>
              <p>
                Os dados do cliente podem ser editados a qualquer momento. Se o cliente solicitar
                a exclusão do histórico, o Lume remove permanentemente o perfil, todas as sessões,
                fotos e dados clínicos — sem rastros e sem possibilidade de recuperação. Isso está
                em conformidade com as exigências da LGPD sobre o direito ao esquecimento.
              </p>
            </Prose>
            <Highlights
              items={[
                'Cadastro em menos de 10 segundos',
                'Importação direta da agenda do celular',
                'Busca por nome em tempo real',
                'Exclusão permanente com remoção completa do histórico',
              ]}
            />
          </Section>

          {/* 2. Câmera ghost */}
          <Section>
            <H2>Câmera ghost para ângulo consistente em toda sessão</H2>
            <Prose>
              <p>
                O maior problema das fotos de acompanhamento clínico é a inconsistência de ângulo.
                Uma pequena variação na distância, na inclinação da cabeça ou na posição do
                celular é suficiente para fazer um resultado excelente parecer medíocre numa
                comparação. Quando as fotos antes e depois foram tiradas em condições diferentes,
                a evolução real do tratamento fica escondida — e o profissional perde a
                oportunidade de mostrar o próprio trabalho com clareza.
              </p>
              <p>
                A câmera ghost do Lume resolve isso com uma sobreposição semitransparente. Ao
                abrir a câmera para registrar uma nova sessão, a última foto do cliente aparece
                sobreposta sobre a imagem ao vivo, como um guia fantasma. O profissional posiciona
                o cliente até que os pontos de referência — nariz, olhos, contorno do rosto —
                coincidam com a imagem anterior, e só então tira a foto. O resultado são duas
                imagens que se comparam de igual para igual.
              </p>
              <p>
                A intensidade da sobreposição é ajustável com um controle deslizante na tela da
                câmera. É possível aumentar a opacidade para facilitar o alinhamento de detalhes
                finos ou diminuir para ter melhor visão do cliente ao vivo. A câmera ghost
                funciona tanto com a câmera frontal quanto com a traseira, e também é possível
                usar uma foto existente da galeria do celular como referência em vez da câmera.
              </p>
              <p>
                Para profissionais que publicam antes e depois nas redes sociais, a câmera ghost
                tem um impacto direto na qualidade do conteúdo. Fotos com o mesmo ângulo tornam a
                diferença antes e depois imediatamente evidente, aumentam o engajamento e passam
                credibilidade profissional. Não é necessário nenhum equipamento adicional —
                apenas o celular e o Lume.
              </p>
            </Prose>
            <Highlights
              items={[
                'Sobreposição semitransparente da sessão anterior',
                'Opacidade ajustável via controle deslizante',
                'Câmera frontal e traseira',
                'Suporte a fotos da galeria como referência',
                'Funciona sem internet',
              ]}
            />
          </Section>

          {/* 3. Mapa de pontos */}
          <Section>
            <H2>Mapa de pontos de aplicação diretamente na foto</H2>
            <Prose>
              <p>
                Depois de tirar a foto da sessão, o Lume oferece uma ferramenta de marcação visual
                diretamente sobre a imagem. O profissional toca na foto para adicionar pontos de
                referência nos locais exatos de aplicação, nas áreas tratadas ou nos pontos
                anatômicos relevantes para o procedimento. Esse mapa fica salvo permanentemente
                como parte do prontuário da sessão.
              </p>
              <p>
                Há cinco cores disponíveis para as marcações, o que permite diferenciar produtos,
                regiões ou categorias dentro de uma mesma sessão. Em um procedimento combinando
                botox e filler, por exemplo, é possível usar uma cor para cada produto e ter
                imediatamente uma representação visual de quais regiões receberam cada um. Os
                pontos podem ser desfeitos individualmente ou apagados todos de uma vez.
              </p>
              <p>
                A foto pode ser ampliada com gesto de pinça para marcações mais precisas em
                regiões de detalhe, como os pontos ao redor dos olhos ou do lábio. O zoom mantém
                a resolução original da imagem, garantindo precisão independentemente do tamanho
                do detalhe sendo marcado.
              </p>
              <p>
                Na sessão seguinte, o mapa da sessão anterior serve como guia de referência. O
                profissional abre o resumo, vê exatamente quais pontos foram aplicados e em que
                quantidade, e pode replicar ou ajustar o protocolo com base em evidências visuais
                — sem depender de memória ou de anotações soltas.
              </p>
            </Prose>
            <Highlights
              items={[
                '5 cores para diferenciar produtos ou regiões',
                'Desfazer com um toque',
                'Zoom para marcações precisas',
                'Mapa salvo permanentemente no prontuário',
                'Referência automática na sessão seguinte',
              ]}
            />
          </Section>

          {/* 4. Ficha clínica */}
          <Section>
            <H2>Ficha clínica completa de botox e filler em menos de 1 minuto</H2>
            <Prose>
              <p>
                Para profissionais que realizam aplicações de botox e preenchimento facial, o Lume
                vai além do registro fotográfico e funciona como um prontuário clínico completo.
                O formulário é acessado diretamente na tela de sessão e foi projetado para ser
                preenchido em menos de um minuto, sem interromper o ritmo do atendimento.
              </p>
              <p>
                O formulário de botox registra a marca do produto, o número do lote e a diluição
                utilizada. Em seguida, o profissional seleciona as regiões anatômicas tratadas e
                informa a quantidade em unidades (UI) para cada uma. O Lume disponibiliza 13
                regiões pré-cadastradas: Frontal, Prócero, Corrugador, Orbicular do Olho, Nasal,
                Sorriso Gengival, DAO (Depressor do Ângulo da Boca), Mentoniano, Masseter,
                Platisma e outras regiões personalizáveis. O total de unidades da sessão é
                calculado automaticamente conforme as regiões são preenchidas.
              </p>
              <p>
                O formulário de filler segue a mesma estrutura: marca, lote e seleção de regiões
                com volume em mililitros (ml) para cada uma. O Lume oferece 11 regiões para
                preenchimento facial: Lábios, Sulco Nasogeniano, Malar, Olheira, Mento, Ângulo da
                Mandíbula, Contorno da Mandíbula, Pré-Jowls, Têmpora, Rinomodelação e outras.
                O volume total é calculado automaticamente, eliminando erros de soma manual.
              </p>
              <p>
                É possível registrar botox, filler ou ambos na mesma sessão. Para procedimentos
                combinados, os dois formulários ficam disponíveis simultaneamente e o profissional
                preenche apenas o que for aplicável. Múltiplas regiões e múltiplas seringas de
                filler podem ser adicionadas dentro de um único registro de sessão.
              </p>
              <p>
                Todo o histórico clínico fica armazenado na nuvem e é acessível a qualquer
                momento — inclusive anos depois. Antes de cada nova sessão, o profissional pode
                abrir o prontuário anterior e ver exatamente o que foi aplicado, em qual região e
                em qual quantidade, sem depender de memória ou de registros físicos que se perdem.
              </p>
            </Prose>
            <Highlights
              items={[
                '13 regiões de botox pré-cadastradas',
                '11 regiões de filler pré-cadastradas',
                'Cálculo automático de UI e ml',
                'Registro de marca, lote e diluição',
                'Botox e filler na mesma sessão',
                'Histórico clínico na nuvem, acessível para sempre',
              ]}
            />
          </Section>

          {/* 5. Antes e depois */}
          <Section>
            <H2>Geração de antes e depois com logo em segundos</H2>
            <Prose>
              <p>
                Com dois ou mais registros fotográficos de um mesmo cliente, o Lume permite criar
                uma imagem de comparação antes e depois pronta para publicação nas redes sociais ou
                para enviar diretamente ao cliente. O processo começa selecionando duas sessões do
                histórico — o app usa automaticamente as fotos registradas, com o ângulo
                consistente garantido pela câmera ghost.
              </p>
              <p>
                O editor de antes e depois oferece três formatos de exportação: quadrado 1:1 para
                o feed do Instagram, retrato 4:5 que ocupa mais espaço no feed e gera mais
                engajamento, e stories 9:16 para Instagram Stories, TikTok e WhatsApp Status. Os
                layouts disponíveis são lado a lado e empilhado. A linha divisória entre as fotos
                tem espessura e cor ajustáveis — de uma linha fina discreta a uma barra mais
                visível conforme o estilo da marca.
              </p>
              <p>
                Para personalização da marca, o profissional pode fazer upload da logo da clínica
                ou estúdio diretamente da galeria do celular. A logo é posicionada arrastando com
                o dedo e redimensionada com um gesto de pinça, podendo ser colocada em qualquer
                área da imagem. Uma marca d'água de texto personalizada pode ser adicionada ao
                rodapé. As etiquetas sobre cada foto — que por padrão mostram "ANTES" e "DEPOIS"
                — são editáveis e podem exibir também a data de cada sessão. A posição das
                etiquetas é ajustável para qualquer um dos quatro cantos da imagem.
              </p>
              <p>
                Todas as preferências de formato, layout, cor da linha, posição da logo e texto
                das etiquetas são salvas automaticamente e restauradas na próxima vez que o editor
                for aberto. Isso significa que após a primeira configuração, o profissional gera
                novos antes e depois com a identidade visual consistente da marca sem nenhum
                trabalho de reconfiguração.
              </p>
              <p>
                A imagem final é compartilhada diretamente pelo Lume para WhatsApp, Instagram,
                e-mail ou qualquer outro app instalado no celular. Não é necessário sair do app,
                salvar na galeria ou abrir outro editor. Do perfil do cliente até o
                compartilhamento, o processo inteiro leva menos de 30 segundos.
              </p>
            </Prose>
            <Highlights
              items={[
                'Formatos: quadrado 1:1, retrato 4:5, stories 9:16',
                'Layout lado a lado ou empilhado',
                'Upload de logo com posicionamento livre',
                'Etiquetas e datas personalizáveis',
                'Linha divisória com cor e espessura ajustáveis',
                'Marca d\'água de texto',
                'Preferências salvas automaticamente',
                'Compartilhamento direto para qualquer app',
              ]}
            />
          </Section>

          {/* 6. Segurança */}
          <Section>
            <H2>Dados armazenados na nuvem com segurança</H2>
            <Prose>
              <p>
                O acesso ao Lume é feito por autenticação obrigatória — via conta Google, Apple ou
                e-mail e senha. Não é possível visualizar dados sem estar autenticado. Cada
                profissional acessa exclusivamente os seus próprios clientes: não há forma de um
                usuário acessar a lista ou o histórico de outro. Os dados são vinculados ao perfil
                do profissional, não ao dispositivo.
              </p>
              <p>
                Fotos, fichas clínicas e todos os dados dos clientes ficam armazenados na nuvem e
                acessíveis de qualquer dispositivo a qualquer hora. Trocou de celular, formatou o
                aparelho ou perdeu o dispositivo? Basta fazer login na nova conta e todos os
                registros estão lá, intactos. Não há risco de perda de dados por falha de
                hardware.
              </p>
              <p>
                O Lume foi desenvolvido em conformidade com a Lei Geral de Proteção de Dados
                (LGPD). Os dados dos clientes nunca são compartilhados com terceiros, não são
                usados para fins publicitários e não são acessados pelos desenvolvedores do app.
                Se o profissional decidir encerrar a conta, todos os dados — incluindo cada foto
                armazenada na nuvem — são removidos permanentemente, sem possibilidade de
                recuperação e sem exigir nenhuma justificativa.
              </p>
            </Prose>
            <Highlights
              items={[
                'Login via Google, Apple ou e-mail e senha',
                'Dados na nuvem, acessíveis de qualquer dispositivo',
                'Cada profissional acessa apenas seus próprios clientes',
                'Conformidade com a LGPD',
                'Exclusão de conta remove todos os dados permanentemente',
              ]}
            />
          </Section>

          <div className="w-full h-px bg-gray-100 mb-14" />

          {/* 4 passos */}
          <Section>
            <H2>O fluxo completo em 4 passos</H2>
            <Prose>
              <p>
                Apesar da profundidade das funcionalidades, o fluxo do Lume foi projetado para ser
                rápido. Uma sessão completa — com foto, mapa de pontos e ficha clínica — leva
                menos de dois minutos. Veja o fluxo do início ao fim:
              </p>
            </Prose>
            <ol className="mt-6 space-y-5">
              {[
                {
                  n: 1,
                  title: 'Cadastre o cliente',
                  desc: 'Nome e telefone, ou importe direto dos contatos. O perfil fica criado em menos de dez segundos.',
                },
                {
                  n: 2,
                  title: 'Fotografe com câmera ghost',
                  desc: 'Abra a câmera pelo app. Alinhe o rosto com a sobreposição da sessão anterior e tire a foto — o ângulo sai idêntico.',
                },
                {
                  n: 3,
                  title: 'Marque os pontos e preencha a ficha clínica',
                  desc: 'Toque na foto para mapear os pontos de aplicação. Preencha marca, lote, regiões e quantidades. O total é calculado sozinho.',
                },
                {
                  n: 4,
                  title: 'Gere o antes e depois e compartilhe',
                  desc: 'Selecione duas sessões, posicione sua logo e compartilhe direto para WhatsApp ou Instagram. A evolução visível em 30 segundos.',
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 items-start">
                  <span className="w-9 h-9 rounded-xl bg-teal-600 text-white text-sm font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-teal-600/30">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {/* CTA */}
          <div className="bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Comece agora
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
              Baixe o Lume gratuitamente
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-xs mx-auto">
              iOS e Android. Sem cartão, sem burocracia. Acesso imediato a todas as funcionalidades.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-700 font-bold text-sm px-7 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Baixar na App Store
            </a>
          </div>

        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
