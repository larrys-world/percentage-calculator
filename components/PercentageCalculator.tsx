'use client'

import { useState } from 'react'

type CalculationType = 'basic' | 'increase' | 'decrease' | 'difference' | 'percentage-of'

interface CalculationResult {
  value: number
  explanation: string
}

export default function PercentageCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>('basic')
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const num1 = parseFloat(value1)
    const num2 = parseFloat(value2)

    if (isNaN(num1) || (calculationType !== 'basic' && isNaN(num2))) {
      setResult(null)
      return
    }

    let calculatedResult: CalculationResult

    switch (calculationType) {
      case 'basic':
        // What is X% of Y?
        calculatedResult = {
          value: (num1 / 100) * num2,
          explanation: `${num1}% of ${num2} = ${((num1 / 100) * num2).toFixed(2)}`
        }
        break

      case 'percentage-of':
        // X is what % of Y?
        if (num2 === 0) {
          calculatedResult = { value: 0, explanation: 'Cannot divide by zero' }
        } else {
          const percentage = (num1 / num2) * 100
          calculatedResult = {
            value: percentage,
            explanation: `${num1} is ${percentage.toFixed(2)}% of ${num2}`
          }
        }
        break

      case 'increase':
        // Percentage increase from X to Y
        if (num1 === 0) {
          calculatedResult = { value: 0, explanation: 'Cannot calculate increase from zero' }
        } else {
          const increase = ((num2 - num1) / num1) * 100
          calculatedResult = {
            value: increase,
            explanation: `${increase.toFixed(2)}% increase from ${num1} to ${num2}`
          }
        }
        break

      case 'decrease':
        // Percentage decrease from X to Y
        if (num1 === 0) {
          calculatedResult = { value: 0, explanation: 'Cannot calculate decrease from zero' }
        } else {
          const decrease = ((num1 - num2) / num1) * 100
          calculatedResult = {
            value: decrease,
            explanation: `${decrease.toFixed(2)}% decrease from ${num1} to ${num2}`
          }
        }
        break

      case 'difference':
        // Percentage difference between X and Y
        const avg = (num1 + num2) / 2
        if (avg === 0) {
          calculatedResult = { value: 0, explanation: 'Both values are zero' }
        } else {
          const diff = (Math.abs(num1 - num2) / avg) * 100
          calculatedResult = {
            value: diff,
            explanation: `${diff.toFixed(2)}% difference between ${num1} and ${num2}`
          }
        }
        break

      default:
        calculatedResult = { value: 0, explanation: 'Invalid calculation type' }
    }

    setResult(calculatedResult)
  }

  const getPlaceholders = (): { placeholder1: string; placeholder2: string; label1: string; label2: string } => {
    switch (calculationType) {
      case 'basic':
        return {
          placeholder1: 'Enter percentage',
          placeholder2: 'Enter number',
          label1: 'Percentage (%)',
          label2: 'Number'
        }
      case 'percentage-of':
        return {
          placeholder1: 'Enter part',
          placeholder2: 'Enter whole',
          label1: 'Part',
          label2: 'Whole'
        }
      case 'increase':
      case 'decrease':
        return {
          placeholder1: 'Original value',
          placeholder2: 'New value',
          label1: 'From',
          label2: 'To'
        }
      case 'difference':
        return {
          placeholder1: 'First value',
          placeholder2: 'Second value',
          label1: 'Value 1',
          label2: 'Value 2'
        }
      default:
        return {
          placeholder1: '',
          placeholder2: '',
          label1: '',
          label2: ''
        }
    }
  }

  const { placeholder1, placeholder2, label1, label2 } = getPlaceholders()

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Percentage Calculator</h2>
        
        {/* Calculator Type Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Calculation Type
          </label>
          <select
            value={calculationType}
            onChange={(e) => {
              setCalculationType(e.target.value as CalculationType)
              setResult(null)
              setValue1('')
              setValue2('')
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="basic">What is X% of Y?</option>
            <option value="percentage-of">X is what % of Y?</option>
            <option value="increase">Percentage increase</option>
            <option value="decrease">Percentage decrease</option>
            <option value="difference">Percentage difference</option>
          </select>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label1}
            </label>
            <input
              type="number"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder={placeholder1}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              step="any"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label2}
            </label>
            <input
              type="number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder={placeholder2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              step="any"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Calculate
        </button>

        {/* Result Display */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-lg font-semibold text-gray-800">Result:</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">{result.explanation}</p>
          </div>
        )}
      </div>

      {/* Common Use Cases */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Common Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-semibold text-gray-700 mb-2">💰 Shopping & Discounts</h4>
            <p className="text-sm text-gray-600">Calculate sale prices, discounts, and savings</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-semibold text-gray-700 mb-2">📊 Business & Finance</h4>
            <p className="text-sm text-gray-600">Profit margins, growth rates, and ROI</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-semibold text-gray-700 mb-2">🍽️ Tips & Gratuity</h4>
            <p className="text-sm text-gray-600">Calculate tips at restaurants and services</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-semibold text-gray-700 mb-2">📈 Statistics & Data</h4>
            <p className="text-sm text-gray-600">Analyze changes and compare values</p>
          </div>
        </div>
      </div>
    </div>
  )
}