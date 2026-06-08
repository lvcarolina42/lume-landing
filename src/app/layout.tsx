import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://brlume.app'),

  title: 'Lume — App para registrar sessões e clientes de estética',
  description:
    'Cadastre clientes, fotografe com câmera ghost para manter o ângulo e gere imagens antes e depois com sua logo. Prontuário visual completo para esteticistas. Grátis para iOS e Android.',

  keywords: [
    'app para esteticista',
    'prontuário estético',
    'registro de botox',
    'app antes e depois estética',
    'câmera ghost estética',
    'organizar clientes estetica',
    'ficha clínica filler',
    'app registro aplicação botox',
  ],

  openGraph: {
    title: 'Lume — Prontuário visual para esteticistas',
    description:
      'Câmera ghost, ficha clínica de botox e filler, e antes/depois com sua logo. Tudo num único app, grátis.',
    url: 'https://brlume.app',
    siteName: 'Lume',
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lume — App para registrar sessões de estética',
    description: 'Câmera ghost, ficha clínica e antes/depois com logo. Grátis para iOS e Android.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: 'https://brlume.app',
    languages: {
      'pt-BR': 'https://brlume.app',
      'en':    'https://brlume.app/en',
      'es':    'https://brlume.app/es',
    },
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Lume',
  description:
    'App para esteticistas registrarem sessões com foto, câmera ghost, ficha clínica de botox e filler, e geração de antes e depois com logo.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  url: 'https://brlume.app',
  inLanguage: ['pt-BR', 'en', 'es'],
  installUrl: 'https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '47',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
