// Este arquivo é um React Server Component.
// Isso significa que ele é renderizado em build time (por causa do output: 'export'
// no next.config.js) e gera HTML estático puro.
// O Googlebot recebe esse HTML diretamente — sem esperar JavaScript rodar.

import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import Problem from '@/components/sections/Problem'
import ForWho from '@/components/sections/ForWho'
import Features from '@/components/sections/Features'
import Anamnesis from '@/components/sections/Anamnesis'
import MidCTA from '@/components/sections/MidCTA'
import HowItWorks from '@/components/sections/HowItWorks'
import QuickStart from '@/components/sections/QuickStart'
import SocialProof from '@/components/sections/SocialProof'
import Pricing from '@/components/sections/Pricing'
import Security from '@/components/sections/Security'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Problem />
        <ForWho />
        <Features />
        <Anamnesis />
        <MidCTA />
        <HowItWorks />
        <QuickStart />
        <SocialProof />
        <Pricing />
        <Security />
      </main>
      <Footer />
    </>
  )
}
