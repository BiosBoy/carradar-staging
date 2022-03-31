export interface ICarMainData {
  brand: string
  model: string
  color: string
  manufacturedDate: string
  vinCode: string
  number: string
  info: string
}

export interface ICarCollectedData {
  icon: string
  title: string
  data: string
}
export interface ICarData {
  image: string
  mainData: ICarMainData
  collectedData: ICarCollectedData[]
}
export interface IStore {
  searchCarNumber: string
  carData: ICarData
  statuses: {
    isSearchError: boolean
    isSearchInProgress: boolean
  }
  error: string
}
