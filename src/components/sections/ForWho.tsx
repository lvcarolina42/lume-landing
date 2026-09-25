const PERSONAS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-600 fill-current" aria-hidden="true">
        <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z" />
      </svg>
    ),
    title: 'Esteticistas',
    description: 'Botox, filler, skin care e tratamentos faciais com ficha clínica, agenda e evolução visual',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-600 fill-current" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    title: 'Médicos Estetas',
    description: 'Prontuário visual e clínico completo para procedimentos de alta complexidade',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-600 fill-current" aria-hidden="true">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </svg>
    ),
    title: 'Personal Trainers',
    description: 'Transformação corporal documentada sessão a sessão, com fotos que realmente se comparam',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-600 fill-current" aria-hidden="true">
        <path d="M17 2H7C5.9 2 5 2.9 5 4v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4H7V4h10v2zm2 4H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H5v-2h14v2zm0 4H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H5v-2h14v2z" />
      </svg>
    ),
    title: 'Nutricionistas',
    description: 'Evolução visual do paciente ao longo de todo o acompanhamento nutricional',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-600 fill-current" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: 'Fisioterapeutas',
    description: 'Reabilitação registrada em fotos para o paciente ver o quanto avançou',
  },
]

export default function ForWho() {
  return (
    <section id="para-quem" className="bg-white py-24 px-6" aria-labelledby="forwho-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Para quem é
          </span>
          <h2 id="forwho-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Se a evolução do cliente
            <br />
            <span className="text-gray-400 font-medium">faz parte do seu trabalho, é para você.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Qualquer profissional que acompanha resultados visuais e precisa de um histórico organizado por cliente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PERSONAS.map((persona, i) => (
            <article
              key={persona.title}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:border-teal-500 hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                {persona.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">{persona.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{persona.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
