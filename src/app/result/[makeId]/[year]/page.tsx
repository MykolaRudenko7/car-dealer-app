import { Suspense } from 'react'
import Link from 'next/link'
import { fetchVehicleMakes, fetchVehicleModels } from 'lib/utils'
import { ErrorMessage } from 'components/ErrorMessage'
import { ModelList } from 'components/ModelList'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { ErrorMessages } from 'data'
import { ResultPageProps, VehicleMake, VehicleModel } from 'types'

export default async function ResultPage({ params }: ResultPageProps) {
  const { makeId, year } = await params

  let models: VehicleModel[] = []
  let errorMessage: string | null = null

  try {
    models = await fetchVehicleModels(makeId, year)
    if (models.length === 0) {
      errorMessage = ErrorMessages.NO_MODELS_FOUND
    }
  } catch (error) {
    console.error('Error fetching vehicle models:', error)
    errorMessage = ErrorMessages.FETCH_MODELS_ERROR
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Vehicle Models</h1>
          <Link
            href="/"
            className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
          >
            Back to Search
          </Link>
        </div>

        {errorMessage && <ErrorMessage message={errorMessage} />}

        <Suspense fallback={<LoadingSpinner />}>
          <ModelList models={models} />
        </Suspense>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  try {
    const makes: VehicleMake[] = await fetchVehicleMakes()
    const years = Array.from({ length: 10 }, (_, i) => (2015 + i).toString())

    const params = []
    for (const make of makes.slice(0, 10)) {
      for (const year of years) {
        params.push({
          makeId: make.MakeId.toString(),
          year,
        })
      }
    }

    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
