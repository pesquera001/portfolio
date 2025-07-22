import { useState } from 'react';
import type { FounderLetter } from '../../entities/FounderLetter';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { ChevronDown, FileText } from 'lucide-react';

const demoLetters: FounderLetter[] = [
  {
    title: '2024 Q1 Letter: Navigating Volatility',
    published_date: '2024-04-15T00:00:00Z',
    content: 'Dear Partners,\n\nQ1 was marked by significant volatility in both equity and commodity markets...\n\n**Key Highlights:**\n- Outperformed benchmark by 3.2%\n- Initiated new positions in renewable energy\n- Strengthened risk management protocols',
    fund_name: 'Fund I',
  },
  {
    title: '2023 Year-End Review',
    published_date: '2023-12-31T00:00:00Z',
    content: 'Dear Investors,\n\n2023 was a transformative year for Fund I...\n\n- NAV growth: 15.2%\n- Major exits in technology sector\n- Expanded diligence team',
    fund_name: 'Fund I',
  },
];

export default function FounderLetters({ fundName }: { fundName: string }) {
  const [expandedLetter, setExpandedLetter] = useState<string | null>(null);
  const letters = demoLetters.filter(l => l.fund_name === fundName);

  const toggleExpand = (id: string) => {
    setExpandedLetter(expandedLetter === id ? null : id);
  };

  if (letters.length === 0) return <div className="text-center p-8 text-steel-gray/80">No letters found for this fund.</div>;

  return (
    <div className="space-y-px bg-border-gray">
      {letters.map((letter, index) => (
        <motion.div
          key={letter.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card-navy"
        >
          <button
            onClick={() => toggleExpand(letter.title)}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-deep-navy-blue transition-colors"
          >
            <div className="flex items-center gap-4">
              <FileText className="w-5 h-5 text-steel-gray" />
              <div>
                <p className="font-semibold text-white">{letter.title}</p>
                <p className="text-xs text-steel-gray/80">{format(new Date(letter.published_date), 'MMMM d, yyyy')}</p>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-steel-gray transform transition-transform ${
                expandedLetter === letter.title ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedLetter === letter.title && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 border-t border-border-gray"
            >
              <div className="prose max-w-none text-steel-gray">
                <ReactMarkdown>{letter.content}</ReactMarkdown>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
