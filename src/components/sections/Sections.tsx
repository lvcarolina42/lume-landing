// ─── HowItWorks ──────────────────────────────────────────────────────────────

const STEPS = [
  {
    n: 1,
    title: 'Cadastre o cliente',
    description: 'Nome e telefone, ou importe direto dos seus contatos. Em segundos o cliente está pronto.',
  },
  {
    n: 2,
    title: 'Fotografe com o ângulo certo',
    description: 'A câmera ghost exibe a foto anterior em sobreposição. Alinhe o rosto e tire — o ângulo sai idêntico.',
  },
  {
    n: 3,
    title: 'Marque e registre',
    description: 'Toque na foto para mapear os pontos. Preencha marca, lote, diluição e regiões aplicadas.',
  },
  {
    n: 4,
    title: 'Compartilhe o resultado',
    description: 'Monte o antes/depois com sua logo. Escolha o formato e compartilhe pelo WhatsApp ou Instagram.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 px-6" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
          Como funciona
        </span>
        <h2 id="how-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
          Da consulta ao Instagram em 4 passos simples
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((s) => (
            <li key={s.n} className="flex flex-col items-center text-center">
              <span className="w-14 h-14 rounded-full bg-teal-600 text-white text-2xl font-extrabold flex items-center justify-center mb-4 shadow-lg">
                {s.n}
              </span>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
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
    quote: 'Na primeira semana já economizei o tempo que gastava anotando em papel. O registro de lote e diluição me deu uma segurança jurídica que eu não tinha antes.',
    name: 'Dra. Ana M.',
    role: 'Médica Esteticista · São Paulo',
    initials: 'AM',
  },
  {
    quote: 'A câmera ghost mudou minha prática. Os ângulos ficaram consistentes e meus antes/depois ficaram muito mais profissionais. Os clientes percebem na hora.',
    name: 'Dr. Rafael K.',
    role: 'Dermatologista · Rio de Janeiro',
    initials: 'RK',
  },
  {
    quote: 'Uso o Lume em todas as consultas. O antes/depois com minha logo virou cartão de visita no Instagram. Os clientes chegam já conhecendo meu trabalho.',
    name: 'Dra. Camila S.',
    role: 'Médica Esteta · Belo Horizonte',
    initials: 'CS',
  },
]

export function SocialProof() {
  return (
    <section className="bg-gray-50 py-20 px-6" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
        </div>
        <h2 id="testimonials-heading" className="text-3xl font-extrabold text-gray-900 mb-2">
          Quem já usa fala por nós
        </h2>
        <p className="text-gray-500 mb-12">
          Esteticistas, dermatologistas e profissionais de estética de todo o Brasil
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            // itemScope/itemType são microdados — reforçam o Schema para o Google
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left hover:-translate-y-1 transition-transform duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-6" itemProp="reviewBody">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center">
                  {t.initials}
                </span>
                <div>
                  <cite className="font-bold text-gray-900 text-sm not-italic" itemProp="author">{t.name}</cite>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const FREE_FEATURES = [
  'Até 50 clientes cadastrados',
  'Até 30 sessões por cliente',
  'Câmera com foto ghost',
  'Mapa de anotações na foto',
  'Registro de botox e filler',
  'Antes/depois para compartilhar',
]

const PRO_FEATURES = [
  'Clientes ilimitados',
  'Sessões ilimitadas por cliente',
  'Logo personalizada na montagem',
  'Quadrado, retrato (4:5) e stories (9:16)',
  'Marca d\'água personalizada',
  'Suporte prioritário',
]

export function Pricing() {
  return (
    <section id="precos" className="bg-white py-20 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
          Planos
        </span>
        <h2 id="pricing-heading" className="text-3xl font-extrabold text-gray-900 mb-2">
          Simples e transparente.
        </h2>
        <p className="text-gray-500 mb-12">
          Comece grátis. Enquanto estiver no beta, o Lume Pro é de graça para todo mundo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Plano Gratuito */}
          <div className="border border-gray-200 rounded-2xl p-8 text-left">
            <h3 className="font-bold text-gray-900 text-xl mb-2">Gratuito</h3>
            <p className="text-4xl font-extrabold text-gray-900 mb-1">Grátis</p>
            <p className="text-gray-400 text-sm mb-6">para sempre, sem cartão</p>
            <ul className="space-y-3 mb-8">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-teal-600">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-teal-600 text-teal-600 font-semibold py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Baixar Grátis
            </a>
          </div>

          {/* Lume Pro */}
          <div className="border-2 border-teal-600 rounded-2xl overflow-hidden text-left shadow-lg">
            <div className="bg-teal-600 py-2.5 text-center text-white text-sm font-bold">
              ⭐ Mais Popular
            </div>
            <div className="p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-2">Lume Pro</h3>
              <p className="text-4xl font-extrabold text-teal-600 mb-1">Grátis no beta</p>
              <p className="text-gray-400 text-sm mb-6">R$ 29/mês após o lançamento</p>
              <ul className="space-y-3 mb-8">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-teal-600">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-teal-600 text-white font-semibold py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Ativar Lume Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const APP_STORE = 'https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=br.com.lumeapp.lume&hl=pt'

export function Footer() {
  return (
    <>
      {/* CTA Strip */}
      <div className="gradient-cta py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Comece hoje. É grátis, sem cartão.
        </h2>
        <p className="text-white/70 mb-8">iOS e Android · Sem compromisso · Cancele quando quiser.</p>
        <a
          href={APP_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors"
        >
          Baixar o Lume Grátis
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 px-6 text-center">
        <p className="text-white font-extrabold text-xl mb-1">✦ Lume</p>
        <p className="text-gray-500 text-sm mb-6">
          Para qualquer profissional que registra evolução visual de clientes.
        </p>
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">App Store</a>
          <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Google Play</a>
          <a href="https://www.instagram.com/br_lume" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Instagram</a>
          <a href="mailto:lvcarolina42@gmail.com" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Contato</a>
          <a href="https://lumeapp.com.br/privacidade" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Privacidade</a>
        </nav>
        <p className="text-gray-700 text-xs">© 2026 Lume App. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
