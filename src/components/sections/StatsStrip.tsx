const STATS = [
  { value: '+500', label: 'Profissionais\nregistrando evoluções' },
  { value: '30s', label: 'Para montar um\nantes/depois completo' },
  { value: '5 ★', label: 'Avaliação média\nna App Store' },
  { value: 'Grátis', label: 'Para iOS\ne Android' },
]

export default function StatsStrip() {
  return (
    <section className="bg-teal-800 py-10 px-6" aria-label="Números do Lume">
      <dl className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="text-center animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <dt className="text-3xl font-extrabold text-white tracking-tight">{s.value}</dt>
            <dd className="mt-1 text-teal-200/80 text-xs leading-snug whitespace-pre-line">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
