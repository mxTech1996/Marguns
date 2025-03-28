'use client';
import { useState } from 'react';
import { FaQuoteLeft, FaUserCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { dataSite } from '@/data';

function StarRating({ rating }) {
  const maxStars = 5;

  return (
    <div className='flex gap-1 text-yellow-400'>
      {Array.from({ length: maxStars }).map((_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );
}

export default function ReferenceCarousel() {
  const itemsPerPage = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = dataSite.references.length;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= totalItems ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? totalItems - itemsPerPage : prev - itemsPerPage
    );
  };

  const visibleItems = dataSite.references.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className='bg-[#F9F9F9] px-6 py-20 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        What our clients say
      </h2>

      <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {visibleItems.map((ref, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl shadow-md flex flex-col justify-between min-h-[280px]'
            >
              <FaQuoteLeft className='text-[#2F5F53] text-2xl mb-4' />

              <p className='text-gray-700 text-base mb-6 flex-1'>
                &quot;{ref.description}&quot;
              </p>

              <div className='flex items-center gap-3'>
                <FaUserCircle className='text-3xl text-gray-400' />
                <div>
                  <p className='font-semibold text-gray-900'>{ref.name}</p>
                  <StarRating rating={ref.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <div className='flex justify-center gap-4 mt-4'>
          <button
            onClick={handlePrev}
            className='px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
