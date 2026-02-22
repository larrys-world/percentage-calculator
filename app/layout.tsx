import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Percentage Calculator - Quick & Easy Percent Calculations',
  description: 'Free online percentage calculator. Calculate percentages, percentage increase/decrease, and percentage of a number. Simple, fast, and mobile-friendly.',
  keywords: 'percentage calculator, percent calculator, percentage of number, percentage increase, percentage decrease, calculate percentage',
  openGraph: {
    title: 'Percentage Calculator - Quick & Easy Percent Calculations',
    description: 'Free online percentage calculator. Calculate percentages, percentage increase/decrease, and percentage of a number.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator',
    description: 'Free online percentage calculator. Quick and easy percent calculations.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://percentage-calculator.tools',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}