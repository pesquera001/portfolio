import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function DiligenceStrategy({ content }: { content: string }) {
  return (
    <section className="bg-card-navy p-8 md:p-12 border border-border-gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight font-sans">
          Diligence & Strategy Playbook
        </h2>
        <div className="prose max-w-none text-steel-gray">
          <ReactMarkdown
            components={{
              h3: ({node, ...props}) => <h3 className="font-semibold !text-light-steel-gray mt-8 mb-4 text-lg" {...props} />, 
              li: ({node, ...props}) => <li className="!my-2" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </motion.div>
    </section>
  );
}
