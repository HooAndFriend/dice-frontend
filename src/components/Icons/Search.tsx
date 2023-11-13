import { SVGProps } from 'react'

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={22}
    fill="none"
    {...props}
  >
    <circle
      cx={7.124}
      cy={7.01}
      r={6}
      stroke="#fff"
      strokeWidth={2}
      transform="rotate(-15 7.124 7.01)"
    />
    <path fill="#fff" d="m10.169 11.83 1.414-1.414 7.071 7.07-1.414 1.415z" />
  </svg>
)
