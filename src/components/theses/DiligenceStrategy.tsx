import React from 'react';
import ReactMarkdown from 'react-markdown';

type DiligenceStrategyProps = {
  content: string;
};

const DiligenceStrategy: React.FC<DiligenceStrategyProps> = ({ content }) => (
  <section className="bg-white p-10 border border-metallic-silver/20 rounded-lg">
    <h2 className="text-2xl font-bold text-steel-gray mb-4 font-serif">Diligence Strategy</h2>
    <div className="prose prose-steel max-w-none text-steel-gray font-sans">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  </section>
);

export default DiligenceStrategy;
