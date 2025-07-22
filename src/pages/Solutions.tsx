import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code } from "lucide-react";

// Demo data for solutions
const demoSolutions = [
  {
    id: "1",
    title: "Automated Portfolio Rebalancer",
    summary: "A Python script that automatically rebalances investment portfolios based on target allocations and market data.",
    code: `import pandas as pd\n# ...rest of code...`,
    language: "python",
    tags: ["python", "finance", "automation"],
    commentary: "This tool saves hours of manual work and reduces human error in portfolio management.",
  },
  {
    id: "2",
    title: "Market Data API Wrapper",
    summary: "Reusable TypeScript module for fetching and normalizing financial market data from multiple APIs.",
    code: `export async function fetchMarketData() {\n  // ...rest of code...\n}`,
    language: "typescript",
    tags: ["typescript", "api", "finance"],
    commentary: "Abstracts away API differences and provides a unified data interface for analytics dashboards.",
  },
  // Add more demo solutions as needed
];

const languages = ["all", "python", "javascript", "typescript", "bash", "sql", "other"];

const Solutions: React.FC = () => {
  const [solutions] = useState(demoSolutions);
  const [filteredSolutions, setFilteredSolutions] = useState(demoSolutions);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    filterSolutions();
    // eslint-disable-next-line
  }, [solutions, searchTerm, selectedLanguage]);

  const filterSolutions = () => {
    let filtered = solutions;
    if (searchTerm) {
      filtered = filtered.filter(solution =>
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (selectedLanguage !== "all") {
      filtered = filtered.filter(solution => solution.language === selectedLanguage);
    }
    setFilteredSolutions(filtered);
  };

  return (
    <div className="min-h-screen bg-steel-gray">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-metallic-silver max-w-2xl mx-auto leading-relaxed">
            Clean, efficient code solutions with detailed breakdowns and reusable components.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 mb-12 border border-metallic-silver/20 rounded-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-steel-gray w-5 h-5" />
                <input
                  placeholder="Search solutions or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border border-metallic-silver/20 focus:border-cobalt-blue text-steel-gray placeholder-light-steel-gray rounded-lg w-full py-2"
                />
              </div>
            </div>
            <select
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
              className="w-full md:w-48 bg-white border border-metallic-silver/20 text-steel-gray rounded-lg py-2"
            >
              {languages.map(language => (
                <option key={language} value={language}>
                  {language === "all" ? "All Languages" : language.charAt(0).toUpperCase() + language.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Solutions List */}
        <AnimatePresence mode="wait">
          {filteredSolutions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-metallic-silver text-lg">No solutions found matching your criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 border border-metallic-silver/20 hover:border-cobalt-blue/50 transition-colors duration-300 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="w-5 h-5 text-cobalt-blue" />
                        <h2 className="text-2xl font-semibold text-steel-gray">
                          {solution.title}
                        </h2>
                      </div>
                      <p className="text-light-steel-gray leading-relaxed">
                        {solution.summary}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="border border-metallic-silver text-light-steel-gray bg-light-steel-gray/5 rounded px-3 py-1 text-sm">
                        {solution.language}
                      </span>
                    </div>
                  </div>
                  {solution.tags && solution.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-light-steel-gray/10 text-light-steel-gray border border-metallic-silver/20 rounded px-2 py-1 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mb-6">
                    <pre className="bg-deep-navy-blue text-white rounded-lg p-4 overflow-x-auto text-sm font-mono">
                      {solution.code}
                    </pre>
                  </div>
                  {solution.commentary && (
                    <div className="bg-light-steel-gray/5 p-6 border border-metallic-silver/20 rounded-lg">
                      <h3 className="text-sm font-semibold text-cobalt-blue mb-3 tracking-wider uppercase">
                        Approach & Commentary
                      </h3>
                      <p className="text-light-steel-gray leading-relaxed">
                        {solution.commentary}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Solutions;
