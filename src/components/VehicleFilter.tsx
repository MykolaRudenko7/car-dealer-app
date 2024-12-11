'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { VehicleFilterProps } from 'types'

export default function VehicleFilter({ makes, years }: VehicleFilterProps) {
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const router = useRouter()

  const handleSubmit = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`)
    }
  }

  return (
    <div className="space-y-6 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700">
            Vehicle Make
          </label>
          <select
            id="make"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Model Year
          </label>
          <select
            id="year"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedMake || !selectedYear}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  )
}
