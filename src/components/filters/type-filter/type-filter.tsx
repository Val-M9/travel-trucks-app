import type React from 'react'
import type { TypeOptions } from './types'
import { IconCubeGrid, IconGrid, IconQuadGrid } from '../../'
import sharedStyles from '../shared-filters.module.css'

const typeOptions: TypeOptions[] = [
  { title: 'panelTruck', label: 'Van', Icon: IconGrid },
  { title: 'fullyIntegrated', label: 'Fully Integrated', Icon: IconQuadGrid },
  { title: 'alcove', label: 'Alcove', Icon: IconCubeGrid },
]

const TypeFilter: React.FC = () => {
  return (
    <div className={sharedStyles.filter}>
      <h2 className={sharedStyles.title}>Vehicle type</h2>
      <ul className={sharedStyles.list}>
        {typeOptions.map(({ title, label, Icon }) => (
          <li key={title} className={sharedStyles.item}>
            <label className={sharedStyles.label}>
              <input
                type="radio"
                name="type"
                value={title}
                className={sharedStyles.radio}
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

export default TypeFilter
