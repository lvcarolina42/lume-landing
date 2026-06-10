import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import FaqItem from './FaqItem'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — Lume App para Esteticistas',
  description:
    'Tudo sobre o Lume: câmera ghost, ficha clínica de botox e filler, geração de antes e depois e organização de clientes. O app gratuito para esteticistas e médicos estetas.',
  alternates: {
    canonical: 'https://brlume.app/faq',
  },
}

const CATEGORIES = [
  {
    title: 'Sobre o Lume',
    items: [
      {
        question: 'O que é o Lume?',
        answer:
          'O Lume é um aplicativo para iOS e Android criado para profissionais de estética que precisam registrar e acompanhar a evolução dos seus clientes. Com ele, você cadastra clientes em segundos, fotografa cada sessão com uma câmera especial que mantém o ângulo consistente e gera imagens de antes e depois prontas para compartilhar. Para quem trabalha com botox e preenchimento facial, o Lume também funciona como prontuário clínico completo, registrando produtos, lotes, diluições e pontos de aplicação por região anatômica. Tudo organizado por cliente, acessível de qualquer dispositivo, sem perder nada.',
      },
      {
        question: 'Para quem é o Lume?',
        answer:
          'O Lume foi pensado para qualquer profissional que acompanha resultados visuais ao longo do tempo. Esteticistas, médicos estetas, dermatologistas, personal trainers, nutricionistas e fisioterapeutas usam o app para manter um histórico visual organizado por cliente. Para quem aplica botox, filler ou realiza harmonização facial, o Lume vai além: é também um prontuário clínico com registros de produtos, lotes e regiões anatômicas. Se a evolução do cliente faz parte do seu trabalho, o Lume é para você.',
      },
      {
        question: 'O Lume é gratuito?',
        answer:
          'Sim, o Lume é gratuito para baixar e usar. O plano gratuito permite cadastrar até 50 clientes com até 30 sessões cada, com acesso completo a todas as funcionalidades — câmera ghost, ficha clínica, antes e depois. Para quem precisa de mais capacidade, o Lume Pro oferece clientes e sessões ilimitados. Durante o período de beta, todos os usuários têm acesso ao plano Pro sem custo.',
      },
      {
        question: 'O Lume está disponível para iOS e Android?',
        answer:
          'Sim, o Lume está disponível para iOS na App Store e para Android na Google Play Store. O app funciona em iPhones e iPads com iOS 14 ou superior, e em dispositivos Android com versão 8.0 ou superior. Os dados ficam sincronizados na nuvem, então você pode trocar de celular ou usar em mais de um dispositivo sem perder nenhum registro. Basta fazer login com a mesma conta para ter acesso a todos os seus clientes e sessões.',
      },
      {
        question: 'Meus dados ficam seguros?',
        answer:
          'Sim. Cada profissional acessa exclusivamente seus próprios dados — nenhum outro usuário tem acesso à sua lista de clientes. As fotos e fichas clínicas são armazenadas na nuvem com autenticação obrigatória, e o Lume foi desenvolvido em conformidade com a LGPD. Se você decidir encerrar a conta, todos os dados — fotos, fichas e histórico — são removidos permanentemente, sem exceções.',
      },
    ],
  },
  {
    title: 'Câmera Ghost',
    items: [
      {
        question: 'O que é câmera ghost para esteticistas?',
        answer:
          'A câmera ghost é uma funcionalidade do Lume que exibe a última foto de uma sessão anterior em sobreposição semitransparente sobre a câmera ao vivo. Isso permite posicionar o cliente exatamente como estava na sessão anterior — mesma distância, mesmo ângulo, mesma expressão — antes de tirar a nova foto. O resultado é que as comparações antes e depois ficam muito mais precisas e impactantes, porque as duas fotos realmente se comparam de igual para igual. Para esteticistas e médicos que precisam documentar evolução de tratamentos, a câmera ghost é a ferramenta que transforma um simples registro em evidência clínica.',
      },
      {
        question: 'Como garantir o mesmo ângulo nas fotos entre sessões?',
        answer:
          'O maior desafio das fotos de acompanhamento é que pequenas variações de ângulo e distância fazem o resultado parecer menor do que é. O Lume resolve isso com a câmera ghost: ao abrir a câmera para uma nova sessão, a última foto do cliente aparece em sobreposição com opacidade ajustável. Você alinha os pontos de referência — nariz, olhos, contorno do rosto — e tira a foto quando as duas imagens estão sobrepostas perfeitamente. Com esse método, a consistência entre sessões deixa de depender de memória ou de sorte.',
      },
      {
        question: 'Posso ajustar a intensidade da sobreposição ghost?',
        answer:
          'Sim. No Lume, a opacidade da imagem ghost é ajustável diretamente na tela da câmera com um controle deslizante. Você pode aumentar a intensidade para facilitar o alinhamento de detalhes finos ou diminuir para ter uma visão mais clara do cliente ao vivo. A configuração pode ser ajustada a qualquer momento durante o registro. Isso dá flexibilidade para usar a câmera ghost tanto em procedimentos faciais precisos quanto em registros de transformação corporal.',
      },
      {
        question: 'A câmera ghost funciona com câmera frontal e traseira?',
        answer:
          'Sim, a câmera ghost do Lume funciona tanto com a câmera frontal quanto com a traseira. Você pode alternar entre elas durante o registro da sessão conforme a necessidade do procedimento. Para tratamentos faciais, a câmera frontal costuma oferecer melhor controle de distância. Para registros de transformação corporal ou regiões específicas, a câmera traseira pode ser mais prática. A sobreposição ghost funciona da mesma forma em ambas as câmeras.',
      },
    ],
  },
  {
    title: 'Ficha Clínica de Botox e Filler',
    items: [
      {
        question: 'Como registrar a aplicação de botox no celular?',
        answer:
          'No Lume, o registro de botox é feito diretamente na tela de sessão, após tirar a foto. Você preenche a marca do produto, o número do lote e a diluição utilizada. Em seguida, seleciona as regiões anatômicas tratadas e informa a quantidade em unidades (UI) para cada região — o total é calculado automaticamente pelo app. Todo o registro fica vinculado à sessão e ao cliente, acessível a qualquer momento, inclusive em auditorias ou na consulta pré-sessão seguinte. O processo inteiro leva menos de dois minutos.',
      },
      {
        question: 'Quais regiões anatômicas de botox o Lume registra?',
        answer:
          'O Lume oferece 13 regiões pré-cadastradas para registro de botox, cobrindo os principais pontos de aplicação em harmonização facial: Frontal, Prócero, Corrugador, Orbicular do Olho, Nasal, Sorriso Gengival, DAO (Depressor do Ângulo da Boca), Mentoniano, Masseter, Platisma e outras regiões personalizáveis. Para cada região, você informa a quantidade em unidades (UI) e o total da sessão é calculado automaticamente. Esse nível de detalhe transforma o Lume em um prontuário clínico completo, não apenas um álbum de fotos.',
      },
      {
        question: 'Como registrar preenchimento facial no celular?',
        answer:
          'O registro de filler no Lume segue a mesma lógica do botox: você seleciona a marca, informa o lote e escolhe as regiões de aplicação. O app oferece 11 regiões pré-cadastradas para preenchimento facial: Lábios, Sulco Nasogeniano, Malar, Olheira, Mento, Ângulo da Mandíbula, Contorno da Mandíbula, Pré-Jowls, Têmpora, Rinomodelação e outras. Para cada região, você informa o volume em ml e o total é calculado automaticamente. É possível registrar múltiplas seringas e regiões na mesma sessão, com todos os dados salvos na nuvem.',
      },
      {
        question: 'É possível registrar botox e filler na mesma sessão?',
        answer:
          'Sim. No Lume, uma única sessão pode conter o registro completo de botox, filler ou ambos simultaneamente. O formulário clínico aceita qualquer combinação — você preenche as seções aplicáveis à sessão e deixa em branco o que não for usado. Isso é especialmente útil para médicos estetas e dermatologistas que combinam diferentes procedimentos em uma mesma consulta. Tudo fica documentado sob um único registro, vinculado à data e à foto da sessão.',
      },
      {
        question: 'Por que é importante registrar o lote do botox?',
        answer:
          'O registro do número de lote de botox e filler é uma exigência de boas práticas clínicas e pode ser decisivo em situações de reação adversa, auditoria ou ação judicial. Com o lote documentado no Lume, você consegue identificar rapidamente qual produto foi usado em cada paciente e em qual data — informação essencial para comunicar à vigilância sanitária em caso de recall ou evento adverso. Além da proteção profissional, o registro de lote demonstra seriedade e fortalece a confiança do paciente. O Lume armazena essas informações na nuvem, acessíveis a qualquer momento.',
      },
    ],
  },
  {
    title: 'Antes e Depois',
    items: [
      {
        question: 'Como criar antes e depois profissional para Instagram?',
        answer:
          'No Lume, o processo começa selecionando duas sessões do mesmo cliente. O app coloca as fotos lado a lado ou empilhadas, você adiciona sua logo arrastando com o dedo, define o formato — quadrado 1:1, retrato 4:5 ou stories 9:16 — e compartilha direto para o Instagram, WhatsApp ou qualquer outro app. A linha divisória entre as fotos tem espessura e cor ajustáveis. O resultado é uma imagem com cara de agência, pronta para publicar, sem precisar de outro app de edição.',
      },
      {
        question: 'Como adicionar minha logo no antes e depois?',
        answer:
          'No editor de antes e depois do Lume, você importa a logo da sua clínica ou estúdio diretamente da galeria do celular. Em seguida, posiciona a logo arrastando com o dedo e ajusta o tamanho com um gesto de pinça. O app salva a posição e o tamanho automaticamente para a próxima vez — você não precisa reconfigurar a cada uso. A logo pode ser colocada em qualquer área da imagem, normalmente no rodapé ou em um dos cantos.',
      },
      {
        question: 'Quais formatos o Lume gera para antes e depois?',
        answer:
          'O Lume gera imagens em três formatos: quadrado 1:1 (ideal para feed do Instagram), retrato 4:5 (o formato padrão de foto do Instagram, que ocupa mais espaço no feed) e stories 9:16 (para Instagram Stories, TikTok e WhatsApp Status). Você escolhe o formato no editor antes de exportar. As imagens são geradas em alta resolução, prontas para publicação direta nas redes sociais sem perda de qualidade.',
      },
      {
        question: 'Posso colocar a data da sessão no antes e depois?',
        answer:
          'Sim. No editor do Lume, você pode ativar a exibição da data de cada sessão diretamente sobre a respectiva foto. As etiquetas de texto são personalizáveis — o padrão é "ANTES" e "DEPOIS", mas você pode escrever o que preferir. A posição das etiquetas pode ser ajustada para qualquer um dos quatro cantos da imagem. Mostrar a data reforça a credibilidade do resultado e demonstra a consistência do acompanhamento ao longo do tempo.',
      },
    ],
  },
  {
    title: 'Organização de Clientes',
    items: [
      {
        question: 'Como organizar fotos de clientes de estética no celular?',
        answer:
          'O problema de guardar fotos de clientes na galeria do celular é que elas se misturam com outras fotos pessoais, ficam sem identificação e impossibilitam comparações confiáveis. No Lume, cada cliente tem um perfil próprio com todas as sessões organizadas cronologicamente. Você encontra qualquer cliente em segundos pela busca por nome, vê a linha do tempo completa de evolução com miniaturas das fotos e sabe exatamente o que foi feito em cada sessão. Nenhuma foto avulsa, nenhuma pasta de WhatsApp, nenhuma planilha extra.',
      },
      {
        question: 'O que é o mapa de pontos de aplicação do Lume?',
        answer:
          'O mapa de pontos é uma funcionalidade do Lume que permite marcar, diretamente sobre a foto da sessão, os pontos exatos onde foram feitas as aplicações ou os pontos de referência do tratamento. Após tirar a foto, você toca na tela para adicionar pontos coloridos — há cinco cores disponíveis para diferenciar produtos, regiões ou categorias. Os pontos podem ser desfeitos ou apagados a qualquer momento, e a imagem pode ser ampliada para marcações mais precisas. Na sessão seguinte, você abre o resumo e tem o mapa exato do que foi feito como referência.',
      },
    ],
  },
  {
    title: 'Comparações',
    items: [
      {
        question: 'Qual a diferença entre o Lume e uma planilha?',
        answer:
          'Uma planilha registra números e texto, mas não fotos — e é exatamente a foto que prova a evolução de um tratamento estético. O Lume combina o registro visual (fotos com ângulo consistente via câmera ghost) com o registro clínico (lotes, regiões, quantidades) em um único lugar por cliente. Além disso, o Lume gera o antes e depois pronto para compartilhar, o que uma planilha jamais fará. Para profissionais de estética, a planilha resolve o lado burocrático mas ignora o que realmente convence o cliente: ver a própria transformação.',
      },
      {
        question: 'Por que não usar o WhatsApp para guardar fotos de clientes?',
        answer:
          'O WhatsApp foi feito para comunicação, não para gestão clínica. As fotos de clientes ficam misturadas com conversas, não têm identificação por pessoa, não permitem comparações padronizadas e não oferecem proteção de privacidade específica para dados de saúde. Com o Lume, cada cliente tem um perfil separado, as fotos são tiradas com câmera ghost para consistência de ângulo, e o acesso é protegido por autenticação. Do ponto de vista da LGPD, armazenar prontuários clínicos em aplicativos de mensagens representa um risco que o Lume elimina.',
      },
      {
        question: 'Existe app específico para registrar botox e harmonização facial?',
        answer:
          'Sim — o Lume é o app criado especificamente para esse fim. Diferente de apps genéricos de anotação ou galeria de fotos, o Lume tem um formulário clínico com 13 regiões de botox e 11 de filler pré-cadastradas, cálculo automático de unidades e volume, câmera ghost para consistência de ângulo e geração de antes e depois com logo. Tudo em um único aplicativo, gratuito para iOS e Android. Para médicos estetas, dermatologistas e esteticistas que trabalham com harmonização facial, o Lume é a única ferramenta que une prontuário clínico e documentação visual em um só lugar.',
      },
      {
        question: 'O Lume substitui um prontuário em papel?',
        answer:
          'Para o registro fotográfico e clínico de sessões de estética, sim — o Lume substitui e supera o prontuário em papel. O app registra data, observações, produtos (marca, lote, diluição), regiões tratadas com quantidades precisas e a foto da sessão com mapa de pontos, tudo vinculado ao cliente e acessível na nuvem de qualquer dispositivo. Diferente do papel, os dados não se perdem, não se deterioram e são recuperáveis mesmo se você trocar de celular. Para prontuários que exigem assinatura do paciente ou documentos jurídicos, o papel ainda pode ser necessário dependendo da regulamentação do conselho profissional.',
      },
    ],
  },
  {
    title: 'Planos',
    items: [
      {
        question: 'Qual a diferença entre o plano gratuito e o Lume Pro?',
        answer:
          'O plano gratuito do Lume permite cadastrar até 50 clientes com até 30 sessões por cliente, com acesso completo a todas as funcionalidades — câmera ghost, ficha clínica de botox e filler, geração de antes e depois, mapa de pontos. O Lume Pro remove esses limites e oferece clientes e sessões ilimitados. Durante o período de beta atual, todos os usuários têm acesso automático ao Lume Pro sem custo adicional. Quando o beta encerrar, será dado aviso com antecedência para quem quiser manter o plano Pro.',
      },
      {
        question: 'Preciso de cartão de crédito para usar o Lume?',
        answer:
          'Não. O Lume é gratuito para baixar e não exige cartão de crédito para criar uma conta ou usar o plano gratuito. Você cria a conta com Google, Apple ou e-mail e senha, e já tem acesso imediato a todas as funcionalidades. O cartão só é necessário se você optar por assinar o Lume Pro após o encerramento do período de beta, e o pagamento é processado pela App Store ou Google Play — o Lume não armazena dados de pagamento.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
              FAQ
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Tudo sobre o Lume
            </h1>
            <p className="text-gray-400 text-base max-w-md mx-auto">
              Respostas para as dúvidas mais comuns sobre câmera ghost, ficha clínica, antes e depois e organização de clientes.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {CATEGORIES.map((cat) => (
              <section key={cat.title} aria-labelledby={`cat-${cat.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <h2
                  id={`cat-${cat.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-1"
                >
                  {cat.title}
                </h2>
                <div className="divide-y divide-gray-100 border-t border-gray-100">
                  {cat.items.map((item) => (
                    <FaqItem key={item.question} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Pronto para começar?
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
