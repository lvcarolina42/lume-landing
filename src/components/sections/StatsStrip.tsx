const STATS = [
  { value: '+500', label: 'Profissionais\nusando o Lume' },
  { value: '< 60s', label: 'Para registrar\numa sessão completa' },
  { value: '24', label: 'Regiões anatômicas\nno formulário clínico' },
  { value: '100%', label: 'Dados privados,\nnunca compartilhados' },
]

export default function StatsStrip() {
  return (
    <section className="bg-teal-800 py-10 px-6" aria-label="Números do Lume">
      <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.value} className="text-center">
            <dt className="text-3xl font-extrabold text-white tracking-tight">{s.value}</dt>
            <dd className="mt-1 text-teal-200 text-xs leading-snug whitespace-pre-line">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
