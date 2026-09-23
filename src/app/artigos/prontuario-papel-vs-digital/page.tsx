import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Prontuário em Papel vs Digital: Vale a Pena Migrar em 2026?',
  description:
    'Guia prático para decidir se vale a pena migrar do prontuário em papel para um sistema digital: custos, riscos, passo a passo de migração e quando o papel ainda pode fazer sentido.',
  alternates: {
    canonical: 'https://brlume.app/artigos/prontuario-papel-vs-digital',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Artigos', item: 'https://brlume.app/artigos' },
    { '@type': 'ListItem', position: 3, name: 'Prontuário em papel vs digital', item: 'https://brlume.app/artigos/prontuario-papel-vs-digital' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Prontuário em Papel vs Digital: Vale a Pena Migrar em 2026?',
  description:
    'Guia prático de decisão e migração do prontuário em papel para um sistema digital de gestão de clientes de estética.',
  author: { '@type': 'Person', name: 'Lívia Carolina Lima' },
  publisher: { '@type': 'Organization', name: 'Lume', url: 'https://brlume.app' },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/prontuario-papel-vs-digital',
  about: {
    '@type': 'MobileApplication',
    name: 'Lume',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'HealthApplication',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'É obrigatório por lei digitalizar o prontuário de estética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não existe uma obrigatoriedade geral de digitalização para a maioria dos procedimentos estéticos não médicos. Mas a LGPD se aplica independente do meio (papel ou digital), e alguns conselhos profissionais têm exigências específicas de documentação — vale confirmar com o conselho da sua categoria.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que fazer com os prontuários antigos em papel ao migrar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O mais comum é manter os prontuários antigos fisicamente arquivados pelo prazo de guarda recomendado (varia por conselho profissional) e começar os registros novos direto no sistema digital, sem necessariamente digitalizar retroativamente todo o histórico — a menos que algum cliente específico precise de continuidade imediata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Migrar para digital significa perder a assinatura física do cliente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não — no Lume, por exemplo, a assinatura é feita com o dedo diretamente na tela, vinculada a um registro com data e hora. Ela substitui a assinatura em papel mantendo a mesma função de evidenciar consentimento.',
      },
    },
  ],
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-extrabold text-gray-900 mt-12 mb-5 leading-tight scroll-mt-24">
      {children}
    </h2>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-gray-600 text-base leading-relaxed">{children}</div>
}

export default function ProntuarioPapelVsDigitalArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <article className="max-w-2xl mx-auto">

          <div className="mb-4">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Guia de decisão
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Prontuário em Papel vs Digital: Vale a Pena Migrar em 2026?
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              O prontuário em papel funcionou por décadas e, para muitos profissionais, ainda
              funciona hoje — mas "funcionar" e "ser a melhor opção" são coisas diferentes. Este
              guia não parte do princípio de que migrar é sempre a resposta certa: compara os dois
              modelos nos pontos que mais pesam na decisão, e termina com um passo a passo prático
              para quem decidir migrar.
            </p>
          </Prose>

          <H2 id="custos-ocultos">Os custos ocultos do papel</H2>
          <Prose>
            <p>
              O papel parece "grátis" porque não tem mensalidade, mas tem custos que raramente
              entram na conta: tempo gasto procurando uma ficha específica numa pilha crescente,
              risco de perda física (água, incêndio, extravio), impossibilidade de buscar por
              cliente ou data instantaneamente, e o retrabalho de digitar tudo de novo caso algum
              dia decida migrar — quanto mais tempo espera, maior a pilha pra converter depois.
            </p>
          </Prose>

          <H2 id="custos-digital">O que o digital exige em troca</H2>
          <Prose>
            <p>
              Migrar para digital não é só benefício sem custo. Exige adaptar a rotina — ter o
              celular ou tablet à mão durante o atendimento, uma curva de aprendizado inicial do
              sistema escolhido, e depender de conectividade em algum grau (mesmo apps que
              funcionam offline geralmente precisam sincronizar em algum momento). Para
              profissionais muito resistentes a tecnologia, essa curva de adaptação é real e vale
              ser levada a sério, não minimizada.
            </p>
          </Prose>

          <H2 id="quando-migrar-vale">Quando migrar claramente vale a pena</H2>
          <ul className="space-y-3 text-gray-600 text-base leading-relaxed list-disc pl-5 mt-4">
            <li>
              Quando o volume de clientes já passa de algumas dezenas e localizar uma ficha
              específica virou um problema recorrente.
            </li>
            <li>
              Quando o trabalho envolve botox, filler ou outros procedimentos que exigem
              rastreabilidade de lote — documentação em papel dificulta correlacionar rapidamente
              em caso de intercorrência.
            </li>
            <li>
              Quando fotos de antes e depois já fazem parte da rotina — papel simplesmente não
              comporta fotos vinculadas de forma organizada.
            </li>
            <li>
              Quando mais de um profissional ou colaborador precisa acessar o mesmo histórico de
              cliente, o que em papel significa fichas físicas circulando ou sendo copiadas.
            </li>
          </ul>

          <H2 id="quando-papel-ainda-funciona">Quando o papel ainda pode ser suficiente</H2>
          <Prose>
            <p>
              Para quem está começando, com poucos clientes e procedimentos simples, sem uso de
              produtos injetáveis nem necessidade de comparação fotográfica sistemática, o papel
              pode não ser o gargalo mais urgente do negócio — vale priorizar outras coisas antes
              de migrar. Migrar por migrar, sem uma necessidade real puxando a mudança, tende a
              virar mais uma ferramenta abandonada depois de duas semanas.
            </p>
          </Prose>

          <H2 id="passo-a-passo">Passo a passo prático de migração</H2>
          <ol className="space-y-4 text-gray-600 text-base leading-relaxed list-decimal pl-5 mt-4">
            <li>
              <strong>Não tente digitalizar todo o histórico de uma vez.</strong> Comece os
              registros novos direto no sistema digital, a partir de hoje. Prontuários antigos
              ficam fisicamente arquivados pelo prazo recomendado — não é necessário digitar tudo
              retroativamente.
            </li>
            <li>
              <strong>Configure o essencial antes do primeiro atendimento digital:</strong>{' '}
              cadastre o catálogo de serviços, personalize as perguntas de anamnese conforme sua
              especialidade, e teste o fluxo completo de foto + ficha clínica com um cliente
              fictício antes de usar de verdade.
            </li>
            <li>
              <strong>Migre um cliente por vez, quando ele retornar.</strong> Na próxima visita de
              cada cliente já ativo, cadastre o perfil dele no sistema digital e comece a registrar
              a partir dali — não é preciso migrar a base inteira de uma vez.
            </li>
            <li>
              <strong>Mantenha o hábito nas primeiras semanas.</strong> A resistência maior costuma
              ser nas primeiras sessões; depois de duas ou três semanas, o registro digital vira
              parte natural do atendimento.
            </li>
          </ol>

          <H2 id="faq">Perguntas frequentes</H2>
          <div className="divide-y divide-gray-100 border-t border-gray-100 mt-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="py-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Comece a migração hoje
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
              Baixe o Lume gratuitamente
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-xs mx-auto">
              iOS e Android. Sem cartão, sem burocracia. Comece a registrar agora.
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

        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
