import type { IconProps } from '../../common/types'

const IconWater = ({ className, width = 32, height = 32 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none">
      <path
        d="M25 20C25 25.5231 21.5231 29 16 29C10.4769 29 7 25.5231 7 20C7 14.0731 13.4519 6.07187 15.4306 3.75749C15.501 3.67526 15.5884 3.60925 15.6867 3.56399C15.7851 3.51874 15.8921 3.4953 16.0003 3.4953C16.1086 3.4953 16.2155 3.51874 16.3139 3.56399C16.4122 3.60925 16.4996 3.67526 16.57 3.75749C18.5481 6.07187 25 14.0731 25 20Z"
        stroke="#101828"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M21.5 20.5C21.5 21.6935 21.0259 22.8381 20.182 23.682C19.3381 24.5259 18.1935 25 17 25"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconWater
