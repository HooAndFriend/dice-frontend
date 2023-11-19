import { SVGProps } from 'react'

export const ApiAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="M6.667 10H10m0 0h3.334M10 10v3.334m0-3.333V6.667m-6.667 7.334V6c0-.934 0-1.4.182-1.757.16-.314.415-.569.728-.728.357-.182.824-.182 1.757-.182h8c.934 0 1.4 0 1.757.182.313.16.569.414.728.728.182.356.182.823.182 1.756v8c0 .934 0 1.4-.182 1.757-.16.314-.415.57-.728.729-.356.181-.822.181-1.754.181H5.998c-.932 0-1.399 0-1.755-.181a1.666 1.666 0 0 1-.728-.729c-.182-.356-.182-.823-.182-1.756Z"
    />
  </svg>
)
