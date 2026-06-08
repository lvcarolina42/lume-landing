// Server Component — sem 'use client'.
// Todo o texto aqui vai direto pro HTML estático.
// O <h1> é o sinal mais forte que o Google usa para entender o tema da página.

const BULLETS = [
  'Câmera ghost garante o mesmo ângulo em toda sessão',
  'Antes/depois com sua logo, pronto para WhatsApp ou Instagram',
  'Formulário clínico completo para botox e filler',
]

const APP_STORE = 'https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=br.com.lumeapp.lume&hl=pt'

export default function Hero() {
  return (
    <section
      className="gradient-hero pt-32 pb-20 px-6"
      aria-label="Apresentação do Lume"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge — indexável, aparece nos resultados de busca dentro da descrição */}
        <p className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-100 animate-pulse" />
          Grátis · iOS e Android
        </p>

        {/*
          H1 — o mais importante para SEO.
          Contém a keyword principal ("organizar clientes") e o diferencial ("sessões de estética").
          Deve existir exatamente um H1 por página.
        */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Da sessão ao antes/depois,{' '}
          <span className="text-teal-100">tudo organizado por cliente</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
          Para esteticistas, médicos e fisioterapeutas. Câmera ghost, antes/depois
          com logo e ficha clínica de botox e filler — num único app.
        </p>

        {/* Bullets — keywords naturais que o Google também indexa */}
        <ul className="text-left inline-flex flex-col gap-3 mb-10">
          {BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-3 text-white text-sm md:text-base">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-xs">✓</span>
              {b}
            </li>
          ))}
        </ul>

        {/* CTAs com links reais — o Google segue esses links e passa autoridade às lojas */}
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors text-sm md:text-base"
          >
            Baixar na App Store
          </a>
          <a
            href={PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-colors text-sm md:text-base"
          >
            Baixar no Google Play
          </a>
        </div>

        <p className="text-white/40 text-xs">Gratuito · Sem cartão · iOS e Android</p>

        {/* Social proof — texto indexável, reforça autoridade */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {['AM', 'RK', 'CS', 'LB', 'MP'].map((i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full bg-teal-400 border-2 border-teal-800 flex items-center justify-center text-white text-xs font-bold"
              >
                {i[0]}
              </span>
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-white/70 text-xs">+500 profissionais de estética</p>
          </div>
        </div>
      </div>
    </section>
  )
}
