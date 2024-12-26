import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import FAQSection from '../components/FAQ/FAQSection';
import CommunityLinks from '../components/CommunityLinks';
import Footer from '../components/Footer';
import GradientBackground from '../components/Gradient';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <GradientBackground>
        <Navbar />
        <Hero />
        <Features />
        <FAQSection />
        <Contact />
        <CommunityLinks />
        <Footer />
      </GradientBackground>
    </div>
  );
};

export default HomePage;