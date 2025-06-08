import type React from 'react'
import {
  IconAir,
  IconCup,
  IconDiagram,
  IconFridge,
  IconMicrowave,
  IconPetrol,
  IconRadio,
  IconShower,
  IconStove,
  IconTV,
  IconWater,
} from '../../icons'
import type { EquipmentFilterProps, EquipmentOptions } from './types'
import sharedStyles from '../shared-filters.module.css'

const equipmentOptions: EquipmentOptions[] = [
  { title: 'AC', label: 'AC', Icon: IconAir },
  { title: 'automatic', label: 'Automatic', Icon: IconDiagram },
  { title: 'manual', label: 'Manual', Icon: IconDiagram },
  { title: 'petrol', label: 'Petrol', Icon: IconPetrol },
  { title: 'diesel', label: 'Diesel', Icon: IconPetrol },
  { title: 'hybrid', label: 'Hybrid', Icon: IconPetrol },
  { title: 'bathroom', label: 'Bathroom', Icon: IconShower },
  { title: 'kitchen', label: 'Kitchen', Icon: IconCup },
  { title: 'refrigerator', label: 'Refrigerator', Icon: IconFridge },
  { title: 'microwave', label: 'Microwave', Icon: IconMicrowave },
  { title: 'gas', label: 'Gas', Icon: IconStove },
  { title: 'water', label: 'Water', Icon: IconWater },
  { title: 'TV', label: 'TV', Icon: IconTV },
  { title: 'radio', label: 'Radio', Icon: IconRadio },
]

const EquipmentFilter: React.FC<EquipmentFilterProps> = ({
  value,
  onChange,
}) => {
  const handleCheckboxChange = (title: string) => {
    const newValue = value.includes(title)
      ? value.filter((item) => item !== title)
      : [...value, title]
    onChange(newValue)
  }

  return (
    <div className={sharedStyles.filter}>
      <h2 className={sharedStyles.title}>Vehicle equipment</h2>
      <ul className={sharedStyles.list}>
        {equipmentOptions.map(({ title, label, Icon }) => (
          <li key={label} className={sharedStyles.item}>
            <label className={sharedStyles.label}>
              <input
                type="checkbox"
                name={title}
                className={sharedStyles.checkbox}
                checked={value.includes(title)}
                onChange={() => handleCheckboxChange(title)}
              />
              <div className={sharedStyles.box}>
                <Icon className={sharedStyles.icon} />
                <span className={sharedStyles.text}>{label}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EquipmentFilter
