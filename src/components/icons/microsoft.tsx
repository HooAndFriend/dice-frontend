import { SVGProps } from 'react'

const MicrosoftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="#F35325" d="M1 1h6.5v6.5H1V1z" />
    <path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z" />
    <path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z" />
    <path fill="#FFBA08" d="M8.5 8.5H15V15H8.5V8.5z" />
  </svg>
)
export default MicrosoftIcon
