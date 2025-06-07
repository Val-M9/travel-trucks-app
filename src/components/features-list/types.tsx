export type FeatureType =
  | { type: 'transmission'; value: 'manual' | 'automatic' }
  | { type: 'engine'; value: 'petrol' | 'diesel' | 'hybrid' }
  | { type: 'AC'; value: boolean }
  | { type: 'bathroom'; value: boolean }
  | { type: 'kitchen'; value: boolean }
  | { type: 'TV'; value: boolean }
  | { type: 'radio'; value: boolean }
  | { type: 'refrigerator'; value: boolean }
  | { type: 'microwave'; value: boolean }
  | { type: 'gas'; value: boolean }
  | { type: 'water'; value: boolean }

export interface FeaturesListProps {
  feature: FeatureType
}
