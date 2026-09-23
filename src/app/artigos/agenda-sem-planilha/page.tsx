import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Como Organizar a Agenda de uma Clínica de Estética Sem Planilha',
  description:
    'Guia prático para organizar a agenda de clientes de estética sem depender de planilha ou app separado: catálogo de serviços, vínculo com o prontuário e como evitar os erros mais comuns de agendamento manual.',
  alternates: {
    canonical: 'https://brlume.app/artigos/agenda-sem-planilha',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Artigos', item: 'https://brlume.app/artigos' },
    { '@type': 'ListItem', position: 3, name: 'Agenda sem planilha', item: 'https://brlume.app/artigos/agenda-sem-planilha' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Como Organizar a Agenda de uma Clínica de Estética Sem Planilha',
  description:
    'Guia prático de agendamento para profissionais de estética: os problemas da planilha e do WhatsApp, e como agenda e catálogo de serviços integrados ao prontuário resolvem isso.',
  author: { '@type': 'Person', name: 'Lívia Carolina Lima' },
  publisher: { '@type': 'Organization', name: 'Lume', url: 'https://brlume.app' },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/agenda-sem-planilha',
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
      name: 'A agenda do Lume envia confirmação automática de horário pro cliente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hoje não — a agenda do Lume organiza os horários por cliente com visão de semana e mês, vinculada ao serviço e à sessão, mas não envia lembretes automáticos por SMS ou WhatsApp. Clínicas grandes que dependem de confirmação automática em escala podem preferir um sistema dedicado a isso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dá para agendar mais de um profissional na mesma agenda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A agenda do Lume é pensada para o profissional autônomo ou pequena clínica, organizada por conta de usuário. Para clínicas com múltiplos profissionais compartilhando uma agenda única, um sistema de gestão de clínica dedicado pode ser mais adequado.',
      },
    },
    {
      '@type': 'Question',
      name: 'O catálogo de serviços calcula o faturamento automaticamente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O catálogo de serviços do Lume registra nome, cor, duração e preço de cada serviço, o que já ajuda a padronizar o agendamento e a cobrança. O Lume não gera, porém, relatórios financeiros completos de faturamento ou comissão — para isso, uma planilha ou app financeiro dedicado continua sendo necessário.',
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

export default function AgendaSemPlanilhaArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <article className="max-w-2xl mx-auto">

          <div className="mb-4">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Guia prático
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Como Organizar a Agenda de uma Clínica de Estética Sem Planilha
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              Quase todo profissional de estética autônomo começa a agenda do mesmo jeito: uma
              planilha, o próprio WhatsApp, ou um app de calendário genérico que não tem nada a ver
              com o resto do trabalho — fotos, ficha clínica, anamnese. O problema não é falta de
              organização, é que essas ferramentas vivem isoladas. O horário marcado não sabe qual
              serviço foi vendido, o serviço não sabe qual sessão vai ser registrada, e cada
              atualização precisa ser feita duas ou três vezes em lugares diferentes.
            </p>
            <p>
              Este guia explica os problemas mais comuns do agendamento manual em estética e como
              uma agenda integrada ao catálogo de serviços e ao prontuário resolve isso.
            </p>
          </Prose>

          <H2 id="problemas">Os problemas do agendamento manual</H2>
          <Prose>
            <p>
              <strong>Planilha:</strong> funciona para listar datas e nomes, mas não valida
              conflitos de horário automaticamente, não vincula o agendamento a um serviço com
              preço e duração padronizados, e não tem nenhuma relação com o histórico de sessões do
              cliente. Cada agendamento é uma linha isolada, sem contexto.
            </p>
            <p>
              <strong>WhatsApp:</strong> é rápido para combinar um horário, mas péssimo para manter
              organização — mensagens de confirmação se perdem na rolagem da conversa, não há visão
              de semana ou mês, e não existe nenhuma trava contra marcar dois clientes no mesmo
              horário sem perceber.
            </p>
            <p>
              <strong>App de calendário genérico</strong> (Google Agenda, por exemplo): resolve bem
              a visão de semana e mês, mas não sabe o que é um "serviço" da sua clínica — não tem
              preço, duração padrão nem vínculo com o prontuário do cliente. Cada agendamento exige
              digitar tudo manualmente, sem reaproveitar nada do cadastro já feito.
            </p>
          </Prose>

          <H2 id="solucao">Agenda + catálogo de serviços + prontuário, juntos</H2>
          <Prose>
            <p>
              A diferença de ter agenda, catálogo de serviços e prontuário no mesmo lugar é que cada
              agendamento já nasce com contexto. No Lume, o profissional cadastra o catálogo de
              serviços uma única vez — nome, cor, duração e preço de cada procedimento oferecido —
              e, a partir daí, agendar um cliente significa apenas escolher o serviço, e a duração e
              a cor já vêm preenchidas automaticamente na agenda.
            </p>
            <p>
              A agenda tem visão de semana e de mês, permitindo enxergar rapidamente os horários
              livres e ocupados. E porque o agendamento está vinculado ao mesmo cliente do
              prontuário, o profissional pode abrir a sessão agendada e já ir direto para o registro
              da foto, da ficha clínica ou da anamnese daquele atendimento — sem trocar de app, sem
              procurar o nome do cliente de novo em outro lugar.
            </p>
          </Prose>

          <H2 id="dicas">Como configurar bem o catálogo de serviços</H2>
          <ul className="space-y-3 text-gray-600 text-base leading-relaxed list-disc pl-5 mt-4">
            <li>
              <strong>Use cores para diferenciar categorias de serviço.</strong> Procedimentos
              injetáveis, sessões de avaliação e retornos ficam visualmente distintos na agenda de
              semana/mês só de bater o olho.
            </li>
            <li>
              <strong>Padronize a duração de cada serviço com folga.</strong> Uma sessão de botox
              que costuma levar 30 minutos, mas às vezes 40, é mais segura cadastrada com 40 minutos
              — evita que o próximo agendamento comece atrasado.
            </li>
            <li>
              <strong>Mantenha o preço atualizado no catálogo.</strong> Mesmo sem gerar relatório
              financeiro automático, ter o preço certo no serviço evita divergência entre o que foi
              combinado e o que foi cobrado.
            </li>
          </ul>

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
              Organize sua agenda
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
