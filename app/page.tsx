import PercentageCalculator from '@/components/PercentageCalculator'
import AdSense from '@/components/AdSense'
import BuyMeACoffee from '@/components/BuyMeACoffee'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        {/* Top Ad */}
        <AdSense slot="top-banner" format="horizontal" className="mb-6" />
        
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
          <AdSense slot="mid-content" format="rectangle" />
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
                  <h4 className="font-semibold text-gray-700">Shopping & Finance</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Calculate sale discounts</li>
                    <li>• Determine tip amounts</li>
                    <li>• Figure out tax rates</li>
                    <li>• Compare price changes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-700">Business & Education</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Calculate profit margins</li>
                    <li>• Determine growth rates</li>
                    <li>• Convert test scores</li>
                    <li>• Analyze statistics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Percentage Formula Reference</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700">Basic Percentage Formula</h3>
                <p className="text-gray-600 mt-2">Percentage = (Part / Whole) × 100</p>
                <p className="text-sm text-gray-500 mt-1">Example: 25 out of 100 = (25/100) × 100 = 25%</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700">Percentage Change Formula</h3>
                <p className="text-gray-600 mt-2">% Change = ((New Value - Old Value) / Old Value) × 100</p>
                <p className="text-sm text-gray-500 mt-1">Example: Price increased from $50 to $60 = ((60-50)/50) × 100 = 20%</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-gray-700">Finding a Percentage of a Number</h3>
                <p className="text-gray-600 mt-2">Result = (Percentage / 100) × Number</p>
                <p className="text-sm text-gray-500 mt-1">Example: 15% of 200 = (15/100) × 200 = 30</p>
              </div>
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">What is a percentage?</h3>
                <p className="text-gray-600 mt-1">
                  A percentage is a way of expressing a number as a fraction of 100. The symbol % means "per hundred" 
                  or "out of 100". For example, 50% means 50 out of 100, or half.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">How do I calculate a discount percentage?</h3>
                <p className="text-gray-600 mt-1">
                  To find the discount percentage: ((Original Price - Sale Price) / Original Price) × 100. 
                  For example, if an item originally costs $100 and is on sale for $75, the discount is 25%.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">How do I calculate tip percentage?</h3>
                <p className="text-gray-600 mt-1">
                  Select "Basic Percentage", enter 15 as the percentage and your bill total as the number. 
                  The result is your tip amount.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">Is this calculator accurate?</h3>
                <p className="text-gray-600 mt-1">
                  Yes! Our calculator uses standard mathematical formulas and provides results accurate to 2 decimal places. 
                  It's suitable for all common percentage calculations.
                </p>
              </div>
            </div>
          </section>
          
          {/* Related Tools - NEW SECTION */}
          <RelatedTools />
          
          {/* Bottom Ad */}
          <div className="mt-8">
            <AdSense slot="bottom-content" format="rectangle" />
          </div>
          
          {/* Support Section */}
          <BuyMeACoffee />
        </div>
      </div>
    </main>
  )
}