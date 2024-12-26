import React from 'react';
import FAQCategory from './FAQCategory';
import { faqData } from './faqData';
import AnimatedSection from '../AnimatedSection';

const FAQSection = () => {
  return (
    <div id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
      </AnimatedSection>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {Object.entries(faqData).map(([category, questions], index) => (
          <AnimatedSection key={category} delay={index * 0.1}>
            <FAQCategory 
              title={category}
              questions={questions}
            />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;