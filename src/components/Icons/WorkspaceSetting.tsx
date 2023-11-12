import { SVGProps } from 'react'

export const WorkspaceSettingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 28.333V25c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v3.333m-25 0V25c0-5.523 4.477-10 10-10s10 4.477 10 10v3.333m-15 0V25a5 5 0 0 1 10 0v3.333"
    />
  </svg>
)
