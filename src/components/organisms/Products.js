'use client';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { dataSite } from '@/data';

export default function ProductsPreview() {
  return (
    <section className='bg-white px-6 py-20 max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {dataSite.products.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className='relative rounded-2xl overflow-hidden shadow group h-[460px]'
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10' />

            {/* Category */}
            <span className='absolute top-4 left-4 z-20 text-sm font-medium bg-white rounded-full px-3 py-1 text-gray-800 shadow'>
              ${post.price}
            </span>

            {/* Arrow */}
            <span className='absolute top-4 right-4 z-20 w-36 h-8 bg-red-500 rounded-full text-white flex items-center justify-center'>
              Add to cart
            </span>

            {/* Text */}
            <div className='absolute bottom-4 left-4 right-4 z-20 bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 text-white'>
              <h3 className='text-lg font-semibold mb-1'>{post.title}</h3>
              <p className='text-sm'>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className='text-center mt-10'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-gray-100 transition'
        >
          View more
          <span className='w-6 h-6 flex items-center justify-center rounded-full bg-black text-white'>
            <FiArrowUpRight size={12} />
          </span>
        </Link>
      </div>
    </section>
  );
}
