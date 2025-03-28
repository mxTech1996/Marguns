'use client';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='px-6 py-4 flex justify-between items-center'>
      {/* Logo */}
      <div className='text-xl font-bold'>
        Marguns
        <span className='text-red-500 align-super text-xs'>Industries</span>
      </div>

      {/* Nav */}
      <nav className='bg-white border rounded-full px-6 py-2 shadow-sm flex items-center gap-6 text-sm font-medium'>
        <Link href='/#services' className='hover:text-[#2F5F53] transition'>
          Services
        </Link>
        <Link href='/products' className='hover:text-[#2F5F53] transition'>
          Products
        </Link>
        <Link href='/#about' className='hover:text-[#2F5F53] transition'>
          About us
        </Link>
        <Link
          href='/more-information'
          className='hover:text-[#2F5F53] transition'
        >
          Contact us
        </Link>
        {/* <Link href='#' className='hover:text-[#2F5F53] transition'>
          career
        </Link>
        <Link href='#' className='hover:text-[#2F5F53] transition'>
          blog
        </Link>
        <Link href='#' className='hover:text-[#2F5F53] transition'>
          all pages
        </Link> */}

        <Link href='/my-cart'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:opacity-90 transition'>
            <FaShoppingCart size={12} />
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
