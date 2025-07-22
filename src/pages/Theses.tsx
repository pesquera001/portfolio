import FundTabs from '../components/theses/FundTabs';
import { motion } from 'framer-motion';

export default function ThesesPage() {
  return (
    <div className="min-h-screen bg-deep-navy-blue font-sans">
      <div className="bg-black/20 border-b border-border-gray">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                Investment Theses
              </h1>
              <p className="text-lg text-steel-gray max-w-3xl mx-auto font-sans">
                A transparent view into our fund strategies, diligence processes, and performance history.
              </p>
            </motion.div>
          </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FundTabs />
      </div>
    </div>
  );
}
