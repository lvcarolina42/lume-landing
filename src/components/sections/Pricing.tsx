import SmartCTA from '@/components/ui/SmartCTA'

const PLANS = [
  {
    name: 'Gratuito',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Para começar a organizar suas clientes hoje mesmo.',
    features: [
      'Até 50 clientes cadastradas',
      'Até 30 procedimentos por cliente',
      'Câmera ghost e anotação de pontos',
      'Comparação antes/depois com logo',
      'Ficha clínica de botox e filler',
      'Agenda com catálogo de serviços',
    ],
    highlight: false,
  },
  {
    name: 'Lume Pro',
    price: 'Grátis',
    period: 'durante o beta',
    description: 'Sem limites, para quem já vive de resultado de cliente.',
    features: [
      'Clientes e procedimentos ilimitados',
      'Anamnese digital com assinatura',
      'Tudo do plano Gratuito, sem restrições',
      'Suporte prioritário',
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="planos" className="bg-white py-24 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Planos
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Comece grátis.
            <br />
            <span className="text-gray-400 font-medium">Fique no Pro sem pagar nada, por enquanto.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Estamos em beta: todo mundo tem acesso ao Lume Pro de graça enquanto testamos e melhoramos o app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border ${
                plan.highlight
                  ? 'border-teal-600 bg-teal-50/40 shadow-xl shadow-teal-600/10 relative'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Beta gratuito
                </span>
              )}
              <h3 className="font-extrabold text-gray-900 text-xl mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-5">{plan.description}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-500 font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <SmartCTA variant="strip" />
        </div>
      </div>
    </section>
  )
}
