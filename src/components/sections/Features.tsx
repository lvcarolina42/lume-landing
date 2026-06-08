// Cada FeatureBlock tem um H3 — o Google usa a hierarquia H1 > H2 > H3
// para mapear a estrutura de informação da página.
// Os textos aqui são ricos em termos que esteticistas realmente buscam.

const FEATURES = [
  {
    title: 'Histórico completo de cada cliente',
    description:
      'Todas as sessões organizadas em um só lugar. Acesse a última foto, o mapa de pontos de aplicação e a ficha de produtos em segundos — sem procurar em papel ou WhatsApp.',
    highlights: ['Busca por nome em tempo real', 'Ordenação por data', 'Acesso rápido à última sessão'],
    imageSide: 'left' as const,
  },
  {
    title: 'Câmera ghost para ângulo consistente',
    description:
      'A câmera exibe a última foto do cliente em sobreposição semitransparente. Alinhe o rosto e tire. O ângulo sai idêntico automaticamente — sem marcas no chão ou depender da memória.',
    highlights: ['Opacidade ajustável', 'Câmera frontal e traseira', 'Resolução ultra-alta'],
    imageSide: 'right' as const,
  },
  {
    title: 'Mapa de pontos de aplicação na foto',
    description:
      'Toque na foto para registrar cada ponto de botox ou filler com uma cor diferente por produto. O mapa fica salvo no prontuário e guia a próxima sessão.',
    highlights: ['5 cores por produto', 'Desfazer com um toque', 'Salvo automaticamente'],
    imageSide: 'left' as const,
  },
  {
    title: 'Ficha de botox e filler em menos de 1 minuto',
    description:
      'Registre marca, lote, diluição e cada região de aplicação com a quantidade em UI ou ml. Formulário com 13 regiões de botox e 11 regiões de filler pré-definidas — total calculado automaticamente.',
    highlights: ['13 regiões de botox', '11 regiões de filler', 'Total calculado automaticamente'],
    imageSide: 'right' as const,
  },
  {
    title: 'Antes/depois que impressiona clientes',
    description:
      'Escolha o formato quadrado, retrato (4:5) ou stories (9:16), com layout lado a lado ou empilhado. Adicione logo, rótulos e datas. Compartilhe pelo WhatsApp, Instagram ou qualquer app.',
    highlights: ['Quadrado, retrato ou stories', 'Rótulos e datas personalizáveis', 'WhatsApp e Instagram'],
    imageSide: 'left' as const,
  },
]

function FeatureBlock({
  title,
  description,
  highlights,
  imageSide,
  index,
}: (typeof FEATURES)[0] & { index: number }) {
  const isLeft = imageSide === 'left'
  const bg = index % 2 === 0 ? 'bg-gray-50' : 'bg-white'

  return (
    <article className={`${bg} py-16 px-6`}>
      <div className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
        {/* Placeholder de imagem — substitua por <Image> do Next.js com seus assets */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="w-48 h-96 bg-gradient-to-b from-teal-600 to-teal-800 rounded-3xl shadow-2xl flex items-center justify-center">
            <span className="text-white/40 text-sm text-center px-4">Screenshot do app<br />(adicione a imagem)</span>
          </div>
        </div>

        {/* Texto — todo indexável */}
        <div className="w-full md:w-7/12">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <span className="text-teal-500">✓</span> {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Features() {
  return (
    <section id="funcionalidades" aria-labelledby="features-heading">
      <div className="bg-white py-16 px-6 text-center">
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
          Funcionalidades
        </span>
        <h2 id="features-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Do registro à publicação, num único app.
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Câmera ghost, ficha clínica e antes/depois com logo — sem abrir outro aplicativo.
        </p>
      </div>

      {FEATURES.map((f, i) => (
        <FeatureBlock key={f.title} {...f} index={i} />
      ))}
    </section>
  )
}
