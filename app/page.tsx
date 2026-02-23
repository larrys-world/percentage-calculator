import PercentageCalculator from '@/components/PercentageCalculator'
import AdSense from '@/components/AdSense'
import BuyMeACoffee from '@/components/BuyMeACoffee'

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
        <div className="max-w-4xl mx-auto mt-8">
          <AdSense slot="mid-content" format="rectangle" />
        </div>
        
        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use the Percentage Calculator</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Select the type of percentage calculation you need from the dropdown menu</li>
              <li>Enter your values in the input fields</li>
              <li>Click "Calculate" to see your result instantly</li>
              <li>The calculator will show both the numerical result and a clear explanation</li>
            </ol>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Percentage Calculations</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Basic Percentage (What is X% of Y?)</h3>
                <p className="text-gray-600">
                  Find out what a certain percentage of a number is. For example: What is 20% of 150? 
                  Perfect for calculating tips, discounts, and tax.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Percentage Of (X is what % of Y?)</h3>
                <p className="text-gray-600">
                  Determine what percentage one number is of another. For example: 25 is what percent of 200? 
                  Useful for grades, completion rates, and comparisons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Percentage Increase</h3>
                <p className="text-gray-600">
                  Calculate the percentage increase from one value to another. For example: 
                  What's the percentage increase from 50 to 75? Great for growth rates and price changes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Percentage Decrease</h3>
                <p className="text-gray-600">
                  Find the percentage decrease between two values. For example: 
                  What's the percentage decrease from 100 to 80? Ideal for discounts and reductions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Percentage Difference</h3>
                <p className="text-gray-600">
                  Calculate the percentage difference between two values. Unlike increase/decrease, 
                  this uses the average of both values as the reference point.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Percentage Formula Reference</h2>
            <div className="space-y-3 font-mono text-sm bg-gray-50 p-4 rounded">
              <p>• Basic: (Percentage ÷ 100) × Number</p>
              <p>• Percentage of: (Part ÷ Whole) × 100</p>
              <p>• Increase: ((New - Original) ÷ Original) × 100</p>
              <p>• Decrease: ((Original - New) ÷ Original) × 100</p>
              <p>• Difference: (|Value1 - Value2| ÷ Average) × 100</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">How do I calculate 20% off a price?</h3>
                <p className="text-gray-600 mt-1">
                  Use the "Basic Percentage" calculation. Enter 20 as the percentage and the original price as the number. 
                  The result is your discount amount. Subtract this from the original price to get the sale price.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">What's the difference between percentage change and percentage difference?</h3>
                <p className="text-gray-600 mt-1">
                  Percentage change (increase/decrease) uses the original value as the reference point. 
                  Percentage difference uses the average of both values, making it symmetrical.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">How do I calculate a 15% tip?</h3>
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
          
          {/* Bottom Ad */}
          <div className="mt-8">
            <AdSense slot="bottom-content" format="rectangle" />
          </div>
          
          {/* Support Section */}
          <BuyMeACoffee />        </div>
      </div>
    </main>
  )
}