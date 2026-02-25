'use client'

import { useEffect } from 'react'
import PercentageCalculator from '@/components/PercentageCalculator'
import { HeaderAd, FooterAd, InContentAd } from '@/components/monetization/AdSense'
import BuyMeACoffee from '@/components/BuyMeACoffee'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'

// AdSense configuration - replace with actual values when available
const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'
const ADSENSE_SLOTS = {
  header: 'XXXXXXXXXX',
  footer: 'XXXXXXXXXX',
  content: 'XXXXXXXXXX'
}

export default function Home() {
  // Add AdSense script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT
    script.async = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        {/* Top Ad */}
        <HeaderAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.header} />
        
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Free Online Percentage Calculator
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Calculate percentages quickly and easily. Perfect for shopping discounts, business calculations, 
          tips, grades, and more. No signup required - 100% free.
        </p>
        
        <PercentageCalculator />
        
        {/* Mid-content Ad */}
        <div className="mt-8 mb-8">
          <InContentAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.content} />
        </div>
        
        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-12">
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use Our Percentage Calculator</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Our free percentage calculator makes it easy to solve any percentage problem. Whether you're calculating 
                discounts, tips, tax rates, or grade percentages, we've got you covered.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Common Percentage Calculations:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Basic Percentage:</strong> Find what X% of Y equals (e.g., 20% of 150)</li>
                <li><strong>Percentage Increase:</strong> Calculate the percentage increase from one value to another</li>
                <li><strong>Percentage Decrease:</strong> Find the percentage decrease between values</li>
                <li><strong>Percentage Difference:</strong> Compare two values as a percentage</li>
                <li><strong>Percentage of Total:</strong> Find what percentage one value is of another</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Real-World Applications:</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-700 mb-2">Shopping & Finance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Calculate sale discounts</li>
                    <li>• Determine tax amounts</li>
                    <li>• Figure out tips at restaurants</li>
                    <li>• Compare price changes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-700 mb-2">Business & Education</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Calculate profit margins</li>
                    <li>• Determine grade percentages</li>
                    <li>• Analyze growth rates</li>
                    <li>• Track performance metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Percentage Formulas & Examples</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-700 mb-2">Basic Percentage Formula</h3>
                <p className="text-gray-600 mb-2">Percentage = (Part / Whole) × 100</p>
                <p className="text-sm text-gray-500">Example: What percentage is 25 out of 200?</p>
                <p className="text-sm text-gray-500">Answer: (25 / 200) × 100 = 12.5%</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-700 mb-2">Percentage Increase Formula</h3>
                <p className="text-gray-600 mb-2">Increase % = ((New Value - Old Value) / Old Value) × 100</p>
                <p className="text-sm text-gray-500">Example: Price increased from $50 to $65</p>
                <p className="text-sm text-gray-500">Answer: ((65 - 50) / 50) × 100 = 30% increase</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-gray-700 mb-2">Percentage Decrease Formula</h3>
                <p className="text-gray-600 mb-2">Decrease % = ((Old Value - New Value) / Old Value) × 100</p>
                <p className="text-sm text-gray-500">Example: Price decreased from $80 to $60</p>
                <p className="text-sm text-gray-500">Answer: ((80 - 60) / 80) × 100 = 25% decrease</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Buy Me a Coffee */}
        <BuyMeACoffee />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Related Tools */}
        <RelatedTools />
        
        {/* Bottom Ad */}
        <FooterAd client={ADSENSE_CLIENT} slot={ADSENSE_SLOTS.footer} />
      </div>
    </main>
  )
}