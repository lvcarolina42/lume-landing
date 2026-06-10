'use client'

import { useEffect, useState } from 'react'
import StoreBadge from './StoreBadge'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/stores'

type Platform = 'ios' | 'android' | 'other'

interface SmartCTAProps {
  variant?: 'hero' | 'strip' | 'footer'
}

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'other'
}

export default function SmartCTA({ variant = 'hero' }: SmartCTAProps) {
  const [platform, setPlatform] = useState<Platform>('other')

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const badgeVariant = variant === 'footer' ? 'outline' : 'dark'

  const wrapperClass =
    variant === 'hero'
      ? 'flex flex-col sm:flex-row gap-3 mt-8'
      : variant === 'strip'
      ? 'flex flex-col sm:flex-row gap-3 justify-center mt-6'
      : 'flex flex-col sm:flex-row gap-3 justify-center'

  const highlightClass = 'ring-2 ring-teal-400 ring-offset-2 ring-offset-transparent rounded-xl'

  return (
    <div className={wrapperClass}>
      <div className={platform === 'ios' ? highlightClass : ''}>
        <StoreBadge
          store="apple"
          url={APP_STORE_URL}
          variant={variant === 'footer' ? 'outline' : platform === 'android' ? 'outline' : 'dark'}
          className={
            variant === 'footer'
              ? ''
              : platform === 'android'
              ? 'opacity-60'
              : ''
          }
        />
      </div>
      <div className={platform === 'android' ? highlightClass : ''}>
        <StoreBadge
          store="android"
          url={PLAY_STORE_URL}
          variant={variant === 'footer' ? 'outline' : platform === 'ios' ? 'outline' : 'dark'}
          className={
            variant === 'footer'
              ? ''
              : platform === 'ios'
              ? 'opacity-60'
              : ''
          }
        />
      </div>
    </div>
  )
}
