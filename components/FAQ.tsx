'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I calculate percentage of a number?",
    answer: "To calculate percentage of a number, multiply the number by the percentage and divide by 100. For example, to find 20% of 150: (150 × 20) ÷ 100 = 30. Our calculator makes this instant - just enter your values!"
  },
  {
    question: "How do I calculate percentage increase or decrease?",
    answer: "For percentage increase: subtract the original value from the new value, divide by the original value, and multiply by 100. For decrease, if the new value is smaller, the result will be negative. Formula: ((New - Original) ÷ Original) × 100"
  },
  {
    question: "What's the difference between percentage change and percentage difference?",
    answer: "Percentage change has a clear 'before' and 'after' value (like price increases). Percentage difference compares two values equally without one being the original - it uses the average of both values as the base."
  },
  {
    question: "How do I calculate what percentage one number is of another?",
    answer: "Divide the first number by the second number and multiply by 100. For example, to find what percentage 25 is of 200: (25 ÷ 200) × 100 = 12.5%"
  },
  {
    question: "How do I add or subtract a percentage from a number?",
    answer: "To add X% to a number, multiply the number by (1 + X/100). To subtract X%, multiply by (1 - X/100). For example, to add 15% to 80: 80 × 1.15 = 92"
  },
  {
    question: "What are common uses for percentage calculations?",
    answer: "Percentages are used everywhere: calculating tips and taxes, finding discounts and markups, analyzing test scores and grades, measuring growth rates, comparing statistics, calculating interest rates, and determining profit margins."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}