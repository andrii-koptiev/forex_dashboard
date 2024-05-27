import * as React from 'react';
import { SVGProps } from 'react';
const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill={props.fill}
      fillOpacity={0.6}
      d='m5 15.863-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2Zm.5 3.1-.4-.5.4-2 2 2-2 .5Zm9.4-10.6-8.1 8-.6-.6 8.1-8 .6.6ZM19.3 4.663c-1.1-1.1-2.6-.5-2.6-.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-.1.6-1.5-.5-2.6Zm-1.9.9-.5-.5c.6-.6 1.1-.1 1.1-.1l-.6.6Z'
    />
  </svg>
);

export default EditIcon;
