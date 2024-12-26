import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-500/20 rounded-lg">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 border-t border-blue-500/20 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;