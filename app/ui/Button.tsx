'use client';

import Link from 'next/link';
import { FC } from 'react';

type Props = {
  buttonText: string;
  hrefLink?: string;
  handleClick?: () => void;
};

const Button: FC<Props> = ({ buttonText, handleClick, hrefLink = ' ' }) => {
  return (
    <Link href={hrefLink}>
      <button
        type='button'
        className='focus:outline-none text-black  bg-beige hover:opacity-50 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
