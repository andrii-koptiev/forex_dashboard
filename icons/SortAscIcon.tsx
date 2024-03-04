import * as React from 'react';
import { SVGProps } from 'react';
const SortAscIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={'7px'}
    height={'4px'}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill={props.fill || '#A9A29C'}
        d='M3.003.193A.703.703 0 0 1 3.5-.004a.73.73 0 0 1 .497.197l2.8 2.667a.637.637 0 0 1 .154.729.675.675 0 0 1-.26.3.725.725 0 0 1-.39.111H.7a.725.725 0 0 1-.393-.112.675.675 0 0 1-.259-.301.637.637 0 0 1 .154-.727l2.8-2.667Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M7 4H0V0h7z' />
      </clipPath>
    </defs>
  </svg>
);
export default SortAscIcon;
