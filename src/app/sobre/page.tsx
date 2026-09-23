import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Sobre o Lume — Quem está por trás do app',
  description:
    'O Lume é feito por Lívia Carolina Lima, em Belo Horizonte. Conheça a história, a missão e os números do app de prontuário visual para profissionais de estética.',
  alternates: {
    canonical: 'https://brlume.app/sobre',
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre o Lume',
  url: 'https://brlume.app/sobre',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'Lume',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    url: 'https://brlume.app',
    founder: {
      '@type': 'Person',
      name: 'Lívia Carolina Lima',
      jobTitle: 'Fundadora e desenvolvedora',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
    },
    dateCreated: '2026-04',
  },
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

const STATS = [
  { value: '600+', label: 'Downloads nas lojas' },
  { value: '403', label: 'Clientes ativos' },
  { value: '2.276', label: 'Procedimentos cadastrados' },
  { value: '723', label: 'Pacientes registrados' },
  { value: '326', label: 'Anamneses preenchidas' },
]

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Sobre
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Quem está por trás do Lume
            </h1>
            <Prose>
              <p>
                O Lume é desenvolvido por <strong>Lívia Carolina Lima</strong>, em Belo Horizonte (MG),
                como projeto de pessoa física — sem empresa nem investimento externo por trás. É um
                app feito, mantido e atualizado por uma única pessoa, o que significa decisões
                rápidas e contato direto com quem constrói o produto.
              </p>
            </Prose>
          </div>

          {/* Por que existe */}
          <section className="mb-12">
            <H2>Por que o Lume existe</H2>
            <Prose>
              <p>
                A ideia do Lume nasceu de uma observação simples: profissionais de estética que
                trabalham sozinhos ou em clínicas pequenas — esteticistas, médicos estetas,
                dermatologistas, biomédicos — não tinham uma solução 100% mobile que resolvesse a
                gestão da clínica de ponta a ponta. O que existia era um quebra-cabeça de
                ferramentas soltas: fotos na galeria do celular ou em pastas do WhatsApp, ficha
                clínica em papel ou planilha, agenda em outro app, anamnese impressa. Cada pedaço
                do fluxo de atendimento vivia num lugar diferente, e nada conversava entre si.
              </p>
              <p>
                O Lume foi criado para unir tudo isso num único aplicativo pensado desde o início
                para celular: câmera ghost para fotos comparáveis de verdade, ficha clínica de
                botox e filler com regiões anatômicas pré-cadastradas, anamnese digital com
                assinatura, agenda com catálogo de serviços, e geração de antes e depois prontos
                para postar. A meta não é adicionar mais uma ferramenta à pilha do profissional —
                é substituir a pilha inteira por um app só.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Missão */}
          <section className="mb-12">
            <H2>Missão</H2>
            <Prose>
              <p>
                Ser a solução 100% mobile de gestão de clínica para o profissional autônomo de
                estética — do primeiro cadastro de cliente ao registro clínico mais detalhado —
                sem exigir computador, sem exigir planilha, sem exigir treinamento.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Linha do tempo */}
          <section className="mb-12">
            <H2>Linha do tempo</H2>
            <Prose>
              <p>
                O Lume foi lançado em <strong>abril de 2026</strong>, disponível para iOS na App
                Store e para Android na Google Play Store desde o lançamento. O app está atualmente
                em <strong>período de beta</strong>: todos os usuários têm acesso ao plano Lume Pro
                sem custo enquanto o produto amadurece com o uso real de profissionais de estética.
              </p>
            </Prose>
          </section>

          <Divider />

          {/* Números */}
          <section className="mb-12">
            <H2>O Lume em números</H2>
            <p className="text-gray-400 text-sm mb-6">
              Atualizado em setembro de 2026 — esses números crescem a cada semana.
            </p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-5 text-center">
                  <dt className="text-2xl font-extrabold text-teal-700">{s.value}</dt>
                  <dd className="mt-1 text-gray-500 text-xs leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Divider />

          {/* Contato */}
          <section className="mb-12">
            <H2>Contato</H2>
            <Prose>
              <p>
                Dúvidas, sugestões ou parcerias podem ser enviadas diretamente para{' '}
                <a href="mailto:lvcarolina42@gmail.com" className="text-teal-600 font-semibold hover:underline">
                  lvcarolina42@gmail.com
                </a>{' '}
                ou pelo Instagram{' '}
                <a
                  href="https://www.instagram.com/br_lume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  @br_lume
                </a>
                . Toda mensagem é respondida pessoalmente.
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

        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  )
}
