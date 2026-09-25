import Image from 'next/image'

const FEATURES = [
  {
    badge: 'O segredo dos melhores antes/depois',
    title: 'Fotos que se comparam de verdade',
    description:
      'A câmera exibe a última foto da cliente em sobreposição semitransparente. Você alinha o rosto, tira — e os dois registros ficam com o mesmo ângulo, mesma distância, mesma expressão. A diferença fica evidente porque as fotos finalmente se comparam de igual para igual.',
    highlights: ['Opacidade ajustável', 'Câmera frontal e traseira', 'Funciona sem internet'],
    imageSide: 'right' as const,
    image: '/images/site/screen_camera_ghost.jpeg',
    imageAlt: 'Câmera ghost mostrando sobreposição da foto anterior no app Lume',
  },
  {
    badge: 'A evolução visível numa imagem',
    title: 'A transformação resumida em 30 segundos',
    description:
      'Escolha duas sessões, coloque as fotos lado a lado ou empilhadas, adicione sua logo arrastando com o dedo e compartilhe direto no WhatsApp ou Instagram. A evolução de meses numa imagem que qualquer pessoa entende — sem precisar explicar nada.',
    highlights: ['Quadrado, 4:5 e stories 9:16', 'Logo posicionável', 'Compartilha sem sair do app'],
    imageSide: 'left' as const,
    image: '/images/site/screen_before_after_select.jpeg',
    imageAlt: 'Ferramenta de antes e depois com logo no app Lume',
  },
  {
    badge: 'Prontuário que fica com você',
    title: 'Cada sessão documentada por completo',
    description:
      'Registre marca, lote, diluição e cada região aplicada com as quantidades em UI ou ml. São 13 regiões de botox e 11 de filler já pré-cadastradas — o total calcula sozinho. Tudo salvo na nuvem e acessível quando precisar, inclusive anos depois.',
    highlights: ['13 regiões de botox', '11 regiões de filler', 'Cálculo automático'],
    imageSide: 'right' as const,
    image: '/images/site/screen_procedure_record.jpeg',
    imageAlt: 'Ficha clínica de botox e filler no app Lume',
  },
  {
    badge: 'Precisão que não depende de memória',
    title: 'Mapeie exatamente onde você aplicou',
    description:
      'Toque na foto para marcar cada ponto de aplicação. Use cores diferentes para produtos diferentes. O mapa fica vinculado àquela sessão e serve de referência na próxima — você nunca mais vai tentar reconstruir isso de cabeça.',
    highlights: ['5 cores por produto', 'Desfazer com 1 toque', 'Zoom para precisão'],
    imageSide: 'left' as const,
    image: '/images/site/screen_annotation.jpeg',
    imageAlt: 'Marcação de pontos de aplicação diretamente na foto no app Lume',
  },
  {
    badge: 'A linha do tempo de cada cliente',
    title: 'Toda a história, num único lugar',
    description:
      'Cada sessão aparece em ordem cronológica com foto, data e tudo que foi registrado. Você abre o perfil da cliente e vê a evolução desde a primeira visita. Sem procurar em WhatsApp, sem depender de nada fora do app.',
    highlights: [
      'Busca por nome',
      'Grade visual por data',
      'Importa contatos do celular',
      'Importação em lote de fotos antigas',
    ],
    imageSide: 'right' as const,
    image: '/images/site/screen_home.jpeg',
    imageAlt: 'Histórico completo de sessões de uma cliente no app Lume',
  },
]

function FeatureBlock({
  badge,
  title,
  description,
  highlights,
  imageSide,
  image,
  imageAlt,
  index,
}: (typeof FEATURES)[0] & { index: number }) {
  const isLeft = imageSide === 'left'
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-gray-50'

  return (
    <article className={`${bg} py-20 px-6`}>
      <div
        className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 ${
          !isLeft ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/8 rounded-[3rem] blur-2xl scale-110 pointer-events-none" />
            <div className="relative bg-gray-100 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-black/5">
              <Image
                src={image}
                alt={imageAlt}
                width={288}
                height={620}
                className="w-64 md:w-72 rounded-[2rem] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12">
          <span className="inline-block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4 tracking-wide">
            {badge}
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-base leading-relaxed mb-6">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <span className="text-teal-400 text-[10px]">✓</span> {h}
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
      <div className="bg-white py-20 px-6 text-center">
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
          Como o Lume funciona
        </span>
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
        >
          Tudo que você precisava
          <br />
          <span className="text-gray-400 font-medium">para registrar evolução de verdade.</span>
        </h2>
        <p className="text-gray-400 text-base max-w-lg mx-auto">
          Cada função foi pensada para quem precisa que o registro seja rápido, consistente e fácil de mostrar.
        </p>
      </div>

      {FEATURES.map((f, i) => (
        <FeatureBlock key={f.title} {...f} index={i} />
      ))}
    </section>
  )
}
