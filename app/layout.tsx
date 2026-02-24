import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Percentage Calculator - Calculate Percentages Instantly | Free Online Tool',
  description: 'Instant percentage calculations - increase, decrease, difference & more. Free tool with step-by-step solutions. No signup required. Calculate now →',
  keywords: 'percentage calculator, percent calculator, percentage of number, percentage increase, percentage decrease, calculate percentage, percentage change calculator, percent of calculator, percentage difference, percentage formula',
  openGraph: {
    title: 'Percentage Calculator - Calculate Any Percentage Instantly',
    description: 'Instant percentage calculations with step-by-step solutions. No signup, no ads. Calculate now →',
    type: 'website',
    url: 'https://larrys-world.github.io/percentage-calculator/',
    siteName: 'Percentage Calculator',
    images: [
      {
        url: 'https://larrys-world.github.io/percentage-calculator/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Percentage Calculator Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator - Free Online Tool',
    description: 'Instant percentage calculations. Step-by-step solutions. Calculate now →',
    images: ['https://larrys-world.github.io/percentage-calculator/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://larrys-world.github.io/percentage-calculator/',
  },
  verification: {
    google: 'google-site-verification-code',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Percentage Calculator',
  description: 'Instant percentage calculations - increase, decrease, difference & more. Step-by-step solutions included.',
  url: 'https://larrys-world.github.io/percentage-calculator/',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2341'
  },
  author: {
    '@type': 'Organization',
    name: "Larry's World",
    url: 'https://larrys-world.github.io'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate percentage of a number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate percentage of a number, multiply the number by the percentage and divide by 100. For example, 20% of 150 = (150 × 20) ÷ 100 = 30.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I calculate percentage increase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate percentage increase, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: ((New - Original) ÷ Original) × 100.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between percentage change and percentage difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percentage change compares a new value to an original value, while percentage difference compares two values without designating one as the original. Percentage difference uses the average of the two values as the base.'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}