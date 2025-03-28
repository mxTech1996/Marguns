'use client';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

export default function ProductsPreview() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <>
      <Navbar />

      <section id='products' className='bg-white px-6 py-20 max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            Professional Services & Courses
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {dataSite.products.map((post) => {
            const exists = validateProductInCart(post.id);
            return (
              <div
                key={post.id}
                className='relative rounded-2xl overflow-hidden shadow group h-[460px]'
              >
                {/* Imagen */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />

                {/* Gradiente overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10' />

                {/* Precio */}
                <span className='absolute top-4 left-4 z-20 text-sm font-medium bg-white rounded-full px-3 py-1 text-gray-800 shadow'>
                  ${post.price}
                </span>

                {/* Botón */}
                <button
                  onClick={() => handleAddOrRemoveProduct(post.id)}
                  style={{ backgroundColor: exists ? '#f44336' : '#4caf50' }}
                  className='absolute top-4 right-4 z-20 w-36 h-8 bg-red-500 rounded-full text-white flex items-center justify-center text-sm font-medium'
                >
                  {exists ? 'Remove from cart' : 'Add to cart'}
                </button>

                {/* Contenedor inferior */}
                <div className='absolute bottom-4 left-4 right-4 z-20 space-y-2'>
                  {/* Título siempre visible */}
                  <div className='bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 text-white'>
                    <h3 className='text-lg font-semibold'>{post.name}</h3>
                  </div>

                  {/* Descripción solo visible en hover (y sin ocupar espacio) */}
                  <div className='bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 text-white opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-bottom transition-all duration-300'>
                    <p className='text-sm'>{post.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
