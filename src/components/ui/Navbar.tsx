'use client'
// 'use client' é necessário aqui porque usamos useState e useEffect
// para detectar o scroll. Componentes client-side ainda geram HTML no servidor
// para o primeiro render (SSR/SSG), mas hidratam no browser depois.

import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Preços', href: '#precos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — texto simples, indexável pelo Google */}
        <a href="/" className="flex items-center gap-2 text-teal-600 font-extrabold text-xl tracking-tight">
          <span aria-hidden="true">✦</span>
          Lume
        </a>

        {/* Links de navegação — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://apps.apple.com/us/app/lume-prontu%C3%A1rio-est%C3%A9tico/id6760568566"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          Baixar grátis
        </a>
      </nav>
    </header>
  )
}
