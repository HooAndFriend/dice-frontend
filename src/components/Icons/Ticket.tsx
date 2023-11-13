import { SVGProps } from 'react'

export const TicketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 8.75h-2.69c-.621 0-1.06-.628-1.06-1.25a3.75 3.75 0 1 0-7.5 0c0 .622-.439 1.25-1.06 1.25H10c-.69 0-1.25.56-1.25 1.25v2.69c0 .621-.628 1.06-1.25 1.06a3.75 3.75 0 1 0 0 7.5c.622 0 1.25.439 1.25 1.06V25c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25v-2.69c0-.621-.628-1.06-1.25-1.06a3.75 3.75 0 1 1 0-7.5c.622 0 1.25-.439 1.25-1.06V10c0-.69-.56-1.25-1.25-1.25Z"
    />
  </svg>
)
