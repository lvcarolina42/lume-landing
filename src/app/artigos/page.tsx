import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Artigos — Blog do Lume sobre estética e harmonização facial',
  description:
    'Guias completos sobre câmera ghost, ficha clínica de botox e filler, anamnese digital, agenda e gestão de clientes de estética.',
  alternates: {
    canonical: 'https://brlume.app/artigos',
  },
}

const ARTICLES = [
  {
    slug: 'camera-ghost-guia-completo',
    title: 'Câmera ghost: o guia completo para fotos de antes e depois realmente comparáveis',
    excerpt:
      'O que é câmera ghost, como ela funciona passo a passo, por que o ângulo consistente muda tudo no antes e depois, e como tirar o máximo dela na prática.',
  },
]

export default function ArtigosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="mb-14">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Artigos sobre estética e harmonização facial
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Guias completos para esteticistas, médicos estetas e dermatologistas sobre
              documentação clínica, fotografia de acompanhamento e gestão de clientes.
            </p>
          </div>

          <div className="space-y-8">
            {ARTICLES.map((a) => (
              <a
                key={a.slug}
                href={`/artigos/${a.slug}`}
                className="block bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6"
              >
                <h2 className="text-lg font-extrabold text-gray-900 mb-2 leading-tight">
                  {a.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
              </a>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
