export interface VehicleMake {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

export interface VehicleModel {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

export interface ResultPageProps {
  params: Promise<{
    makeId: string
    year: string
  }>
}
export interface ErrorMessageProps {
  message: string
}

export interface ModelCardProps {
  model: VehicleModel
}

export interface VehicleFilterProps {
  makes: VehicleMake[]
  years: number[]
}

export interface ModelListProps {
  models: VehicleModel[]
}
