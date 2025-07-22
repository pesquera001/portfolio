import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FounderLetters from './FounderLetters';
import CommodityOrders from './CommodityOrders';

const tabs = [
  { name: 'Founder Letters' },
  { name: 'Commodity Order History' },
];

export default function HistoricalData({ fundName }: { fundName: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <section>
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
          Historical Data
        </h2>
      <div className="border-b border-border-gray mb-8">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                activeTab === tab.name
                  ? 'border-cobalt-blue text-cobalt-blue'
                  : 'border-transparent text-steel-gray hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'Founder Letters' && <FounderLetters fundName={fundName} />}
          {activeTab === 'Commodity Order History' && <CommodityOrders fundName={fundName} />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
