import { SVGProps } from 'react'

export const CollectionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 10h.032m0 0h29.936M5.032 10C5 10.522 5 11.17 5 12v16c0 1.866 0 2.799.363 3.512.32.627.83 1.138 1.457 1.458.712.363 1.645.363 3.508.363h19.344c1.863 0 2.795 0 3.507-.363a3.339 3.339 0 0 0 1.458-1.458c.363-.713.363-1.644.363-3.508v-16.01c0-.828 0-1.472-.032-1.995M5.032 10c.04-.654.13-1.117.331-1.513.32-.628.83-1.137 1.457-1.457.713-.363 1.647-.363 3.514-.363h19.333c1.867 0 2.799 0 3.512.363.627.32 1.139.83 1.458 1.457.202.396.291.86.331 1.513m0 0H35m-11.667 8.334 3.334 3.333-3.334 3.333m-6.666 0-3.334-3.333 3.334-3.333"
    />
  </svg>
)
