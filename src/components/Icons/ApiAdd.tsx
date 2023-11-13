import { SVGProps } from 'react'

export const ApiAddIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 7.5h2.5m0 0H10m-2.5 0V10m0-2.5V5m-5 5.5v-6c0-.7 0-1.05.136-1.318.12-.235.311-.426.546-.546C3.45 2.5 3.8 2.5 4.5 2.5h6c.7 0 1.05 0 1.317.136.236.12.427.311.547.546.136.268.136.618.136 1.318v6c0 .7 0 1.05-.136 1.317-.12.236-.311.427-.547.547-.267.136-.616.136-1.315.136H4.498c-.699 0-1.049 0-1.316-.136a1.25 1.25 0 0 1-.546-.547C2.5 11.55 2.5 11.2 2.5 10.5Z"
    />
  </svg>
)
