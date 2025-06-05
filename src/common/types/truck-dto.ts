interface Gallery {
  thumb: string
  original: string
}

interface Review {
  reviewer_name: string
  reviewer_rating: number
  comment: string
}

export interface TruckDto {
  id: string
  name: string
  price: number
  rating: number
  location: string
  description: string
  form: string
  length: string
  width: string
  height: string
  tank: string
  consumption: string
  transmission: string
  engine: string
  AC: boolean
  bathroom: boolean
  kitchen: boolean
  TV: boolean
  radio: boolean
  refrigerator: boolean
  microwave: boolean
  gas: boolean
  water: boolean
  gallery: Gallery[]
  reviews: Review[]
}

export interface AllTrucksDto {
  total: number
  items: TruckDto[]
}
