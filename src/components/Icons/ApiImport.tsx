import { SVGProps } from 'react'

export const ApiImportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#9B99A5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.833 5h8.125a4.375 4.375 0 0 1 0 8.75H4.583a2.917 2.917 0 1 1 0-5.833h9.375a1.458 1.458 0 0 1 0 2.916H5.833"
    />
  </svg>
)
