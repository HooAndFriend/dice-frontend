import { SVGProps } from 'react'

export const WorkspaceSettingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 21.25v-2.5C3.75 12.537 8.787 7.5 15 7.5s11.25 5.037 11.25 11.25v2.5m-18.75 0v-2.5a7.5 7.5 0 0 1 15 0v2.5m-11.25 0v-2.5a3.75 3.75 0 1 1 7.5 0v2.5"
    />
  </svg>
)
