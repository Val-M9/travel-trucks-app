export const formatTruckForm = (form: string): string => {
  switch (form) {
    case 'alcove':
      return 'Alcove'
    case 'panelTruck':
      return 'Panel truck'
    case 'fullyIntegrated':
      return 'Van'
    default:
      return ''
  }
}

export const formatTruckDetail = (detail: string): string => {
  const lastChar = detail.slice(-1)
  const number = detail.slice(0, -1)
  return `${number} ${lastChar}`
}
