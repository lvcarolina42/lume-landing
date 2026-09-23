import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Guia Completo das 13 Regiões Anatômicas de Aplicação de Botox',
  description:
    'Guia detalhado das 13 regiões anatômicas de aplicação de toxina botulínica: frontal, prócero, corrugador, orbicular, nasalis, mentalis, platisma, masseter, DAO, DLI e LLSAN — função de cada músculo e indicação estética.',
  alternates: {
    canonical: 'https://brlume.app/artigos/guia-regioes-botox',
  },
}

const REGIONS = [
  {
    name: 'Frontal',
    body:
      'O músculo frontal ocupa toda a testa e é responsável por levantar as sobrancelhas e criar as rugas horizontais visíveis ao franzir a testa ou demonstrar surpresa. É uma das regiões mais tratadas em harmonização facial, tanto para suavizar essas linhas quanto para ajustar sutilmente a posição da sobrancelha. Exige dosagem cuidadosa: o relaxamento excessivo pode causar queda da sobrancelha (efeito "capacete").',
  },
  {
    name: 'Prócero',
    body:
      'Localizado entre as sobrancelhas, na raiz do nariz, o prócero é o músculo que puxa a pele para baixo ao franzir o rosto, contribuindo para as linhas horizontais na base do nariz. É tratado quase sempre em conjunto com o corrugador, já que os dois músculos atuam juntos na expressão de raiva ou concentração.',
  },
  {
    name: 'Corrugador',
    body:
      'O corrugador do supercílio fica entre as sobrancelhas e é o principal responsável pelas rugas verticais glabelares — popularmente chamadas de "linhas de expressão" ou "onze". É uma das aplicações mais procuradas em toxina botulínica, por suavizar uma expressão frequentemente associada a raiva ou cansaço mesmo em repouso.',
  },
  {
    name: 'Orbicular Superior',
    body:
      'Parte do músculo orbicular do olho localizada na pálpebra superior. O tratamento nessa região é pontual e superficial, usado principalmente para suavizar rugas finas próximas ao canto interno do olho, sempre com dosagem baixa pela proximidade com estruturas sensíveis.',
  },
  {
    name: 'Orbicular Inferior',
    body:
      'Porção do orbicular do olho na pálpebra inferior, tratada para suavizar rugas finas abaixo do olho e, em alguns protocolos, para arredondar ligeiramente o formato do olho ao sorrir. É uma região de aplicação delicada, que exige avaliação cuidadosa da flacidez e do tônus muscular do paciente antes do procedimento.',
  },
  {
    name: 'Orbicular Lateral',
    body:
      'É a porção do orbicular do olho na lateral, responsável pelos chamados "pés de galinha" — as rugas que se formam no canto externo do olho ao sorrir. É uma das aplicações de toxina botulínica mais comuns, com resultado que costuma agradar mesmo pacientes que buscam pela primeira vez um procedimento estético.',
  },
  {
    name: 'Nasalis',
    body:
      'O nasalis contrai as asas do nariz e é ativado principalmente ao sorrir com intensidade, gerando as "bunny lines" — pequenas rugas horizontais nas laterais do nariz. Nem toda pessoa apresenta essa contração de forma visível, por isso a indicação depende de avaliação individual antes de qualquer aplicação.',
  },
  {
    name: 'Mentalis',
    body:
      'Localizado no queixo, o mentalis é responsável pela projeção do lábio inferior e, quando hiperativo, cria o aspecto de "casca de laranja" na pele do queixo ao contrair, além de contribuir para uma expressão tensa em repouso. O tratamento suaviza essa textura e relaxa a tensão constante da região.',
  },
  {
    name: 'Platisma',
    body:
      'O platisma é um músculo amplo que se estende do queixo até a base do pescoço. Quando hiperativo, forma faixas verticais visíveis no pescoço (bandas platismais) e contribui para a perda de definição do contorno mandibular. O tratamento com toxina botulínica nessa região, conhecido como "Nefertiti lift", suaviza as bandas e pode ajudar a definir a linha da mandíbula.',
  },
  {
    name: 'Masseter',
    body:
      'O masseter é o principal músculo da mastigação, localizado na lateral da mandíbula. Quando hipertrofiado — por bruxismo ou apertamento crônico —, alarga visualmente o rosto na região do maxilar inferior. A toxina botulínica no masseter tem dupla função: uso terapêutico no tratamento de bruxismo e dor na ATM, e uso estético para afinar o contorno do rosto.',
  },
  {
    name: 'DAO (Depressor do Ângulo da Boca)',
    body:
      'O DAO puxa os cantos da boca para baixo. Quando hiperativo, contribui para uma expressão de tristeza em repouso e acentua o sulco de marionete. O tratamento exige precisão para evitar assimetrias ou o relaxamento indesejado de músculos adjacentes responsáveis pelo sorriso.',
  },
  {
    name: 'DLI (Depressor do Lábio Inferior)',
    body:
      'O depressor do lábio inferior puxa o lábio inferior para baixo e para fora, participando de expressões como desdém ou tristeza. O tratamento pontual nessa região é usado em protocolos de harmonização do sorriso, geralmente combinado com ajustes em regiões vizinhas como o DAO e o mentalis.',
  },
  {
    name: 'LLSAN (Levantador do Lábio Superior e Asa do Nariz)',
    body:
      'O LLSAN é o músculo diretamente ligado ao sorriso gengival — a exposição excessiva da gengiva superior ao sorrir. A aplicação de toxina botulínica reduz temporariamente sua contração, diminuindo a exposição gengival. É uma das regiões que exige mais precisão de dosagem: o excesso de relaxamento pode comprometer a naturalidade do sorriso.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Guia Completo das 13 Regiões Anatômicas de Aplicação de Botox',
  description:
    'Guia detalhado das 13 regiões anatômicas de aplicação de toxina botulínica em harmonização facial, com função de cada músculo e indicação estética.',
  author: {
    '@type': 'Person',
    name: 'Lívia Carolina Lima',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lume',
    url: 'https://brlume.app',
  },
  datePublished: '2026-09-23',
  dateModified: '2026-09-23',
  mainEntityOfPage: 'https://brlume.app/artigos/guia-regioes-botox',
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
      name: 'Todas as 13 regiões precisam ser tratadas na mesma sessão?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não. As 13 regiões representam os pontos de aplicação mais comuns em harmonização facial com toxina botulínica, mas cada protocolo é individual. A maioria das sessões trata de duas a cinco regiões, escolhidas conforme a queixa e a avaliação facial do paciente.',
      },
    },
    {
      '@type': 'Question',
      name: 'A dosagem em UI é igual para todas as regiões?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não. Cada região recebe uma quantidade de UI diferente, de acordo com o volume e a força do músculo tratado. Músculos maiores e mais fortes, como o masseter, costumam exigir dosagens mais altas do que músculos pequenos e delicados, como o orbicular superior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como registrar corretamente qual região foi tratada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O registro deve incluir a região anatômica, a quantidade em UI aplicada, a marca e o lote do produto utilizado. No Lume, esse registro é feito no formulário clínico de botox, com as 13 regiões pré-cadastradas e cálculo automático do total de UI da sessão.',
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

export default function RegioesBotoxArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <article className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-4">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Guia completo
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Guia Completo das 13 Regiões Anatômicas de Aplicação de Botox
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              Um dos aspectos que mais diferencia um prontuário clínico completo de uma simples
              anotação é o nível de detalhe no registro da aplicação de toxina botulínica. Não
              basta anotar "botox no rosto" — cada músculo tratado tem função, indicação e dosagem
              próprias, e documentar por região é o que garante rastreabilidade, reprodutibilidade
              do protocolo e segurança clínica.
            </p>
            <p>
              Este guia detalha as 13 regiões anatômicas mais utilizadas em harmonização facial com
              toxina botulínica — as mesmas que o Lume disponibiliza pré-cadastradas no formulário
              clínico de botox, com cálculo automático de UI por sessão.
            </p>
          </Prose>

          <H2 id="regioes">As 13 regiões, uma a uma</H2>
          <div className="divide-y divide-gray-100 border-t border-gray-100 mt-6">
            {REGIONS.map((r) => (
              <div key={r.name} className="py-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">{r.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <H2 id="dosagem">Como funciona o cálculo de dosagem por região</H2>
          <Prose>
            <p>
              A dosagem de toxina botulínica é medida em Unidades Internacionais (UI), e cada
              região recebe uma quantidade determinada pelo protocolo do profissional, considerando
              o volume e a força do músculo, a intensidade desejada e as características individuais
              do paciente. Uma sessão completa costuma combinar diferentes regiões, cada uma com sua
              própria dosagem — e o total da sessão é a soma de todas elas.
            </p>
            <p>
              Calcular esse total manualmente, região por região, é uma fonte comum de erro em
              registros feitos em papel ou planilha. No Lume, ao preencher a quantidade de UI para
              cada uma das 13 regiões pré-cadastradas, o total da sessão é somado automaticamente —
              eliminando esse tipo de erro de digitação ou soma.
            </p>
          </Prose>

          <H2 id="por-que-documentar">Por que documentar por região importa</H2>
          <Prose>
            <p>
              Registrar a região exata, junto com a dosagem, a marca e o lote do produto, forma o
              conjunto mínimo de <a href="/glossario#rastreabilidade" className="text-teal-600 font-semibold hover:underline">rastreabilidade clínica</a>{' '}
              exigido em boas práticas. Em caso de intercorrência, esse nível de detalhe permite
              identificar exatamente o que foi feito, quando e com qual produto — informação que
              pode ser decisiva tanto para a resposta clínica quanto para a defesa jurídica do
              profissional. Para entender melhor o conceito, veja também o{' '}
              <a href="/glossario" className="text-teal-600 font-semibold hover:underline">glossário completo de estética e harmonização facial</a>{' '}
              do Lume, com termos como diluição, lote e UI explicados em detalhe.
            </p>
          </Prose>

          <H2 id="faq">Perguntas frequentes</H2>
          <div className="divide-y divide-gray-100 border-t border-gray-100 mt-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="py-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Registre suas sessões de botox
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
