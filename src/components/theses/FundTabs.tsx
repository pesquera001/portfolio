import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FundStatsBanner from './FundStatsBanner';
import InvestmentThesis from './InvestmentThesis';
import DiligenceStrategy from './DiligenceStrategy';
import HistoricalData from './HistoricalData';

const fundsData = [
  {
    name: 'Fund I',
    stats: {
      nav: 125.4,
      pnl: 15.2,
      shares: 1_000_000,
      benchmark: 8.1,
    },
    thesis: {
      title: 'Alpha Generation in Volatile Markets',
      summary: 'Fund I is focused on identifying undervalued assets in technology and renewable energy sectors, leveraging proprietary volatility models to generate alpha. Our strategy capitalizes on market inefficiencies during periods of high uncertainty.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    },
    diligence: `
### Research
- **Macro Analysis:** Weekly reports on global economic indicators.
- **Sector Deep Dives:** Bi-monthly analysis of target sectors (Tech, Renewables).
- **Company-Specific:** Continuous monitoring of a watchlist of 50+ companies.

### Screening
- **Quantitative Filters:** Automated screening for companies meeting key financial metrics (P/E, Debt-to-Equity, Growth).
- **Qualitative Review:** Management team assessment, competitive moat analysis.

### Evaluation Criteria
1.  **Valuation:** 30% weight - Discounted Cash Flow (DCF) and comparable analysis.
2.  **Growth Potential:** 40% weight - Total Addressable Market (TAM) and product lifecycle.
3.  **Risk Profile:** 30% weight - Regulatory, market, and operational risks.
`
  },
  // ... more funds
];

export default function FundTabs() {
  const [activeTab, setActiveTab] = useState(fundsData[0].name);

  const activeFund = fundsData.find(f => f.name === activeTab);

  return (
    <div>
      <div className="border-b border-border-gray mb-12">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {fundsData.map((fund) => (
            <button
              key={fund.name}
              onClick={() => setActiveTab(fund.name)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-semibold text-base transition-colors duration-300 ${
                activeTab === fund.name
                  ? 'border-mint-green text-mint-green'
                  : 'border-transparent text-steel-gray hover:text-mint-green hover:border-mint-green'
              }`}
            >
              {fund.name}
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
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {activeFund && (
            <div className="space-y-16">
              <FundStatsBanner stats={activeFund.stats} />
              <InvestmentThesis thesis={activeFund.thesis} />
              <DiligenceStrategy content={activeFund.diligence} />
              <HistoricalData fundName={activeFund.name} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
