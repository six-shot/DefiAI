import React from 'react'
import Hero from '../../modules/feautures/hero';
import About from '../../modules/feautures/about';
import Footer from '../../modules/components/footer';
import WhyDefi from '../../modules/feautures/whydefi';


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <About />
<WhyDefi/>
      <Footer />
    </div>
  );
}
