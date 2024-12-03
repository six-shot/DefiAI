import React from 'react'
import Hero from '../feautures/hero'
import About from '../feautures/about';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <About />

      <Footer />
    </div>
  );
}
