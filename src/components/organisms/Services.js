'use client';
import { dataSite } from '@/data';
import { FiBarChart } from 'react-icons/fi';

export default function ServicesGrid() {
  return (
    <section id='services' className='bg-white px-6 py-20 max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dataSite.services.slice(0, 6).map((service, index) => (
          <div
            key={index + 'id'}
            className='bg-[#fdf9fc] rounded-2xl p-6 relative hover:shadow-md transition'
          >
            {/* Flecha superior derecha */}
            <div className='absolute top-6 right-6 text-black'>
              <FiBarChart size={22} />
            </div>

            {/* Categoría */}
            <div className='mb-4'>
              {/* <span className='border px-3 py-1 text-sm rounded-full text-black border-black/80'>
                {service.title}
              </span> */}
            </div>

            {/* Título */}
            <h3 className='text-xl font-semibold mb-16'>{service.title}</h3>

            {/* Número y texto final */}
            <div className='flex items-end justify-between'>
              <span className='text-6xl text-[#d6554f] font-bold'>
                {index + 1}
              </span>
              <p className='text-sm text-right text-black/80 w-1/2'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
