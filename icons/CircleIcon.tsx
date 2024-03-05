import * as React from 'react';
import { SVGProps } from 'react';
const CircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    {...props}
  >
    <rect width={7} height={7} fill={props.fill} rx={3.5} />
  </svg>
);
export default CircleIcon;
