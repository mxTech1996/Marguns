'use client';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';
import Link from 'next/link';

export default function PartnersSection() {
  return (
    <section className='bg-white px-6 py-20 max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        {/* LEFT CONTENT */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            {dataSite.info[0].title}
          </h2>
          <p className='text-gray-600 mb-10'>{dataSite.info[1].description}</p>

          {/* Feedback */}
          <div className='flex items-center gap-4'>
            <div className='flex -space-x-3'>
              <Image
                src='/images/avatar1.jpg'
                alt='avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
              <Image
                src='/images/avatar2.jpg'
                alt='avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
              <Image
                src='/images/avatar3.jpg'
                alt='avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
            </div>
            <div>
              <p className='font-bold'>40+</p>
              <p className='text-sm text-gray-500'>
                Positive feedback by our clients
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col gap-10 items-start'>
          <div>
            <h3 className='text-6xl font-bold leading-none'>
              20<span className='text-red-500 text-5xl align-top'>+</span>
            </h3>
            <p className='text-sm text-gray-500 mt-2'>Trusted partners</p>
          </div>

          {/* Video Card */}
          <div className='relative w-full rounded-xl overflow-hidden shadow-md group'>
            <Image
              src={dataSite.image_hero2}
              alt='video'
              width={640}
              height={360}
              className='object-cover w-full h-64'
            />
            <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition' />
            <div className='absolute top-6 left-6 text-white text-xl font-semibold'>
              We prioritize your goals <br /> above all else
            </div>

            {/* <button className='absolute top-6 right-6 bg-white w-10 h-10 flex items-center justify-center rounded-full text-black shadow-md hover:scale-105 transition'>
              <FaPlay size={14} />
            </button> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
        <div>
          <h3 className='text-3xl font-bold mb-3'>{dataSite.info[1].title} </h3>
          <p className='text-gray-600 max-w-xl'>
            {dataSite.info[1].description}
          </p>
        </div>
        <Link href='/#products'>
          <button className='flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-gray-100 transition'>
            Explore more
            <span className='w-6 h-6 flex items-center justify-center rounded-full bg-black text-white'>
              <FaArrowRight size={10} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
