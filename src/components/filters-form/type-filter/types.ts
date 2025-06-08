import type { IconProps } from '../../../common/types'

export type TypeOptions = {
  title: string
  label: string
  Icon: React.FC<IconProps>
}

export interface TypeFilterProps {
  value: string
  onChange: (value: string) => void
}
