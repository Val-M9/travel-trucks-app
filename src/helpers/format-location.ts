export const formatLocation = (location: string): string => {
  return location.split(',').reverse().join(', ')
}
