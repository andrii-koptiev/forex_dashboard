import { SVGProps } from 'react';
const SortDescIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width || '7px'}
    height={props.height || '4px'}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill={props.fill || '#A9A29C'}
        d='M3.997 3.807a.703.703 0 0 1-.497.197.73.73 0 0 1-.497-.197L.203 1.14A.637.637 0 0 1 .049.411a.675.675 0 0 1 .26-.3A.725.725 0 0 1 .699 0h5.6c.14 0 .277.038.393.112a.675.675 0 0 1 .259.301.637.637 0 0 1-.154.727l-2.8 2.667Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h7v4H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SortDescIcon;
