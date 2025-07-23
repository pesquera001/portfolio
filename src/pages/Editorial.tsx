import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: "defense-sector-pe-complexities",
    title: "Navigating Complexities in Defense Sector Private Equity Deals",
    subtitle: "A deep dive into regulatory hurdles, emerging technologies, and strategic value creation unique to defense investments.",
    content: `# Navigating Complexities in Defense Sector Private Equity Deals\n\nA deep dive into regulatory hurdles, emerging technologies, and strategic value creation unique to defense investments.`
  },
  {
    slug: "operational-excellence-defense-pe",
    title: "Operational Excellence in PE: Driving Value in High-Tech Defense Portfolio Companies",
    subtitle: "Exploring frameworks to optimize operations, improve governance, and accelerate growth in defense-focused portfolio firms.",
    content: `# Operational Excellence in PE\n\nExploring frameworks to optimize operations, improve governance, and accelerate growth in defense-focused portfolio firms.`
  },
  {
    slug: "distressed-asset-investing-strategies",
    title: "Distressed Asset Investing: Key Strategies for Navigating Volatile Markets",
    subtitle: "An analysis of valuation challenges, restructuring tactics, and risk management in distressed fund portfolios.",
    content: `# Distressed Asset Investing\n\nAn analysis of valuation challenges, restructuring tactics, and risk management in distressed fund portfolios.`
  },
  {
    slug: "asset-traps-distressed-funds",
    title: "Asset Traps: Why Distressed Funds Fail to Exit",
    subtitle: "Niche, but high-value. Explores common pitfalls in distressed/special situations — like getting stuck in bankruptcy purgatory or misjudging control rights — and how smart operators structure around them.",
    content: `# Asset Traps: Why Distressed Funds Fail to Exit\n\nNiche, but high-value. Explores common pitfalls in distressed/special situations — like getting stuck in bankruptcy purgatory or misjudging control rights — and how smart operators structure around them.`
  }
];

const Editorial: React.FC = () => (
  <div className="min-h-screen bg-[#232a32] font-sans text-white py-24 px-4 md:px-0">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-normal mb-12 tracking-tight font-sans text-white">Blog</h1>
      <div className="space-y-12">
        {blogPosts.map((post, idx) => (
          <Link
            key={post.slug}
            to={`/article/${post.slug}`}
            className="block border-b border-metallic-silver/20 pb-10 hover:bg-[#232a32]/80 transition-colors"
            style={{borderRadius:0}}
          >
            <h2 className="text-2xl md:text-3xl font-normal font-sans text-white mb-3">{post.title}</h2>
            <p className="font-mono text-lg text-metallic-silver mb-2">{post.subtitle}</p>
            {idx < blogPosts.length - 1 && (
              <div className="h-px w-full bg-metallic-silver/10 mt-10" style={{borderRadius:0}} />
            )}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Editorial;
