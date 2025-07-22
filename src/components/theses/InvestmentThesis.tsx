import React from 'react';

type InvestmentThesisProps = {
  thesis: {
    title: string;
    summary: string;
    image?: string;
  };
};

const InvestmentThesis: React.FC<InvestmentThesisProps> = ({ thesis }) => (
  <section className="bg-white p-10 border border-metallic-silver/20 rounded-lg flex flex-col md:flex-row gap-8 items-center">
    {thesis.image && (
      <img src={thesis.image} alt={thesis.title} className="w-full md:w-64 h-40 object-cover rounded-lg mb-6 md:mb-0" />
    )}
    <div>
      <h2 className="text-3xl font-bold text-steel-gray mb-4 font-serif">{thesis.title}</h2>
      <p className="text-light-steel-gray text-lg font-sans">{thesis.summary}</p>
    </div>
  </section>
);

export default InvestmentThesis;
