import SmartCTA from '@/components/ui/SmartCTA'

export default function MidCTA() {
  return (
    <section className="gradient-hero py-20 px-6 text-center" aria-label="Baixar o Lume">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Daqui a três meses, você vai querer ter começado hoje.
        </h2>
        <p className="text-white/60 text-base mb-8">
          Cada sessão sem registro é uma parte da evolução que não volta mais.
        </p>
        <div className="flex justify-center">
          <SmartCTA variant="strip" />
        </div>
      </div>
    </section>
  )
}
