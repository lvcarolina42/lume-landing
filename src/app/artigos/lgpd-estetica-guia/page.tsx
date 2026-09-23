import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'O que a LGPD Exige de Quem Armazena Fotos e Fichas Clínicas de Estética',
  description:
    'Guia prático sobre LGPD para profissionais de estética: por que fotos e anamneses são dados sensíveis, os riscos de guardar isso no WhatsApp ou na galeria do celular, e o que muda com um app conforme.',
  alternates: {
    canonical: 'https://brlume.app/artigos/lgpd-estetica-guia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'O que a LGPD Exige de Quem Armazena Fotos e Fichas Clínicas de Estética',
  description:
    'Guia prático e informativo sobre LGPD aplicada à rotina de profissionais de estética que fotografam e documentam clientes.',
  author: { '@type': 'Person', name: 'Lívia Carolina Lima' },
  publisher: { '@type': 'Organization', name: 'Lume', url: 'https://brlume.app' },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/lgpd-estetica-guia',
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
      name: 'Foto de antes e depois é considerada dado sensível pela LGPD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Fotos vinculadas a um procedimento estético ou de saúde, junto com o nome do cliente, são consideradas dados pessoais sensíveis pela LGPD, por estarem associadas à saúde do titular. Isso exige cuidado redobrado em armazenamento, acesso e consentimento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso postar antes e depois de clientes nas redes sociais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Apenas com consentimento explícito do cliente para essa finalidade específica — usar a foto internamente no prontuário e publicá-la nas redes sociais são finalidades diferentes, e a LGPD exige consentimento específico para cada uma. O ideal é ter isso documentado por escrito, não apenas combinado verbalmente.',
      },
    },
    {
      '@type': 'Question',
      name: 'Esse artigo substitui orientação jurídica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não. Este conteúdo é informativo e reflete uma leitura prática da LGPD aplicada à rotina de profissionais de estética, mas não substitui a orientação de um advogado ou do conselho profissional da sua categoria para questões específicas do seu negócio.',
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

export default function LgpdEsteticaArticle() {
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
              O que a LGPD Exige de Quem Armazena Fotos e Fichas Clínicas de Estética
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              Toda esteticista, médico esteta ou dermatologista que fotografa clientes e mantém
              registros de procedimentos lida, no dia a dia, com dados pessoais sensíveis — mesmo
              que nunca tenha parado para pensar nisso nesses termos. A Lei Geral de Proteção de
              Dados (LGPD) classifica fotos, fichas clínicas e anamneses vinculadas a um cliente como
              dados sensíveis, sujeitos a regras mais rígidas do que um cadastro comum de nome e
              telefone.
            </p>
            <p>
              Este guia explica, de forma prática, o que isso significa no dia a dia de quem
              trabalha com estética e harmonização facial. É conteúdo informativo — não substitui
              orientação jurídica especializada para o seu caso específico.
            </p>
          </Prose>

          <H2 id="dado-sensivel">Por que fotos e fichas clínicas são dados sensíveis</H2>
          <Prose>
            <p>
              A LGPD define como dado sensível qualquer informação vinculada, entre outras
              categorias, à saúde de uma pessoa. Uma foto de antes e depois de um procedimento
              estético, associada ao nome do cliente, se enquadra nessa categoria — assim como
              respostas de anamnese sobre alergias, medicamentos em uso ou condições de pele. Isso
              vale independente do porte do profissional: um esteticista autônomo que fotografa
              clientes no celular está, tecnicamente, na posição de controlador desses dados
              sensíveis perante a lei.
            </p>
          </Prose>

          <H2 id="riscos-comuns">Os riscos mais comuns na prática</H2>
          <Prose>
            <p>
              <strong>Galeria do celular:</strong> fotos de clientes misturadas com fotos pessoais,
              sem controle de acesso — qualquer pessoa que pegue o celular desbloqueado vê tudo, sem
              nenhuma camada de autenticação específica para dados de saúde.
            </p>
            <p>
              <strong>Grupos e conversas de WhatsApp:</strong> fotos e informações de anamnese
              enviadas por mensagem ficam armazenadas indefinidamente nos servidores do aplicativo de
              mensagens, sem que o profissional tenha controle real sobre exclusão, backup em outros
              dispositivos, ou quem mais tem acesso àquela conversa.
            </p>
            <p>
              <strong>Planilhas compartilhadas sem controle de acesso:</strong> planilhas na nuvem
              com link compartilhado abertamente, sem exigir login, tecnicamente permitem acesso a
              qualquer pessoa que tenha o link — mesmo que a intenção nunca tenha sido essa.
            </p>
          </Prose>

          <H2 id="direitos-titular">O que a LGPD garante ao cliente (titular dos dados)</H2>
          <Prose>
            <p>
              A lei garante ao cliente, entre outros direitos, o de saber quais dados seus estão
              armazenados, o de pedir a correção de informações incorretas, e o de solicitar a
              exclusão completa dos seus dados a qualquer momento — o que inclui fotos, fichas
              clínicas e anamneses. Um profissional que não tem como atender rapidamente a esse
              pedido, porque os dados estão espalhados entre celular, WhatsApp e planilhas, está
              exposto a um risco de conformidade real.
            </p>
          </Prose>

          <H2 id="boas-praticas">Boas práticas para reduzir o risco</H2>
          <ul className="space-y-3 text-gray-600 text-base leading-relaxed list-disc pl-5 mt-4">
            <li>
              Centralizar fotos e fichas clínicas num único sistema com autenticação obrigatória,
              em vez de espalhar entre galeria, WhatsApp e planilhas.
            </li>
            <li>
              Ter, mesmo que de forma simples, o consentimento do cliente documentado para o uso das
              fotos — inclusive uma finalidade separada para uso em redes sociais, se for o caso.
            </li>
            <li>
              Garantir que, ao encerrar o atendimento a um cliente, exista um processo real de
              exclusão dos dados, não apenas "esquecer" que aquele cadastro existe.
            </li>
            <li>
              Preferir ferramentas desenvolvidas com a LGPD em mente, em vez de adaptar ferramentas
              genéricas (como apps de mensagem ou planilhas de uso geral) para uma função de
              armazenamento de dados de saúde para a qual elas não foram desenhadas.
            </li>
          </ul>
          <Prose>
            <p>
              O Lume foi desenvolvido com esses princípios: cada profissional acessa exclusivamente
              seus próprios dados, o acesso exige autenticação, e ao encerrar a conta todos os dados
              — fotos, fichas clínicas e anamneses — são removidos permanentemente.
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
              Documentação em conformidade
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
    </>
  )
}
