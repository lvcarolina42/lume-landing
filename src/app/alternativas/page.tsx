import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Lume vs Planilha vs Papel vs WhatsApp — Qual a melhor opção para esteticistas?',
  description:
    'Compare o Lume com as alternativas mais usadas por esteticistas: planilha, papel, WhatsApp e apps genéricos. Veja qual ferramenta resolve cada problema do dia a dia clínico.',
  alternates: {
    canonical: 'https://brlume.app/alternativas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lume vs as alternativas: qual a melhor opção para esteticistas?',
  description:
    'Comparação honesta entre o Lume e as ferramentas mais usadas por esteticistas: planilha, papel, WhatsApp e apps genéricos de fotos.',
  about: {
    '@type': 'MobileApplication',
    name: 'Lume',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'HealthApplication',
  },
}

type Cell = '✓' | '✗' | 'Parcial'

const rows: { label: string; lume: Cell; planilha: Cell; papel: Cell; whatsapp: Cell; app: Cell }[] = [
  { label: 'Organização por cliente',              lume: '✓',       planilha: '✓',       papel: '✓',       whatsapp: '✗',       app: '✗'       },
  { label: 'Fotos vinculadas ao cliente',          lume: '✓',       planilha: '✗',       papel: 'Parcial', whatsapp: 'Parcial', app: '✗'       },
  { label: 'Ângulo consistente entre sessões',     lume: '✓',       planilha: '✗',       papel: '✗',       whatsapp: '✗',       app: '✗'       },
  { label: 'Ficha clínica de botox e filler',      lume: '✓',       planilha: 'Parcial', papel: 'Parcial', whatsapp: '✗',       app: '✗'       },
  { label: 'Registro de lote e diluição',          lume: '✓',       planilha: 'Parcial', papel: 'Parcial', whatsapp: '✗',       app: '✗'       },
  { label: 'Mapa de pontos de aplicação',          lume: '✓',       planilha: '✗',       papel: '✗',       whatsapp: '✗',       app: '✗'       },
  { label: 'Antes e depois com logo',              lume: '✓',       planilha: '✗',       papel: '✗',       whatsapp: '✗',       app: 'Parcial' },
  { label: 'Acesso na nuvem',                      lume: '✓',       planilha: '✓',       papel: '✗',       whatsapp: '✓',       app: '✓'       },
  { label: 'Gratuito',                             lume: '✓',       planilha: '✓',       papel: '✓',       whatsapp: '✓',       app: '✓'       },
]

const tools = ['Lume', 'Planilha', 'Papel', 'WhatsApp', 'App de fotos'] as const

function cellStyle(val: Cell) {
  if (val === '✓') return 'text-teal-600 font-bold'
  if (val === '✗') return 'text-gray-300'
  return 'text-amber-500 font-medium text-xs'
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

function Divider() {
  return <div className="w-full h-px bg-gray-100 my-12" />
}

export default function AlternativasPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Comparação honesta
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Lume vs as alternativas: qual a melhor opção para esteticistas?
            </h1>
            <Prose>
              <p>
                A maioria dos profissionais de estética começa organizando clientes com ferramentas que
                já conhece — papel, planilha ou WhatsApp. Essas ferramentas funcionam até certo ponto,
                especialmente no início da carreira ou com um volume pequeno de clientes. O problema
                aparece quando o volume cresce, quando começa a trabalhar com botox e filler, ou quando
                precisa de documentação clínica rastreável para se proteger juridicamente.
              </p>
              <p>
                Esta página compara o Lume com cada uma dessas alternativas de forma honesta.
                Nenhuma ferramenta resolve tudo — e o Lume também não. O objetivo é ajudar cada
                profissional a entender qual ferramenta resolve qual problema e onde cada uma tem
                seus limites.
              </p>
            </Prose>
          </div>

          {/* Comparison table — desktop */}
          <div className="hidden sm:block overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-500 text-xs uppercase tracking-wide w-48">
                    Funcionalidade
                  </th>
                  <th className="py-3 px-3 text-center font-extrabold text-teal-600 bg-teal-50 rounded-t-lg">
                    Lume
                  </th>
                  <th className="py-3 px-3 text-center font-semibold text-gray-500">Planilha</th>
                  <th className="py-3 px-3 text-center font-semibold text-gray-500">Papel</th>
                  <th className="py-3 px-3 text-center font-semibold text-gray-500">WhatsApp</th>
                  <th className="py-3 px-3 text-center font-semibold text-gray-500">App de fotos</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="py-3 pr-4 text-gray-700 text-sm leading-snug">{row.label}</td>
                    <td className={`py-3 px-3 text-center bg-teal-50/40 ${cellStyle(row.lume)}`}>{row.lume}</td>
                    <td className={`py-3 px-3 text-center ${cellStyle(row.planilha)}`}>{row.planilha}</td>
                    <td className={`py-3 px-3 text-center ${cellStyle(row.papel)}`}>{row.papel}</td>
                    <td className={`py-3 px-3 text-center ${cellStyle(row.whatsapp)}`}>{row.whatsapp}</td>
                    <td className={`py-3 px-3 text-center ${cellStyle(row.app)}`}>{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-3">
              Parcial = possível com configuração manual, mas sem suporte nativo para o fluxo estético.
            </p>
          </div>

          {/* Comparison cards — mobile */}
          <div className="sm:hidden space-y-4 mb-12">
            {([
              { name: 'Lume', key: 'lume', teal: true },
              { name: 'Planilha', key: 'planilha', teal: false },
              { name: 'Papel', key: 'papel', teal: false },
              { name: 'WhatsApp', key: 'whatsapp', teal: false },
              { name: 'App de fotos', key: 'app', teal: false },
            ] as const).map((tool) => (
              <div
                key={tool.name}
                className={`rounded-2xl border p-5 ${tool.teal ? 'border-teal-200 bg-teal-50/40' : 'border-gray-100 bg-gray-50/50'}`}
              >
                <p className={`font-extrabold text-base mb-4 ${tool.teal ? 'text-teal-700' : 'text-gray-700'}`}>
                  {tool.name}
                </p>
                <ul className="space-y-2.5">
                  {rows.map((row) => {
                    const val = row[tool.key]
                    return (
                      <li key={row.label} className="flex items-center justify-between gap-3">
                        <span className="text-gray-600 text-sm">{row.label}</span>
                        <span className={`text-sm shrink-0 ${cellStyle(val)}`}>{val}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
            <p className="text-xs text-gray-400">
              Parcial = possível com configuração manual, mas sem suporte nativo para o fluxo estético.
            </p>
          </div>

          <Divider />

          {/* Lume vs Planilha */}
          <section className="mb-12">
            <H2>Lume vs Planilha: quando a planilha não é suficiente</H2>
            <Prose>
              <p>
                A planilha é a ferramenta mais usada por esteticistas que querem sair do papel sem
                investir em software. Ela funciona bem para texto e números: nome do cliente, data
                da sessão, produto usado, valor cobrado. Planilhas do Google ou Excel são gratuitas,
                acessíveis e qualquer pessoa consegue montar uma em poucos minutos.
              </p>
              <p>
                O problema começa quando o profissional precisa vincular fotos ao cliente. Uma planilha
                não tem campo nativo para foto — a alternativa é criar uma pasta no Google Drive e
                nomear manualmente cada imagem com o nome do cliente e a data. Com dez clientes isso
                ainda funciona. Com cem clientes, a organização começa a desmoronar: fotos com nomes
                errados, sessões difíceis de localizar, nenhuma visão de histórico em um lugar só.
                Não existe câmera ghost integrada, então as fotos saem em ângulos diferentes a cada
                sessão, tornando qualquer comparação antes e depois pouco confiável.
              </p>
              <p>
                Para profissionais que fazem botox e filler, a limitação é ainda mais clara. Uma
                planilha pode registrar "botox no masseter — 40 UI" como texto, mas não valida
                campos, não calcula totais automaticamente, não exibe 13 regiões anatômicas e não
                vincula o lote de forma estruturada ao histórico da sessão. Em uma auditoria ou em
                caso de intercorrência, uma planilha preenchida manualmente oferece menos segurança
                jurídica do que um prontuário digital com timestamps auditáveis.
              </p>
              <p>
                A planilha ainda faz sentido para controle financeiro e fluxo de caixa — o Lume
                não registra valores de sessão nem emite relatórios financeiros, e não pretende.
                Já o agendamento de clientes, que antes exigia uma planilha ou app à parte, o Lume
                resolve nativamente: cada cliente tem sua agenda com visão de semana e mês,
                vinculada ao catálogo de serviços (nome, duração, preço) e ao prontuário da sessão.
                Muitos profissionais usam os dois: planilha para o financeiro, Lume para agenda,
                histórico clínico e fotográfico.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Lume vs Papel */}
          <section className="mb-12">
            <H2>Lume vs Prontuário em papel: o problema da rastreabilidade</H2>
            <Prose>
              <p>
                O prontuário em papel é a forma mais antiga de documentação clínica e ainda é
                amplamente usada. Em consultórios e clínicas menores, uma ficha física por cliente
                cumpre a função básica: registra o que foi feito, quando e com qual produto. Para
                profissionais que começaram a carreira antes dos aplicativos, é o sistema que
                conhecem e no qual confiam.
              </p>
              <p>
                O papel tem três limitações estruturais que se tornam críticas à medida que o
                negócio cresce. A primeira é a ausência de busca: encontrar o histórico de um
                cliente específico exige percorrer fisicamente um arquivo de fichas. A segunda é a
                ausência de backup: um incêndio, uma enchente ou simplesmente uma pasta extraviada
                apagam anos de histórico clínico sem possibilidade de recuperação. A terceira é a
                ausência de fotos vinculadas: o prontuário em papel registra palavras, não imagens,
                e a documentação fotográfica de cada sessão precisa ser mantida em um lugar
                separado — quando existe.
              </p>
              <p>
                Para fins jurídicos, a questão se torna mais sensível ainda. Um prontuário digital
                com timestamp registrado no servidor tem data e hora verificáveis e auditáveis.
                Um prontuário em papel pode ser preenchido retroativamente sem deixar rastro. Em
                um processo judicial ou num conselho profissional, a rastreabilidade do prontuário
                digital oferece uma camada extra de proteção que o papel simplesmente não tem.
              </p>
              <p>
                O Lume mantém o histórico completo de todos os clientes acessível de qualquer
                dispositivo, com os dados armazenados na nuvem. Trocar de celular, formatar o
                aparelho, ou simplesmente abrir o app num tablet em outra sala — o histórico está
                lá, intacto e pesquisável.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Lume vs WhatsApp */}
          <section className="mb-12">
            <H2>Lume vs WhatsApp: fotos sem contexto clínico</H2>
            <Prose>
              <p>
                O WhatsApp é provavelmente o lugar onde a maioria dos profissionais tem mais fotos
                de clientes armazenadas — não por escolha, mas por conveniência. O cliente manda
                uma foto pelo WhatsApp, o profissional manda o antes e depois pelo WhatsApp, as
                combinações de retorno acontecem pelo WhatsApp. É natural que a ferramenta de
                comunicação acabe sendo usada também como repositório de imagens.
              </p>
              <p>
                O problema é estrutural. O WhatsApp não organiza fotos por cliente — elas ficam
                misturadas no histórico de conversa com cada pessoa. Encontrar a foto de uma sessão
                específica de seis meses atrás exige rolar manualmente a conversa até localizar.
                Não existe câmera ghost, não existe ficha clínica, não existe nenhum contexto
                clínico vinculado à imagem. Se o celular é trocado sem backup ou a conversa é
                apagada, as fotos somem junto.
              </p>
              <p>
                Além da organização, há um problema de adequação à LGPD. Fotos clínicas são dados
                sensíveis de saúde. O WhatsApp é um aplicativo de mensagens generalista, sem
                controles específicos para dados clínicos, sem garantias contratuais de
                confidencialidade para uso profissional e sem mecanismo de exclusão seletiva por
                paciente. Manter registros clínicos de pacientes num aplicativo de mensagens não
                é uma prática adequada à lei.
              </p>
              <p>
                O WhatsApp continua sendo a melhor ferramenta para o que foi criado: comunicação
                com o cliente para confirmar retorno, enviar o antes e depois finalizado, responder
                dúvidas. Para isso, ele é insubstituível. O Lume não compete com essa função —
                compete com o uso do WhatsApp como prontuário, que nunca foi para o que ele
                foi feito.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Lume vs Apps genéricos */}
          <section className="mb-12">
            <H2>Lume vs apps de galeria e edição de fotos</H2>
            <Prose>
              <p>
                Alguns profissionais usam aplicativos como Google Fotos, Samsung Gallery ou álbuns
                organizados por cliente para gerenciar as fotos. Outros usam o Canva para montar
                comparativos antes e depois. São soluções criativas para um problema real, mas que
                exigem trabalho manual considerável e não foram pensadas para o fluxo clínico
                de estética.
              </p>
              <p>
                Um app de galeria organiza fotos, mas não tem câmera ghost. Isso significa que
                cada foto é tirada livremente, sem guia de alinhamento com a sessão anterior.
                O resultado é que, com o tempo, o histórico fotográfico de um mesmo cliente
                acumula fotos em ângulos diferentes, com iluminações diferentes, tiradas de
                distâncias diferentes — tornando qualquer comparação visual pouco confiável.
                Gerar um antes e depois convincente a partir de fotos inconsistentes exige
                trabalho de edição que consome tempo.
              </p>
              <p>
                O Canva e apps similares de edição resolvem a parte do design, mas não a parte
                do fluxo. O profissional ainda precisa ir ao álbum de fotos, selecionar as imagens
                corretas, abrir o Canva, montar o layout, adicionar a logo e exportar — tudo isso
                como etapas separadas em aplicativos diferentes. O Lume faz tudo isso dentro de um
                único fluxo, partindo diretamente do perfil do cliente, com as fotos já organizadas
                e o layout configurado com as preferências salvas da última vez.
              </p>
              <p>
                A diferença fundamental é que o Lume foi construído especificamente para o fluxo
                de trabalho de esteticistas — do cadastro do cliente até o compartilhamento do
                antes e depois. Cada funcionalidade existe porque um profissional de estética
                precisava dela, não porque é um recurso genérico adaptado.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Quando o Lume é a escolha certa */}
          <section className="mb-12">
            <H2>Quando o Lume é a escolha certa</H2>
            <Prose>
              <p>
                O Lume foi desenvolvido para profissionais que precisam de mais do que uma lista
                de contatos e uma pasta de fotos. Não é para todos — e está tudo bem. Mas há
                perfis específicos para os quais ele resolve um problema real que nenhuma outra
                ferramenta genérica resolve bem:
              </p>
            </Prose>
            <ul className="mt-5 space-y-4">
              {[
                {
                  title: 'Profissional que trabalha com botox e filler',
                  desc: 'Precisa registrar marca, lote, diluição e regiões anatômicas com dosagem em UI ou ml. A rastreabilidade clínica é obrigatória — não opcional.',
                },
                {
                  title: 'Profissional que publica antes e depois nas redes sociais',
                  desc: 'Precisa de fotos consistentes e de um fluxo rápido para gerar e exportar comparativos com logo. Tempo é dinheiro — o Lume elimina a edição manual.',
                },
                {
                  title: 'Clínica com histórico crescente de clientes',
                  desc: 'Quando o volume passa de dezenas para centenas de clientes, a busca rápida, o histórico organizado e o acesso na nuvem deixam de ser conforto e viram necessidade.',
                },
                {
                  title: 'Profissional que quer segurança jurídica',
                  desc: 'Um prontuário digital com timestamp, registro de lote e histórico auditável é a diferença entre ter e não ter documentação em caso de processo ou fiscalização.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3 items-start">
                  <span className="mt-1 w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-600 text-[9px] font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Divider />

          {/* Quando outras ferramentas complementam */}
          <section className="mb-12">
            <H2>Quando outras ferramentas complementam o Lume</H2>
            <Prose>
              <p>
                O Lume é um prontuário visual e clínico com agenda e catálogo de serviços
                integrados. O que ele não é: um controle financeiro completo e um app de
                comunicação. Essas são funções que outras ferramentas fazem bem e que continuam
                sendo necessárias ao lado do Lume.
              </p>
              <p>
                A planilha ou um app de controle financeiro ainda são a melhor forma de acompanhar
                faturamento, comissões e fluxo de caixa detalhado. O Lume registra o preço de cada
                serviço no catálogo, mas não emite relatórios financeiros nem substitui um sistema
                de gestão contábil. Para esse controle, uma planilha bem configurada ou um app como
                Notion, Conta Azul ou até uma planilha simples do Google Sheets continua sendo a
                ferramenta certa.
              </p>
              <p>
                Para agendamento, o Lume já resolve nativamente: cada cliente pode ser agendado
                diretamente no app, com visão de semana e mês, vinculado ao serviço (nome, cor,
                duração e preço) e à sessão que será registrada no prontuário. Quem precisa de
                confirmação automática por SMS/WhatsApp ou de agenda compartilhada entre múltiplos
                profissionais de uma clínica grande ainda pode preferir um sistema dedicado como
                Google Agenda ou Calendly — mas para o profissional autônomo ou pequena clínica,
                agenda e prontuário já funcionam juntos dentro do Lume.
              </p>
              <p>
                O WhatsApp continua sendo insubstituível para comunicação com o cliente: confirmar
                horário, enviar o antes e depois finalizado, responder dúvidas pós-procedimento.
                O que o Lume resolve é o uso do WhatsApp como repositório clínico — uma função
                para a qual ele nunca foi desenhado.
              </p>
            </Prose>
          </section>

          {/* CTA */}
          <div className="bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Experimente grátis
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
              Baixe o Lume gratuitamente
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-xs mx-auto">
              Prontuário visual e clínico para esteticistas, médicos estetas e todos que fazem
              harmonização facial.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}
