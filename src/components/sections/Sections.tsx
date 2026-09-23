// ─── HowItWorks ──────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: 1,
    title: 'Cadastre a cliente',
    description:
      'Nome e telefone. Ou importe direto dos seus contatos. Em dez segundos ela está pronta para a primeira sessão — sem formulário longo, sem burocracia.',
  },
  {
    n: 2,
    title: 'Fotografe com referência',
    description:
      'A câmera ghost exibe a última foto em sobreposição. Você alinha o rosto e tira. O ângulo sai idêntico — e é assim que a comparação começa a fazer sentido.',
  },
  {
    n: 3,
    title: 'Registre o que foi feito',
    description:
      'Marque pontos na foto, preencha lote e regiões aplicadas. Adicione observações. A sessão inteira documentada em menos de dois minutos.',
  },
  {
    n: 4,
    title: 'Mostre a evolução',
    description:
      'Abra o perfil da cliente e veja a linha do tempo completa. Ou gere um antes/depois com sua logo e mande direto para ela.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24 px-6" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Como funciona
          </span>
          <h2 id="how-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Da primeira sessão ao registro completo.
            <br />
            <span className="text-gray-400 font-medium">Em menos de dois minutos.</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="w-14 h-14 rounded-2xl bg-teal-600 text-white text-xl font-extrabold flex items-center justify-center mb-5 shadow-lg shadow-teal-600/25">
                {s.n}
              </span>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// ─── SocialProof ──────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'Minha cliente me pediu para ver como ela estava há oito meses. Abri o Lume, mostrei a linha do tempo completa e ela ficou em silêncio por uns segundos. Depois me disse que queria continuar o tratamento. Esse momento não existiria sem o registro.',
    name: 'Dra. Ana M.',
    role: 'Médica Esteticista · São Paulo',
    initials: 'AM',
    highlight: 'A evolução que convenceu a cliente a continuar',
  },
  {
    quote:
      'Eu sabia que meu trabalho era bom, mas não conseguia provar nas fotos. Com ângulos sempre diferentes, a comparação não impressionava. A câmera ghost mudou isso. Agora os antes/depois falam sozinhos — e meus seguidores percebem.',
    name: 'Dr. Rafael K.',
    role: 'Dermatologista · Rio de Janeiro',
    initials: 'RK',
    highlight: 'Antes/depois que finalmente impressiona',
  },
  {
    quote:
      'O que mais gosto é poder abrir o prontuário antes da sessão e ver exatamente o que foi feito da última vez. Lote, regiões, quantidade. Não dependo mais de memória — e isso me dá uma segurança completamente diferente.',
    name: 'Dra. Camila S.',
    role: 'Médica Esteta · Belo Horizonte',
    initials: 'CS',
    highlight: 'Segurança clínica sem depender de memória',
  },
]

export function SocialProof() {
  return (
    <section className="bg-gray-50 py-24 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <h2 id="testimonials-heading" className="text-3xl font-extrabold text-gray-900 mb-2">
            O que muda quando a evolução fica registrada
          </h2>
          <p className="text-gray-400 text-base">
            Profissionais reais. Situações reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/SoftwareApplication" hidden>
                <meta itemProp="name" content="Lume" />
                <meta itemProp="operatingSystem" content="iOS, Android" />
                <meta itemProp="applicationCategory" content="HealthApplication" />
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="price" content="0" />
                  <meta itemProp="priceCurrency" content="BRL" />
                </div>
                <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="ratingCount" content="500" />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" hidden>
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
              </div>
              <p className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full inline-block mb-5 self-start leading-snug">
                {t.highlight}
              </p>
              <p
                className="text-gray-600 text-sm leading-relaxed mb-6 flex-1"
                itemProp="reviewBody"
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <span itemProp="author" itemScope itemType="https://schema.org/Person" hidden>
                <meta itemProp="name" content={t.name} />
              </span>
              <footer className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {t.initials}
                </span>
                <div>
                  <cite className="font-bold text-gray-900 text-sm not-italic block">
                    {t.name}
                  </cite>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/stores'
import StoreBadge from '@/components/ui/StoreBadge'

export function Footer() {
  return (
    <>
      {/* CTA Strip */}
      <div className="gradient-cta py-24 px-6 text-center">
        <p className="text-teal-200/70 text-xs font-bold tracking-widest uppercase mb-5">
          Comece agora
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
          Toda sessão é parte de uma história.
          <br className="hidden md:block" />
          Comece a guardar a sua.
        </h2>
        <p className="text-white/55 text-base mb-8 max-w-sm mx-auto">
          App gratuito para iOS e Android. Sem cartão, sem burocracia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <StoreBadge store="apple" url={APP_STORE_URL} variant="light" />
          <StoreBadge store="android" url={PLAY_STORE_URL} variant="light" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 px-6 text-center">
        <p className="text-white font-extrabold text-xl mb-1 tracking-tight">✦ Lume</p>
        <p className="text-gray-600 text-sm mb-7">
          Prontuário visual para quem leva o trabalho a sério.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7">
          <StoreBadge store="apple" url={APP_STORE_URL} variant="outline" />
          <StoreBadge store="android" url={PLAY_STORE_URL} variant="outline" />
        </div>
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/br_lume" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Instagram</a>
          <a href="mailto:lvcarolina42@gmail.com" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Contato</a>
          <a href="/faq" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Perguntas frequentes</a>
          <a href="/como-funciona" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Como funciona</a>
          <a href="/glossario" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Glossário</a>
          <a href="/alternativas" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Comparações</a>
          <a href="/artigos" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Artigos</a>
          <a href="/sobre" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Sobre</a>
          <a href="/privacidade" className="text-gray-600 hover:text-teal-400 text-sm transition-colors">Privacidade</a>
        </nav>
        <p className="text-gray-700 text-xs">© 2026 Lume App. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
