import { ModelCardProps } from 'types'

export function ModelCard({ model }: ModelCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{model.Model_Name}</h2>
      <p className="text-gray-600">Make: {model.Make_Name}</p>
    </div>
  )
}
