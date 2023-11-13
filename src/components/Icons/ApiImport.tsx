import { SVGProps } from 'react'

export const ApiImportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.375 3.75h6.094a3.281 3.281 0 0 1 0 6.563H3.438a2.188 2.188 0 0 1 0-4.376h7.03a1.094 1.094 0 0 1 0 2.188H4.376"
    />
  </svg>
)
