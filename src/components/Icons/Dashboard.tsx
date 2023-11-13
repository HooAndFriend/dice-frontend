import { SVGProps } from 'react'

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m4 10 .024-2m0 0H11.5M4.024 8C4 8.393 4 8.877 4 9.5v12c0 1.4 0 2.1.272 2.634.24.47.622.854 1.093 1.094.534.272 1.234.272 2.631.272H11.5M4.024 8c.03-.49.097-.838.248-1.135.24-.47.622-.853 1.093-1.093C5.9 5.5 6.6 5.5 8 5.5h14.5c1.4 0 2.1 0 2.634.272.47.24.854.622 1.094 1.093.151.297.218.645.248 1.135M11.5 8h14.976M11.5 8v17.5M26.476 8h.024m-.024 0c.024.392.024.875.024 1.496v12.008c0 1.397 0 2.096-.272 2.63-.24.47-.623.854-1.094 1.094-.534.272-1.233.272-2.63.272H11.5"
    />
  </svg>
)
