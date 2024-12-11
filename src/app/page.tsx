import { fetchVehicleMakes, generateYearOptions } from 'lib/utils'
import VehicleFilter from 'components/VehicleFilter'

export default async function Home() {
  const makes = await fetchVehicleMakes()
  const years = generateYearOptions()

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Car Dealer App</h1>
        <VehicleFilter makes={makes} years={years} />
      </div>
    </main>
  )
}
