'use client'

import { useState } from 'react'

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      itemScope
      itemType="https://schema.org/Question"
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span
          itemProp="name"
          className="font-semibold text-gray-900 text-sm md:text-base leading-snug"
        >
          {question}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 text-teal-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        itemScope
        itemType="https://schema.org/Answer"
      >
        <div className="overflow-hidden">
          <p itemProp="text" className="text-gray-500 text-sm leading-relaxed pb-5 pr-9">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
