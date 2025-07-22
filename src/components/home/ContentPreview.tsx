import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const previews = [
  {
    title: 'Technical Solutions',
    summary: 'Explore a curated vault of code projects, reusable components, and technical breakdowns—demonstrating Aidan’s approach to clean, efficient problem-solving.',
    link: '/solutions',
    color: 'bg-cobalt-blue',
  },
  {
    title: 'Blog & Editorial',
    summary: 'Read in-depth articles on finance, defense tech, and market strategy—original insights and analysis from Aidan Pesquera.',
    link: '/editorial',
    color: 'bg-steel-gray',
  },
  {
    title: 'Investment Theses',
    summary: 'See Aidan’s fund strategies, diligence playbooks, and performance data—presented in a data-first, editorial format.',
    link: '/theses',
    color: 'bg-light-steel-gray',
  },
];

const ContentPreview: React.FC = () => (
  <section className="py-24 bg-light-gray">
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid md:grid-cols-3 gap-8">
        {previews.map((preview, idx) => (
          <motion.div
            key={preview.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className={`rounded-lg shadow-lg p-8 flex flex-col justify-between ${preview.color} text-white`}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">{preview.title}</h2>
              <p className="text-metallic-silver mb-8">{preview.summary}</p>
            </div>
            <Link to={preview.link} className="inline-block mt-auto">
              <button className="bg-white text-cobalt-blue font-medium px-6 py-2 rounded-lg hover:bg-cobalt-blue hover:text-white border border-cobalt-blue transition-colors">
                Explore
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentPreview;
