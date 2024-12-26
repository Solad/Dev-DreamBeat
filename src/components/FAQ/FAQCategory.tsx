import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQQuestion } from './types';

interface FAQCategoryProps {
  title: string;
  questions: FAQQuestion[];
}

const FAQCategory = ({ title, questions }: FAQCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-500/20 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-blue-500/5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-blue-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-blue-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="divide-y divide-blue-500/20">
          {questions.map((item, index) => (
            <div key={index} className="px-6 py-4">
              <h4 className="font-medium mb-2">{item.question}</h4>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQCategory;