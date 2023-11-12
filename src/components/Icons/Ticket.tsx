import { SVGProps } from 'react'

export const TicketIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M33.333 11.667h-3.585c-.83 0-1.415-.838-1.415-1.667a5 5 0 1 0-10 0c0 .83-.585 1.667-1.414 1.667h-3.586c-.92 0-1.666.746-1.666 1.666v3.586c0 .83-.838 1.414-1.667 1.414a5 5 0 0 0 0 10c.83 0 1.667.586 1.667 1.415v3.585c0 .92.746 1.667 1.666 1.667h20c.92 0 1.667-.746 1.667-1.667v-3.585c0-.83-.837-1.415-1.667-1.415a5 5 0 1 1 0-10c.83 0 1.667-.585 1.667-1.414v-3.586c0-.92-.746-1.666-1.667-1.666Z"
    />
  </svg>
)
