import type { IconProps } from '../../common/types'

const IconMicrowave = ({ className, width = 32, height = 32 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none">
      <path
        d="M26.6667 5.33331H5.33333C3.86057 5.33331 2.66666 6.52722 2.66666 7.99998V22.6666C2.66666 24.1394 3.86057 25.3333 5.33333 25.3333H26.6667C28.1394 25.3333 29.3333 24.1394 29.3333 22.6666V7.99998C29.3333 6.52722 28.1394 5.33331 26.6667 5.33331Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3333 10.6666H9.33333C8.59695 10.6666 8 11.2636 8 12V18.6666C8 19.403 8.59695 20 9.33333 20H17.3333C18.0697 20 18.6667 19.403 18.6667 18.6666V12C18.6667 11.2636 18.0697 10.6666 17.3333 10.6666Z"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 10.6666V20M8 25.3333V28M24 25.3333V28"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconMicrowave
