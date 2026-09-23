import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Anamnese Digital vs Papel: o que Muda na Prática Clínica',
  description:
    'Comparação prática entre anamnese em papel e anamnese digital para esteticistas e médicos estetas: segurança jurídica, organização, tempo de preenchimento e o que considerar antes de migrar.',
  alternates: {
    canonical: 'https://brlume.app/artigos/anamnese-digital-vs-papel',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Artigos', item: 'https://brlume.app/artigos' },
    { '@type': 'ListItem', position: 3, name: 'Anamnese digital vs papel', item: 'https://brlume.app/artigos/anamnese-digital-vs-papel' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Anamnese Digital vs Papel: o que Muda na Prática Clínica',
  description:
    'Comparação entre anamnese em papel e digital para profissionais de estética, cobrindo segurança jurídica, organização e processo de preenchimento.',
  author: { '@type': 'Person', name: 'Lívia Carolina Lima' },
  publisher: { '@type': 'Organization', name: 'Lume', url: 'https://brlume.app' },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/anamnese-digital-vs-papel',
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
      name: 'Assinatura digital de anamnese tem validade jurídica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A assinatura feita com o dedo diretamente na tela, vinculada a um registro com data, hora e identificação do cliente, é amplamente aceita como evidência de consentimento na prática de profissionais de estética. Em caso de dúvida sobre exigências específicas da sua categoria profissional, vale confirmar com o conselho de classe correspondente.',
      },
    },
    {
      '@type': 'Question',
      name: 'A anamnese digital pode ser preenchida antes da cliente chegar à clínica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Um dos principais ganhos da anamnese digital é poder ser enviada por um link, via WhatsApp, para a cliente preencher antes da sessão, no próprio celular. O profissional revisa as respostas com antecedência, o que agiliza o atendimento presencial.',
      },
    },
    {
      '@type': 'Question',
      name: 'É preciso perguntar as mesmas 24 perguntas para todo tipo de procedimento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não necessariamente. No Lume, as 24 perguntas padrão da anamnese digital podem ser editadas, removidas ou complementadas conforme a especialidade e o tipo de procedimento — um formulário para botox e filler pode ter perguntas diferentes de um para depilação, por exemplo.',
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

export default function AnamneseDigitalVsPapelArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <article className="max-w-2xl mx-auto">

          <div className="mb-4">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Comparação
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Anamnese Digital vs Papel: o que Muda na Prática Clínica
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              A anamnese em papel ainda é a forma mais comum de coletar histórico de saúde antes de
              um procedimento estético — é o que a maioria dos profissionais aprendeu a usar e o que
              parece mais simples à primeira vista. Mas na prática do dia a dia, o papel esconde
              custos que só aparecem depois: fichas que se perdem, letra difícil de ler, respostas
              que ficam soltas sem vínculo claro com o histórico do cliente.
            </p>
            <p>
              Este guia compara anamnese em papel e anamnese digital nos pontos que mais importam
              para quem trabalha com estética e harmonização facial.
            </p>
          </Prose>

          <H2 id="organizacao">Organização e busca</H2>
          <Prose>
            <p>
              Uma pilha de fichas de papel cresce rápido e, depois de algumas dezenas de clientes,
              encontrar uma anamnese específica significa folhear fisicamente até achar o nome
              certo. Na anamnese digital, a busca é instantânea — o histórico completo de cada
              cliente, anamneses incluídas, fica no mesmo perfil, acessível em segundos.
            </p>
          </Prose>

          <H2 id="seguranca-juridica">Segurança jurídica</H2>
          <Prose>
            <p>
              Uma ficha de papel pode ser perdida, molhada, rasgada ou simplesmente arquivada no
              lugar errado — e, quando isso acontece, o registro de consentimento e de histórico de
              saúde do cliente desaparece com ela. A anamnese digital, armazenada na nuvem, não tem
              esse risco físico, e mantém timestamp de quando foi preenchida e assinada, o que
              reforça a rastreabilidade em caso de necessidade de consulta futura.
            </p>
          </Prose>

          <H2 id="processo">O processo de preenchimento</H2>
          <Prose>
            <p>
              No papel, o processo costuma ser: entregar a prancheta, esperar o preenchimento,
              revisar a letra (às vezes ilegível), e depois arquivar fisicamente ou, em alguns
              casos, digitar tudo de novo num sistema à parte — um retrabalho comum que consome
              tempo sem agregar nada.
            </p>
            <p>
              Na anamnese digital, existem dois caminhos: presencial, entregando o tablet ou celular
              da clínica já com o formulário aberto, ou remoto, enviando um link individual pelo
              WhatsApp para a cliente preencher antes mesmo de chegar à sessão. Em ambos os casos, a
              resposta já nasce organizada, sem digitação manual posterior, com assinatura feita
              direto na tela.
            </p>
          </Prose>

          <H2 id="quando-papel-ainda-faz-sentido">Quando o papel ainda pode fazer sentido</H2>
          <Prose>
            <p>
              Para clientes com dificuldade de acesso a smartphone, ou em contextos onde a
              conectividade é um problema real na clínica, o papel ainda pode ser uma alternativa
              válida pontualmente. Mas, mesmo nesses casos, vale considerar digitalizar o registro
              depois — o ganho de organização e busca compensa esse passo extra.
            </p>
          </Prose>

          <H2 id="como-o-lume-resolve">Como o Lume resolve isso</H2>
          <Prose>
            <p>
              A anamnese digital do Lume vem com 24 perguntas clínicas padrão, totalmente editáveis,
              removíveis e reordenáveis conforme a especialidade do profissional. A cliente responde
              e assina direto na tela — presencialmente ou por um link enviado a distância — e o
              profissional revisa tudo antes da sessão, com o histórico de status (pendente, em
              andamento, concluída) sempre visível no perfil do cliente.
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
              Digitalize sua anamnese
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
