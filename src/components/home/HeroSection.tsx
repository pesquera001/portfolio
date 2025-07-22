import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => (
  <section className="py-32 bg-steel-gray text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8 rounded-lg"></div>
      <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight font-serif">
        Aidan Pesquera
      </h1>
      <p className="text-xl text-metallic-silver mb-8 leading-relaxed font-serif">
        Finance professional and technical analyst focused on private equity, management consulting, and defense technologies. Delivering quantitative precision and strategic execution for high-impact results.
      </p>
      <a href="#contact">
        <button className="bg-cobalt-blue hover:bg-cobalt-blue-alt text-white font-medium text-lg px-8 py-3 rounded-lg transition-colors shadow-lg font-sans">
          Get In Touch
        </button>
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
