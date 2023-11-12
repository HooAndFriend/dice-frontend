import { SVGProps } from 'react'

export const ErdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 20v8.333c0 2.761-4.477 5-10 5s-10-2.239-10-5v-8.334m20 0v-8.333m0 8.333c0 2.762-4.477 5-10 5s-10-2.238-10-5m20-8.333c0-2.761-4.477-5-10-5s-10 2.239-10 5m20 0c0 2.761-4.477 5-10 5s-10-2.239-10-5m0 8.333v-8.333"
    />
  </svg>
)
