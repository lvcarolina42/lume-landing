import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Câmera Ghost: o Guia Completo para Fotos de Antes e Depois Comparáveis',
  description:
    'O que é câmera ghost, como funciona passo a passo, por que o ângulo consistente muda o resultado do antes e depois, e como usar essa técnica na prática em estética e harmonização facial.',
  alternates: {
    canonical: 'https://brlume.app/artigos/camera-ghost-guia-completo',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Câmera Ghost: o Guia Completo para Fotos de Antes e Depois Comparáveis',
  description:
    'Guia completo sobre câmera ghost: o que é, como funciona, por que muda o resultado do antes e depois em estética, e como usar na prática.',
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
  mainEntityOfPage: 'https://brlume.app/artigos/camera-ghost-guia-completo',
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
      name: 'Câmera ghost funciona em qualquer celular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. A câmera ghost é uma funcionalidade de software que roda sobre a câmera nativa do aparelho — não exige lente, tripé ou acessório externo. No Lume, ela funciona tanto em iPhones quanto em aparelhos Android, com câmera frontal ou traseira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Câmera ghost substitui um tripé ou suporte de celular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Substitui a função de manter o ângulo, mas não a estabilidade da imagem. Um tripé mantém o aparelho fixo; a câmera ghost mantém o enquadramento do cliente consistente mesmo com o profissional segurando o celular na mão. As duas técnicas podem ser combinadas para resultado ainda mais preciso.',
      },
    },
    {
      '@type': 'Question',
      name: 'É possível usar a câmera ghost com uma foto que não foi tirada pelo app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No Lume, sim: além de usar automaticamente a última foto da sessão anterior, a câmera ghost aceita uma imagem importada da galeria do celular como referência — útil quando o histórico do cliente começou fora do app.',
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-extrabold text-gray-900 mt-8 mb-3 leading-tight">
      {children}
    </h3>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-gray-600 text-base leading-relaxed">{children}</div>
}

export default function CameraGhostArticle() {
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
              Câmera Ghost: o Guia Completo para Fotos de Antes e Depois Comparáveis
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Por Lívia Carolina Lima · Atualizado em setembro de 2026
            </p>
          </div>

          <Prose>
            <p>
              Toda pessoa que trabalha com acompanhamento estético já viveu essa frustração: duas
              fotos do mesmo cliente, tiradas com semanas de diferença, que deveriam mostrar uma
              evolução clara — mas que parecem quase iguais, ou pior, parecem mostrar menos
              resultado do que o tratamento realmente entregou. Na maioria das vezes, o problema não
              é o procedimento. É o ângulo.
            </p>
            <p>
              A câmera ghost resolve exatamente esse problema. É uma das funcionalidades mais
              distintas do Lume, e este guia explica o que ela é, como funciona na prática, por que
              faz tanta diferença no resultado final do antes e depois, e como tirar o máximo dela
              no seu dia a dia clínico.
            </p>
          </Prose>

          <H2 id="o-que-e">O que é câmera ghost</H2>
          <Prose>
            <p>
              Câmera ghost é uma funcionalidade de câmera que exibe a última foto registrada de um
              cliente em sobreposição semitransparente sobre a imagem ao vivo da câmera do celular.
              O nome vem exatamente disso: a foto anterior aparece como um "fantasma" — visível o
              suficiente para servir de guia, mas transparente o bastante para não atrapalhar a
              visão do cliente em tempo real.
            </p>
            <p>
              Na prática, o profissional abre a câmera para registrar uma nova sessão e, em vez de
              enxergar só a imagem ao vivo, vê duas camadas sobrepostas: a foto da sessão anterior
              (semitransparente, em cima) e o cliente posicionado no momento atual (ao vivo, embaixo).
              O objetivo é alinhar as duas camadas antes de disparar o obturador.
            </p>
          </Prose>

          <H2 id="como-funciona">Como funciona, passo a passo</H2>
          <Prose>
            <p>
              O fluxo de uso da câmera ghost segue basicamente quatro etapas:
            </p>
          </Prose>
          <ol className="space-y-4 text-gray-600 text-base leading-relaxed list-decimal pl-5 mt-4">
            <li>
              <strong>Abrir a câmera na sessão do cliente.</strong> O app carrega automaticamente a
              última foto registrada daquele cliente como referência — sem precisar buscar ou
              importar nada manualmente.
            </li>
            <li>
              <strong>Posicionar o cliente na frente da câmera.</strong> A foto de referência aparece
              sobreposta, semitransparente, à imagem ao vivo.
            </li>
            <li>
              <strong>Alinhar os pontos de referência anatômicos</strong> — nariz, olhos, contorno
              do rosto ou da área tratada — até que a silhueta ao vivo coincida com a silhueta da
              foto anterior.
            </li>
            <li>
              <strong>Disparar a foto</strong> apenas quando o alinhamento estiver satisfatório. O
              resultado é uma nova imagem no mesmo ângulo, mesma distância e mesmo enquadramento da
              sessão anterior.
            </li>
          </ol>

          <H2 id="por-que-importa">Por que o ângulo consistente muda tudo</H2>
          <Prose>
            <p>
              Um erro de poucos graus no ângulo da câmera, ou uma diferença de poucos centímetros na
              distância, é suficiente para alterar completamente a percepção de volume, simetria e
              contorno de um rosto ou corpo. Isso acontece por um motivo puramente óptico: a
              perspectiva muda a forma como luz, sombra e profundidade são capturadas.
            </p>
            <p>
              O efeito prático disso é sério. Um resultado real de harmonização facial pode parecer
              discreto — ou até inexistente — numa comparação malfeita, simplesmente porque a segunda
              foto foi tirada de um ângulo levemente diferente. Por outro lado, uma foto tirada de
              ângulo mais favorável pode exagerar um resultado que, na prática, foi mais sutil. Nos
              dois casos, a credibilidade profissional é o que está em jogo — porque o cliente, ou
              quem vê o antes e depois nas redes sociais, não tem como saber que a diferença veio do
              ângulo e não do procedimento.
            </p>
            <p>
              A câmera ghost elimina essa variável. Ao garantir que as duas fotos foram tiradas
              literalmente da mesma posição, a diferença visível entre elas passa a refletir de
              forma fiel o que de fato mudou no cliente — nem mais, nem menos.
            </p>
          </Prose>

          <H2 id="alternativas">Câmera ghost vs outras técnicas de padronização</H2>
          <Prose>
            <p>
              Antes de existir a câmera ghost como funcionalidade de app, profissionais recorriam a
              outras formas de tentar manter o ângulo consistente entre sessões. Nenhuma delas
              resolve o problema com a mesma precisão:
            </p>
          </Prose>

          <H3>Marcações no chão ou na parede</H3>
          <Prose>
            <p>
              Fitas adesivas no chão indicando onde o cliente deve pisar, ou marcas na parede
              indicando a altura da cabeça, ajudam a padronizar a distância — mas não controlam o
              ângulo do rosto, a inclinação da cabeça nem a expressão facial, que são justamente os
              detalhes que mais comprometem a comparação em harmonização facial.
            </p>
          </Prose>

          <H3>Tripé com posição fixa</H3>
          <Prose>
            <p>
              Um tripé numa posição marcada garante que a câmera sempre parta do mesmo ponto — mas
              exige que o espaço físico permaneça idêntico entre sessões (mesma sala, mesmo tripé,
              sem remanejamento de móveis) e não resolve o posicionamento do cliente em relação à
              câmera, só o posicionamento da câmera em si.
            </p>
          </Prose>

          <H3>"Tirar de memória"</H3>
          <Prose>
            <p>
              É, na prática, o método mais comum e o menos confiável. Depender da memória do
              profissional para reproduzir ângulo, distância e enquadramento de semanas atrás
              introduz erro humano em praticamente todos os casos — mesmo profissionais experientes
              relatam dificuldade em replicar o enquadramento exato sem uma referência visual direta.
            </p>
          </Prose>
          <Prose>
            <p>
              A câmera ghost resolve o que nenhuma dessas técnicas resolve sozinha: ela dá uma
              referência visual direta, em tempo real, do enquadramento exato da sessão anterior —
              sem exigir espaço físico fixo, equipamento adicional ou memória perfeita.
            </p>
          </Prose>

          <H2 id="como-usar-bem">Como usar bem a câmera ghost na prática</H2>
          <Prose>
            <p>
              Alguns ajustes fazem diferença real no resultado:
            </p>
          </Prose>
          <ul className="space-y-3 text-gray-600 text-base leading-relaxed list-disc pl-5 mt-4">
            <li>
              <strong>Ajuste a opacidade conforme a etapa do alinhamento.</strong> Opacidade mais
              alta facilita alinhar detalhes finos (como a posição exata de uma sobrancelha ou o
              contorno de um lábio); opacidade mais baixa ajuda a enxergar melhor o cliente ao vivo
              antes de disparar. No Lume, esse ajuste é feito por um controle deslizante direto na
              tela da câmera, a qualquer momento.
            </li>
            <li>
              <strong>Escolha pontos de referência estáveis.</strong> Nariz, olhos e contorno da
              mandíbula costumam ser referências mais confiáveis do que sobrancelhas (que mudam com
              maquiagem) ou cabelo (que muda de penteado entre sessões).
            </li>
            <li>
              <strong>Use a câmera certa para o tipo de registro.</strong> Câmera frontal costuma
              favorecer procedimentos faciais, onde o próprio profissional consegue ver a
              sobreposição enquanto segura o aparelho; câmera traseira é mais indicada para registros
              corporais ou quando outra pessoa está fotografando.
            </li>
            <li>
              <strong>Mantenha a mesma iluminação sempre que possível.</strong> A câmera ghost
              resolve ângulo e enquadramento, mas não compensa mudanças bruscas de luz entre
              sessões — o ideal é fotografar sempre no mesmo ambiente ou horário.
            </li>
          </ul>

          <H2 id="impacto">O impacto no antes e depois final</H2>
          <Prose>
            <p>
              O benefício da câmera ghost não termina na hora de fotografar — ele se reflete
              diretamente na qualidade do antes e depois gerado ao final do acompanhamento. Duas
              fotos tiradas no mesmo ângulo, lado a lado ou empilhadas, tornam qualquer diferença de
              resultado imediatamente legível, sem exigir explicação. Isso importa tanto para a
              conversa com o próprio cliente — que enxerga com clareza o que mudou — quanto para a
              divulgação em redes sociais, onde um antes e depois convincente costuma ser o conteúdo
              de maior engajamento no perfil de um profissional de estética.
            </p>
            <p>
              No Lume, depois de fotografar com a câmera ghost, o profissional pode selecionar duas
              sessões do histórico do cliente, adicionar sua logo e gerar a imagem comparativa em
              segundos, nos formatos quadrado (1:1), retrato (4:5) ou stories (9:16), pronta para
              compartilhar no Instagram ou WhatsApp.
            </p>
          </Prose>

          <H2 id="faq">Perguntas frequentes sobre câmera ghost</H2>
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
              Experimente a câmera ghost
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
