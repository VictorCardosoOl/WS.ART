import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import FlashDay from '../components/sections/FlashDay';
import BookingForm from '../components/sections/BookingForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <FlashDay />
      <BookingForm />
    </>
  );
};

export default Home;