import { v4 as uuidv4 } from 'uuid'
import { ModelCard } from 'components/ModelCard'
import { ErrorMessages } from 'data'
import { ModelListProps } from 'types'

export function ModelList({ models }: ModelListProps) {
  if (models.length === 0) {
    return (
      <div className="col-span-full text-center py-8">
        <p className="text-gray-600">{ErrorMessages.NO_MODELS_FOUND}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <ModelCard key={uuidv4()} model={model} />
      ))}
    </div>
  )
}
