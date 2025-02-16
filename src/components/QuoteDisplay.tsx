import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Done is better than perfect.",
    author: "Sheryl Sandberg"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Small progress is still progress.",
    author: "Anonymous"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss"
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  }
];

export const QuoteDisplay: React.FC = () => {
  const [quote] = React.useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  return (
    <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <Quote className="w-8 h-8 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {quote.text}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            — {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
};