import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function InvestmentThesis({ thesis }: { thesis: { title: string; summary: string; image?: string } }) {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-normal text-white mb-6 tracking-tight font-sans">
            {thesis.title}
          </h2>
          <div className="text-lg text-steel-gray leading-relaxed">
            <ReactMarkdown>{thesis.summary}</ReactMarkdown>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="aspect-video bg-card-navy"
        >
          <img src={thesis.image} alt="Investment Thesis Visual" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
