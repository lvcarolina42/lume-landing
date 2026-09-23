import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Melhor App para Esteticista em 2026: o que Avaliar Antes de Escolher',
  description:
    'Checklist prático para escolher um app de gestão de clientes de estética: quais recursos realmente importam, o que evitar, e como decidir entre as opções disponíveis.',
  alternates: {
    canonical: 'https://brlume.app/artigos/melhor-app-esteticista-2026',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Artigos', item: 'https://brlume.app/artigos' },
    { '@type': 'ListItem', position: 3, name: 'Melhor app para esteticista em 2026', item: 'https://brlume.app/artigos/melhor-app-esteticista-2026' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Melhor App para Esteticista em 2026: o que Avaliar Antes de Escolher',
  description:
    'Checklist prático de critérios para escolher um app de gestão de clientes de estética em 2026.',
  author: { '@type': 'Person', name: 'Lívia Carolina Lima' },
  publisher: { '@type': 'Organization', name: 'Lume', url: 'https://brlume.app' },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/melhor-app-esteticista-2026',
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
      name: 'Preciso pagar para usar um bom app de gestão de estética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não necessariamente. Existem opções gratuitas com recursos completos, como o Lume, que cobra apenas quando o volume de clientes ultrapassa um limite generoso. Antes de pagar por um plano, vale testar a versão gratuita de algumas opções e ver qual realmente resolve o seu fluxo de trabalho.',
      },
    },
    {
      '@type': 'Question',
      name: 'App de gestão de estética substitui um sistema de agendamento online com confirmação automática?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Depende do app. Alguns, como o Lume, têm agenda integrada ao prontuário, mas sem confirmação automática por SMS/WhatsApp. Se essa automação for essencial para o seu volume de atendimento, vale conferir se o app escolhido oferece isso ou se você vai precisar complementar com outra ferramenta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vale a pena migrar de um app genérico de fotos para um app específico de estética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Na maioria dos casos, sim — um app específico de estética entende o que é uma "região anatômica de botox" ou uma "anamnese", enquanto um app genérico de fotos ou notas trata tudo como arquivo solto, sem estrutura clínica nem rastreabilidade.',
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

const CRITERIA = [
  {
    title: 'Fotos com ângulo consistente',
    body:
      'O recurso mais fácil de subestimar e o mais fácil de sentir falta depois. Sem alguma forma de manter o mesmo ângulo entre sessões — seja câmera ghost, seja outro mecanismo — o antes e depois final nunca vai ser totalmente confiável.',
  },
  {
    title: 'Ficha clínica estruturada, não texto livre',
    body:
      'Um campo de "observações" em texto livre não substitui campos estruturados de marca, lote, diluição e região anatômica com cálculo automático de dosagem. Estrutura é o que permite buscar, auditar e comparar sessões depois.',
  },
  {
    title: 'Anamnese digital com assinatura',
    body:
      'Verifique se o app permite personalizar as perguntas conforme sua especialidade, e se a assinatura do termo de responsabilidade fica vinculada e datada — não é só "ter um formulário", é ter um formulário que gera registro válido.',
  },
  {
    title: 'Agenda vinculada ao prontuário (não um app à parte)',
    body:
      'Um agendamento que não conversa com o histórico do cliente obriga a abrir dois apps pra fazer uma coisa só. Verifique se dá pra ir do horário agendado direto pro registro da sessão.',
  },
  {
    title: 'Conformidade com a LGPD',
    body:
      'Fotos e fichas clínicas são dados sensíveis. Confirme que o app exige autenticação, criptografa os dados armazenados e tem um processo real de exclusão de dados caso você encerre a conta.',
  },
  {
    title: 'Funciona offline ou com conexão instável',
    body:
      'Consultórios e salões nem sempre têm wifi confiável. Um app que trava sem internet no meio de uma sessão é um problema real, não um detalhe.',
  },
  {
    title: 'Preço e limites do plano gratuito',
    body:
      'Verifique não só se existe plano gratuito, mas o que ele realmente limita — número de clientes, número de sessões, ou recursos bloqueados. Alguns apps escondem o prontuário clínico completo atrás do plano pago.',
  },
]

export default function MelhorAppEsteticista2026Article() {
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
              Melhor App para Esteticista em 2026: o que Avaliar Antes de Escolher
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              Existem hoje dezenas de aplicativos que prometem "organizar" a rotina de um
              profissional de estética — de apps genéricos de agenda a planilhas disfarçadas de
              CRM. O problema é que nem todo app resolve o mesmo tipo de necessidade, e escolher
              errado custa tempo de migração depois. Este guia não é uma lista de apps específicos,
              é um checklist de critérios pra você avaliar qualquer opção que estiver considerando
              — inclusive o Lume.
            </p>
          </Prose>

          <H2 id="criterios">Sete critérios que realmente importam</H2>
          <div className="divide-y divide-gray-100 border-t border-gray-100 mt-6">
            {CRITERIA.map((c) => (
              <div key={c.title} className="py-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">{c.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <H2 id="sinais-de-alerta">Sinais de que um app não foi pensado para estética</H2>
          <Prose>
            <p>
              Alguns sinais indicam que um app foi adaptado de outra finalidade (agenda genérica,
              CRM de vendas, galeria de fotos) em vez de construído para o fluxo clínico de
              estética: não ter campo específico para lote de produto, não separar "cliente" de
              "sessão" de forma clara, não ter nenhuma forma de manter consistência fotográfica
              entre visitas, ou tratar anamnese como um simples formulário de contato.
            </p>
          </Prose>

          <H2 id="onde-o-lume-entra">Onde o Lume se encaixa</H2>
          <Prose>
            <p>
              O Lume foi construído especificamente para esse fluxo: câmera ghost pra consistência
              fotográfica, ficha clínica com 13 regiões de botox e 11 de filler pré-cadastradas,
              anamnese digital editável com assinatura, agenda vinculada ao catálogo de serviços, e
              conformidade com a LGPD desde o desenho do produto. Para uma comparação detalhada com
              planilha, papel, WhatsApp e apps genéricos, veja também{' '}
              <a href="/alternativas" className="text-teal-600 font-semibold hover:underline">
                Lume vs as alternativas
              </a>.
            </p>
          </Prose>

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
              Teste o Lume gratuitamente
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
