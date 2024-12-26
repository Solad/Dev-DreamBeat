export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface FAQData {
  [category: string]: FAQQuestion[];
}