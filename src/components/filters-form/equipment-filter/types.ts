import type { IconProps } from '../../../common/types/icon-props'

export type EquipmentOptions = {
  title: string
  label: string
  Icon: React.FC<IconProps>
  value?: string
}

export interface EquipmentFilterProps {
  value: string[]
  onChange: (value: string[]) => void
}
