import { ErrorMessages } from 'data'
import { VehicleMake, VehicleModel } from 'types'

const apiURL = process.env.API_URL

export async function fetchVehicleMakes(): Promise<VehicleMake[]> {
  try {
    const response = await fetch(`${apiURL}vehicles/GetMakesForVehicleType/car?format=json`)

    if (!response.ok) {
      throw new Error(ErrorMessages.FETCH_MAKES_ERROR)
    }

    const data = await response.json()
    return data.Results as VehicleMake[]
  } catch (error) {
    console.error('Error fetching vehicle makes:', error)
    return []
  }
}

export async function fetchVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
  try {
    const response = await fetch(
      `${apiURL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    )

    if (!response.ok) {
      throw new Error(ErrorMessages.FETCH_MODELS_ERROR)
    }

    const data = await response.json()
    return data.Results as VehicleModel[]
  } catch (error) {
    console.error('Error fetching vehicle models:', error)
    return []
  }
}

export function generateYearOptions() {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let year = currentYear; year >= 2015; year--) {
    years.push(year)
  }
  return years
}
