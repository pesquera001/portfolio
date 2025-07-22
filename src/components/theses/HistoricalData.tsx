import React, { useState } from 'react';

type HistoricalDataProps = {
  fundName: string;
};

const tabs = [
  { name: 'Founder Letters', key: 'letters' },
  { name: 'Commodity Orders', key: 'orders' },
];

const HistoricalData: React.FC<HistoricalDataProps> = ({ fundName }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <section className="bg-white p-10 border border-metallic-silver/20 rounded-lg">
      <h2 className="text-2xl font-bold text-steel-gray mb-6 font-serif">Historical Data</h2>
      <div className="flex gap-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors duration-200 ${activeTab === tab.key ? 'bg-cobalt-blue text-white' : 'bg-light-steel-gray/10 text-steel-gray hover:bg-cobalt-blue/10'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'letters' ? (
          <div className="text-steel-gray font-sans">Founder Letters for {fundName} (placeholder)</div>
        ) : (
          <div className="text-steel-gray font-sans">Commodity Orders for {fundName} (placeholder)</div>
        )}
      </div>
    </section>
  );
};

export default HistoricalData;
