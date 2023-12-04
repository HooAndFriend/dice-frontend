import { SVGProps } from 'react'

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={500}
      height={500}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <rect width={500} height={500} fill="#fff" rx={10} />
    </mask>
    <g mask="url(#a)">
      <rect
        width={500}
        height={500}
        x={-30.591}
        y={-165}
        fill="#A3D5CC"
        rx={10}
        transform="rotate(15 -30.59 -165)"
      />
      <rect
        width={500}
        height={500}
        x={379.41}
        y={-135}
        fill="#5DA0DD"
        rx={10}
        transform="rotate(15 379.41 -135)"
      />
      <rect
        width={500}
        height={500}
        x={414.41}
        y={240}
        fill="#DD5D5D"
        rx={10}
        transform="rotate(15 414.41 240)"
      />
      <rect
        width={500}
        height={500}
        x={-25.592}
        y={160}
        fill="#A3C992"
        rx={10}
        transform="rotate(15 -25.592 160)"
      />
    </g>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M108.267 83.704c7.7-5.72 27.983-11.819 51.48-8.58 20.529 2.83 29.402 10.255 35.342 19.495M324.863 92.197c9.872-12.793 27.108-15.312 37.912-15.915 10.804-.603 23.03-.002 32.735 3.122M10 94.869l62.522 38.815M212.094 151.183c23.492-15.067 80.512-15.097 93.453-8.387M434.36 132.202c11.624-6.043 48.344-40.122 59.964-48.489M74.634 136.384c-1.552 16.914-1.911 59.927 19.798 75.935 21.748 16.036 107.564-1.558 115.388-4.328 7.388-2.616 7.609-35.634-4.083-65.669-9.82-25.227-93.674-16.893-128.376-10.691"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M313.77 128.322c27.358-12.217 100.233-4.113 114.088 0 17.317 5.141 18.943 47.249 17.369 62.671-1.574 15.422-93.476 15.7-114.728 14.843-17.001-.686-22.453-53.196-18.517-75.471M144.464 148.179c-1.834 1.129-5.164 4.403-3.81 8.466 1.692 5.079 15.661 11.428 16.085 3.809.423-7.619-2.117-10.582-5.503-7.195"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M364.61 143.176c-2.823 2.539-7.622 8.211-4.235 10.581 4.235 2.963 19.048 10.582 17.778 0-1.016-8.465-4.938-7.759-6.772-6.349l-3.81 3.387"
    />
    <circle cx={249.999} cy={250} r={45} fill="#000" />
  </svg>
)
