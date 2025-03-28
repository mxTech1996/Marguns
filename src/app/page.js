'use client';

import Footer from '@/components/organisms/Footer';
import HeroSplit from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import PartnersSection from '@/components/organisms/Partner';
import ProductsPreview from '@/components/organisms/Products';
import ReferenceCarousel from '@/components/organisms/References';
import ServicesGrid from '@/components/organisms/Services';
import ValuesSection from '@/components/organisms/Values';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <HeroSplit />
      <PartnersSection />
      <ServicesGrid />
      <ValuesSection />
      <ProductsPreview />
      <ReferenceCarousel />
      <Footer />
    </main>
  );
}
