'use client';
import { useState } from 'react';
import { FiChevronUp, FiChevronDown, FiArrowUpRight } from 'react-icons/fi';

const values = [
  {
    title: 'Client-centric focus',
    description:
      'Our consulting services prioritize your production goals. We collaborate closely with your team to understand specific needs in machinery design and manufacturing for the metalworking industry.',
  },
  {
    title: 'Integrity and transparency',
    description:
      'We provide reliable assessments and recommendations for your fabrication systems with full transparency, ensuring clear ROI and honest evaluations of your processes and technology.',
  },
  {
    title: 'Innovation and adaptability',
    description:
      'We adapt our strategies to align with evolving industrial demands, integrating innovative solutions like automation, CNC integration, and lean manufacturing best practices.',
  },
];

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12'>
      {/* LEFT: Accordion */}
      <div>
        <h2 className='text-4xl font-bold mb-10'>Our values</h2>
        <div className='space-y-4'>
          {values.map((item, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={index}
                className={`rounded-2xl border px-6 py-5 transition shadow-sm ${
                  isOpen
                    ? 'bg-white border-gray-300'
                    : 'bg-[#f9f8fc] border-gray-200'
                }`}
              >
                <button
                  className='flex justify-between items-center w-full text-left'
                  onClick={() => toggle(index)}
                >
                  <span
                    className={`font-semibold text-lg ${
                      isOpen ? 'text-[#d6554f]' : 'text-black'
                    }`}
                  >
                    {item.title}
                  </span>
                  {isOpen ? (
                    <FiChevronUp className='text-[#d6554f]' size={20} />
                  ) : (
                    <FiChevronDown className='text-black' size={20} />
                  )}
                </button>
                {isOpen && (
                  <p className='text-sm text-gray-700 mt-4'>
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div>
        <h3 className='text-3xl font-bold mb-6 leading-tight'>
          We build partnerships grounded in trust, innovation, and a shared
          vision for industrial excellence.
        </h3>
        <div className='space-y-4 text-gray-600 text-sm'>
          <p>
            In the metalworking industry, precision and performance are
            non-negotiable. Our team is committed to supporting your production
            lines with strategic insights that enhance equipment reliability and
            output.
          </p>
          <p>
            From initial planning to process optimization and operator training,
            we deliver end-to-end solutions that align with your long-term
            business goals.
          </p>
        </div>

        {/* CTA */}
        <button className='mt-8 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-gray-100 transition'>
          Contact us
          <span className='w-6 h-6 flex items-center justify-center rounded-full bg-black text-white'>
            <FiArrowUpRight size={12} />
          </span>
        </button>
      </div>
    </section>
  );
}
