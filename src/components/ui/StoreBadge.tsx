interface StoreBadgeProps {
  store: 'apple' | 'android'
  url: string
  variant?: 'dark' | 'light' | 'outline'
  className?: string
}

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current" aria-hidden="true">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm11.86 10.08l2.881-2.861L3.063.136a1.499 1.499 0 0 0-.956-.136L13.197 11.004zm0 2.025L2.131 23.986a1.5 1.5 0 0 0 .928-.122l13.012-7.364-2.874-2.474z" />
  </svg>
)

export default function StoreBadge({
  store,
  url,
  variant = 'dark',
  className = '',
}: StoreBadgeProps) {
  const base =
    'inline-flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'

  const variants = {
    dark: 'bg-gray-950 text-white',
    light: 'bg-white text-gray-900',
    outline: 'border border-white/60 text-white hover:border-white hover:bg-white/10',
  }

  const label = store === 'apple' ? 'App Store' : 'Google Play'
  const sublabel = store === 'apple' ? 'Disponível na' : 'Disponível no'

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`${sublabel} ${label}`}
    >
      {store === 'apple' ? <AppleIcon /> : <AndroidIcon />}
      <span className="flex flex-col leading-tight">
        <span className="text-xs opacity-70">{sublabel}</span>
        <span className="text-sm font-bold">{label}</span>
      </span>
    </a>
  )
}
