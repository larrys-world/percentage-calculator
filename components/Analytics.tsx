'use client'

import Script from 'next/script'

export default function Analytics() {
  // For GitHub Pages deployment, use the github.io domain
  const domain = 'larrys-world.github.io'
  
  if (!domain) {
    console.warn('Analytics domain not configured')
    return null
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  )
}