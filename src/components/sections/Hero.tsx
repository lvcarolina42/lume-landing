import Image from 'next/image'
import SmartCTA from '@/components/ui/SmartCTA'

const OUTCOMES = [
  'Veja a linha do tempo de qualquer cliente em segundos',
  'Fotos com ângulo idêntico sessão a sessão com câmera ghost',
  'Antes/depois com sua logo prontos para compartilhar',
]

export default function Hero() {
  return (
    <section
      className="gradient-hero pt-28 pb-16 px-6 overflow-hidden"
      aria-label="Apresentação do Lume"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">

        {/* ── Coluna de texto ── */}
        <div className="text-center md:text-left order-2 md:order-1">

          <p className="animate-fade-in-up inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
            Grátis · iOS e Android · +500 profissionais
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 text-4xl md:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Guarde a evolução{' '}
            <br className="hidden md:block" />
            de cada cliente.{' '}
            <span className="text-teal-200">Do jeito que ela merece.</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 text-base md:text-lg text-white/70 leading-relaxed mb-7 max-w-lg">
            Registre cada sessão com foto, câmera com guia de ângulo e ficha clínica completa.
            Daqui a seis meses, você abre o app e mostra a transformação inteira — em segundos.
          </p>

          <ul className="animate-fade-in-up animation-delay-300 text-left inline-flex flex-col gap-2.5 mb-8">
            {OUTCOMES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/85 text-sm">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-400/30 border border-teal-400/60 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 text-[9px] font-bold">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="animate-fade-in-up animation-delay-400">
            <SmartCTA variant="hero" />
            <p className="text-white/35 text-xs mt-3">
              Sem cartão · Sem cadastro obrigatório · Cancele quando quiser
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-9 flex items-center gap-3 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {['A', 'R', 'C', 'L', 'M'].map((l, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-teal-800/80 flex items-center justify-center text-white text-xs font-bold"
                >
                  {l}
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-white/60 text-xs leading-tight">
                +500 esteticistas e médicos
                <br />
                <span className="text-white/40">5 estrelas na App Store</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Dispositivos ── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative h-[340px] md:h-[500px]">
          <div className="absolute inset-0 bg-teal-400/15 rounded-full blur-3xl scale-75 pointer-events-none" />

          {/* Phone traseiro */}
          <div className="absolute right-0 md:right-4 top-4 md:top-0 w-36 md:w-48 rotate-6 translate-x-4">
            <div className="bg-gray-900 rounded-[2rem] p-[5px] shadow-xl ring-1 ring-white/5 opacity-80">
              <div className="rounded-[1.7rem] overflow-hidden">
                <Image
                  src="/images/site/screen_before_after_select.jpeg"
                  alt="Antes e depois gerado pelo Lume"
                  width={192}
                  height={415}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Phone principal */}
          <div className="absolute left-0 md:left-0 bottom-0 w-44 md:w-56 -rotate-3 translate-y-2">
            <div className="relative bg-gray-950 rounded-[2.5rem] p-[7px] shadow-2xl ring-1 ring-white/10">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[12px] bg-gray-950 rounded-full z-10" />
              <div className="rounded-[2.1rem] overflow-hidden">
                <Image
                  src="/images/site/screen_home.jpeg"
                  alt="Histórico de clientes no app Lume"
                  width={224}
                  height={484}
                  className="w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
