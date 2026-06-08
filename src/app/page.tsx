// Este arquivo é um React Server Component.
// Isso significa que ele é renderizado em build time (por causa do output: 'export'
// no next.config.js) e gera HTML estático puro.
// O Googlebot recebe esse HTML diretamente — sem esperar JavaScript rodar.

import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import Problem from '@/components/sections/Problem'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import SocialProof from '@/components/sections/SocialProof'
import Pricing from '@/components/sections/Pricing'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/*
          Cada seção aqui é um componente separado.
          O conteúdo textual de todas elas vai para o HTML estático,
          indexável pelo Google — diferente do Flutter que rendia tudo em Canvas.
        */}
        <Hero />
        <StatsStrip />
        <Problem />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
