'use client';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';
import Link from 'next/link';

export default function HeroSplit() {
  return (
    <section className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative'>
        <div>
          <p className='text-xs tracking-wide text-gray-500 mb-3'>
            {dataSite.name}
          </p>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            {dataSite.subtitle}
          </h1>
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-gray-600 mb-6 text-sm md:text-base'>
            {dataSite.description}
          </p>
          <Link href='/#services'>
            <button className='flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-gray-100 transition'>
              Explore more
              <span className='w-6 h-6 flex items-center justify-center rounded-full bg-black text-white'>
                <FaArrowRight size={10} />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* CURVED IMAGE */}
      <div className='relative w-full mt-10 z-0'>
        <svg
          viewBox='0 0 1440 150'
          className='absolute top-0 left-0 w-full h-auto z-10'
          preserveAspectRatio='none'
        >
          <path
            fill='#ffffff'
            d='M0,0 C300,150 1140,150 1440,0 L1440,0 L0,0 Z'
          />
        </svg>

        <div className='relative w-full h-[500px] overflow-hidden'>
          <Image
            src={dataSite.image_hero}
            alt='Hero Background'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
