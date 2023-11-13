import { SVGProps } from 'react'

export const ErdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.5 15v6.25c0 2.071-3.358 3.75-7.5 3.75-4.142 0-7.5-1.679-7.5-3.75V15m15 0V8.75m0 6.25c0 2.071-3.358 3.75-7.5 3.75-4.142 0-7.5-1.679-7.5-3.75m15-6.25C22.5 6.679 19.142 5 15 5c-4.142 0-7.5 1.679-7.5 3.75m15 0c0 2.071-3.358 3.75-7.5 3.75-4.142 0-7.5-1.679-7.5-3.75m0 6.25V8.75"
    />
  </svg>
)
